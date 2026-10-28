import React, { useState } from 'react';
import styled from 'styled-components';
import PaystackPop from '@paystack/inline-js';
import Swal from 'sweetalert2';
import t3 from '../Images/t3.jpg'

// --- Styled Components ---

const PageWrapper = styled.div`
padding-top:100px;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-image: url(${t3});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InspirationalText = styled.div`
  margin-bottom: 50px;
  
  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const PaymentCard = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 500px;
  text-align: left;
  color: #333;
`;

const PaymentHeader = styled.div`
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 15px;
  margin-bottom: 25px;

  h3 {
    font-size: 1.8rem;
    color: #0d286d;
    margin: 0;
  }
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #e60000;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #cc0000;
    transform: translateY(-2px);
  }
`;

// --- React Component ---

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const payWithPaystack = () => {
    const { name, email, phone, amount, description } = formData;
  
    if (!name || !email || !phone || !amount || !description) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill in all the details.',
      });
      return;
    }
  
    if (isNaN(amount) || Number(amount) <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Amount',
        text: 'Please enter a valid amount.',
      });
      return;
    }
  
    // Show loading state
    Swal.fire({
      title: 'Processing Payment',
      text: 'Please wait...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    const paystack = new PaystackPop();
    paystack.newTransaction({
    // key: 'pk_test_41a396ef9a4f9c53cf4f1139cc7e7002fc085f55',
    key: 'pk_live_64a5f718f2e9bfe267d3c4a93c2b8a90e66b915a',
      amount: Number(amount) * 100, // in kobo
      email,
      firstname: name,
      phone,
      onSuccess: (transaction) => {
        sendPaymentEmail(transaction.reference, formData);
  
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'An email receipt has been sent to you. Please check your inbox or spam folder.',
          confirmButtonColor: '#3085d6',
        });
      },
      onCancel: () => {
        Swal.fire({
          icon: 'info',
          title: 'Payment Cancelled',
          text: 'You cancelled the transaction.',
        });
      },
      onError: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Payment Failed',
          text: `Payment failed: ${error.message}`,
        });
      },
    });
  };
  
  const sendPaymentEmail = async (reference, details) => {
    try {
      const response = await fetch('https://harvannatravelsandtour.com/api/send-payment-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reference,
          ...details,
        }),
      });
  
      const result = await response.json();
  
      if (!result.success) {
        throw new Error(result.error || 'Failed to send payment email');
      }
  
      console.log('✅ Payment email sent successfully.');
      setFormData({
        name:'',
        email:"",
        phone:"",
        description:""
      });
    } catch (error) {
      console.error('❌ Error sending payment email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Email Failed',
        text: 'Payment was successful, but email could not be sent.',
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    payWithPaystack();
  };

  return (
    <PageWrapper>
      <Overlay />
      <ContentWrapper>
        <InspirationalText>
          <h1>Your Journey Awaits</h1>
          <p>
            Your next great adventure is just a moment away. Complete your payment to unlock a world of possibilities and
            let us handle the details. We're excited to help you start your unforgettable travel experience.
          </p>
        </InspirationalText>
        <PaymentCard>
          <PaymentHeader>
            <h3>Secure Payment</h3>
          </PaymentHeader>
          <PaymentForm onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="amount">Amount (NGN)</Label>
              <Input type="number" id="amount" name="amount" value={formData.amount} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">What is being paid for? (e.g., Flight Booking Fee, Visa Consultation)</Label>
              <Input type="text" id="description" name="description" value={formData.description} onChange={handleInputChange} required />
            </FormGroup>
            <SubmitButton type="submit">Pay Now</SubmitButton>
          </PaymentForm>
        </PaymentCard>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PaymentPage;
