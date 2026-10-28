
// import React from 'react';
// import styled from 'styled-components';
// import s1 from "../Images/s1.png"
// import s2 from "../Images/s2.png"
// import s3 from "../Images/s3.png"
// import s4 from "../Images/s4.png"
// import s5 from "../Images/s5.png"
// import s6 from "../Images/s6.png"

// // --- Styled Components for the "What We Offer" Section ---
// const WhatWeOfferSection = styled.section`
//   padding: 80px 40px;
//   background-color: #ffffff; /* White background */
//   font-family: Arial, sans-serif;
//   text-align: center;
//   color: #333333;

//   @media (max-width: 768px) {
//     padding: 60px 20px;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 38px;
//   margin-bottom: 50px;
//   font-weight: bold;
//   color: #333333;

//   @media (max-width: 1024px) {
//     font-size: 32px;
//     margin-bottom: 40px;
//   }
//   @media (max-width: 768px) {
//     font-size: 28px;
//     margin-bottom: 30px;
//   }
//   @media (max-width: 480px) {
//     font-size: 24px;
//   }
// `;

// const ServicesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid for cards */
//   gap: 30px; /* Space between cards */
//   max-width: 1200px; /* Max width for the grid */
//   margin: 0 auto; /* Center the grid */

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr; /* Stack cards on smaller screens */
//   }
// `;

// const ServiceCard = styled.div`
//   background-color: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
//   padding: 30px;
//   display: flex;
// //   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   gap:10px;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
//   }
// `;

// const IconCircle = styled.div`
//   width: 30%;
//   height: 90px;
//   border-radius: 50%;
//   background-color: #f0f8ff; /* Light blue background for icon circle */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
//   overflow: hidden; /* Ensures image fits within the circle */
//   border: 1px solid #e0e0e0; /* Subtle border */
// `;

// const ServiceImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover; /* Cover the circle area */
//   border-radius: 50%; /* Make image round inside circle */
// `;

// const Div = styled.div`
//     display:flex;
//     flex-direction:column;
//     width:60%;
//     text-align:left;
// `

// const ServiceTitle = styled.h3`
//   font-size:1rem;
//   color: #0d286d; /* Dark blue title */
//   margin-bottom: 10px;
//   font-weight: bold;
// `;

// const ServiceDescription = styled.p`
//   font-size:0.8rem;
//   color: #555555;
//   line-height: 1.6;
// `;

// // --- React Component: WhatWeOffer ---
// const WhatWeOffer = () => {
//   const services = [
//     {
//       id: 1,
//       image: s1, // Visa Application image
//       title: 'Visa Application',
//       description: 'Harvanna Travels and Tour Ltd agency helps you with an easy visa processing with an affordable price.',
//     },
//     {
//       id: 2,
//       image: s2, // Flight Reservation image
//       title: 'Flight Reservation',
//       description: 'Harvanna Travels and Tour Ltd agency offers a cheap flight ticket and a reliable airline to any country you want to travel to.',
//     },
//     {
//       id: 3,
//       image: s3, // Hotel Reservation image
//       title: 'Hotel Reservation',
//       description: 'Harvanna Travels and Tour Ltd agency can get you one of the best hotels with good security, conducive environment and an affordable price in any country you want.',
//     },
//     {
//       id: 4,
//       image: s4, // Vacation Packages image
//       title: 'Vacation Packages',
//       description: 'Harvanna Travels and Tour Ltd agency can organize a vacation package for you in any country of your choice at a cheap.',
//     },
//     {
//       id: 5,
//       image: s5, // Hotel Pickup image
//       title: 'Hotel Pickup',
//       description: 'Harvanna Travels and Tour Ltd agency can arrange a standard pickup with a competent driver to come pick you up at any hotel you are.',
//     },
//     {
//       id: 6,
//       image: s6, // Hotel Reservation image (repeated, assuming different visual or emphasis)
//       title: 'Hotel Reservation',
//       description: 'Harvanna Travels and Tour Ltd agency can get you an accommodation of your choice in a conducive and cool environment with a guaranteed full security service.',
//     },
//   ];

