
import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

// Import the data array

import { holidayPackages } from './HolidayPackagesArray';
import HolidayApplicationForm from './HolidayApplicationForm';
import PaymentComponent from './PaymentComponent';

// Styled Components
const HolidayDetailsContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #34495e;
  line-height: 1.6;
  padding: 80px 50px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 767px) {
    padding: 100px 20px;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 40px;
  color: #00509d;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1a73e8;
  }
`;

const HolidayHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const HolidayImage = styled.img`
  width: 100%;
  max-width: 500px;
  // height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    // height: 300px;
  }
`;

const HolidayInfo = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #00509d;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #f7c400;
  margin-bottom: 10px;
`;

const Duration = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 500;
  color: #888;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
`;

const BenefitsSection = styled.div`
  margin-top: 50px;
  
  h2 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: #00509d;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background-color: #f7c400;
      border-radius: 2px;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  li {
    background-color: #e6f0ff;
    padding: 15px 20px;
    border-left: 5px solid #1a73e8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    
    &::before {
      content: '✔';
      color: #00509d;
      margin-right: 15px;
      font-size: 1.2rem;
    }
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #e74c3c;
  padding: 100px;
`;

const HolidayDetailsPage = () => {
  const { id } = useParams();
  const holiday = holidayPackages.find(p => p.id === parseInt(id));

  if (!holiday) {
    return (
      <ErrorContainer>
        <p>Holiday package not found!</p>
        <BackLink to="/holidays">← Go back to all packages</BackLink>
      </ErrorContainer>
    );
  }

  return (
    <HolidayDetailsContainer>
      <Fade triggerOnce>
        <BackLink to="/plannedpackages">← Back to Holiday Packages</BackLink>
        <HolidayHeader>
          <HolidayImage src={holiday.image} alt={holiday.title} />
          <HolidayInfo>
            <Title>{holiday.title}</Title>
            <Price>{holiday.price}</Price>
            <Duration>{holiday.duration}</Duration>
            <Description>{holiday.description}</Description>
          </HolidayInfo>
        </HolidayHeader>
      </Fade>
      
      <Fade triggerOnce>
        <BenefitsSection>
          <h2>Package Benefits</h2>
          <ul>
            {holiday.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </BenefitsSection>
      </Fade>
      <HolidayApplicationForm holidayTitle={holiday.title}/>

      <PaymentComponent/>
    </HolidayDetailsContainer>
  );
};

export default HolidayDetailsPage;