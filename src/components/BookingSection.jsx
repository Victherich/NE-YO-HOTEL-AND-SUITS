
// import React from 'react';
// import styled from 'styled-components';

// // Styled Components
// const BookingSectionContainer = styled.div`
//   display: flex;
//   width: 100%;
//   min-height: 120px; /* Adjust height as needed */
//   font-family: Arial, sans-serif;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const StartBookingPanel = styled.div`
//   flex: 2; /* Takes up more space */
//   background-color: #0d286d; /* Dark blue */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   color: #ffffff;
//   font-size: 32px;
//   font-weight: bold;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 24px;
//     flex: 1;
//   }
// `;

// const FindToursPanel = styled.div`
//   flex: 1; /* Takes up less space */
//   background-color: #d90000; /* Red */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   position: relative; /* For positioning the icon and underline */
// `;

// const FindToursButton = styled.button`
//   background: none;
//   border: none;
//   color: #ffffff;
//   font-size: 24px;
//   font-weight: bold;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   padding: 10px 0; /* Adjust padding to control underline distance */
//   position: relative; /* For the custom underline */

//   &:hover {
//     opacity: 0.9;
//   }

//   /* Custom Underline */
//   &::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: -5px; /* Adjust to move the underline up/down */
//     height: 3px; /* Thickness of the underline */
//     background-color: #ffffff; /* White underline */
//     border-radius: 2px;
//     opacity: 0.5; /* Slightly transparent like in the image */
//   }

//   @media (max-width: 768px) {
//     font-size: 20px;
//   }
// `;

// const TourIcon = styled.span`
//   margin-left: 10px;
//   font-size: 24px; /* Adjust icon size */
//   line-height: 1; /* Align with text */
// `;

// // React Component
// const BookingSection = () => {
//   return (
//     <BookingSectionContainer>
//       <StartBookingPanel>
//         Start Your First Booking
//       </StartBookingPanel>
//       <FindToursPanel>
//         <FindToursButton>
//           FIND TOURS
//           {/* You might use a real icon library like Font Awesome here */}
//           {/* For demonstration, using a simple character or a placeholder */}
//           <TourIcon>&#9662;</TourIcon> {/* Unicode for a down-pointing triangle */}
//           {/* If using Font Awesome: <TourIcon><i className="fas fa-caret-down"></i></TourIcon> */}
//         </FindToursButton>
//       </FindToursPanel>
//     </BookingSectionContainer>
//   );
// };

// export default BookingSection;


