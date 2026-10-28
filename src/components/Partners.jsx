
// import React from 'react';
// import styled from 'styled-components';
// import pt1 from '../Images/pt1.png';
// import pt2 from '../Images/pt2.png';
// import pt3 from '../Images/pt3.png';
// import pt4 from '../Images/pt4.png';
// import pt5 from '../Images/pt5.png';


// // Styled Components
// const PartnersSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 80px 40px;
//   background-color: #ffffff; /* White background */
//   font-family: Arial, sans-serif;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 60px 20px;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 38px;
//   color: #333333; /* Dark gray/black for title */
//   margin-bottom: 20px;
//   font-weight: bold;

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
//   max-width: 800px; /* Limit width for readability */
//   margin-bottom: 50px;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 15px;
//     margin-bottom: 40px;
//   }
// `;

// const LogosContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap; /* Allow logos to wrap to the next line */
//   justify-content: center;
//   align-items: center;
//   gap: 60px; /* Space between logos */
//   width: 100%;
//   max-width: 1000px; /* Max width for the logo row */

//   @media (max-width: 1024px) {
//     gap: 40px;
//   }

//   @media (max-width: 768px) {
//     gap: 30px;
//     flex-direction: column; /* Stack logos vertically on smaller screens */
//   }
// `;

// const PartnerLogo = styled.img`
//   max-height: 80px; /* Max height for logos */
//   max-width: 180px; /* Max width for logos */
//   object-fit: contain; /* Ensure the entire logo is visible */
//   filter: grayscale(0%); /* Remove grayscale if you want colored logos from source */
//   opacity: 0.9;
//   transition: opacity 0.3s ease;

//   &:hover {
//     opacity: 1;
//     filter: grayscale(0%); /* Ensure color on hover if you grayscale normally */
//   }

//   @media (max-width: 768px) {
//     max-height: 70px;
//     max-width: 150px;
//   }
// `;


// // React Component
// const Partners = () => {
//   // IMPORTANT: Replace these with the actual paths to your partner logos
//   const partnerLogos = [
// pt1, pt2, pt3, pt4, pt5 ];

//   return (
//     <PartnersSection>
//       <SectionTitle>Our Partners</SectionTitle>
//       <Description>
//         Harvanna Travels and Tour Ltds has been in the business of Travel, Visa processing, holidays, and birth services since 2012
//         and pride herself in partnership with some of the following brands you trust.
//       </Description>
//       <LogosContainer>
//         {partnerLogos.map((logoSrc, index) => (
//           <PartnerLogo key={index} src={logoSrc} alt={`Partner Logo ${index + 1}`} />
//         ))}
//       </LogosContainer>
//     </PartnersSection>
//   );
// };

// export default Partners;






import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import pt1 from '../Images/pt1.png';
import pt2 from '../Images/pt2.png';
import pt3 from '../Images/pt3.png';
import pt4 from '../Images/pt4.png';
import pt5 from '../Images/pt5.png';


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

// Keyframe for logo scale-in animation
const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
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
const PartnersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  background-color: #ffffff; /* White background */
  font-family: Arial, sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 38px;
  color: #333333; /* Dark gray/black for title */
  margin-bottom: 20px;
  font-weight: bold;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.1s; /* Stagger animation */

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
  max-width: 800px; /* Limit width for readability */
  margin-bottom: 50px;
  line-height: 1.6;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.2s; /* Stagger animation */

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 40px;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow logos to wrap to the next line */
  justify-content: center;
  align-items: center;
  gap: 60px; /* Space between logos */
  width: 100%;
  max-width: 1000px; /* Max width for the logo row */

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    flex-direction: column; /* Stack logos vertically on smaller screens */
  }
`;

const PartnerLogo = styled.img`
  max-height: 80px; /* Max height for logos */
  max-width: 180px; /* Max width for logos */
  object-fit: contain; /* Ensure the entire logo is visible */
  filter: grayscale(0%); /* Remove grayscale if you want colored logos from source */
  opacity: 0.9;
  transition: opacity 0.3s ease;

  opacity: 0; /* Start hidden for animation */
  transform: scale(0.8); /* Start slightly smaller */
  ${props => props.$isVisible && css`
    animation: ${scaleIn} 0.5s ease-out forwards;
  `}

  &:hover {
    opacity: 1;
    filter: grayscale(0%); /* Ensure color on hover if you grayscale normally */
  }

  @media (max-width: 768px) {
    max-height: 70px;
    max-width: 150px;
  }
`;


// React Component
const Partners = () => {
  const partnerLogos = [pt1, pt2, pt3, pt4, pt5];

  // Refs for elements to observe
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const logoRefs = useRef([]); // Array to hold refs for each logo

  // State to control visibility of each element
  const [isSectionTitleVisible, setIsSectionTitleVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [areLogosVisible, setAreLogosVisible] = useState(partnerLogos.map(() => false));


  useEffect(() => {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionTitleRef.current) {
          setIsSectionTitleVisible(entry.isIntersecting);
        } else if (entry.target === descriptionRef.current) {
          setIsDescriptionVisible(entry.isIntersecting);
        } else {
          // Check for individual logo elements
          logoRefs.current.forEach((ref, index) => {
            if (entry.target === ref) {
              setAreLogosVisible(prevState => {
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
    if (sectionRef.current) observer.observe(sectionRef.current); // Observe the section as a whole for context
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    logoRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (sectionTitleRef.current) observer.unobserve(sectionTitleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      logoRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <PartnersSection ref={sectionRef}>
      <SectionTitle ref={sectionTitleRef} $isVisible={isSectionTitleVisible}>Our Partners</SectionTitle>
      <Description ref={descriptionRef} $isVisible={isDescriptionVisible}>
        Harvanna Travels and Tour Ltds has been in the business of Travel, Visa processing, holidays, and birth services since 2012
        and pride herself in partnership with some of the following brands you trust.
      </Description>
      <LogosContainer>
        {partnerLogos.map((logoSrc, index) => (
          <PartnerLogo
            key={index}
            src={logoSrc}
            alt={`Partner Logo ${index + 1}`}
            ref={el => logoRefs.current[index] = el}
            $isVisible={areLogosVisible[index]}
            style={{ transitionDelay: `${0.3 + index * 0.1}s` }} /* Stagger logos */
          />
        ))}
      </LogosContainer>
    </PartnersSection>
  );
};

export default Partners;