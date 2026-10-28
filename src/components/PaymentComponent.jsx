import React, { useState } from 'react';
import styled from 'styled-components';
import PaystackPop from '@paystack/inline-js';
import Swal from 'sweetalert2';

// --- Styled Components ---
const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
`;

const PaymentButton = styled.button`
  padding: 15px 30px;
  background-color: #00509d;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1a73e8;
    transform: translateY(-2px);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 15px;

  h3 {
    font-size: 1.8rem;
    color: #00509d;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: 300;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
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
  font-size: 0.8rem;
  font-weight: 500;
  color: #34495e;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const SubmitFormButton = styled(PaymentButton)`
  margin-top: 20px;
`;

const PaymentComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
      setModalOpen(false);

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
        ...details, // includes name, email, phone, amount, description
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
    <PaymentContainer>
      <PaymentButton onClick={() => setModalOpen(true)}>Proceed to Payment</PaymentButton>

      {modalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>Payment Details</h3>
              <CloseButton onClick={() => setModalOpen(false)}>&times;</CloseButton>
            </ModalHeader>
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
                <Label htmlFor="description">What is being paid for? (Please mention what is being paid for)</Label>
                <Input type="text" id="description" name="description" value={formData.description} onChange={handleInputChange} required />
              </FormGroup>
              <SubmitFormButton type="submit">Pay Now</SubmitFormButton>
            </PaymentForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </PaymentContainer>
  );
};

export default PaymentComponent;
