
// import React from 'react';
// import styled from 'styled-components';
// import SummerHolidayCard from './SummerHolidayCard'; // Make sure this path is correct
// import tour1 from '../Images/tour1.jpeg'

// // Styled Components for the section
// const PopularToursSectionContainer = styled.section`
//   background-color: #0d286d; /* Dark blue background */
//   padding: 80px 40px;
//   font-family: Arial, sans-serif;
//   text-align: center;
//   color: #ffffff; /* White text for headings */

//   @media (max-width: 768px) {
//     padding: 60px 20px;
//   }
// `;

// const SectionHeaderStripes = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;

//   span {
//     display: block;
//     width: 25px; /* Length of each stripe */
//     height: 3px; /* Thickness of each stripe */
//     background-color: #e60000; /* Red color */
//     margin: 0 2px;
//     transform: skewX(-20deg); /* Diagonal angle */
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 38px;
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
//   font-size: 18px;
//   margin-bottom: 50px;
//   color: #e0e0e0; /* Lighter white for subtitle */

//   @media (max-width: 768px) {
//     font-size: 16px;
//     margin-bottom: 40px;
//   }
// `;

// const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Responsive grid */
//   gap: 20px; /* Space between cards */
//   justify-items: center; /* Center cards in their grid cells */
// //   max-width: 1200px; /* Max width for the grid */
//   margin: 0 auto; /* Center the grid */

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr; /* Stack cards on smaller screens */
//   }
// `;


// const LearnMoreButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   background-color: #e60000; /* Red button */
//   color: #ffffff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   text-decoration: none;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// margin-top:50px;

//   &:hover {
//     background-color: #cc0000; /* Darker red on hover */
//   }

//   @media (max-width: 480px) {
//     width: calc(100% - 50px); /* Full width minus padding */
//     margin-left: 25px;
//     margin-right: 25px;
//     padding: 12px 20px;
//   }
// `;

// // React Component
// const PopularToursSection = () => {
//   // Define your tour data
//   const tours = [
//     {
//       id: 1,
//       imageSrc: tour1, // Corresponds to image_cc13ee.png
//       title: 'SUMMER IN DUBAI & SEYCHELLES',
//       location: 'DUBAI & SEYCHELLES',
//       duration: '8 Days & 7 Night',
//       price: '₦2,999,999',
//       dateRange: '6th – 14th August 2025',
//       learnMoreLink: '#',
//     },
//     {
//       id: 2,
//       imageSrc: tour1, // Placeholder for Doha image
//       title: 'SUMMER DOHA',
//       location: 'DOHA, QATAR',
//       duration: '5 Days & 4 Night',
//       price: '₦3,210,608',
//       dateRange: '15th - 21st August 2025',
//       learnMoreLink: '#',
//     },
//     {
//       id: 3,
//       imageSrc: tour1, // Placeholder for London image
//       title: 'SUMMER LONDON',
//       location: 'LONDON, UK',
//       duration: '7 Days & 6 Night',
//       price: '₦2,500,000',
//       dateRange: '23rd to 28th August 2025',
//       learnMoreLink: '#',
//     },
//   ];

//   return (
//     <PopularToursSectionContainer>
//       <SectionHeaderStripes>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </SectionHeaderStripes>
//       <SectionTitle>Popular Tours</SectionTitle>
//       <SectionSubtitle>Choose an attractive tour package.</SectionSubtitle>

//       <CardsGrid>
//         {tours.map((tour) => (
//           <SummerHolidayCard
//             key={tour.id}
//             imageSrc={tour.imageSrc}
//             title={tour.title}
//             location={tour.location}
//             duration={tour.duration}
//             price={tour.price}
//             dateRange={tour.dateRange}
//             learnMoreLink={tour.learnMoreLink}
//           />
//         ))}
//       </CardsGrid>
//          <LearnMoreButton>
//         SEE ALL TOURS <i className="fas fa-angle-double-right"></i> {/* Font Awesome double angle right */}
//       </LearnMoreButton>
//     </PopularToursSectionContainer>
//   );
// };

// export default PopularToursSection;





import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import SummerHolidayCard from './SummerHolidayCard'; // Make sure this path is correct
import tour1 from '../Images2/harva Dubai.jpg'
import tour2 from '../Images2/harva Doha.jpg'
import tour3 from '../Images2/harva London.jpg'
import { Navigate, useNavigate } from 'react-router-dom';
import { holidayPackages } from './HolidayPackagesArray';


// Keyframe for stripes animation (slide in from left)
const slideInStripes = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px) skewX(-20deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) skewX(-20deg);
  }
