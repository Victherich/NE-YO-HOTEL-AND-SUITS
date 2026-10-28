
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// --- Global Page Container ---
const FAQPageContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f8f8f8; /* Light background for the page */
  color: #333333;
  line-height: 1.6;
`;

// --- FAQ Hero Section ---
const FAQHero = styled.section`
  background-color: #0d286d; /* Dark blue background */
  color: #ffffff;
  padding: 80px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const FAQHeroTitle = styled.h1`
  font-size: 52px;
  margin-bottom: 15px;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 45px;
  }
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const FAQHeroSubtitle = styled.p`
  font-size: 20px;
  max-width: 800px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// --- FAQ Content Wrapper ---
const FAQContentWrapper = styled.div`
  max-width: 1000px; /* Limit width for readability */
  margin: 50px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 30px auto;
  }
`;

// --- FAQ List Container ---
const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between FAQ items */
`;

// --- Single FAQ Item Styles ---
const FAQItemContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden; /* Important for max-height transition */
  border: 1px solid #e0e0e0;
`;

const QuestionButton = styled.button`
  width: 100%;
  background-color: ${props => props.$isOpen ? '#f0f8ff' : '#ffffff'}; /* Light blue when open */
  border: none;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 18px;
  font-weight: ${props => props.$isOpen ? 'bold' : 'normal'};
  color: ${props => props.$isOpen ? '#0d286d' : '#333333'}; /* Darker color when open */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f8ff; /* Light blue on hover */
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px 20px;
  }
`;

const QuestionText = styled.span`
  flex-grow: 1;
`;

const ArrowIcon = styled.i`
  font-size: 16px;
  color: #e60000; /* Red accent for arrow */
  margin-left: 15px;
  transition: transform 0.3s ease;
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
`;

const AnswerContent = styled.div`
  max-height: ${props => props.$isOpen ? '500px' : '0'}; /* Max height for open state */
  opacity: ${props => props.$isOpen ? '1' : '0'};
  padding: ${props => props.$isOpen ? '0 25px 20px' : '0 25px'};
  color: #555555;
  font-size: 16px;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, padding 0.5s ease-in-out;
  overflow: hidden; /* Hide overflow during transition */
  box-sizing: border-box; /* Include padding in height calculation */

  p {
    margin-bottom: 10px; /* Spacing for paragraphs within answer */
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: ${props => props.$isOpen ? '0 20px 15px' : '0 20px'};
  }
`;

// --- Data for FAQs ---
const faqData = [
  {
    id: '1',
    question: 'How do I book a tour package with Harvanna Travels?',
    answer: 'Booking with Harvanna Travels is easy! You can browse our tour packages on our website and use the "Book Now" or "Inquire" button, call our customer service hotline, or visit our office. Our team will guide you through the process, from selecting the right package to completing your payment.'
  },
  {
    id: '2',
    question: 'What documents do I need for visa application services?',
    answer: 'The required documents vary significantly based on your destination country and nationality. Generally, you will need a valid passport, passport-sized photos, proof of financial stability, travel itinerary, and invitation letters (if applicable). Our visa experts will provide you with a detailed checklist specific to your chosen destination.'
  },
  {
    id: '3',
    question: 'Can I customize a tour package to fit my preferences?',
    answer: 'Absolutely! Harvanna Travels specializes in crafting personalized travel experiences. We encourage you to discuss your interests, budget, and desired destinations with our travel consultants. We can tailor itineraries, accommodate specific activities, and adjust accommodation to create your perfect trip.'
  },
  {
    id: '4',
    question: 'What is your cancellation and refund policy?',
    answer: 'Our cancellation and refund policy varies depending on the type of service (flights, hotels, tour packages) and the terms and conditions of our suppliers. We recommend reviewing the specific terms provided during your booking. For general inquiries, please refer to our Terms and Conditions page or contact our support team.'
  },
  {
    id: '5',
    question: 'Do you offer travel insurance?',
    answer: 'Yes, we highly recommend and can assist you with arranging comprehensive travel insurance. Travel insurance provides coverage for unforeseen circumstances such as trip cancellations, medical emergencies, lost luggage, and more, ensuring a worry-free journey.'
  },
  {
    id: '6',
    question: 'How far in advance should I book my trip?',
    answer: 'For popular destinations and peak travel seasons, we recommend booking at least 3-6 months in advance to secure the best rates and availability for flights and accommodations. For visa applications, allow even more time, typically 1-3 months, depending on the embassy processing times.'
  },
  {
    id: '7',
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods for your convenience, including bank transfers, major credit/debit cards, and sometimes online payment platforms. Details will be provided during the booking confirmation process.'
  },
];

// --- React Component: FAQPage ---
const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null); // State to track which FAQ item is open

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id); // Close if already open, otherwise open new
  };

  return (
    <FAQPageContainer>
      {/* Hero Section */}
      <FAQHero>
        <FAQHeroTitle>Frequently Asked Questions</FAQHeroTitle>
        <FAQHeroSubtitle>
          Find answers to the most common questions about our services, bookings, and travel experiences.
        </FAQHeroSubtitle>
      </FAQHero>

      {/* FAQ Content Section */}
      <FAQContentWrapper>
        <FAQList>
          {faqData.map((item) => (
            <FAQItemContainer key={item.id}>
              <QuestionButton
                onClick={() => toggleQuestion(item.id)}
                $isOpen={openQuestion === item.id}
              >
                <QuestionText>{item.question}</QuestionText>
                <ArrowIcon $isOpen={openQuestion === item.id} className="fas fa-chevron-down"></ArrowIcon>
              </QuestionButton>
              <AnswerContent $isOpen={openQuestion === item.id}>
                <p>{item.answer}</p>
              </AnswerContent>
            </FAQItemContainer>
          ))}
        </FAQList>
      </FAQContentWrapper>
    </FAQPageContainer>
  );
};

export default FAQPage;