

import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import h1 from "../Images/sbg.png"
import h2 from "../Images/h2.jpg"
import h3 from "../Images/h3.jpg"
import h4 from "../Images/h4.jpg"

// Define the fade animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled Components
const HeroSectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Adjust height as needed to match the image */
  overflow: hidden; /* Hide overflow from images */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align content to the left */
  padding-left: 10%; /* Adjust padding for content positioning */
  padding-right:10%;
  box-sizing: border-box; /* Include padding in element's total width and height */
  padding-top:5%;

  @media (max-width: 1024px) {
    height: 500px;
    padding-left: 5%;
    padding-right:5%;
  }

  @media (max-width: 768px) {
    // height: 350px;
    justify-content: center; /* Center content on smaller screens */
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    // height: 300px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0; /* Start hidden */
  transition: opacity 1.5s ease-in-out; /* Smooth fade transition */
  z-index: 1; /* Below the info box and chat button */

  ${props =>
    props.isActive &&
    css`
      opacity: 1;
      animation: ${fadeIn} 1.5s forwards; /* Apply fade-in animation when active */
    `}
`;

const InfoBox = styled.div`
  background-color:rgba(0,0,0,0.5); /* Yellow background */
  padding: 30px 40px;
  border-radius: 8px;
  // max-width: 550px; /* Adjust width as needed */
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  z-index: 2; /* Above background images */
    width:100%;

  @media (max-width: 768px) {
    padding: 25px 30px;
    max-width: 90%; /* Make it more responsive */
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 20px 25px;
  }
`;

const Title = styled.h1`
  font-size: 38px;
  color: white; /* Dark blue text */
  margin-bottom: 15px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 25px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BookNowButton = styled.button`
  background-color: #0d286d; /* Dark blue button */
  color: #ffffff;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px; /* Space between text and icon */

  &:hover {
    background-color: #081a4d; /* Slightly darker blue on hover */
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`;

const BookNowIcon = styled.span`
  font-size: 18px; /* Adjust icon size */
`;

const ChatButton = styled.a`
  position: absolute;
  top: 50%;
  right: 20px; /* Adjust distance from right edge */
  transform: translateY(-50%);
  background-color: #4caf50; /* Green background */
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  writing-mode: vertical-lr; /* Vertical text */
  text-orientation: mixed; /* Mixed orientation for vertical text */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; /* Space between icon and text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform-origin: center center; /* Ensure rotation is centered */
  z-index: 2; /* Above background images */


  &:hover {
    background-color: #45a049; /* Slightly darker green on hover */
  }

  @media (max-width: 768px) {
    right: 10px;
    padding: 8px 12px;
    font-size: 14px;
  }
`;

const ChatIcon = styled.span`
  font-size: 20px; /* Adjust icon size */
  margin-top: 5px; /* Space from text */
  transform: rotate(90deg); /* Rotate the chat icon for vertical text */
`;


// React Component
const HeroSection2 = () => {
  // IMPORTANT: Replace these with your actual image paths/URLs



  const images = [
h1
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds (adjust as needed)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <HeroSectionContainer>
      {images.map((image, index) => (
        <BackgroundImage
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          isActive={index === currentImageIndex}
        />
      ))}

      <InfoBox>
        <Title>Harvanna Travels and Tour Ltds Services</Title>
        <Title style={{fontSize:"1.4rem"}}>Let's be your Travel Agent</Title>
        <Description>
          Let us take you around the world without stress
        </Description>
    
      </InfoBox>

      {/* <ChatButton href="#">
        <ChatIcon><i className="fab fa-whatsapp"></i></ChatIcon>
        CHAT
      </ChatButton> */}
    </HeroSectionContainer>
  );
};

export default HeroSection2;