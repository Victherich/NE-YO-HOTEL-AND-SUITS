
// import React from 'react';
// import styled from 'styled-components';
// import ns from '../Images/ns.png'

// // Styled Components
// const NewsletterSection = styled.section`
//   position: relative;
//   width: 100%;
//   height: 300px; /* Adjust height as needed */
//   background-image: url(${ns}); /* Replace with the actual path to image_c0c5c9.jpg */
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: #ffffff; /* White text for titles */
//   font-family: Arial, sans-serif;
//   overflow: hidden; /* Ensure content stays within bounds */

//   @media (max-width: 1024px) {
//     height: 280px;
//   }

//   @media (max-width: 768px) {
//     height: 250px;
//     padding: 0 20px; /* Add horizontal padding */
//   }

//   @media (max-width: 480px) {
//     height: 220px;
//     padding: 0 15px;
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.3); /* Darker overlay for text readability */
//   z-index: 0; /* Behind content */
// `;

// const ContentWrapper = styled.div`
//   position: relative;
//   z-index: 1; /* Above overlay */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

// const SectionTitle = styled.h2`
//   font-size: 38px;
//   margin-bottom: 10px;
//   font-weight: bold;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Text shadow for readability */

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

// const Subtitle = styled.p`
//   font-size: 18px;
//   margin-bottom: 30px;
//   text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Text shadow for readability */

//   @media (max-width: 1024px) {
//     font-size: 16px;
//   }
//   @media (max-width: 768px) {
//     font-size: 15px;
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   gap: 15px;
//   justify-content: center;
//   width: 100%;
//   max-width: 700px; /* Limit form width */

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 10px;
//     max-width: 90%;
//   }
// `;

// const Input = styled.input`
//   padding: 15px 20px;
//   border: none;
//   border-radius: 50px;
//   font-size: 16px;
//   color: #333333;
//   flex: 1; /* Allows inputs to grow */
//   min-width: 180px; /* Minimum width for inputs */

//   &::placeholder {
//     color: #999999;
//   }

//   &:focus {
//     outline: none;
//     box-shadow: 0 0 0 3px rgba(13, 40, 109, 0.4); /* Focus glow with primary color */
//   }

//   @media (max-width: 768px) {
//     width: 100%; /* Full width on smaller screens */
//     min-width: unset;
//   }
// `;

// const SubscribeButton = styled.button`
//   background-color: #0d286d; /* Dark blue button */
//   color: #ffffff;
//   padding: 15px 30px;
//   border: none;
//   border-radius: 50px;
//   font-size: 18px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #081a4d; /* Slightly darker blue on hover */
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     font-size: 16px;
//     padding: 12px 20px;
//   }
// `;

// // React Component
// const Newsletter = () => {
//   return (
//     <NewsletterSection>
//       <Overlay />
//       <ContentWrapper>
//         <SectionTitle>Subscribe To Newsletters</SectionTitle>
//         <Subtitle>Sign up to our newsletter to get special updates.</Subtitle>
//         <Form>
//           <Input type="text" placeholder="First Name" />
//           <Input type="email" placeholder="Email Address" />
//           <SubscribeButton type="submit">Subscribe</SubscribeButton>
//         </Form>
//       </ContentWrapper>
//     </NewsletterSection>
//   );
// };

// export default Newsletter;




import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ns from '../Images/ns.png'
import Swal from 'sweetalert2';

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

// Styled Components
const NewsletterSection = styled.section`
  position: relative;
  width: 100%;
  height: 300px; /* Adjust height as needed */
  background-image: url(${ns}); /* Replace with the actual path to image_c0c5c9.jpg */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff; /* White text for titles */
  font-family: Arial, sans-serif;
  overflow: hidden; /* Ensure content stays within bounds */

  @media (max-width: 1024px) {
    // height: 280px;
  }

  @media (max-width: 768px) {
    // height: 250px;
    padding: 0 20px; /* Add horizontal padding */
  }

  @media (max-width: 480px) {
    // height: 220px;
    padding: 0 15px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Darker overlay for text readability */
  z-index: 0; /* Behind content */
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1; /* Above overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 10px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Text shadow for readability */
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

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Text shadow for readability */
  ${AnimatedOnScroll} /* Apply scroll animation */
  transition-delay: 0.2s; /* Stagger animation */


  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
  max-width: 700px; /* Limit form width */
  /* The form itself won't animate as a whole, its children will */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    max-width: 90%;
  }
`;

