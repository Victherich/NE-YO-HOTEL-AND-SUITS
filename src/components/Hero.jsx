

// import React, { useState, useEffect } from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import h1 from "../Images/h1.jpg"
// import h2 from "../Images/h2.jpg"
// import h3 from "../Images/h3.jpg"
// import h4 from "../Images/h4.jpg"

// // Define the fade animation
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const fadeOut = keyframes`
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// `;

// // Styled Components
// const HeroSectionContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 550px; /* Adjust height as needed to match the image */
//   overflow: hidden; /* Hide overflow from images */
//   display: flex;
//   align-items: center;
//   justify-content: flex-start; /* Align content to the left */
//   padding-left: 10%; /* Adjust padding for content positioning */
//   box-sizing: border-box; /* Include padding in element's total width and height */

//   @media (max-width: 1024px) {
//     height: 500px;
//     padding-left: 5%;
//   }

//   @media (max-width: 768px) {
//     height: 350px;
//     justify-content: center; /* Center content on smaller screens */
//     padding: 0 20px;
//   }

//   @media (max-width: 480px) {
//     height: 300px;
//   }
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   opacity: 0; /* Start hidden */
//   transition: opacity 1.5s ease-in-out; /* Smooth fade transition */
//   z-index: 1; /* Below the info box and chat button */

//   ${props =>
//     props.isActive &&
//     css`
//       opacity: 1;
//       animation: ${fadeIn} 1.5s forwards; /* Apply fade-in animation when active */
//     `}
// `;

// const InfoBox = styled.div`
//   background-color: #ffde00; /* Yellow background */
//   padding: 30px 40px;
//   border-radius: 8px;
//   max-width: 550px; /* Adjust width as needed */
//   text-align: left;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
//   z-index: 2; /* Above background images */

//   @media (max-width: 768px) {
//     padding: 25px 30px;
//     max-width: 90%; /* Make it more responsive */
//     text-align: center;
//   }

//   @media (max-width: 480px) {
//     padding: 20px 25px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 38px;
//   color: #0d286d; /* Dark blue text */
//   margin-bottom: 15px;
//   line-height: 1.2;

//   @media (max-width: 1024px) {
//     font-size: 32px;
//   }
//   @media (max-width: 768px) {
//     font-size: 28px;
//   }
//   @media (max-width: 480px) {
//     font-size: 24px;
//   }
// `;

// const Description = styled.p`
//   font-size: 16px;
//   color: #333333;
//   margin-bottom: 25px;
//   line-height: 1.5;

//   @media (max-width: 768px) {
//     font-size: 15px;
//   }
//   @media (max-width: 480px) {
//     font-size: 14px;
//   }
// `;

// const BookNowButton = styled.button`
//   background-color: #0d286d; /* Dark blue button */
//   color: #ffffff;
//   padding: 12px 25px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   display: inline-flex;
//   align-items: center;
//   gap: 8px; /* Space between text and icon */

//   &:hover {
//     background-color: #081a4d; /* Slightly darker blue on hover */
//   }

//   @media (max-width: 480px) {
//     padding: 10px 20px;
//     font-size: 15px;
//   }
// `;

// const BookNowIcon = styled.span`
//   font-size: 18px; /* Adjust icon size */
// `;

// const ChatButton = styled.a`
//   position: absolute;
//   top: 50%;
//   right: 20px; /* Adjust distance from right edge */
//   transform: translateY(-50%);
//   background-color: #4caf50; /* Green background */
//   color: #ffffff;
//   padding: 10px 15px;
//   border-radius: 8px;
//   text-decoration: none;
//   font-size: 16px;
//   font-weight: bold;
//   writing-mode: vertical-lr; /* Vertical text */
//   text-orientation: mixed; /* Mixed orientation for vertical text */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px; /* Space between icon and text */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   transform-origin: center center; /* Ensure rotation is centered */
//   z-index: 2; /* Above background images */


//   &:hover {
//     background-color: #45a049; /* Slightly darker green on hover */
//   }

//   @media (max-width: 768px) {
//     right: 10px;
//     padding: 8px 12px;
//     font-size: 14px;
//   }
// `;

// const ChatIcon = styled.span`
//   font-size: 20px; /* Adjust icon size */
//   margin-top: 5px; /* Space from text */
//   transform: rotate(90deg); /* Rotate the chat icon for vertical text */
// `;


// // React Component
// const HeroSection = () => {
//   // IMPORTANT: Replace these with your actual image paths/URLs



//   const images = [
// h1,h2,h3,h4
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 5 seconds (adjust as needed)

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <HeroSectionContainer>
//       {images.map((image, index) => (
//         <BackgroundImage
//           key={index}
//           style={{ backgroundImage: `url(${image})` }}
//           isActive={index === currentImageIndex}
//         />
//       ))}

