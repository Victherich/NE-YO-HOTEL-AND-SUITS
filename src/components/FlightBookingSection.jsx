
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaPlane, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch, FaExchangeAlt, FaTimes } from 'react-icons/fa';
import fb from '../Images2/fb.png'

// --- Styled Components ---

// Container for the entire booking section, including background image
const BookingSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px; /* Adjust height to fit the hero section */
  background-image: url(${fb});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  @media (max-width: 1024px) {
    height: 500px;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
`;

// A semi-transparent overlay to make the form more readable
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;

// The main container for the booking form
const BookingFormContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: #1246c9ff; /* Dark blue background */
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 20px;
    width: 95%;
  }
`;

// Container for the tabs (Flights, Stays, Activities)
const TabContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

// Styled tab button for each booking type
const Tab = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  
  ${props => props.$active && css`
    // color: #e60000; /* Red color for active tab */
    border-bottom: 2px solid white;
  `}

  &:hover {
    color: black;
  }

  /* Hide other tabs as per the user's request */
  ${props => !props.$active && css`
    display: none;
  `}

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

// Main form row containing all the inputs
const FormRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
  }
`;

// Individual input field container
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

// The dropdown for selecting trip type (One Way / Round Trip)
const TripTypeSelect = styled.select`
  appearance: none;
  background-color: #ffffff;
  color: #0d286d;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 18px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// The main input field for From, To, Departure
const InputField = styled.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #333333;
  
  &::placeholder {
    color: #999999;
  }
`;

// Container for the icon inside the input field
const InputIconContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 15px;
  color: #0d286d;
  font-size: 20px;
`;

const PassengerInputContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px 15px 15px 45px;
  cursor: pointer;
  color: #333333;

  .placeholder {
    color: #999999;
  }
`;

// The Search button
const SearchButton = styled.button`
  background-color: white;
  color: blue;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: rgba(2, 2, 77, 1);
    color:white;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 20px;
  }
`;

// --- React Component ---
const FlightBookingSection = () => {
  const [tripType, setTripType] = useState('Round Trip');

  return (
    <BookingSectionWrapper>
      <Overlay />
      <BookingFormContainer>
        {/* Tabs */}
        <TabContainer>
          <Tab $active><FaPlane /> Flight</Tab>
          <Tab>Stays</Tab>
          <Tab>Activities</Tab>
        </TabContainer>

        {/* Flight Booking Form */}
        <FormRow>
          {/* Trip Type Dropdown */}
          <FormInput>
            <TripTypeSelect
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              <option>Round Trip</option>
              <option>One Way</option>
            </TripTypeSelect>
          </FormInput>

          {/* From Input */}
          <InputIconContainer>
            <InputIcon><FaMapMarkerAlt /></InputIcon>
            <InputField placeholder="From?" />
          </InputIconContainer>

          {/* To Input */}
          <InputIconContainer>
            <InputIcon><FaMapMarkerAlt /></InputIcon>
            <InputField placeholder="To?" />
          </InputIconContainer>

          {/* Departure Date */}
          <InputIconContainer>
            <InputIcon><FaCalendarAlt /></InputIcon>
            <InputField type="text" placeholder="Departure" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
          </InputIconContainer>
          
          {/* Passengers */}
          <InputIconContainer>
            <InputIcon><FaUser /></InputIcon>
            <PassengerInputContainer>
                1 Passenger
            </PassengerInputContainer>
          </InputIconContainer>
          
          {/* Search Button */}
          <SearchButton>
            <FaSearch /> Search
          </SearchButton>
        </FormRow>
      </BookingFormContainer>
    </BookingSectionWrapper>
  );
};

export default FlightBookingSection;
