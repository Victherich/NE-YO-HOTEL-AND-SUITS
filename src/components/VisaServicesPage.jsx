
// // VisaServicesPage.js
// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { Fade } from 'react-awesome-reveal';
// // import { visaServices } from './visaServicesData';
// import { visaServices } from './VisaServicesData';
// import h1 from '../Images2/h1.jpg'



// // --- Styled Components for the Main Page ---
// const VisaServicesContainer = styled.div`
//   font-family: 'Poppins', sans-serif;
//   padding: 80px 50px;
//   max-width: 1400px;
//   margin: auto;
//   color: #34495e;

//   @media (max-width: 767px) {
//     padding: 60px 20px;
//   }
// `;


// const PageHeader = styled.div`
//   text-align: center;
//   margin-bottom: 60px;
//   padding: 100px 20px; /* Add padding to give space around the content */
//   min-height: 400px; /* Ensure the image has a visible area */
//   position: relative; /* Needed for the overlay */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   /* Background Image and Overlay */
//   background-image: url(${h1}); /* Replace with your desired image URL */
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   border-radius: 12px;
//   overflow: hidden;

//   /* Semi-transparent overlay to improve text readability */
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.4); /* Dark overlay */
//     z-index: 1;
//   }

//   /* Text styles, placed on top of the overlay */
//   h1, p {
//     color: #ffffff; /* Change text color to white for better contrast */
//     position: relative;
//     z-index: 2; /* Bring text to the front */
//   }

//   h1 {
//     font-size: clamp(2.5rem, 6vw, 4rem);
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 1.2rem;
//   }
// `;

// const VisaCardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//   gap: 30px;
//   justify-items: center;

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// // --- Styled Components for the Card ---
// const VisaCard = styled.div`
//   background-color: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
//   overflow: hidden;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   display: flex;
//   flex-direction: column;
//   max-width: 400px;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 250px;
//   object-fit: cover;
//   display: block;
// `;

// const CardContent = styled.div`
//   padding: 25px;
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
// `;

// const CardTitle = styled.h3`
//   font-size: 1.5rem;
//   color: #00509d;
//   margin-bottom: 10px;
// `;

// const CardSummary = styled.p`
//   font-size: 1rem;
//   color: #555;
//   margin-bottom: 20px;
// `;

// const CardFee = styled.div`
//   font-size: 1.2rem;
//   font-weight: 600;
//   color: #f7c400;
//   margin-bottom: 20px;
//   margin-top: auto; /* Pushes to the bottom */
// `;

// const ExploreButton = styled(Link)`
//   display: inline-block;
//   background-color: #00509d;
//   color: #fff;
//   padding: 12px 25px;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1a73e8;
//   }
// `;

// // --- The Main React Component ---
// const VisaServicesPage = () => {
//   return (
//     <VisaServicesContainer>
//       <Fade triggerOnce>
//         <PageHeader>
//           <h1>Visa Services</h1>
//           <p>Explore our wide range of visa application assistance services for destinations around the world.</p>
//         </PageHeader>
//       </Fade>
//       <VisaCardGrid>
//         {visaServices.map(service => (
//           <Fade key={service.id} triggerOnce>
//             <VisaCard>
//               <CardImage src={service.image} alt={service.title} />
//               <CardContent>
//                 <CardTitle>{service.title}</CardTitle>
//                 <CardSummary>{service.summary}</CardSummary>
//                 {service.details.fees.harvannaProcessing && (
//                   <CardFee>
//                     Harvanna Fee: {service.details.fees.harvannaProcessing.adult}
//                   </CardFee>
//                 )}
//                 <ExploreButton to={`/visa-services/${service.id}`}>
//                   Explore
//                 </ExploreButton>
//               </CardContent>
//             </VisaCard>
//           </Fade>
//         ))}
//       </VisaCardGrid>
//     </VisaServicesContainer>
//   );
// };

// export default VisaServicesPage;




// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { Fade } from 'react-awesome-reveal';
// import { visaServices } from './VisaServicesData';
// import h1 from '../Images2/h1.jpg';


// // --- Styled Components for the Main Page ---
// const VisaServicesContainer = styled.div`
//   font-family: 'Poppins', sans-serif;
//   padding: 80px 50px;
//   max-width: 1400px;
//   margin: auto;
//   color: #34495e;

//   @media (max-width: 767px) {
//     padding: 60px 20px;
//   }
// `;

// const PageHeader = styled.div`
//   text-align: center;
//   margin-bottom: 60px;
//   padding: 100px 20px;
//   min-height: 400px;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   background-image: url(${h1});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   border-radius: 12px;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.4);
//     z-index: 1;
//   }

//   h1, p {
//     color: #ffffff;
//     position: relative;
//     z-index: 2;
//   }

//   h1 {
//     font-size: clamp(2.5rem, 6vw, 4rem);
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 1.2rem;
//   }
// `;

// const VisaCardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//   gap: 30px;
//   justify-items: center;

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// // --- Styled Components for the Card ---
// const VisaCard = styled.div`
//   background-color: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
//   overflow: hidden;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   display: flex;
//   flex-direction: column;
//   max-width: 400px;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 250px;
//   object-fit: cover;
//   display: block;
// `;

// const CardContent = styled.div`
//   padding: 25px;
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
// `;

// const CardTitle = styled.h3`
//   font-size: 1.5rem;
//   color: #00509d;
//   margin-bottom: 10px;
// `;

