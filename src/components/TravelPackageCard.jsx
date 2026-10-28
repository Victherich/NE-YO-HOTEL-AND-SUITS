

// import React from 'react';
// import styled from 'styled-components';

// // --- Styled Components for the Featured Package Card (based on image_dee2a6.png) ---
// const FeaturedCardContainer = styled.div`
//   background-color:rgba(0,0,255,0.1);
//   border-radius: 10px;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   display: flex; /* Arrange image and content horizontally */
//   max-width: 950px; /* Adjust max width as seen in the image */
//   margin: 30px auto; /* Center the card */
//   font-family: Arial, sans-serif;
//   padding:10px;

//   @media (max-width: 992px) {
//     flex-direction: column; /* Stack image and content on smaller screens */
//     max-width: 500px; /* Adjust max width for mobile */
//   }
// `;

// const ImageSection = styled.div`
//   flex: 0 0 45%; /* Image takes about 45% width */
//   position: relative;
// //   background-image: url(${props => props.$src});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// //   min-height: 450px; /* Fixed height for image section */
//   display: flex;
//   justify-content: flex-end; /* Push logo to top-right */
//   padding: 15px; /* Padding for the logo */
// width:40%;

// @media(max-width:768px){
//   width:100%;
// }
//   @media (max-width: 992px) {
//     flex: 0 0 auto; /* No fixed width when stacked */
//     // min-height: 350px; /* Adjust height for mobile */
//   }
//   @media (max-width: 576px) {
//     // min-height: 280px;
//   }

//   img{
//     width:100%;

//   }
// `;

// const ImageLogo = styled.img`
//   width: 90px; /* Size of the Harvanna Travels and Tour Ltd logo */
//   height: auto;
//   position: absolute; /* Position relative to ImageSection */
//   top: 15px;
//   right: 15px;
//   z-index: 2; /* Ensure it's above the image */

//   @media (max-width: 576px) {
//     width: 70px;
//   }
// `;

// const DetailsSection = styled.div`
//   flex: 1; /* Content takes remaining width */
//   padding: 30px 40px;
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   justify-content: flex-start; /* Space out content vertically */

//   @media (max-width: 992px) {
//     padding: 25px 30px;
//   }
//   @media (max-width: 576px) {
//     padding: 20px 25px;
//   }
// `;

// const PackageTitle = styled.h2`
//   font-size: 32px;
//   color: #0d286d; /* Dark blue */
//   margin-bottom: 10px;
//   font-weight: bold;

//   @media (max-width: 992px) {
//     font-size: 28px;
//   }
//   @media (max-width: 576px) {
//     font-size: 24px;
//   }
// `;

// const PackageDescription = styled.p`
//   font-size: 16px;
//   color: #555555;
//   margin-bottom: 15px;
//   line-height: 1.6;

//   @media (max-width: 576px) {
//     font-size: 15px;
//   }
// `;

// const StarRating = styled.div`
//   color: #daa520; /* Gold/yellow color for stars */
//   font-size: 18px;
//   margin-bottom: 15px;

//   i {
//     margin-right: 2px;
//   }
// `;

// const MetaRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 25px; /* Space between meta items */
//   margin-bottom: 25px; /* Space below meta info */

//   @media (max-width: 576px) {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 10px;
//   }
// `;

// const MetaItem = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 15px;
//   color: #555555;

//   i {
//     color: #e60000; /* Red icon color */
//     font-size: 16px;
//   }
// `;

// const PriceWrapper = styled.div`
//   border-left: 3px solid #f0f0f0; /* Light gray vertical line */
//   padding-left: 30px;
//   margin-left: 30px;
//   margin-bottom: 30px; /* Space before button */

//   @media (max-width: 992px) {
//     border-left: none;
//     padding-left: 0;
//     margin-left: 0;
//     border-top: 1px solid #f0f0f0; /* Horizontal line on small screens */
//     padding-top: 20px;
//     margin-top: 20px;
//   }
// `;

