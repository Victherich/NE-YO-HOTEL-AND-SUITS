import React from 'react';
import styled from 'styled-components';

// Styled components for the container, text, and line
const Container = styled.div`
  background-color: #ffffff; /* Assuming a white background for the card/container */
  padding: 20px; /* Adjust padding as needed */
  font-family: Arial, sans-serif; /* Example font, adjust if specific font is required */
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem; /* Adjust font size as needed */
  color: #333333; /* Dark grey color for the text */
  margin-bottom: 5px; /* Space between text and line */
  font-weight: bold; /* As seen in the image, the font is not bold */
`;

const OrangeLine = styled.div`
  width: 100%; /* Line spans the full width of its container */
  height: 2px; /* Thickness of the line */
  background-color: #ff9900; /* Orange color */
  margin-bottom: 20px; /* Space after the line before the next section */
`;

const PopularToursHeader = () => {
  return (
    <Container>
      {/* <SectionTitle>Enquiry</SectionTitle> */}
      <OrangeLine />

      <SectionTitle>Featured Tours</SectionTitle>
      <OrangeLine />
    </Container>
  );
};

export default PopularToursHeader;