//   return (
//     <WhatWeOfferSection>
//       <SectionTitle>What we offer</SectionTitle>
//       <ServicesGrid>
//         {services.map((service) => (
//           <ServiceCard key={service.id}>
//             <IconCircle>
//               <ServiceImage src={service.image} alt={service.title} />
//             </IconCircle>
//          <Div>
//                <ServiceTitle>{service.title}</ServiceTitle>
//             <ServiceDescription>{service.description}</ServiceDescription>
//          </Div>
//           </ServiceCard>
//         ))}
//       </ServicesGrid>
//     </WhatWeOfferSection>
//   );
// };

// export default WhatWeOffer;




import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { Navigate, useNavigate } from 'react-router-dom';

// --- Styled Components ---
const ServicesContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 80px 50px;
  max-width: 1200px;
  margin: auto;
  color: #34495e;
  line-height: 1.6;

  @media (max-width: 767px) {
    padding: 60px 20px;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: #00509d;
    text-align: center;
    margin-bottom: 20px;
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    color: #00509d;
    margin-top: 40px;
    margin-bottom: 20px;
    border-bottom: 3px solid #f7c400;
    padding-bottom: 10px;
  }

  h3 {
    font-size: clamp(1.4rem, 3vw, 2rem);
    color: #1a73e8;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #555;
  }

  ul {
    padding-left: 20px;
    list-style-type: disc;
    margin-bottom: 20px;
  }

  li {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #555;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 60px;
  padding: 20px;
  border-left: 5px solid #00509d;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  button{
    padding:10px;
    cursor:pointer;
    background:blue;
    color:white;
    border:none;
    border-radius:5px;

    &:hover{
    background:rgba(0,0,255,0.5);
    }
  }
`;

const ContentSubSection = styled.div`
  margin-top: 25px;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const ExpressEntryCategories = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;

  li {
    background-color: #e6f0ff;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #1a73e8;
    color: #00509d;
    font-weight: 500;
  }
`;

const TeerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 0.9rem;

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #00509d;
    color: white;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    display: block;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const DrawTable = styled(TeerTable)``;

const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 20px;

  li {
    background-color: #f0f4f8;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    border-left: 4px solid #1a73e8;
  }
`;

const BoldText = styled.span`
  font-weight: 600;
  color: #00509d;
`;

