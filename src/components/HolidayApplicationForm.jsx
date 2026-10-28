
import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';

// Styled Components
const FormContainer = styled.div`
  margin-top: 60px;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 767px) {
    padding: 25px;
  }
`;

const FormTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: #00509d;
  margin-bottom: 10px;
  text-align: center;
`;

const FormSubtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #34495e;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00509d;
    box-shadow: 0 0 5px rgba(0, 80, 157, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  grid-column: 1 / -1; /* Make textarea span full width */

  &:focus {
    outline: none;
    border-color: #00509d;
    box-shadow: 0 0 5px rgba(0, 80, 157, 0.2);
  }
`;

const Button = styled.button`
  grid-column: 1 / -1;
  padding: 15px 30px;
  background-color: #00509d;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #1a73e8;
    transform: translateY(-2px);
  }
`;

const HolidayApplicationForm = ({ holidayTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // Create a new object that includes the holiday title
  //   const submissionData = {
  //     ...formData,
  //     title: `Application for ${holidayTitle}`,
  //   };
    
  //   console.log('Form data submitted:', submissionData);
  //   // Here you would integrate with your backend service (e.g., using fetch, Axios)
  //   // For now, we'll just show an alert
  //   alert(`Thank you, ${submissionData.name}! Your application for the "${holidayTitle}" package has been submitted.`);
    
  //   // Reset the form after submission
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: '',
  //   });
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading alert
    Swal.fire({
      title: 'Sending Application...',
      text: 'Please wait while we process your request.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch('https://harvannatravelsandtour.com/api/submit_holiday_application.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          holidayTitle: holidayTitle, // Send holiday title separately
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Application Sent!',
          text: result.message || 'We will get back to you shortly.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: result.error || 'There was an issue sending your application.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Unable to send your application. Please try again later.',
      });
    }
  };



  return (
    <Fade triggerOnce>
      <FormContainer>
        <FormTitle>Apply for {holidayTitle}</FormTitle>
        <FormSubtitle>Fill out the form below and one of our travel experts will get in touch with you shortly.</FormSubtitle>
        <Form onSubmit={handleSubmit}>
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
            <Label htmlFor="message">Your Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a little about your travel group, preferred dates, or any special requests."
              required
            />
          </FormGroup>

          <Button type="submit">Submit Application</Button>
        </Form>
      </FormContainer>
    </Fade>
  );
};

export default HolidayApplicationForm;