// const FromText = styled.span`
//   display: block;
//   font-size: 15px;
//   color: #777777;
//   margin-bottom: 5px;
// `;

// const PriceAmount = styled.span`
//   font-size: 36px;
//   font-weight: bold;
//   color: #e60000; /* Red price */

//   @media (max-width: 992px) {
//     font-size: 32px;
//   }
//   @media (max-width: 576px) {
//     font-size: 28px;
//   }
// `;

// const ExploreButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #0d286d; /* Dark blue button */
//   color: #ffffff;
//   padding: 12px 30px;
//   border-radius: 5px;
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 18px;
//   transition: background-color 0.3s ease;
//   cursor: pointer;
//   align-self: flex-start; /* Align button to the left */

//   &:hover {
//     background-color: #081a4d;
//   }

//   @media (max-width: 992px) {
//     align-self: center; /* Center button when stacked */
//   }
// `;


// // --- React Component: FeaturedPackageCard ---
// const TravelPackageCard = ({
//   image,
//   logo, // Path to Harvanna Travels and Tour Ltd logo
//   title,
//   description,
//   rating, // e.g., 5 for 5 stars
//   location,
//   duration,
//   price,
//   buttonText = 'Explore', // Default button text
//   buttonLink
// }) => {
//   // Function to format price with comma separator (as seen in image)
//   const formatPrice = (value) => {
//     // Ensuring it always has commas for thousands, and no decimals as per image
//     return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
//   };

//   const renderStars = (numStars) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <i key={i} className={i < numStars ? "fas fa-star" : "far fa-star"}></i>
//       );
//     }
//     return stars;
//   };

//   return (
//     <FeaturedCardContainer>
//       <ImageSection> {/* Use transient prop for styled-components */}
//         {logo && <ImageLogo src={logo} alt="Harvanna Travels and Tour Ltd Logo" />}
//         <img src={image} alt='bg'/>
//       </ImageSection>
//       <DetailsSection>
//         <div>
//           <PackageTitle>{title}</PackageTitle>
//           <PackageDescription>{description}</PackageDescription>
//           {rating && <StarRating>{renderStars(rating)}</StarRating>}
//           <MetaRow>
//             <MetaItem><i className="fas fa-map-marker-alt"></i> {location}</MetaItem>
//             <MetaItem><i className="far fa-clock"></i> {duration}</MetaItem>
//           </MetaRow>
//         </div>
//         <PriceWrapper>
//           <FromText>From:</FromText>
//           <PriceAmount>₦{formatPrice(price)}</PriceAmount>
//         </PriceWrapper>
//         <ExploreButton href={buttonLink} target="_blank" rel="noopener noreferrer">
//           {buttonText}
//         </ExploreButton>
//       </DetailsSection>
//     </FeaturedCardContainer>
//   );
// };

// export default TravelPackageCard;









import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// --- Styled Components for the Featured Package Card (based on image_dee2a6.png) ---
const FeaturedCardContainer = styled.div`
  background-color:rgba(0,0,255,0.1);
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex; /* Arrange image and content horizontally */
  max-width: 950px; /* Adjust max width as seen in the image */
  margin: 30px auto; /* Center the card */
  font-family: Arial, sans-serif;
  padding:10px;

  @media (max-width: 992px) {
    flex-direction: column; /* Stack image and content on smaller screens */
    max-width: 500px; /* Adjust max width for mobile */
  }
`;

const ImageSection = styled.div`
  flex: 0 0 45%; /* Image takes about 45% width */
  position: relative;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: flex-end; /* Push logo to top-right */
  padding: 15px; /* Padding for the logo */
width:40%;

@media(max-width:768px){
  width:100%;
}
  @media (max-width: 992px) {
    flex: 0 0 auto; /* No fixed width when stacked */
    
  }
  

  img{
    width:100%;

  }
`;

