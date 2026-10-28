
import React from 'react';
import styled from 'styled-components';
import e1 from '../Images/e1.jpeg'
import e2 from '../Images/e2.jpeg'

// --- Dummy Data for Event Flyers ---
const eventFlyers = [
  {
    id: 1,
    image: e1, // Placeholder image
    title: 'Summer Music Festival',
    date: 'August 15, 2025',
    description: 'Join us for an electrifying summer music festival featuring top artists!',
  },
  {
    id: 2,
    image: e2, // Placeholder image
    title: 'Annual Tech Summit',
    date: 'September 10-12, 2025',
    description: 'Explore the future of technology with industry leaders and innovators.',
  },

];

// --- Styled Components ---

// Hero Section Styles
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 500px; /* Adjust height as needed */
  background-image: url('https://placehold.co/1920x500/0D286D/FFFFFF?text=Exciting+Events+Ahead'); /* Placeholder hero image */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: 'Inter', sans-serif;
  margin-top: 60px; /* To account for fixed header */

  @media (max-width: 768px) {
    height: 400px;
    padding: 0 20px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for text readability */
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 15px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.button`
  background-color: #ff9900; /* Orange button */
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e68a00; /* Darker orange on hover */
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

// Event Flyers Section Styles
const EventsSection = styled.section`
  padding: 60px 40px;
  background-color: #f9f9f9;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #0d286d;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Stack on very small screens */
  }
`;

const EventCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const EventImage = styled.img`
  width: 100%;
//   height: 220px; /* Fixed height for consistency */
  object-fit: cover;
  display: block;
`;

const EventContent = styled.div`
  padding: 20px;
`;

const EventTitle = styled.h3`
  font-size: 1.4rem;
  color: #0d286d;
  margin-bottom: 10px;
  font-weight: 600;
`;

const EventDate = styled.p`
  font-size: 0.95rem;
  color: #ff9900;
  margin-bottom: 15px;
  font-weight: 500;
`;

const EventDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

// --- React Component ---
const EventComponent = () => {
  const handleHeroButtonClick = () => {
    // alert('Explore Events button clicked!');
    // In a real app, you might scroll to the events section or navigate to an events page
  };

  const handleEventCardClick = (eventTitle) => {
    // alert(`Clicked on event: ${eventTitle}`);
    // In a real app, you might navigate to a detailed event page
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Discover Our Exciting Events</HeroTitle>
          <HeroSubtitle>
            From vibrant festivals to insightful summits, find your next unforgettable experience with us.
          </HeroSubtitle>
          {/* <HeroButton onClick={handleHeroButtonClick}>Explore Events</HeroButton> */}
        </HeroContent>
      </HeroSection>

      {/* Event Flyers Section */}
      <EventsSection>
        <SectionTitle>Upcoming Events & Flyers</SectionTitle>
        <EventsGrid>
          {eventFlyers.map((event) => (
            <EventCard key={event.id} onClick={() => handleEventCardClick(event.title)}>
              <EventImage src={event.image} alt={event.title} />
              <EventContent>
                <EventTitle>{event.title}</EventTitle>
                <EventDate>{event.date}</EventDate>
                <EventDescription>{event.description}</EventDescription>
              </EventContent>
            </EventCard>
          ))}
        </EventsGrid>
      </EventsSection>
    </>
  );
};

export default EventComponent;