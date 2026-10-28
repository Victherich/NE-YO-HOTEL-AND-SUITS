import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaBed } from 'react-icons/fa';
import HotelBookingModal from './HotelBookingModal';
import { Context } from './Context';

/* ---------------------------- THEME COLORS ------------------------ */
const C = {
  pearl: "#F6F7F5",
  mist: "#E9EFEC",
  white: "#FFFFFF",
  lagoon: "#0F3B3A",
  lagoonSoft: "#1D5754",
  brass: "#B08D57",
  brassLight: "#E3CFA6",
  ink: "#1B2523",
  muted: "#5E6D69",
};

const imgUrl = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ---------------------------- STYLED COMPONENTS ------------------- */

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  background: ${C.white};
  border-radius: 4px;
  padding-top: 120px;
  box-shadow: 0 10px 30px rgba(15, 59, 58, 0.05);
  min-height: 100vh;
`;

const TopNavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: ${C.lagoon};
  font-weight: 500;
  border: 1px solid ${C.brassLight};
  border-radius: 2px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${C.lagoon};
    color: ${C.white};
    border-color: ${C.lagoon};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
    color: ${C.brass};
  }
`;

const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  font-weight: 500;
  margin-bottom: 12px;
  color: ${C.lagoon};
  line-height: 1.1;
`;

const SubtitleMeta = styled.div`
  display: flex;
  gap: 16px;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.25rem;
  color: ${C.brass};
  margin-bottom: 20px;
`;

const PerksList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin-bottom: 2rem;
  
  li {
    font-size: 0.9rem;
    border: 1px solid ${C.brassLight};
    padding: 4px 14px;
    border-radius: 20px;
    color: ${C.lagoonSoft};
    background: ${C.mist};
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  background: ${C.mist};
  padding: 20px;
  border-radius: 2px;
  border-left: 3px solid ${C.brass};
  margin-bottom: 2rem;
`;

const DetailItem = styled.div`
  font-weight: 600;
  color: ${C.lagoon};
  font-size: 1.05rem;
  
  span {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 1.6rem;
    color: ${C.ink};
    margin-top: 4px;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 2rem;
  margin-bottom: 2.5rem;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 2px;
    transition: transform 0.5s ease, filter 0.3s ease;
    box-shadow: 0 8px 24px rgba(15, 59, 58, 0.08);
    &:hover {
      transform: scale(1.03);
    }
  }
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 10px;
`;

const BookNowButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(110deg, ${C.brass}, #D4B77E, ${C.brass});
  background-size: 200% 100%;
  color: ${C.lagoon};
  font-weight: 600;
  border: none;
  border-radius: 2px;
  padding: 14px 32px;
  cursor: pointer;
  font-size: 1.1rem;
  letter-spacing: 1px;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const StateContainer = styled(Container)`
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  color: ${C.lagoon};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

/* ---------------------------- COMPONENT --------------------------- */

const HotelDetail = () => {
  const { id } = useParams(); // URL param like /hoteldetail/1
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [hotelBookingModal, setHotelBookingModal] = useState(false);
  const {roomsData}=useContext(Context);

  // Rooms data source with multiple images & properties


  // Find room based on ID parameter
  const room = roomsData.find(r => r.id === Number(id));

  if (loading) return <StateContainer>Loading suite details...</StateContainer>;
  if (!room) return (
    <StateContainer>
      <p>Room suite not found.</p>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Return back
      </BackButton>
    </StateContainer>
  );

  // Map to match the modal property expectations if needed
  const modalHotelPayload = {
    ...room,
    hotel_name: room.name,
    price_per_night: room.price_numeric,
    location: "NE-YO Hotel & Suites, Lagos",
    hotel_images: room.images.map(imgId => imgUrl(imgId, 800))
  };

  return (
    <Container>
      <TopNavRow>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
          Back
        </BackButton>
      </TopNavRow>
      
      <Title>{room.name}</Title>
      <SubtitleMeta>
        <span>{room.size}</span> • <span>{room.guests}</span>
      </SubtitleMeta>
      
      <PerksList>
        {room.perks.map((perk, i) => (
          <li key={i}>{perk}</li>
        ))}
      </PerksList>

      <DetailsGrid>
        <DetailItem>
          Price per night
          <span>{room.price}</span>
        </DetailItem>
        <DetailItem>
          Capacity &amp; Space
          <span>{room.guests} / {room.size}</span>
        </DetailItem>
      </DetailsGrid>

      <p style={{ color: C.muted, fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
        {room.description}
      </p>

      {room.images && room.images.length > 0 && (
        <ImageGallery>
          {room.images.map((imgId, idx) => (
            <img key={idx} src={imgId} alt={`${room.name} photo ${idx + 1}`} />
          ))}
        </ImageGallery>
      )}

      <CenterContainer>
        <BookNowButton onClick={() => setHotelBookingModal(true)}>
          <FaBed /> Book Now
        </BookNowButton>
      </CenterContainer>

      {hotelBookingModal && (
        <HotelBookingModal hotel={modalHotelPayload} onClose={() => setHotelBookingModal(false)} />
      )}
    </Container>
  );
};

export default HotelDetail;