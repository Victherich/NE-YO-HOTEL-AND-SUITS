
// import React from 'react';
// import styled from 'styled-components';
// import t1 from '../Images/t1.jpg'
// import t2 from '../Images/t2.jpg'
// import t3 from '../Images/t3.jpg'

// // Styled Components
// const TestimonialSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 80px 40px;
//   background-color: #ffffff; /* White background */
//   font-family: Arial, sans-serif;
//   gap: 40px; /* Space between left and right columns */

//   @media (max-width: 1024px) {
//     flex-direction: column;
//     padding: 60px 20px;
//     gap: 30px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 15px;
//   }
// `;

// const LeftContent = styled.div`
//   flex: 1;
//   max-width: 500px; /* Limit width of text content */
//   position: relative;
//   text-align: left;

//   @media (max-width: 1024px) {
//     max-width: 100%;
//     text-align: center;
//   }
// `;

// const QuoteIcon = styled.span`
//   font-size: 80px; /* Large size for the quote icon */
//   color: #e0e0e0; /* Light gray color */
//   line-height: 0.5; /* Adjust vertical alignment */
//   display: block; /* Ensures it takes its own line */
//   margin-bottom: 20px;
  
//   @media (max-width: 1024px) {
//     font-size: 70px;
//     margin-bottom: 10px;
//   }
// `;

// const TestimonialTitle = styled.h2`
//   font-size: 38px;
//   color: #0d286d; /* Dark blue text */
//   margin-bottom: 20px;
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

// const TestimonialText = styled.p`
//   font-size: 16px;
//   color: #555555; /* Darker gray for description */
//   margin-bottom: 25px;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 15px;
//   }
// `;

// const Attribution = styled.div`
//   font-size: 15px;
//   color: #333333;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const Location = styled.div`
//   font-size: 14px;
//   color: #777777;
//   margin-bottom: 40px; /* Space before yellow lines if they were below */
// `;

// const YellowLines = styled.div`
//   position: absolute;
//   bottom: -20px; /* Adjust vertical position */
//   right: 0;
//   width: 50px; /* Width of the lines container */
//   height: 20px; /* Height of the lines container */
//   overflow: hidden; /* Hide excess of lines */
//   display: flex;
//   flex-direction: column;
//   gap: 4px; /* Space between lines */

//   span {
//     display: block;
//     width: 30px; /* Length of each line */
//     height: 3px; /* Thickness of each line */
//     background-color: #ffde00; /* Yellow color */
//     transform: skewX(-20deg); /* Diagonal angle */
//   }

//   @media (max-width: 1024px) {
//     position: static; /* Remove absolute positioning on mobile */
//     margin-top: 20px;
//     align-self: center; /* Center them if flex-direction is column */
//     display: flex; /* Ensure it's displayed */
//   }
// `;

// const RightImages = styled.div`
//   flex: 1.2; /* Slightly larger flex for images */
//   display: grid;
//   grid-template-columns: repeat(2, 1fr); /* Two columns */
//   grid-template-rows: repeat(2, auto); /* Two rows, auto height */
//   gap: 15px; /* Space between images */
//   max-width: 600px; /* Limit image container width */

//   @media (max-width: 1024px) {
//     max-width: 90%; /* Adjust for smaller screens */
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr; /* Single column on mobile */
//     gap: 10px;
//     max-width: 100%;
//   }
// `;

// const ImageWrapper = styled.div`
//   width: 100%;
//   height: 0;
//   padding-bottom: 66.66%; /* Aspect ratio for 3:2 images (e.g., 400x267) */
//   position: relative;
//   overflow: hidden;
//   border-radius: 8px; /* Slightly rounded corners */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//   &:nth-child(1) {
//     grid-column: 1 / 3; /* First image spans both columns */
//     padding-bottom: 45%; /* Adjust aspect ratio for wide top image */
//     @media (max-width: 768px) {
//         grid-column: auto;
//         padding-bottom: 60%;
//     }
//   }

