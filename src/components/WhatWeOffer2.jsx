

import React from 'react';
import styled from 'styled-components';
import s1 from "../Images/s1.png"
import s2 from "../Images/s2.png"
import s3 from "../Images/s3.png"
import s4 from "../Images/s4.png"
import s5 from "../Images/s5.png"
import s6 from "../Images/s6.png"

// --- Styled Components for the "What We Offer" Section ---
const WhatWeOfferSection = styled.section`
  padding: 80px 40px;
  background-color: #ffffff; /* White background */
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333333;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 50px;
  font-weight: bold;
  color: #333333;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid for cards */
  gap: 30px; /* Space between cards */
  max-width: 1200px; /* Max width for the grid */
  margin: 0 auto; /* Center the grid */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack cards on smaller screens */
  }
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  display: flex;
//   flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  gap:10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

const IconCircle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #f0f8ff; /* Light blue background for icon circle */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden; /* Ensures image fits within the circle */
  border: 1px solid #e0e0e0; /* Subtle border */

`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the circle area */
  border-radius: 50%; /* Make image round inside circle */
`;

const Div = styled.div`
    display:flex;
    flex-direction:column;
    width:60%;
    text-align:left;
`

const ServiceTitle = styled.h3`
  font-size:1rem;
  color: #0d286d; /* Dark blue title */
  margin-bottom: 10px;
  font-weight: bold;
`;

const ServiceDescription = styled.p`
  font-size:0.8rem;
  color: #555555;
  line-height: 1.6;
`;

// --- React Component: WhatWeOffer ---
const WhatWeOffer2 = () => {
  const services = [
    {
      id: 1,
      image: s1, // Visa Application image
      title: 'Visa Application',
      description: 'Harvanna Travels and Tour Ltd agency helps you with an easy visa processing with an affordable price.',
    },
    {
      id: 2,
      image: s2, // Flight Reservation image
      title: 'Flight Reservation',
      description: 'Harvanna Travels and Tour Ltd agency offers a cheap flight ticket and a reliable airline to any country you want to travel to.',
    },
    {
      id: 3,
      image: s3, // Hotel Reservation image
      title: 'Hotel Reservation',
      description: 'Harvanna Travels and Tour Ltd agency can get you one of the best hotels with good security, conducive environment and an affordable price in any country you want.',
    },
    {
      id: 4,
      image: s4, // Vacation Packages image
      title: 'Vacation Packages',
      description: 'Harvanna Travels and Tour Ltd agency can organize a vacation package for you in any country of your choice at a cheap.',
    },
    {
      id: 5,
      image: s5, // Hotel Pickup image
      title: 'Hotel Pickup',
      description: 'Harvanna Travels and Tour Ltd agency can arrange a standard pickup with a competent driver to come pick you up at any hotel you are.',
    },
    {
      id: 6,
      image: s6, // Hotel Reservation image (repeated, assuming different visual or emphasis)
      title: 'Hotel Reservation',
      description: 'Harvanna Travels and Tour Ltd agency can get you an accommodation of your choice in a conducive and cool environment with a guaranteed full security service.',
    },
  ];

  return (
    <WhatWeOfferSection>
      <SectionTitle>What we offer</SectionTitle>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <IconCircle>
              <ServiceImage src={service.image} alt={service.title} />
            </IconCircle>
         <Div>
               <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
         </Div>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </WhatWeOfferSection>
  );
};

export default WhatWeOffer2;