import React, { useRef, useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

// Keyframe for a subtle fade-in and slide-up animation
const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframe for a subtle slide-in from left/right for panels
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Reusable CSS for scroll-triggered animation
const AnimatedOnScroll = css`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${props =>
    props.$isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

// Styled Components
const BookingSectionContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 120px; /* Adjust height as needed */
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StartBookingPanel = styled.div`
  flex: 2; /* Takes up more space */
  background-color: #0d286d; /* Dark blue */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  opacity: 0; /* Start hidden for animation */
  transform: translateX(-50px); /* Start off-screen left */
  ${props => props.$isVisible && css`
    animation: ${slideInLeft} 0.7s ease-out forwards;
    transition-delay: 0.1s; /* Stagger animation */
  `}


  @media (max-width: 768px) {
    font-size: 24px;
    flex: 1;
    transform: translateY(20px); /* Adjust for vertical animation on mobile */
    ${props => props.$isVisible && css`
      animation: ${fadeInSlideUp} 0.7s ease-out forwards;
    `}
  }
`;

const FindToursPanel = styled.div`
  flex: 1; /* Takes up less space */
  background-color: #d90000; /* Red */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative; /* For positioning the icon and underline */
  opacity: 0; /* Start hidden for animation */
  transform: translateX(50px); /* Start off-screen right */
  ${props => props.$isVisible && css`
    animation: ${slideInRight} 0.7s ease-out forwards;
    transition-delay: 0.2s; /* Stagger animation */
  `}

  @media (max-width: 768px) {
    transform: translateY(20px); /* Adjust for vertical animation on mobile */
    ${props => props.$isVisible && css`
      animation: ${fadeInSlideUp} 0.7s ease-out forwards;
    `}
  }
`;

const FindToursButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 0; /* Adjust padding to control underline distance */
  position: relative; /* For the custom underline */
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.8s; /* Stagger animation */


  &:hover {
    opacity: 0.9;
  }

  /* Custom Underline */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px; /* Adjust to move the underline up/down */
    height: 3px; /* Thickness of the underline */
    background-color: #ffffff; /* White underline */
    border-radius: 2px;
    opacity: 0.5; /* Slightly transparent like in the image */
    transform: scaleX(0); /* Start hidden for animation */
    transform-origin: left; /* Scale from left */
    transition: transform 0.6s ease-out; /* Smooth transition for underline */
    ${props => props.$isVisible && css`
      transform: scaleX(1); /* Animate to full width */
      transition-delay: 1s; /* Appear after button text */
    `}
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TourIcon = styled.span`
  margin-left: 10px;
  font-size: 24px; /* Adjust icon size */
  line-height: 1; /* Align with text */
  opacity: 0; /* Start hidden for animation */
  ${props => props.$isVisible && css`
    animation: ${fadeInSlideUp} 0.6s ease-out forwards;
    transition-delay: 0.9s; /* Appear after button text */
  `}
`;

// React Component
const BookingSection = () => {

  const navigate = useNavigate();
  
  // Refs for elements to observe
  const sectionRef = useRef(null);
  const startBookingPanelRef = useRef(null);
  const findToursPanelRef = useRef(null);
  const findToursButtonRef = useRef(null);
  const tourIconRef = useRef(null);

  // State to control visibility of each element
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isStartBookingPanelVisible, setIsStartBookingPanelVisible] = useState(false);
  const [isFindToursPanelVisible, setIsFindToursPanelVisible] = useState(false);
  const [isFindToursButtonVisible, setIsFindToursButtonVisible] = useState(false);
  const [isTourIconVisible, setIsTourIconVisible] = useState(false);


  useEffect(() => {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionRef.current) {
          setIsSectionVisible(entry.isIntersecting);
        } else if (entry.target === startBookingPanelRef.current) {
          setIsStartBookingPanelVisible(entry.isIntersecting);
        } else if (entry.target === findToursPanelRef.current) {
          setIsFindToursPanelVisible(entry.isIntersecting);
        } else if (entry.target === findToursButtonRef.current) {
          setIsFindToursButtonVisible(entry.isIntersecting);
        } else if (entry.target === tourIconRef.current) {
          setIsTourIconVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    // Observe all relevant elements
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (startBookingPanelRef.current) observer.observe(startBookingPanelRef.current);
    if (findToursPanelRef.current) observer.observe(findToursPanelRef.current);
    if (findToursButtonRef.current) observer.observe(findToursButtonRef.current);
    if (tourIconRef.current) observer.observe(tourIconRef.current);


    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (startBookingPanelRef.current) observer.unobserve(startBookingPanelRef.current);
      if (findToursPanelRef.current) observer.unobserve(findToursPanelRef.current);
      if (findToursButtonRef.current) observer.unobserve(findToursButtonRef.current);
      if (tourIconRef.current) observer.unobserve(tourIconRef.current);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <BookingSectionContainer ref={sectionRef}>
      <StartBookingPanel ref={startBookingPanelRef} $isVisible={isStartBookingPanelVisible}>
        Start Your First Booking
      </StartBookingPanel>
      <FindToursPanel ref={findToursPanelRef} $isVisible={isFindToursPanelVisible}>
        <FindToursButton ref={findToursButtonRef} $isVisible={isFindToursButtonVisible} onClick={()=>navigate('/plannedpackages')}>
          FIND TOURS
          <TourIcon ref={tourIconRef} $isVisible={isTourIconVisible}>&#9662;</TourIcon>
        </FindToursButton>
      </FindToursPanel>
    </BookingSectionContainer>
  );
};

export default BookingSection;