//   /* Specific styling for the vertical yellow bar on the right side of the first image */
//   &:nth-child(1)::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: -10px; /* Position off-screen to create the bar effect */
//     width: 20px; /* Width of the yellow bar */
//     height: 100%;
//     background-color: #ffde00; /* Yellow color */
//     z-index: 10;
//     transform: translateX(100%); /* Start hidden */

//     /* Animation or simple display for the yellow bar */
//     @media (min-width: 769px) { /* Only for wider screens where the first image spans */
//         transform: translateX(0); /* Make it visible */
//     }
//   }
// `;

// const StyledImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover; /* Cover the area without distorting */
// `;


// // React Component
// const CustomerTestimonial = () => {
//   // IMPORTANT: Replace these with the actual paths to your images
//   const imageUrls = [t1,t2,t3
//  ];

//   return (
//     <TestimonialSection>
//       <LeftContent>
//         <QuoteIcon>“</QuoteIcon> {/* Unicode for a large quote */}
//         <TestimonialTitle>Truly memorable and exciting tours.</TestimonialTitle>
//         <TestimonialText>
//           Harvanna Travels and Tour Ltds has been my family’s go to for both business and family vacations. This is one of the
//           most experienced travel agency in Nigeria. Our last trip to Dubai was so exciting. I recommend Harvanna Travels and Tour Ltd
//           .
//         </TestimonialText>
//         <Attribution>- Ethan Johnson & Family</Attribution>
//         <Location>Dubai Tour</Location>
//         <YellowLines>
//           <span></span>
//           <span></span>
//           <span></span>
//         </YellowLines>
//       </LeftContent>

//       <RightImages>
//         <ImageWrapper>
//           <StyledImage src={imageUrls[0]} alt="Testimonial Group Image 1" />
//         </ImageWrapper>
//         <ImageWrapper>
//           <StyledImage src={imageUrls[1]} alt="Testimonial Group Image 2" />
//         </ImageWrapper>
//         <ImageWrapper>
//           <StyledImage src={imageUrls[2]} alt="Testimonial Group Image 3" />
//         </ImageWrapper>
//       </RightImages>
//     </TestimonialSection>
//   );
// };

// export default CustomerTestimonial;


import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import t1 from '../Images2/h7.jpg';
import t2 from '../Images/t2.jpg';
import t3 from '../Images/t3.jpg';

// Keyframe for a subtle slide-up animation
const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframe for yellow lines animation (from right)
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px) skewX(-20deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) skewX(-20deg);
  }