const ImageLogo = styled.img`
  width: 90px; /* Size of the Harvanna Travels and Tour Ltd logo */
  height: auto;
  position: absolute; /* Position relative to ImageSection */
  top: 15px;
  right: 15px;
  z-index: 2; /* Ensure it's above the image */

  @media (max-width: 576px) {
    width: 70px;
  }
`;

const DetailsSection = styled.div`
  flex: 1; /* Content takes remaining width */
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start; /* Space out content vertically */

  @media (max-width: 992px) {
    padding: 25px 30px;
  }
  @media (max-width: 576px) {
    padding: 20px 25px;
  }
`;

const PackageTitle = styled.h2`
  font-size: 32px;
  color: #0d286d; /* Dark blue */
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 992px) {
    font-size: 28px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const PackageDescription = styled.p`
  font-size: 16px;
  color: #555555;
  margin-bottom: 15px;
  line-height: 1.6;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

const StarRating = styled.div`
  color: #daa520; /* Gold/yellow color for stars */
  font-size: 18px;
  margin-bottom: 15px;

  i {
    margin-right: 2px;
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 25px; /* Space between meta items */
  margin-bottom: 25px; /* Space below meta info */

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #555555;

  i {
    color: #e60000; /* Red icon color */
    font-size: 16px;
  }
`;

const PriceWrapper = styled.div`
  border-left: 3px solid #f0f0f0; /* Light gray vertical line */
  padding-left: 30px;
  margin-left: 30px;
  margin-bottom: 30px; /* Space before button */

  @media (max-width: 992px) {
    border-left: none;
    padding-left: 0;
    margin-left: 0;
    border-top: 1px solid #f0f0f0; /* Horizontal line on small screens */
    padding-top: 20px;
    margin-top: 20px;
  }
`;

const FromText = styled.span`
  display: block;
  font-size: 15px;
  color: #777777;
  margin-bottom: 5px;
`;

const PriceAmount = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: #e60000; /* Red price */

  @media (max-width: 992px) {
    font-size: 32px;
  }
  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const ExploreButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #0d286d; /* Dark blue button */
  color: #ffffff;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  align-self: flex-start; /* Align button to the left */

  &:hover {
    background-color: #081a4d;
  }

  @media (max-width: 992px) {
    align-self: center; /* Center button when stacked */
  }
`;


// --- React Component: FeaturedPackageCard ---
const TravelPackageCard = ({
  image,
  logo, // Path to Harvanna Travels and Tour Ltd logo
  title,
  description,
  rating, // e.g., 5 for 5 stars
  location,
  duration,
  price,
  buttonText = 'Explore', // Default button text
  link
}) => {

  const navigate = useNavigate();
  // Function to format price with comma separator (as seen in image)
  const formatPrice = (value) => {
    // Ensuring it always has commas for thousands, and no decimals as per image
    return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={i < numStars ? "fas fa-star" : "far fa-star"}></i>
      );
    }
    return stars;
  };

  return (
    <FeaturedCardContainer>
      <ImageSection> {/* Use transient prop for styled-components */}
        {logo && <ImageLogo src={logo} alt="Harvanna Travels and Tour Ltd Logo" />}
        <img src={image} alt='bg'/>
      </ImageSection>
      <DetailsSection>
        <div>
          <PackageTitle>{title}</PackageTitle>
          <PackageDescription>{description}</PackageDescription>
          {rating && <StarRating>{renderStars(rating)}</StarRating>}
          <MetaRow>
            {/* <MetaItem><i className="fas fa-map-marker-alt"></i> {location}</MetaItem> */}
            <MetaItem><i className="far fa-clock"></i> {duration}</MetaItem>
          </MetaRow>
        </div>
        <PriceWrapper>
          <FromText>From:</FromText>
          <PriceAmount>₦{formatPrice(price)}</PriceAmount>
        </PriceWrapper>
        <ExploreButton onClick={()=>navigate(link)} >
          {buttonText}
        </ExploreButton>
      </DetailsSection>
    </FeaturedCardContainer>
  );
};

export default TravelPackageCard;