const Input = styled.input`
  padding: 15px 20px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  color: #333333;
  flex: 1; /* Allows inputs to grow */
  min-width: 180px; /* Minimum width for inputs */
  ${AnimatedOnScroll} /* Apply scroll animation */

  &::placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(13, 40, 109, 0.4); /* Focus glow with primary color */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    min-width: unset;
  }
`;

const SubscribeButton = styled.button`
  background-color: #0d286d; /* Dark blue button */
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${AnimatedOnScroll} /* Apply scroll animation */


  &:hover {
    background-color: #081a4d; /* Slightly darker blue on hover */
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 12px 20px;
  }
`;

// // React Component
// const Newsletter = () => {
//   // Refs for elements to observe
//   const newsletterSectionRef = useRef(null); // Ref for the entire section
//   const sectionTitleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const firstNameInputRef = useRef(null);
//   const emailInputRef = useRef(null);
//   const subscribeButtonRef = useRef(null);

//   // State to control visibility of each element
//   const [isSectionTitleVisible, setIsSectionTitleVisible] = useState(false);
//   const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
//   const [isFirstNameInputVisible, setIsFirstNameInputVisible] = useState(false);
//   const [isEmailInputVisible, setIsEmailInputVisible] = useState(false);
//   const [isSubscribeButtonVisible, setIsSubscribeButtonVisible] = useState(false);

//   useEffect(() => {
//     const observerOptions = {
//       root: null, // relative to the viewport
//       rootMargin: '0px',
//       threshold: 0.3, // Trigger when 30% of the element is visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.target === sectionTitleRef.current) {
//           setIsSectionTitleVisible(entry.isIntersecting);
//         } else if (entry.target === subtitleRef.current) {
//           setIsSubtitleVisible(entry.isIntersecting);
//         } else if (entry.target === firstNameInputRef.current) {
//           setIsFirstNameInputVisible(entry.isIntersecting);
//         } else if (entry.target === emailInputRef.current) {
//           setIsEmailInputVisible(entry.isIntersecting);
//         } else if (entry.target === subscribeButtonRef.current) {
//           setIsSubscribeButtonVisible(entry.isIntersecting);
//         }
//       });
//     }, observerOptions);

//     // Observe all relevant elements
//     // We'll observe the main section and then its children for staggered animations
//     if (newsletterSectionRef.current) observer.observe(newsletterSectionRef.current);
//     if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
//     if (subtitleRef.current) observer.observe(subtitleRef.current);
//     if (firstNameInputRef.current) observer.observe(firstNameInputRef.current);
//     if (emailInputRef.current) observer.observe(emailInputRef.current);
//     if (subscribeButtonRef.current) observer.observe(subscribeButtonRef.current);


//     // Cleanup observer on component unmount
//     return () => {
//       if (newsletterSectionRef.current) observer.unobserve(newsletterSectionRef.current);
//       if (sectionTitleRef.current) observer.unobserve(sectionTitleRef.current);
//       if (subtitleRef.current) observer.unobserve(subtitleRef.current);
//       if (firstNameInputRef.current) observer.unobserve(firstNameInputRef.current);
//       if (emailInputRef.current) observer.unobserve(emailInputRef.current);
//       if (subscribeButtonRef.current) observer.unobserve(subscribeButtonRef.current);
//     };
//   }, []); // Empty dependency array means this effect runs once after initial render