`;

// Keyframe for the quote icon fade-in
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Keyframe for the yellow bar animation (slide from right)
const slideInYellowBar = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Reusable CSS for scroll-triggered animation
const AnimatedOnScroll = css`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${props =>
    props.$isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

// Styled Components
const TestimonialSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  background-color: #ffffff; /* White background */
  font-family: Arial, sans-serif;
  gap: 40px; /* Space between left and right columns */

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 500px; /* Limit width of text content */
  position: relative;
  text-align: left;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

const QuoteIcon = styled.span`
  font-size: 80px; /* Large size for the quote icon */
  color: #e0e0e0; /* Light gray color */
  line-height: 0.5; /* Adjust vertical alignment */
  display: block; /* Ensures it takes its own line */
  margin-bottom: 20px;
  opacity: 0; /* Start hidden for animation */
  transform: scale(0.8); /* Start slightly smaller */
  ${props => props.$isVisible && css`
    animation: ${fadeInScale} 0.6s ease-out forwards;
    transition-delay: 0.1s; /* Stagger animation */
  `}
  
  @media (max-width: 1024px) {
    font-size: 70px;
    margin-bottom: 10px;
  }
`;

const TestimonialTitle = styled.h2`
  font-size: 38px;
  color: #0d286d; /* Dark blue text */
  margin-bottom: 20px;
  line-height: 1.2;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.2s; /* Stagger animation */

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

const TestimonialText = styled.p`
  font-size: 16px;
  color: #555555; /* Darker gray for description */
  margin-bottom: 25px;
  line-height: 1.6;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.3s; /* Stagger animation */

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Attribution = styled.div`
  font-size: 15px;
  color: #333333;
  font-weight: bold;
  margin-bottom: 5px;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.4s; /* Stagger animation */
`;

const Location = styled.div`
  font-size: 14px;
  color: #777777;
  margin-bottom: 40px; /* Space before yellow lines if they were below */
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.5s; /* Stagger animation */
`;

const YellowLines = styled.div`
  position: absolute;
  bottom: -20px; /* Adjust vertical position */
  right: 0;
  width: 50px; /* Width of the lines container */
  height: 20px; /* Height of the lines container */
  overflow: hidden; /* Hide excess of lines */
  display: flex;
  flex-direction: column;
  gap: 4px; /* Space between lines */

  span {
    display: block;
    width: 30px; /* Length of each line */
    height: 3px; /* Thickness of each line */
    background-color: #ffde00; /* Yellow color */
    transform: skewX(-20deg); /* Diagonal angle */
    opacity: 0; /* Start hidden for animation */
    ${props => props.$isVisible && css`
      animation: ${slideInRight} 0.5s ease-out forwards;
    `}

    &:nth-child(2) {
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      transition-delay: 0.2s;
    }
  }

  @media (max-width: 1024px) {
    position: static; /* Remove absolute positioning on mobile */
    margin-top: 20px;
    align-self: center; /* Center them if flex-direction is column */
    display: flex; /* Ensure it's displayed */
  }
`;

const RightImages = styled.div`
  flex: 1.2; /* Slightly larger flex for images */
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  grid-template-rows: repeat(2, auto); /* Two rows, auto height */
  gap: 15px; /* Space between images */
  max-width: 600px; /* Limit image container width */

  @media (max-width: 1024px) {
    max-width: 90%; /* Adjust for smaller screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 10px;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 66.66%; /* Aspect ratio for 3:2 images (e.g., 400x267) */
  position: relative;
  overflow: hidden;
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0; /* Start hidden for animation */
  transform: translateY(30px); /* Start slightly down */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out; /* Smooth transition */

  ${props => props.$isVisible && css`
    opacity: 1;
    transform: translateY(0);
    animation: ${slideInUp} 0.6s ease-out forwards;
  `}

  &:nth-child(1) {
    grid-column: 1 / 3; /* First image spans both columns */
    padding-bottom: 45%; /* Adjust aspect ratio for wide top image */
    transition-delay: 0.6s; /* Stagger image animation */

    @media (max-width: 768px) {
      grid-column: auto;
      padding-bottom: 60%;
    }
  }

  &:nth-child(2) {
    transition-delay: 0.7s; /* Stagger image animation */
  }

  &:nth-child(3) {
    transition-delay: 0.8s; /* Stagger image animation */
  }

  /* Specific styling for the vertical yellow bar on the right side of the first image */
  &:nth-child(1)::after {
    content: '';
    position: absolute;
    top: 0;
    right: -10px; /* Position off-screen to create the bar effect */
    width: 20px; /* Width of the yellow bar */
    height: 100%;
    background-color: #ffde00; /* Yellow color */
    z-index: 10;
    transform: translateX(100%); /* Start hidden */
    opacity: 0; /* Also hide with opacity for initial state */

    /* Animation or simple display for the yellow bar */
    ${props => props.$isVisible && css`
      @media (min-width: 769px) { /* Only for wider screens where the first image spans */
        animation: ${slideInYellowBar} 0.7s ease-out forwards;
        opacity: 1;
        transition-delay: 1s; /* Ensure it appears after the image */
      }
    `}
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the area without distorting */
`;


// React Component
const CustomerTestimonial = () => {
  const imageUrls = [t1, t2, t3];

  // Refs for elements to observe
  const sectionRef = useRef(null);
  const quoteIconRef = useRef(null);
  const testimonialTitleRef = useRef(null);
  const testimonialTextRef = useRef(null);
  const attributionRef = useRef(null);
  const locationRef = useRef(null);
  const yellowLinesRef = useRef(null);
  const imageRefs = useRef([]); // Use an array for multiple image refs

  // State to control visibility of each element
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isQuoteIconVisible, setIsQuoteIconVisible] = useState(false);
  const [isTestimonialTitleVisible, setIsTestimonialTitleVisible] = useState(false);
  const [isTestimonialTextVisible, setIsTestimonialTextVisible] = useState(false);
  const [isAttributionVisible, setIsAttributionVisible] = useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const [isYellowLinesVisible, setIsYellowLinesVisible] = useState(false);
  const [areImagesVisible, setAreImagesVisible] = useState([false, false, false]);


  useEffect(() => {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionRef.current) {
          setIsSectionVisible(entry.isIntersecting);
        } else if (entry.target === quoteIconRef.current) {
          setIsQuoteIconVisible(entry.isIntersecting);
        } else if (entry.target === testimonialTitleRef.current) {
          setIsTestimonialTitleVisible(entry.isIntersecting);
        } else if (entry.target === testimonialTextRef.current) {
          setIsTestimonialTextVisible(entry.isIntersecting);
        } else if (entry.target === attributionRef.current) {
          setIsAttributionVisible(entry.isIntersecting);
        } else if (entry.target === locationRef.current) {
          setIsLocationVisible(entry.isIntersecting);
        } else if (entry.target === yellowLinesRef.current) {
          setIsYellowLinesVisible(entry.isIntersecting);
        }
        else {
          // Check for image elements
          imageRefs.current.forEach((ref, index) => {
            if (entry.target === ref) {
              setAreImagesVisible(prevState => {
                const newState = [...prevState];
                newState[index] = entry.isIntersecting;
                return newState;
              });
            }
          });
        }
      });
    }, observerOptions);

    // Observe all relevant elements
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (quoteIconRef.current) observer.observe(quoteIconRef.current);
    if (testimonialTitleRef.current) observer.observe(testimonialTitleRef.current);
    if (testimonialTextRef.current) observer.observe(testimonialTextRef.current);
    if (attributionRef.current) observer.observe(attributionRef.current);
    if (locationRef.current) observer.observe(locationRef.current);
    if (yellowLinesRef.current) observer.observe(yellowLinesRef.current);
    imageRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (quoteIconRef.current) observer.unobserve(quoteIconRef.current);
      if (testimonialTitleRef.current) observer.unobserve(testimonialTitleRef.current);
      if (testimonialTextRef.current) observer.unobserve(testimonialTextRef.current);
      if (attributionRef.current) observer.unobserve(attributionRef.current);
      if (locationRef.current) observer.unobserve(locationRef.current);
      if (yellowLinesRef.current) observer.unobserve(yellowLinesRef.current);
      imageRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array means this effect runs once after initial render


  return (
    <TestimonialSection ref={sectionRef}>
      <LeftContent>
        <QuoteIcon ref={quoteIconRef} $isVisible={isQuoteIconVisible}>“</QuoteIcon>
        <TestimonialTitle ref={testimonialTitleRef} $isVisible={isTestimonialTitleVisible}>Truly memorable and exciting tours.</TestimonialTitle>
        <TestimonialText ref={testimonialTextRef} $isVisible={isTestimonialTextVisible}>
          Harvanna Travels and Tour Ltds has been my family’s go to for both business and family vacations. This is one of the
          most experienced travel agency in Nigeria. Our last trip to Dubai was so exciting. I recommend Harvanna Travels and Tour Ltd.
        </TestimonialText>
        <Attribution ref={attributionRef} $isVisible={isAttributionVisible}>- Ethan Johnson & Family</Attribution>
        <Location ref={locationRef} $isVisible={isLocationVisible}>Dubai Tour</Location>
        <YellowLines ref={yellowLinesRef} $isVisible={isYellowLinesVisible}>
          <span></span>
          <span></span>
          <span></span>
        </YellowLines>
      </LeftContent>

      <RightImages>
        {imageUrls.map((image, index) => (
          <ImageWrapper
            key={index}
            ref={el => imageRefs.current[index] = el}
            $isVisible={areImagesVisible[index]}
          >
            <StyledImage src={image} alt={`Testimonial Group Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </RightImages>
    </TestimonialSection>
  );
};

export default CustomerTestimonial;