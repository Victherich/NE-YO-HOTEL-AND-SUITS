
import React from 'react';
import styled from 'styled-components';
import { FaPlane, FaGlobe, FaStar } from 'react-icons/fa';
import dubai from '../Images/dubai.png'
import usa from '../Images/usa.png'
import turkey from '../Images/turkey.png'
import paris from '../Images/paris.png'

// --- Styled Components ---

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: #333;
`;

const HeroSection = styled.header`
  position: relative;
  width: 100%;
  height: 80vh;
  background-image: url(${dubai});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;

const ExploreButton = styled.button`
  background-color: #e60000;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #cc0000;
    transform: translateY(-2px);
  }
`;

const SectionContainer = styled.section`
  padding: 80px 20px;
  background-color: ${props => props.bgColor || '#f8f9fa'};
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0d286d;
  margin-bottom: 20px;
`;

const QuoteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const QuoteCard = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;

  p {
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  strong {
    display: block;
    color: #555;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 50px auto 0;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// --- Main Component ---
const TravelInspirationPage = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <h1>The World Is Waiting For You</h1>
          <p>
            Travel opens the door to new experiences, new cultures, and new perspectives. Let us help you find the
            perfect place for your next adventure.
          </p>
          {/* <ExploreButton onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Explore Destinations
          </ExploreButton> */}
        </HeroContent>
      </HeroSection>

      <SectionContainer>
        <SectionHeader>Words to Inspire Your Journey</SectionHeader>
        <QuoteGrid>
          <QuoteCard>
            <FaGlobe size={40} color="#0d286d" style={{ marginBottom: '15px' }} />
            <p>"The world is a book and those who do not travel read only one page."</p>
            <strong>— Saint Augustine</strong>
          </QuoteCard>
          <QuoteCard>
            <FaPlane size={40} color="#0d286d" style={{ marginBottom: '15px' }} />
            <p>"Traveling—it leaves you speechless, then turns you into a storyteller."</p>
            <strong>— Ibn Battuta</strong>
          </QuoteCard>
          <QuoteCard>
            <FaStar size={40} color="#0d286d" style={{ marginBottom: '15px' }} />
            <p>"A journey of a thousand miles begins with a single step."</p>
            <strong>— Lao Tzu</strong>
          </QuoteCard>
        </QuoteGrid>
      </SectionContainer>

      <SectionContainer bgColor="#eef2f5">
        <SectionHeader>Your Next Destination Awaits</SectionHeader>
        <GalleryGrid>
          <GalleryImage src={paris} alt="Paris" />
          <GalleryImage src={dubai} alt="Kyoto" />
          <GalleryImage src={usa} alt="Rio de Janeiro" />
          <GalleryImage src={turkey} alt="Santorini" />
          {/* <GalleryImage src="https://via.placeholder.com/600x400/900C3F/FFFFFF?text=New+York" alt="New York City" /> */}
          {/* <GalleryImage src="https://via.placeholder.com/600x400/581845/FFFFFF?text=Machu+Picchu" alt="Machu Picchu" /> */}
        </GalleryGrid>
      </SectionContainer>
    </PageWrapper>
  );
};

export default TravelInspirationPage;