`;

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

// Styled Components for the section
const PopularToursSectionContainer = styled.section`
  background-color: #0d286d; /* Dark blue background */
  padding: 80px 40px;
  font-family: Arial, sans-serif;
  text-align: center;
  color: #ffffff; /* White text for headings */

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionHeaderStripes = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  span {
    display: block;
    width: 25px; /* Length of each stripe */
    height: 3px; /* Thickness of each stripe */
    background-color: #e60000; /* Red color */
    margin: 0 2px;
    transform: skewX(-20deg); /* Diagonal angle */
    opacity: 0; /* Start hidden for animation */
    ${props => props.$isVisible && css`
      animation: ${slideInStripes} 0.5s ease-out forwards;
    `}

    &:nth-child(2) {
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      transition-delay: 0.2s;
    }
    &:nth-child(4) {
      transition-delay: 0.3s;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 10px;
  font-weight: bold;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.4s; /* Stagger animation */

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
  font-size: 18px;
  margin-bottom: 50px;
  color: #e0e0e0; /* Lighter white for subtitle */
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.5s; /* Stagger animation */

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between cards */
  justify-items: center; /* Center cards in their grid cells */
  margin: 0 auto; /* Center the grid */
  /* The grid itself won't animate, its children (cards) will */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack cards on smaller screens */
  }
`;


const LearnMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #e60000; /* Red button */
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top:50px;
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.8s; /* Stagger animation */


  &:hover {
    background-color: #cc0000; /* Darker red on hover */
  }

  @media (max-width: 480px) {
    width: calc(100% - 50px); /* Full width minus padding */
    margin-left: 25px;
    margin-right: 25px;
    padding: 12px 20px;
  }
`;

// React Component
const PopularToursSection = () => {
const navigate = useNavigate();



  // Define your tour data
  // const tours = [
  //   {
  //     id: 1,
  //     imageSrc: tour1, // Corresponds to image_cc13ee.png
  //     title: 'SUMMER IN DUBAI & SEYCHELLES',
  //     location: 'DUBAI & SEYCHELLES',
  //     duration: '3 Nights Dubai & 4 Nights Seychelles',
  //     price: '₦2,999,999',
  //     dateRange: '6th – 14th August 2025',
  //     learnMoreLink: '#',
  //   },
  //   {
  //     id: 2,
  //     imageSrc: tour2, // Placeholder for Doha image
  //     title: 'SUMMER DOHA',
  //     location: 'DOHA, QATAR',
  //     duration: '7 Days & 6 Nights',
  //     price: '₦3,210,608',
  //     dateRange: '15th - 21st August 2025',
  //     learnMoreLink: '#',
  //   },
  //   {
  //     id: 3,
  //     imageSrc: tour3, // Placeholder for London image
  //     title: 'SUMMER LONDON',
  //     location: 'LONDON, UK',
  //     duration: '5 Nights Hotel stay with breakfast',
  //     price: '₦2,500,000',
  //     dateRange: '23rd to 28th August 2025',
  //     learnMoreLink: '#',
  //   },
  // ];

  // Refs for elements to observe
  const sectionRef = useRef(null);
  const headerStripesRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const sectionSubtitleRef = useRef(null);
  const cardsGridRef = useRef(null); // Ref for the grid container
  const learnMoreButtonRef = useRef(null);
  const cardRefs = useRef([]); // Array to hold refs for each card

  // State to control visibility of each element
  const [isHeaderStripesVisible, setIsHeaderStripesVisible] = useState(false);
  const [isSectionTitleVisible, setIsSectionTitleVisible] = useState(false);
  const [isSectionSubtitleVisible, setIsSectionSubtitleVisible] = useState(false);
  const [areCardsVisible, setAreCardsVisible] = useState(holidayPackages.map(() => false));
  const [isLearnMoreButtonVisible, setIsLearnMoreButtonVisible] = useState(false);


  useEffect(() => {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === headerStripesRef.current) {
          setIsHeaderStripesVisible(entry.isIntersecting);
        } else if (entry.target === sectionTitleRef.current) {
          setIsSectionTitleVisible(entry.isIntersecting);
        } else if (entry.target === sectionSubtitleRef.current) {
          setIsSectionSubtitleVisible(entry.isIntersecting);
        } else if (entry.target === learnMoreButtonRef.current) {
          setIsLearnMoreButtonVisible(entry.isIntersecting);
        } else {
          // Check for individual card elements
          cardRefs.current.forEach((ref, index) => {
            if (entry.target === ref) {
              setAreCardsVisible(prevState => {
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
    if (headerStripesRef.current) observer.observe(headerStripesRef.current);
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
    if (sectionSubtitleRef.current) observer.observe(sectionSubtitleRef.current);
    if (learnMoreButtonRef.current) observer.observe(learnMoreButtonRef.current);
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headerStripesRef.current) observer.unobserve(headerStripesRef.current);
      if (sectionTitleRef.current) observer.unobserve(sectionTitleRef.current);
      if (sectionSubtitleRef.current) observer.unobserve(sectionSubtitleRef.current);
      if (learnMoreButtonRef.current) observer.unobserve(learnMoreButtonRef.current);
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array means this effect runs once after initial render


  return (
    <PopularToursSectionContainer ref={sectionRef}>
      <SectionHeaderStripes ref={headerStripesRef} $isVisible={isHeaderStripesVisible}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </SectionHeaderStripes>
      <SectionTitle ref={sectionTitleRef} $isVisible={isSectionTitleVisible}>Popular Tours</SectionTitle>
      <SectionSubtitle ref={sectionSubtitleRef} $isVisible={isSectionSubtitleVisible}>Choose an attractive tour package.</SectionSubtitle>

      <CardsGrid ref={cardsGridRef}>
        {holidayPackages.slice(0,3).map((tour, index) => (
          <SummerHolidayCard
            key={tour.id}
            imageSrc={tour.image}
            title={tour.title}
            location={tour.location}
            duration={tour.duration}
            price={tour.price}
            dateRange={tour.dateRange}
            learnMoreLink={`/holidaydetailspage/${tour.id}`}
            ref={el => cardRefs.current[index] = el} // Attach ref to each card
            $isVisible={areCardsVisible[index]} // Pass visibility prop
            style={{ transitionDelay: `${0.6 + index * 0.15}s` }} // Stagger card animations
          />
        ))}
      </CardsGrid>
      <LearnMoreButton ref={learnMoreButtonRef} $isVisible={isLearnMoreButtonVisible} onClick={()=>navigate('/plannedpackages')}>
        SEE ALL TOURS <i className="fas fa-angle-double-right"></i>
      </LearnMoreButton>
    </PopularToursSectionContainer>
  );
};

export default PopularToursSection;