const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <ServicesContainer>
      <Fade triggerOnce>
        <h1>Our Services</h1>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>1. Immigration Consultations</h2>
          <p>Do you have that burning immigration question or need clarification on your application or require honest legal advice on your immigration matter?</p>
          <p>Do you feel confused by information overload and you don’t know which immigration program suites you and your family needs? Look no further. We are here to offer immigration consultation sessions.</p>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>2. Permanent Residence Applications</h2>
          <p>Canadian immigration is purely on merit and Canada has over 50 immigration programs. We help you navigate and identify the program you are suited for, the documentation required, the processes involved, and even apply for you. Canada is looking to admit 1.14 million permanent residents in 2025-2027. Please do not be left out.</p>
          <p>If you think you qualify for any of the below programs, please book a consultation to begin your application process. The first step in our process is an initial consultation where we determine your eligibility, discuss requirements and application process.</p>
          
          <h3>1. Express Entry Programs</h3>
          <ContentSubSection>
            <p>Types of Express Entry</p>
            <ul>
              <li>General Express Entry – All occupations except those under 6 categories below.</li>
              <li>Categories Based Express Entry</li>
            </ul>
            <p>Current categories:</p>
            <ExpressEntryCategories>
              <li>French-language proficiency</li>
              <li>Healthcare occupations</li>
              <li>Science, Technology, Engineering and Math (STEM) occupations</li>
              <li>Trade occupations</li>
              <li>Transport occupations</li>
              <li>Agriculture and agri-food occupations</li>
            </ExpressEntryCategories>
          </ContentSubSection>

          <h3>Classes processed through Express Entry</h3>
          <ContentSubSection>
            <h4>a. Federal Skilled Worker program</h4>
            <p>This program is for Young Skilled Professionals with a minimum of one year paid skilled work experience within the last 10 years under skill categories TEER 0, 1, 2 or 3 of the 2021 National Occupational Classification (NOC). Language (English or French) proficiency of CLB /NCLC 7 and at least a college diploma / degree.</p>
            <TeerTable>
              <thead>
                <tr>
                  <th>TEER</th>
                  <th>Occupation Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TEER 0</td>
                  <td>Management occupations</td>
                </tr>
                <tr>
                  <td>TEER 1</td>
                  <td>Occupations that usually require a university degree</td>
                </tr>
                <tr>
                  <td>TEER 2</td>
                  <td>Occupations that usually require<br/>- a college diploma<br/>- apprenticeship training of 2 or more years, or<br/>- supervisory occupations</td>
                </tr>
                <tr>
                  <td>TEER 3</td>
                  <td>Occupations that usually require<br/>- a college diploma<br/>- apprenticeship training of 2 or more years, or<br/>- more than 6 months of on-the-job training</td>
                </tr>
              </tbody>
            </TeerTable>
          </ContentSubSection>

          <ContentSubSection>
            <h4>b. Federal Skilled Trades program</h4>
            <p>This program is for skilled workers who want to become permanent residents based on being qualified in a skilled trade. Applicants are required to either have a valid job offer from a Canadian employer for at least 1 year OR have a Certificate of Qualification from a provincial body, Show English or French language proficiency score of CLB or NCLC 4 /5 or its equivalency and; have at least 2 years of work experience in the last 5 before applying and be able to demonstrate skills and experience in your trade.</p>
            <p>Below is a list of the eligible trades under the National Occupational Classification (NOC):</p>
            <ListContainer>
              <li><strong>Major groups:</strong> 72 – technical trades and transportation officers and controllers excluding Sub-Major Group 726, transportation officers and controllers,</li>
              <li>73 – general trades</li>
              <li>82 – supervisors in natural resources, agriculture and related production</li>
              <li>83 – occupations in natural resources and related production</li>
              <li>92 – processing, manufacturing and utilities supervisors and central control operators</li>
              <li>93 – central control and process operators and aircraft assembly assemblers and inspectors, excluding Sub-Major Group 932, aircraft assemblers and aircraft assembly inspectors</li>
              <li><strong>Minor groups:</strong></li>
              <li>6320 – cooks, butchers and baker</li>
              <li><strong>Unit Groups</strong></li>
              <li>62200 – chefs</li>
            </ListContainer>
          </ContentSubSection>

          <ContentSubSection>
            <h4>c. Canadian Experience Class (CEC)</h4>
            <p>This program is for skilled workers who have Canadian work experience or education and want to become permanent residents. Applicants in this category are required to have a minimum of one-year work experience in (NOC 2021) TEER Categories 0, 1, 2 or 3 and strong language abilities – CLB / NCLC 7 for NOC O/A and CLB / NCLC 5 for NOC B.</p>
          </ContentSubSection>
          
          <h3>Express Entry Draws</h3>
          <DrawTable>
            <thead>
              <tr>
                <th>Draw No.</th>
                <th>Dates</th>
                <th>Round Type</th>
                <th>Invitation Issues</th>
                <th>Minimum CRS Score</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>329</td><td>3rd Dec 2024</td><td>French Language Proficiency</td><td>800</td><td>466</td></tr>
              <tr><td>328</td><td>2nd Dec 2024</td><td>Provincial Nominee Program</td><td>676</td><td>705</td></tr>
              <tr><td>327</td><td>20-Nov-24</td><td>Healthcare Occupations</td><td>3000</td><td>463</td></tr>
              <tr><td>326</td><td>19-Nov-24</td><td>Canadian Experience Class</td><td>400</td><td>539</td></tr>
              <tr><td>325</td><td>18-Nov-24</td><td>Provincial Nominee Program</td><td>174</td><td>816</td></tr>
              <tr><td>324</td><td>15-Nov-24</td><td>French Language Proficiency</td><td>800</td><td>478</td></tr>
              <tr><td>323</td><td>13-Nov-24</td><td>Canadian Experience Class</td><td>400</td><td>547</td></tr>
              <tr><td>322</td><td>12-Nov-24</td><td>Provincial Nominee Program</td><td>733</td><td>812</td></tr>
              <tr><td>321</td><td>23-Oct-24</td><td>Trade Occupations</td><td>1800</td><td>433</td></tr>
              <tr><td>320</td><td>22-Oct-24</td><td>Canadian Experience Class</td><td>400</td><td>539</td></tr>
              <tr><td>319</td><td>21-Oct-24</td><td>Provincial Nominee Program</td><td>648</td><td>791</td></tr>
              <tr><td>318</td><td>10-Oct-24</td><td>French Language Proficiency</td><td>1000</td><td>444</td></tr>
              <tr><td>317</td><td>9-Oct-24</td><td>Canadian Experience Class</td><td>500</td><td>539</td></tr>
              <tr><td>316</td><td>7-Oct-24</td><td>Provincial Nominee Program</td><td>4000</td><td>509</td></tr>
            </tbody>
          </DrawTable>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>2. Family Class Applications and Sponsorships</h2>
          <p>Ask us how you (Canadian Citizen or Permanent resident) can sponsor your family or child or spouse to become permanent resident of Canada in a smooth stress-free way.</p>
          <ListContainer>
            <li>You as an eligible Canadian Citizen or permanent resident, you can sponsor your spouse, partner or conjugal partner or dependent children to become permanent residents of Canada.</li>
            <li>You can only sponsor relatives like a brother, sister, aunt or uncle in very specific situations. For example, you can sponsor an orphaned brother, sister, nephew, niece or grandchild.</li>
            <li>You may sponsor one relative, related by blood or adoption, of any age. If you don’t have a living relative you could sponsor anyone.</li>
            <li>You can also sponsor your parents or grandparents to become Canadian permanent residents.</li>
          </ListContainer>
          <p>The first step in our process is an initial consultation where we determine your eligibility, discuss requirements and application process.</p>
        </ContentSection>
      </Fade>
      
      <Fade triggerOnce>
        <ContentSection>
          <h2>3. Provincial Nomination Programs</h2>
          <p>Immigrate as a permanent resident in Canada to a province of your choice by being nominated by that Canadian province or territory.</p>
          <p>This program is for workers who have the skills, education and work experience required by a specific province to fill its’ labour needs and contribute to the economy of a specific province or territory. You must intend to live and settle in that province.</p>
          <p>Each province / territory will have its own immigration streams that target certain demographics, occupations and requirements. These streams target students, business people, skilled workers and semi-skilled workers.</p>
          <p>Getting a provincial nomination could boost your chances of immigrating through the express entry system by getting an additional 600 CRS points. If you do not meet the Express entry requirements, there are provincial nomination programs that are not linked to the express entry system.</p>
          <p>The first step in our process is an initial consultation where we determine your eligibility, discuss requirements and application process.</p>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>4. Business Immigration Programs</h2>
          <p>Canada welcomes successful business people who are seeking new opportunities and challenges. The Business Immigration Program is designed to encourage and facilitate the admission of these individuals. Both the federal and provincial/territorial governments welcome business immigrants and offer services to help immigrants start a business and settle in Canada.</p>
          <ListContainer>
            <li><strong>Start Up Visa:</strong> Immigrate by starting a business and creating jobs</li>
            <li><strong>Self Employed:</strong> Immigrate as a self-employed person in cultural or athletic activities.</li>
          </ListContainer>
        </ContentSection>
      </Fade>
      
      <Fade triggerOnce>
        <ContentSection>
          <h2>5. Atlantic Immigration Pilot Program</h2>
          <p>The pilot helps employers in Atlantic Canada hire foreign skilled workers who want to immigrate to Atlantic Canada and international graduates who want to stay in Atlantic Canada after they graduate. Atlantic Canada comprises of Nova Scotia, New Brunswick, Prince Edward Island and New Found land & Labrador.</p>
          <p>This program works best for skilled professionals who do not meet the requirements of Express entry maybe due to age or language skills.</p>
          <p>This program has 3 streams:</p>
          <ul>
            <li>Atlantic International Graduate Program</li>
            <li>Atlantic High-skilled Program</li>
            <li>Atlantic Intermediate-skilled Program</li>
          </ul>
          <p>Every job offer must be from a designated employer as defined by the provincial government of the Atlantic province where the candidate will be working.</p>
          <p>If you think you qualify for any of the below programs, please book a consultation to begin your application process. The first step in our process is an initial consultation where we determine your eligibility, discuss requirements and application process.</p>
        </ContentSection>
      </Fade>
      
      <Fade triggerOnce>
        <ContentSection>
          <h2>7. Agri Food Pilot</h2>
          <p>Immigrate by working in specific agri-food industries and occupations</p>
        </ContentSection>
      </Fade>
      
      <Fade triggerOnce>
        <ContentSection>
          <h2>8. New Caregiver Pilot</h2>
          <p>Immigrate by providing care for children, the elderly or individuals with medical needs. This new pilot program offers permanent residency upon arrival in Canada.</p>
          <p>Canada intends to admit over 15,000 caregivers as permanent residents in 2024-2026. Book a consultation today to start the application process.</p>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>Refugee & Humanitarian Applications</h2>
          <p>This program is for people who want to Immigrate to Canada as refugees or those interested to Sponsor a refugee in Canada.</p>
          <p>You can apply in Canada as a refugee if you fear persecution or if your life is in danger should you return to your home country. Asylum claimants face a rigorous process to determine whether or not they have a legitimate claim according to Canadian and international laws. We are here to help you determine the validity of your claim and help you file a claim according to the Refugee Protection Board’s rules and regulations.</p>
          <p>We can also help you appeal to the Immigration and Refugee Board about sponsorship, removal orders and residency obligation requirements</p>
          <ListContainer>
            <li>Convention Refugees</li>
            <li>People in need of protection</li>
            <li>Private refugee sponsorship</li>
            <li>Humanitarian and Compassionate Application</li>
          </ListContainer>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>Temporary Residence Applications</h2>
          <ContentSubSection>
            <h3>a. School Admissions and Student Permit Applications</h3>
            <h4>Study in Canada</h4>
            <p>Apply to study in Canada as an international student, extend your study permit and find out about working while you study or after you graduate.</p>
            <p>We help you find a Designated Learning Institution that caters for your own educational & future immigration needs, choose education programs, apply for post graduate work permits and apply for study permits and extensions. Apply to bring your family as an international student on an open work permit.</p>
            <h4>Study in UK</h4>
            <p>Your dream of studying in the UK is within reach, and we are here to help you make it happen. We help you find the perfect school and education programs tailored to your goals, assist with your study visa application and post-graduate work permit.</p>
          </ContentSubSection>

          <ContentSubSection>
            <h3>b. Supa Visas for Parents and Grand Parents</h3>
            <p>A super visa lets you visit your children or grandchildren for up to 5 years at a time. It’s a multi-entry visa that provides multiple entries for a period up to 10 years.</p>
            <p>If you want your parent to visit you in Canada for over 6 months, talk to us.</p>
          </ContentSubSection>

          <ContentSubSection>
            <h3>c. Visit Visas</h3>
            <p>Canada is a Favourite world tourist destination due to its unrivaled beauty, diversity and business opportunities. Talk to us if you need help looking for top Vacation destinations, Events and conferences in Canada, Tourist and Business Visa Applications.</p>
          </ContentSubSection>

          <ContentSubSection>
            <h3>d. Work Permit Applications & Extensions</h3>
            <p>If you already have job offer with a Canadian employer, talk to us to help you process your work permit.</p>
          </ContentSubSection>

          <ContentSubSection>
            <h3>e. Post- Graduation Work Permit Application</h3>
            <p>As an international graduate from a participating Canadian post-secondary institution, you can stay and work in Canada temporarily. We are here to help you apply for a Post-Graduation Work Permit (PGWP).</p>
          </ContentSubSection>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>PR Card Applications & Renewals</h2>
          <p>IRCC now has a PR Portal. Through this portal, you can declare you’re in Canada, you can confirm your address, you can submit a recent photo that will be used to make your PR card. IRCC can also give you access to your proof of permanent resident (PR) status.</p>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>Citizenship & Naturalization</h2>
          <ListContainer>
            <li>ETA applications</li>
            <li>GCMS notes / ATIP retrieval from IRCC and Reviews</li>
            <li>Visa Refusal Reviews</li>
            <li>Commissioner for oaths for and in Alberta</li>
            <li>Canadian Passport applications</li>
            <li>Kenyan Visa applications</li>
            <li>CELPIP and IETS exam preps</li>
            <li>Kenyan Police Check Applications</li>
          </ListContainer>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>PR Card Applications & Renewals</h2>
          <p>Immigrate, Integrate, Thrive, Inspire (Beyond Immigration Services)</p>
        </ContentSection>
      </Fade>

      <Fade triggerOnce>
        <ContentSection>
          <h2>Book A Consultation</h2>
          <p>If all of this seems confusing to you, don’t worry. We are here to walk with you through the entire process to give you personalized guidance through it all. Just book a consulting call with us to get started.</p>
        <button onClick={()=>navigate('/contactus')}>Book Now</button>
        </ContentSection>
      </Fade>
    </ServicesContainer>
  );
};

export default ServicesPage;