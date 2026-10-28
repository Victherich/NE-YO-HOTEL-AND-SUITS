
import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #ffffff; /* White background as per image */
  padding: 80px 40px;
  font-family: Arial, sans-serif;
  color: #333333;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center; /* Vertically align items */
  max-width: 1200px;
  margin: 0 auto;
  gap: 50px; /* Space between columns */

  @media (max-width: 992px) {
    flex-direction: column; /* Stack columns on smaller screens */
    gap: 40px;
  }
`;

const TextContent = styled.div`
  flex: 1; /* Take equal space with images */
  text-align: left; /* Align text to the left */

  @media (max-width: 992px) {
    text-align: center; /* Center text when stacked */
  }
`;

const RedLineAccent = styled.div`
  width: 50px;
  height: 4px;
  background-color: #e60000; /* Red color from your branding */
  margin-bottom: 20px;
  border-radius: 2px; /* Slightly rounded corners */

  @media (max-width: 992px) {
    margin: 0 auto 20px auto; /* Center accent when stacked */
  }
`;

const SectionTitle = styled.h2`
  font-size: 38px;
  color: #0d286d; /* Dark blue color from your branding */
  margin-bottom: 20px;
  font-weight: bold;
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

const SectionDescription = styled.p`
  font-size: 17px;
  color: #555555;
  margin-bottom: 30px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SeeToursButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #e60000; /* Red text color for the link */
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #cc0000; /* Slightly darker red on hover */
  }

  i {
    font-size: 14px;
  }
`;

const ImageGallery = styled.div`
  flex: 1; /* Take equal space with text */
  display: grid;
  grid-template-columns: 1fr; /* Single column for stacking images */
  gap: 20px; /* Space between rows of images */
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px; /* Slightly rounded corners for images */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  /* Specific styling for the layout shown in the image */
  & > *:first-child {
    grid-column: 1 / -1; /* Make the first image span full width */
  }

  @media (min-width: 769px) { /* Apply a two-column layout for the bottom images on larger screens */
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    gap: 20px;

    & > *:first-child {
      grid-column: 1 / -1; /* Make the first image span full width */
    }
  }
`;

// --- React Component: FamilyTourPackagesSection ---
const FamilyTourPackagesCard = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <RedLineAccent />
          <SectionTitle>Exciting Family Tour Packages On Budget</SectionTitle>
          <SectionDescription>
            We have packages specially crafted for your family vacation needs. You can also request for a customized package that suits you.
          </SectionDescription>
          <SeeToursButton href="/holiday-packages"> {/* Link to your holiday packages page */}
            SEE TOURS <i className="fas fa-arrow-right"></i>
          </SeeToursButton>
        </TextContent>
        <ImageGallery>
          {/* Top large image */}
          <img src="http://googleusercontent.com/file_content/0" alt="Family on tour 1" />
          {/* Bottom two smaller images */}
          <img src="http://googleusercontent.com/file_content/0" alt="Family on tour 2" />
          <img src="http://googleusercontent.com/file_content/0" alt="Family on tour 3" />
        </ImageGallery>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FamilyTourPackagesCard;