//       <InfoBox>
//         <Title>Search & Book Cheap Flights</Title>
//         <Description>
//           Book cheap and affordable local and international flight deals
//           only on the Harvanna Travels and Tour Ltd Website.
//         </Description>
//         <BookNowButton>
//           BOOK NOW
//           <BookNowIcon><i className="fas fa-arrow-right"></i></BookNowIcon> {/* Font Awesome right arrow */}
//         </BookNowButton>
//       </InfoBox>

//       <ChatButton href="#">
//         <ChatIcon><i className="fab fa-whatsapp"></i></ChatIcon> {/* Font Awesome WhatsApp icon */}
//         CHAT
//       </ChatButton>
//     </HeroSectionContainer>
//   );
// };

// export default HeroSection;






import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
// import h1 from "../Images/t3.jpg"
// import h2 from "../Images/h2.jpg"
// import h3 from "../Images/h3.jpg"
// import h4 from "../Images/h4.jpg"


import h1 from "../Images/t3.jpg"
import h2 from "../Images2/h2.jpg"
import h3 from "../Images2/h3.jpg"
import h4 from "../Images/h4.jpg"
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// Define the fade animation for background images
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define a slide-in animation for text elements
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* Start slightly below */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components (rest of your styled components remain the same)
const HeroSectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px; /* Adjust height as needed to match the image */
  overflow: hidden; /* Hide overflow from images */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align content to the left */
  padding-left: 10%; /* Adjust padding for content positioning */
  box-sizing: border-box; /* Include padding in element's total width and height */
  // padding-top:100px;

  @media (max-width: 1024px) {
    height: 500px;
    padding-left: 5%;
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
  background-position: top;
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
  background-color: #ffde00; /* Yellow background */
  padding: 30px 40px;
  border-radius: 8px;
  max-width: 550px; /* Adjust width as needed */
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  z-index: 2; /* Above background images */

  @media (max-width: 768px) {
    padding: 25px 30px;
    max-width: 90%; /* Make it more responsive */
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 20px 25px;
  }
`;

// New CSS for scroll animation
const AnimatedText = css`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  ${props =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const Title = styled.h1`
  font-size: 38px;
  color: #0d286d; /* Dark blue text */
  margin-bottom: 15px;
  line-height: 1.2;
  ${AnimatedText} /* Apply animated text styles */
  transition-delay: 0.1s; /* Stagger the animation */

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
  color: #333333;
  margin-bottom: 25px;
  line-height: 1.5;
  ${AnimatedText} /* Apply animated text styles */
  transition-delay: 0.2s; /* Stagger the animation */

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
  ${AnimatedText} /* Apply animated text styles */
  transition-delay: 0.3s; /* Stagger the animation */


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
  ${AnimatedText} /* Apply animated text styles */
  transition-delay: 0.4s; /* Stagger the animation */


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
const HeroSection = () => {
  const images = [h1, h2, h3, h4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const navigate = useNavigate();


  // Refs for each text element to observe
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const bookNowButtonRef = useRef(null);
  const chatButtonRef = useRef(null);

  // State to control visibility for each element
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isBookNowButtonVisible, setIsBookNowButtonVisible] = useState(false);
  const [isChatButtonVisible, setIsChatButtonVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const options = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === titleRef.current) {
          setIsTitleVisible(entry.isIntersecting);
        } else if (entry.target === descriptionRef.current) {
          setIsDescriptionVisible(entry.isIntersecting);
        } else if (entry.target === bookNowButtonRef.current) {
          setIsBookNowButtonVisible(entry.isIntersecting);
        } else if (entry.target === chatButtonRef.current) {
          setIsChatButtonVisible(entry.isIntersecting);
        }
      });
    }, options);

    // Observe each element
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (bookNowButtonRef.current) observer.observe(bookNowButtonRef.current);
    if (chatButtonRef.current) observer.observe(chatButtonRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (bookNowButtonRef.current) observer.unobserve(bookNowButtonRef.current);
      if (chatButtonRef.current) observer.unobserve(chatButtonRef.current);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  
    const handleComingSoon = ()=>{
      Swal.fire({
        title:"Coming soon...",
        icon:"info",
        timer:1000
      })
    }
  
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
        <Title ref={titleRef} isVisible={isTitleVisible}>
          Search & Book Cheap Flights
        </Title>
        <Description ref={descriptionRef} isVisible={isDescriptionVisible}>
          Book cheap and affordable local and international flight deals only on the Harvanna Travels and Tour Ltd Website.
        </Description>
        <BookNowButton ref={bookNowButtonRef} isVisible={isBookNowButtonVisible} onClick={()=>navigate('/flights')}>
          BOOK NOW
          <BookNowIcon><i className="fas fa-arrow-right"></i></BookNowIcon>
        </BookNowButton>
      </InfoBox>

      {/* <ChatButton ref={chatButtonRef} isVisible={isChatButtonVisible} href="#">
        <ChatIcon><i className="fab fa-whatsapp"></i></ChatIcon>
        CHAT
      </ChatButton> */}
    </HeroSectionContainer>
  );
};

export default HeroSection;