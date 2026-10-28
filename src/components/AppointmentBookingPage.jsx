
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import PaystackPop from '@paystack/inline-js';
import app from '../Images2/app.jpg'

// --- Styled Components ---
const BookingPageContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f2f5; /* Light gray background */
  padding: 100px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* New styles for background image */
  background-image: url(${app});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Add an overlay to make the text readable */
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Dark overlay */
    z-index: 0;
  }
  
  /* Ensure the form wrapper is above the overlay */
  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 100px 15px;
  }
`;

const BookingFormWrapper = styled.div`
  background-color:rgba(255,255,255,0.8);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const PageTitle = styled.h2`
  color: #0d286d; /* Brand blue */
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const PageSubtitle = styled.p`
  color:black;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background:rgba(255,255,255,0.5);

  &:focus {
    outline: none;
    border-color: #0d286d; /* Brand blue on focus */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
   background:rgba(255,255,255,0.5);

  &:focus {
    outline: none;
    border-color: #0d286d;
  }
`;

const FixedAmountDisplay = styled.div`
  background-color: #f0f8ff; /* Light blue background */
  border-left: 4px solid #0d286d;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #333333;

  span {
    font-weight: bold;
    color: #e60000; /* Brand red for amount */
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #e60000; /* Brand red */
  color: #ffffff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #cc0000;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

// --- React Component ---
const AppointmentBookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: 10000, // Fixed appointment amount (in NGN, will be converted to kobo)
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const sendPaymentEmail = async (reference) => {
    try {
      const response = await fetch('https://harvannatravelsandtour.com/api/send_appointment_confirmation.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reference,
          ...formData,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to send payment email');
      }

      console.log('✅ Payment email sent successfully.');
       Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Your appointment detail has been sent to your Email, Please check your inbox or spam folder',
          confirmButtonColor: '#3085d6',
        });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        amount: 10000, // Reset amount to original fixed value
        description: '',
      });

    } catch (error) {
      console.error('❌ Error sending payment email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Email Failed',
        text: 'Payment was successful, but email could not be sent. Please contact support with your payment reference.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const payWithPaystack = () => {
    setIsSubmitting(true);

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_live_64a5f718f2e9bfe267d3c4a93c2b8a90e66b915a',
      // key: 'pk_test_41a396ef9a4f9c53cf4f1139cc7e7002fc085f55',
      amount: Number(formData.amount) * 100, // in kobo
      email: formData.email,
      firstname: formData.name,
      phone: formData.phone,
      onSuccess: (transaction) => {
        sendPaymentEmail(transaction.reference);

        // Swal.fire({
        //   icon: 'success',
        //   title: 'Payment Successful',
        //   text: 'An email receipt has been sent to you.',
        //   confirmButtonColor: '#3085d6',
        // });
      },
      onCancel: () => {
        setIsSubmitting(false);
        Swal.fire({
          icon: 'info',
          title: 'Payment Cancelled',
          text: 'You cancelled the transaction.',
        });
      },
      onClose: () => { // Paystack also has an onClose handler
          setIsSubmitting(false);
      },
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all the required fields.',
      });
      return;
    }
    payWithPaystack();
  };

  return (
    <BookingPageContainer>
      <BookingFormWrapper>
        <PageTitle>Book an Appointment</PageTitle>
        <PageSubtitle>
          Pay to secure a one-on-one consultation with our travel experts.
        </PageSubtitle>
        
        <form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Tell us about your travel needs</Label>
            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FixedAmountDisplay>
            Appointment Fee: <span>NGN {formData.amount.toLocaleString()}</span>
          </FixedAmountDisplay>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Pay & Book Appointment'}
          </SubmitButton>
        </form>
      </BookingFormWrapper>
    </BookingPageContainer>
  );
};

export default AppointmentBookingPage;