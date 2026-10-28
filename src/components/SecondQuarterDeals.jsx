// import React from 'react';
// import styled from 'styled-components';
// import packages2 from '../Images/packages2.jpg'
// import packages3 from '../Images/packages3.jpg';


// // Styled Components (re-using existing ones and adding new simple containers)
// const DealsSection = styled.section`
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
//   color: #0d286d; /* Dark gray/black for title */
//   margin-bottom: 10px;
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

// const SectionSubtitle = styled.p`
//   font-size: 16px;
//   color: #555555; /* Darker gray for description */
//   max-width: 700px;
//   margin-bottom: 50px; /* Space below subtitle before image containers */
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 15px;
//     margin-bottom: 40px;
//   }
// `;

// const ImageContainersWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap; /* Allow containers to wrap */
//   justify-content: center;
//   gap: 30px; /* Space between containers */
//   width: 100%;
//   max-width: 1200px; /* Max width for the row of containers */

//   @media (max-width: 1024px) {
//     flex-direction: column; /* Stack containers vertically on smaller screens */
//     align-items: center;
//   }
// `;

// const ImageContainer = styled.div`
//   background-color: #f0f0f0; /* Light gray background for visibility */
//   border: 1px dashed #cccccc; /* Dashed border to show it's a placeholder */
//   border-radius: 8px;
//   width: 100%;
//   max-width: 550px; /* Max width for individual containers, matching original cards */
// //   height: 350px; /* Fixed height for placeholder */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #888888;
//   font-size: 18px;
//   font-weight: bold;
//   text-align: center;
//   overflow: hidden; /* In case actual images are placed directly inside later */

//   /* You can add an actual image inside here if you have it ready */
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 8px; /* Apply border-radius to image as well */
//   }

//   @media (max-width: 768px) {
//     max-width: 90%;
//     height: 300px; /* Adjust height for smaller screens */
//   }
// `;


// // React Component
// const SecondQuarterDealsSimplified = () => {
//   // If you later decide to place specific images here, you can manage their paths
//   // const leftImage = 'path/to/your/left-deal-image.jpg';
//   // const rightImage = 'path/to/your/right-deal-image.jpg';

//   return (
//     <DealsSection>
//       <SectionTitle>Second Quarter Deals</SectionTitle>
//       <SectionSubtitle>
//         Curated offers to make your travel dreams a reality through competent hands.
//       </SectionSubtitle>

//       <ImageContainersWrapper>
//         <ImageContainer>
//           {/* You can place an <img> tag here if you have a specific image */}
//           <img src={packages3} alt="Travel Deal" />
 
//         </ImageContainer>
//         <ImageContainer>
//           {/* You can place an <img> tag here if you have a specific image */}
//           <img src={packages2} alt="Visa Deal" />
   
//         </ImageContainer>
//       </ImageContainersWrapper>
//     </DealsSection>
//   );
// };

// export default SecondQuarterDealsSimplified;






import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import packages3 from '../Images2/harva Packages.jpg';
import packages2 from '../Images2/harva Visa.jpg';

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

// Keyframe for image containers to slide in from left/right
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

// Styled Components (re-using existing ones and adding new simple containers)
const DealsSection = styled.section`
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
  color: #0d286d; /* Dark gray/black for title */
  margin-bottom: 10px;
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

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #555555; /* Darker gray for description */
  max-width: 700px;
  margin-bottom: 50px; /* Space below subtitle before image containers */
  line-height: 1.6;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.2s; /* Stagger animation */

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 40px;
  }
`;

const ImageContainersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow containers to wrap */
  justify-content: center;
  gap: 30px; /* Space between containers */
  width: 100%;
  max-width: 1200px; /* Max width for the row of containers */

  @media (max-width: 1024px) {
    flex-direction: column; /* Stack containers vertically on smaller screens */
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  background-color: #f0f0f0; /* Light gray background for visibility */
  border: 1px dashed #cccccc; /* Dashed border to show it's a placeholder */
  border-radius: 8px;
  width: 100%;
  max-width: 550px; /* Max width for individual containers, matching original cards */
  // height: 350px; /* Fixed height for placeholder */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888888;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  overflow: hidden; /* In case actual images are placed directly inside later */
  
  opacity: 0; /* Start hidden for animation */
  ${props => props.$isVisible && css`
    /* Apply specific slide-in animations based on index */
    ${props.$index === 0 && css`
      animation: ${slideInLeft} 0.7s ease-out forwards;
      transition-delay: 0.3s;
    `}
    ${props.$index === 1 && css`
      animation: ${slideInRight} 0.7s ease-out forwards;
      transition-delay: 0.4s;
    `}

    @media (max-width: 1024px) { /* On smaller screens, both slide up */
      animation: ${fadeInSlideUp} 0.7s ease-out forwards;
      transition-delay: ${props.$index === 0 ? '0.3s' : '0.4s'};
    }
  `}

  img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
    border-radius: 8px; /* Apply border-radius to image as well */
  }

  @media (max-width: 768px) {
    max-width: 90%;
    // height: 300px; /* Adjust height for smaller screens */
  }
`;


// React Component
const SecondQuarterDealsSimplified = () => {
  // Use a data structure to easily map and manage images/refs
  const dealImages = [
    { src: packages3, alt: "Travel Deal" },
    { src: packages2, alt: "Visa Deal" }
  ];

  // Refs for elements to observe
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const sectionSubtitleRef = useRef(null);
  const imageContainerRefs = useRef([]); // Array to hold refs for each image container

  // State to control visibility of each element
  const [isSectionTitleVisible, setIsSectionTitleVisible] = useState(false);
  const [isSectionSubtitleVisible, setIsSectionSubtitleVisible] = useState(false);
  const [areImageContainersVisible, setAreImageContainersVisible] = useState(dealImages.map(() => false));

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
        } else if (entry.target === sectionSubtitleRef.current) {
          setIsSectionSubtitleVisible(entry.isIntersecting);
        } else {
          // Check for individual image containers
          imageContainerRefs.current.forEach((ref, index) => {
            if (entry.target === ref) {
              setAreImageContainersVisible(prevState => {
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
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
    if (sectionSubtitleRef.current) observer.observe(sectionSubtitleRef.current);
    imageContainerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (sectionTitleRef.current) observer.unobserve(sectionTitleRef.current);
      if (sectionSubtitleRef.current) observer.unobserve(sectionSubtitleRef.current);
      imageContainerRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <DealsSection ref={sectionRef}>
      <SectionTitle ref={sectionTitleRef} $isVisible={isSectionTitleVisible}>Second Quarter Deals</SectionTitle>
      <SectionSubtitle ref={sectionSubtitleRef} $isVisible={isSectionSubtitleVisible}>
        Curated offers to make your travel dreams a reality through competent hands.
      </SectionSubtitle>

      <ImageContainersWrapper>
        {dealImages.map((deal, index) => (
          <ImageContainer
            key={index}
            ref={el => imageContainerRefs.current[index] = el}
            $isVisible={areImageContainersVisible[index]}
            $index={index} // Pass index for conditional animation in styled component
          >
            <img src={deal.src} alt={deal.alt} />
          </ImageContainer>
        ))}
      </ImageContainersWrapper>
    </DealsSection>
  );
};

export default SecondQuarterDealsSimplified;