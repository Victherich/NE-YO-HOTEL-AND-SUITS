
import React from 'react';
import styled from 'styled-components';
import pp from "../Images/pp.jpg"

// --- Styled Components for the Hero Section ---
const HeroSectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 400px; /* Adjust height as needed */
  background-image: url(${pp}); /* REPLACE with your actual image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff; /* White text color */
  font-family: Arial, sans-serif;
  overflow: hidden; /* Ensures content stays within bounds */

  @media (max-width: 1024px) {
    // height: 350px;
  }

  @media (max-width: 768px) {
    // height: 300px;
    padding: 0 20px; /* Add horizontal padding */
  }

  @media (max-width: 480px) {
    // height: 250px;
    padding: 0 15px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Dark overlay for text readability */
  z-index: 0; /* Behind content */
`;

const HeroTitle = styled.h1`
  position: relative;
  z-index: 1; /* Above the overlay */
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1.2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* Strong text shadow for contrast */
  max-width: 900px; /* Limit title width for better readability */

  @media (max-width: 1024px) {
    // font-size: 40px;
  }
  @media (max-width: 768px) {
    // font-size: 32px;
  }
  @media (max-width: 480px) {
    // font-size: 28px;
  }
`;

// --- React Component: HolidayPackagesHero ---
const Hero3 = () => {
  return (
    <HeroSectionContainer>
      <HeroOverlay />
      <HeroTitle>Explore Holiday Packages Around The World</HeroTitle>
    </HeroSectionContainer>
  );
};

export default Hero3;