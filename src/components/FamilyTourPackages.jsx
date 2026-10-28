
// import React from 'react';
// import styled from 'styled-components';
// import f1 from '../Images/f1.jpg';
// import f2 from '../Images/f2.jpg';
// import f3 from '../Images/f3.jpg';

// // Styled Components
// const TourPackagesSection = styled.section`
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

// const RedLines = styled.div`
//   position: absolute;
//   top: -30px; /* Adjust vertical position */
//   left: 0;
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
//     background-color: #e60000; /* Red color */
//     transform: skewX(-20deg); /* Diagonal angle */
//   }

//   @media (max-width: 1024px) {
//     left: 50%;
//     transform: translateX(-50%);
//     top: -10px; /* Adjust for center alignment */
//   }
// `;

// const Title = styled.h2`
//   font-size: 38px;
//   color: #0d286d; /* Dark blue text */
//   margin-top: 20px; /* Space from red lines */
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

// const Description = styled.p`
//   font-size: 16px;
//   color: #555555; /* Darker gray for description */
//   margin-bottom: 30px;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 15px;
//   }
// `;

// const SeeToursButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   color: #0d286d; /* Dark blue text for button */
//   text-decoration: none;
//   font-size: 16px;
//   font-weight: bold;
//   padding-bottom: 5px; /* Space for underline effect */
//   border-bottom: 2px solid #0d286d; /* Underline effect */
//   transition: all 0.3s ease;

//   &:hover {
//     color: #e60000; /* Red on hover */
//     border-color: #e60000; /* Red underline on hover */
//     padding-left: 5px; /* Slight push to the right on hover */
//   }

//   i {
//     transition: transform 0.3s ease;
//   }

//   &:hover i {
//     transform: translateX(5px); /* Move arrow on hover */
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
// const FamilyTourPackages = () => {
//   // IMPORTANT: Replace these with the actual paths to your images
//   const imageUrls = [
//  f1,f2,f3 ];

//   return (
//     <TourPackagesSection>
//       <LeftContent>
//         <RedLines>
//           <span></span>
//           <span></span>
//           <span></span>
//         </RedLines>
//         <Title>Exciting Family Tour Packages On Budget</Title>
//         <Description>
//           We have packages specially crafted for your family vacation needs. You can also request for a customized
//           package that suites you.
//         </Description>
//         <SeeToursButton href="#">
//           SEE TOURS <i className="fas fa-arrow-right"></i> {/* Font Awesome right arrow */}
//         </SeeToursButton>
//       </LeftContent>

//       <RightImages>
//         <ImageWrapper>
//           <StyledImage src={imageUrls[0]} alt="Family Tour Group" />
//         </ImageWrapper>
//         <ImageWrapper>
//           <StyledImage src={imageUrls[1]} alt="Scenic Tour Destination" />
//         </ImageWrapper>
//         <ImageWrapper>
//           <StyledImage src={imageUrls[2]} alt="Cultural Tour Experience" />
//         </ImageWrapper>
//       </RightImages>
//     </TourPackagesSection>
//   );
// };

// export default FamilyTourPackages;




import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import f1 from '../Images2/h8.jpg';
import f2 from '../Images/f2.jpg';
import f3 from '../Images/f3.jpg';
import { useNavigate } from 'react-router-dom';

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

// Keyframe for red lines animation (from left)
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px) skewX(-20deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) skewX(-20deg);
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
const TourPackagesSection = styled.section`
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

const RedLines = styled.div`
  position: absolute;
  top: -30px; /* Adjust vertical position */
  left: 0;
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
    background-color: #e60000; /* Red color */
    transform: skewX(-20deg); /* Diagonal angle */
    opacity: 0; /* Start hidden for animation */
    ${props => props.$isVisible && css`
      animation: ${slideInLeft} 0.5s ease-out forwards;
    `}

    &:nth-child(2) {
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      transition-delay: 0.2s;
    }
  }

  @media (max-width: 1024px) {
    left: 50%;
    transform: translateX(-50%);
    top: -10px; /* Adjust for center alignment */
  }
`;

const Title = styled.h2`
  font-size: 38px;
  color: #0d286d; /* Dark blue text */
  margin-top: 20px; /* Space from red lines */
  margin-bottom: 20px;
  line-height: 1.2;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.3s; /* Stagger animation */


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
  color: #555555; /* Darker gray for description */
  margin-bottom: 30px;
  line-height: 1.6;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.4s; /* Stagger animation */


  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SeeToursButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0d286d; /* Dark blue text for button */
  text-decoration: none;
  font-size: 16px;
  cursor:pointer;
  font-weight: bold;
  padding-bottom: 5px; /* Space for underline effect */
  border-bottom: 2px solid #0d286d; /* Underline effect */
  transition: all 0.3s ease;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.5s; /* Stagger animation */


  &:hover {
    color: #e60000; /* Red on hover */
    border-color: #e60000; /* Red underline on hover */
    padding-left: 5px; /* Slight push to the right on hover */
  }

  i {
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateX(5px); /* Move arrow on hover */
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
const FamilyTourPackages = () => {
  const imageUrls = [f1, f2, f3];
  const navigate = useNavigate();

  // Refs for elements to observe
  const sectionRef = useRef(null);
  const redLinesRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const seeToursButtonRef = useRef(null);
  const imageRefs = useRef([]); // Use an array for multiple image refs

  // State to control visibility of each element
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isRedLinesVisible, setIsRedLinesVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isSeeToursButtonVisible, setIsSeeToursButtonVisible] = useState(false);
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
        } else if (entry.target === redLinesRef.current) {
          setIsRedLinesVisible(entry.isIntersecting);
        } else if (entry.target === titleRef.current) {
          setIsTitleVisible(entry.isIntersecting);
        } else if (entry.target === descriptionRef.current) {
          setIsDescriptionVisible(entry.isIntersecting);
        } else if (entry.target === seeToursButtonRef.current) {
          setIsSeeToursButtonVisible(entry.isIntersecting);
        } else {
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
    if (redLinesRef.current) observer.observe(redLinesRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (seeToursButtonRef.current) observer.observe(seeToursButtonRef.current);
    imageRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (redLinesRef.current) observer.unobserve(redLinesRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (seeToursButtonRef.current) observer.unobserve(seeToursButtonRef.current);
      imageRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <TourPackagesSection ref={sectionRef}>
      <LeftContent>
        <RedLines ref={redLinesRef} $isVisible={isRedLinesVisible}>
          <span></span>
          <span></span>
          <span></span>
        </RedLines>
        <Title ref={titleRef} $isVisible={isTitleVisible}>Exciting Family Tour Packages On Budget</Title>
        <Description ref={descriptionRef} $isVisible={isDescriptionVisible}>
          We have packages specially crafted for your family vacation needs. You can also request for a customized
          package that suites you.
        </Description>
        <SeeToursButton ref={seeToursButtonRef} $isVisible={isSeeToursButtonVisible} onClick={()=>navigate('/plannedpackages')}>
          SEE TOURS <i className="fas fa-arrow-right"></i>
        </SeeToursButton>
      </LeftContent>

      <RightImages>
        {imageUrls.map((image, index) => (
          <ImageWrapper
            key={index}
            ref={el => imageRefs.current[index] = el}
            $isVisible={areImagesVisible[index]}
          >
            <StyledImage src={image} alt={`Tour Package ${index + 1}`} />
          </ImageWrapper>
        ))}
      </RightImages>
    </TourPackagesSection>
  );
};

export default FamilyTourPackages;