// const CardSummary = styled.p`
//   font-size: 1rem;
//   color: #555;
//   margin-bottom: 20px;
// `;

// const CardFee = styled.div`
//   font-size: 1.2rem;
//   font-weight: 600;
//   color: #f7c400;
//   margin-bottom: 20px;
//   margin-top: auto;
// `;

// const ExploreButton = styled(Link)`
//   display: inline-block;
//   background-color: #00509d;
//   color: #fff;
//   padding: 12px 25px;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1a73e8;
//   }
// `;


// // --- The Main React Component ---
// const VisaServicesPage = () => {
//   return (
//     <VisaServicesContainer>
//       <Fade triggerOnce>
//         <PageHeader>
//           <h1>Visa Services</h1>
//           <p>Explore our wide range of visa application assistance services for destinations around the world.</p>
//         </PageHeader>
//       </Fade>
//       <VisaCardGrid>
//         {visaServices.map(service => (
//           <Fade key={service.id} triggerOnce>
//             <VisaCard>
//               <CardImage src={service.image} alt={service.title} />
//               <CardContent>
//                 <CardTitle>{service.title}</CardTitle>
//                 <CardSummary>{service.summary || "Click to view details about our visa application process, required documents, and fees."}</CardSummary>
                
//                 {/* Dynamically display the Harvanna processing fee if it exists */}
//                 {service.details.fees.harvannaProcessing && typeof service.details.fees.harvannaProcessing === 'object' && service.details.fees.harvannaProcessing.adult && (
//                     <CardFee>
//                         Harvanna Fee (Adult): {service.details.fees.harvannaProcessing.adult}
//                     </CardFee>
//                 )}

//                 <ExploreButton to={`/visa-services/${service.id}`}>
//                   Explore
//                 </ExploreButton>
//               </CardContent>
//             </VisaCard>
//           </Fade>
//         ))}
//       </VisaCardGrid>
//     </VisaServicesContainer>
//   );
// };

// export default VisaServicesPage;





import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { visaServices } from './VisaServicesData';
import h1 from '../Images2/h1.jpg';


// --- Styled Components for the Main Page ---
const VisaServicesContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 80px 50px;
  max-width: 1400px;
  margin: auto;
  color: #34495e;

  @media (max-width: 767px) {
    padding: 60px 20px;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding: 100px 20px;
  min-height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${h1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  h1, p {
    color: #ffffff;
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }
`;

const VisaCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// --- Styled Components for the Card ---
const VisaCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  max-width: 400px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #00509d;
  margin-bottom: 10px;
`;

const CardSummary = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

const CardFee = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #f7c400;
  margin-bottom: 20px;
  margin-top: auto;
`;

const ExploreButton = styled(Link)`
  display: inline-block;
  background-color: #00509d;
  color: #fff;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a73e8;
  }
`;


// --- The Main React Component ---
const VisaServicesPage = () => {
  return (
    <VisaServicesContainer>
      <Fade triggerOnce>
        <PageHeader>
          <h1>Visa Services</h1>
          <p>Explore our wide range of visa application assistance services for destinations around the world.</p>
        </PageHeader>
      </Fade>
      <VisaCardGrid>
        {visaServices.map(service => {
          let harvannaFee = null;
          
          if (service.details.fees.harvannaProcessing && typeof service.details.fees.harvannaProcessing === 'string') {
            harvannaFee = service.details.fees.harvannaProcessing;
          } else if (service.details.fees.harvannaProcessing && typeof service.details.fees.harvannaProcessing === 'object') {
            harvannaFee = service.details.fees.harvannaProcessing.adult;
          } else if (service.details.fees.onlineEVisa && service.details.fees.onlineEVisa.harvannaProcessing) {
            harvannaFee = service.details.fees.onlineEVisa.harvannaProcessing.adult;
          } else if (service.details.fees.physicalSubmission && service.details.fees.physicalSubmission.harvannaProcessing) {
            harvannaFee = service.details.fees.physicalSubmission.harvannaProcessing.adult;
          } else if (service.details.fees.franceNetherlands && service.details.fees.franceNetherlands.harvannaProcessing) {
            harvannaFee = service.details.fees.franceNetherlands.harvannaProcessing.adult;
          } else if (service.details.fees.spain && service.details.fees.spain.harvannaProcessing) {
            harvannaFee = service.details.fees.spain.harvannaProcessing.adult;
          } else if (service.details.fees.ukApplicants && service.details.fees.ukApplicants.processingFee) {
            harvannaFee = service.details.fees.ukApplicants.processingFee.adult;
          } else if (service.details.fees.usaApplicants && service.details.fees.usaApplicants.totalFee) {
            harvannaFee = service.details.fees.usaApplicants.totalFee.adult;
          }

          return (
            <Fade key={service.id} triggerOnce>
              <VisaCard>
                <CardImage src={service.image} alt={service.title} />
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardSummary>{service.summary || "Click to view details about our visa application process, required documents, and fees."}</CardSummary>
                  
                  {harvannaFee && (
                    <CardFee>
                      Harvanna Fee (Adult): {harvannaFee}
                    </CardFee>
                  )}

                  <ExploreButton to={`/visa-services/${service.id}`}>
                    Explore
                  </ExploreButton>
                </CardContent>
              </VisaCard>
            </Fade>
          );
        })}
      </VisaCardGrid>
    </VisaServicesContainer>
  );
};

export default VisaServicesPage;