//   return (
//     <NewsletterSection ref={newsletterSectionRef}>
//       <Overlay />
//       <ContentWrapper>
//         <SectionTitle ref={sectionTitleRef} $isVisible={isSectionTitleVisible}>
//           Subscribe To Newsletters
//         </SectionTitle>
//         <Subtitle ref={subtitleRef} $isVisible={isSubtitleVisible}>
//           Sign up to our newsletter to get special updates.
//         </Subtitle>
//         <Form>
//           {/* Apply transition-delay directly via style prop for input staggering */}
//           <Input 
//             type="text" 
//             placeholder="First Name" 
//             ref={firstNameInputRef} 
//             $isVisible={isFirstNameInputVisible} 
//             style={{ transitionDelay: '0.3s' }} 
//           />
//           <Input 
//             type="email" 
//             placeholder="Email Address" 
//             ref={emailInputRef} 
//             $isVisible={isEmailInputVisible} 
//             style={{ transitionDelay: '0.4s' }} 
//           />
//           <SubscribeButton 
//             type="submit" 
//             ref={subscribeButtonRef} 
//             $isVisible={isSubscribeButtonVisible} 
//             style={{ transitionDelay: '0.5s' }} 
//           >
//             Subscribe
//           </SubscribeButton>
//         </Form>
//       </ContentWrapper>
//     </NewsletterSection>
//   );
// };

// export default Newsletter;





const Newsletter = () => {
  const newsletterSectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const firstNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const subscribeButtonRef = useRef(null);

  const [isSectionTitleVisible, setIsSectionTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isFirstNameInputVisible, setIsFirstNameInputVisible] = useState(false);
  const [isEmailInputVisible, setIsEmailInputVisible] = useState(false);
  const [isSubscribeButtonVisible, setIsSubscribeButtonVisible] = useState(false);

  const [formData, setFormData] = useState({ firstName: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Subscribing...',
      text: 'Please wait while we add you to our newsletter.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch('https://harvannatravelsandtour.com/api/newsletter_endpoint.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Subscribed!',
          text: result.message,
        });
        setFormData({ firstName: '', email: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: result.error,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Unable to complete your subscription. Please try again later.',
      });
    }
  };

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionTitleRef.current) {
          setIsSectionTitleVisible(entry.isIntersecting);
        } else if (entry.target === subtitleRef.current) {
          setIsSubtitleVisible(entry.isIntersecting);
        } else if (entry.target === firstNameInputRef.current) {
          setIsFirstNameInputVisible(entry.isIntersecting);
        } else if (entry.target === emailInputRef.current) {
          setIsEmailInputVisible(entry.isIntersecting);
        } else if (entry.target === subscribeButtonRef.current) {
          setIsSubscribeButtonVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    if (newsletterSectionRef.current) observer.observe(newsletterSectionRef.current);
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (firstNameInputRef.current) observer.observe(firstNameInputRef.current);
    if (emailInputRef.current) observer.observe(emailInputRef.current);
    if (subscribeButtonRef.current) observer.observe(subscribeButtonRef.current);

    return () => {
      if (newsletterSectionRef.current) observer.unobserve(newsletterSectionRef.current);
      if (sectionTitleRef.current) observer.unobserve(sectionTitleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (firstNameInputRef.current) observer.unobserve(firstNameInputRef.current);
      if (emailInputRef.current) observer.unobserve(emailInputRef.current);
      if (subscribeButtonRef.current) observer.unobserve(subscribeButtonRef.current);
    };
  }, []);

  return (
    <NewsletterSection ref={newsletterSectionRef}>
      <Overlay />
      <ContentWrapper>
        <SectionTitle ref={sectionTitleRef} $isVisible={isSectionTitleVisible}>
          Subscribe To Newsletters
        </SectionTitle>
        <Subtitle ref={subtitleRef} $isVisible={isSubtitleVisible}>
          Sign up to our newsletter to get special updates.
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            ref={firstNameInputRef}
            $isVisible={isFirstNameInputVisible}
            style={{ transitionDelay: '0.3s' }}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            ref={emailInputRef}
            $isVisible={isEmailInputVisible}
            style={{ transitionDelay: '0.4s' }}
            required
          />
          <SubscribeButton
            type="submit"
            ref={subscribeButtonRef}
            $isVisible={isSubscribeButtonVisible}
            style={{ transitionDelay: '0.5s' }}
          >
            Subscribe
          </SubscribeButton>
        </Form>
      </ContentWrapper>
    </NewsletterSection>
  );
};

export default Newsletter;
