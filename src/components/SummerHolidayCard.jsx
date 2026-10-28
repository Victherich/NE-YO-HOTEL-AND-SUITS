
// import React from 'react';
// import styled from 'styled-components';

// // Styled Components
// const ProductCardContainer = styled.div`
//   background-color: #f8f8f8; /* Light gray background for the card */
//   border-radius: 10px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Soft shadow */
//   overflow: hidden; /* Ensures image corners are rounded */
//   width: 100%;
//   max-width: 450px; /* Adjust max-width as needed to match the image size */
//   font-family: Arial, sans-serif;
//   text-align: center;
//   /* Removed margin here as it will be controlled by the parent grid/flex container */

//   @media (max-width: 480px) {
//     max-width: 90%; /* Adjust for very small screens */
//   }
// `;

// const ProductImageWrapper = styled.div`
//   width: 100%;
//   height: auto;
//   padding-bottom: 120%; /* Adjust aspect ratio to fit the poster-like image (approx 350px width / 420px height) */
//   position: relative;
//   background-color: #e0e0e0; /* Placeholder background */
// `;

// const ProductImage = styled.img`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform:translate(-50%, -50%);
//   width: 80%;
//   height: 80%;
//   object-fit: cover; /* Cover the area, cropping if necessary */
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
// `;

// const ProductTitle = styled.h3`
//   font-size: 1.2rem;
//   color: #0d286d; /* Dark blue text */
//   margin: 10px 15px; /* Spacing above and below */
//   line-height: 1.3;
//   font-weight: bold;

//   @media (max-width: 480px) {
//     font-size: 20px;
//     margin: 20px 10px;
//   }
// `;

// const DetailsWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 25px;
//   border-top: 1px solid #eeeeee; /* Separator line */
//   border-bottom: 1px solid #eeeeee; /* Separator line */
//   margin: 0 0px; /* Adjust if needed to align with padding of parent */
//    flex-direction: column;

//   @media (max-width: 480px) {
   
//     align-items: flex-start;
//     padding: 15px 20px;
//   }
// `;

// const DetailItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 0.8rem;
//   color: #555555;
//   margin-right: 15px; /* Space between items if they don't wrap */

//   @media (max-width: 480px) {
//     margin-right: 0;
//     margin-bottom: 8px; /* Space between stacked items */
//   }

//   &:last-child {
//     margin-bottom: 0; /* No margin for the last stacked item */
//   }
// `;

// const DetailIcon = styled.span`
//   font-size: 18px;
//   color: #888888;
// `;

// const PriceDisplay = styled.div`
//   font-size: 1.1rem;
//   font-weight: bold;
//   color: #0d286d; /* Red color for price */
//   padding: 20px 25px;
//   text-align: right;

//   @media (max-width: 480px) {
//     font-size: 22px;
//     text-align: left;
//     width: 100%; /* Take full width on small screens */
//   }
// `;

// const DateDisplay = styled.div`
//   background-color: #ffffff;
//   border: 1px solid #dddddd;
//   border-radius: 5px;
//   padding: 5px 20px;
//   margin: 0 25px 25px 25px; /* Spacing around the date box */
//   font-size: 0.9rem;
//   color: #333333;
//   font-weight: 500;

//   @media (max-width: 480px) {
//     margin: 0 20px 20px 20px;
//     padding: 10px 15px;
//   }
// `;

// const LearnMoreButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   background-color: #e60000; /* Red button */
//   color: #ffffff;
//   padding: 7px 15px;
//   border: none;
//   border-radius: 5px;
//   font-size: 0.9rem;
//   font-weight: bold;
//   text-decoration: none;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   margin-bottom: 25px; /* Spacing below the button */

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

// // React Component - Now accepts props
// const SummerHolidayCard = ({
//   imageSrc,
//   title,
//   location,
//   duration,
//   price,
//   dateRange,
//   learnMoreLink = '#',
// }) => {
//   return (
//     <ProductCardContainer>
//       <ProductImageWrapper>
//         <ProductImage src={imageSrc} alt={title} />
//       </ProductImageWrapper>

//       <ProductTitle>{title}</ProductTitle>

//       <div style={{display:"flex"}}>

//         <DetailsWrapper>
//         <DetailItem>
//           <DetailIcon><i className="fas fa-map-marker-alt"></i></DetailIcon> {/* Font Awesome location icon */}
//           <span>{location}</span>
//         </DetailItem>
//         <DetailItem>
//           <DetailIcon><i className="far fa-clock"></i></DetailIcon> {/* Font Awesome clock icon */}
//           <span>{duration}</span>
//         </DetailItem>
//       </DetailsWrapper>

//       <PriceDisplay>{price}</PriceDisplay>
//       </div>

//       <DateDisplay>{dateRange}</DateDisplay>

//       <LearnMoreButton href={learnMoreLink}>
//         LEARN MORE <i className="fas fa-angle-double-right"></i> {/* Font Awesome double angle right */}
//       </LearnMoreButton>
//     </ProductCardContainer>
//   );
// };

// export default SummerHolidayCard;






import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const ProductCardContainer = styled.div`
  background-color: #f8f8f8; /* Light gray background for the card */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Soft shadow */
  overflow: hidden; /* Ensures image corners are rounded */
  width: 100%;
  max-width:550px; /* Made the card much smaller */
  font-family: Arial, sans-serif;
  text-align: center;
  /* Removed margin here as it will be controlled by the parent grid/flex container */

  @media (max-width: 480px) {
    max-width: 90%; /* Adjust for very small screens */
  }
`;

const ProductImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  // padding-bottom: 120%; /* Adjust aspect ratio to fit the poster-like image */
  position: relative;
  // padding-top:100px;
  background-color: #e0e0e0; /* Placeholder background */
`;

const ProductImage = styled.img`
margin-top:20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%; /* Made the image much smaller */
  height: 80%; /* Made the image much smaller */
  // object-fit: cover; /* Cover the area, cropping if necessary */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: #0d286d; /* Dark blue text */
  margin: 10px 15px; /* Spacing above and below */
  line-height: 1.3;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.1rem; /* Adjusted for smaller screens/cards */
    margin: 10px 10px;
  }
`;

// New styled component for the flex wrapper around details and price
const DetailsAndPriceFlex = styled.div`
  display: flex;
  justify-content: space-between; /* Puts details on left, price on right */
  align-items: flex-start; /* Aligns content to the top */
  padding: 15px 20px; /* Padding for this combined section */
  border-top: 1px solid #eeeeee; /* Separator line */
  border-bottom: 1px solid #eeeeee; /* Separator line */
  margin: 0; /* No external margin for this component */

  @media (max-width: 480px) {
    flex-direction: column; /* Stack details and price on small screens */
    align-items: center; /* Center when stacked */
    padding: 10px 15px;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stacks location and duration vertically */
  align-items: flex-start; /* Aligns location and duration to the left */
  gap: 5px; /* Smaller gap between items */
  /* Remove padding and borders as they are now on DetailsAndPriceFlex */

  @media (max-width: 480px) {
    align-items: center; /* Center when stacked on mobile */
    margin-bottom: 10px; /* Space below details when stacked on mobile */
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: #555555;
  /* Removed margin-right as items are column-flexed */

  @media (max-width: 480px) {
    margin-bottom: 0; /* No extra margin for stacked items */
  }
`;

const DetailIcon = styled.span`
  font-size: 18px;
  color: #888888;
`;

const PriceDisplay = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #0d286d; /* Dark blue color for price (matches image) */
  /* No padding here, handled by DetailsAndPriceFlex */
  /* text-align will be managed by flex alignment of parent */

  @media (max-width: 480px) {
    font-size: 1rem; /* Adjusted for smaller screens/cards */
    text-align: center; /* Center when stacked on mobile */
    width: 100%; /* Take full width on small screens when stacked */
  }
`;

const DateDisplay = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 5px 15px; /* Reduced padding */
  margin: 0 20px 20px 20px; /* Adjusted spacing around the date box */
  font-size: 0.9rem;
  color: #333333;
  font-weight: 500;

  @media (max-width: 480px) {
    margin: 0 15px 15px 15px; /* Adjusted for smaller screens */
    padding: 8px 12px;
  }
`;

const LearnMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #e60000; /* Red button */
  color: #ffffff;
  padding: 7px 15px; /* Reduced padding */
  border: none;
  border-radius: 5px;
  font-size: 0.9rem; /* Reduced font size */
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px; /* Spacing below the button */

  &:hover {
    background-color: #cc0000; /* Darker red on hover */
  }

  @media (max-width: 480px) {
    width: calc(100% - 40px); /* Full width minus padding */
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px 15px;
  }
`;

// React Component - Now accepts props
const SummerHolidayCard = ({
  imageSrc,
  title,
  location,
  duration,
  price,
  dateRange,
  learnMoreLink = '#',
}) => {

  const navigate = useNavigate();
  return (
    <ProductCardContainer>
      <ProductImageWrapper>
        <ProductImage src={imageSrc} alt={title} />
      </ProductImageWrapper>

      <ProductTitle>{title}</ProductTitle>

      <DetailsAndPriceFlex> {/* New wrapper for details and price */}
        <DetailsWrapper>
          {/* <DetailItem>
            <DetailIcon><i className="fas fa-map-marker-alt"></i></DetailIcon>
            <span>{location}</span>
          </DetailItem> */}
          <DetailItem>
            <DetailIcon><i className="far fa-clock"></i></DetailIcon> {/* Font Awesome clock icon */}
            <span>{duration}</span>
          </DetailItem>
        </DetailsWrapper>

        <PriceDisplay>{price}</PriceDisplay>
      </DetailsAndPriceFlex>

      {/* <DateDisplay>{dateRange}</DateDisplay> */}

      <LearnMoreButton onClick={()=>navigate(learnMoreLink)}>
        LEARN MORE <i className="fas fa-angle-double-right"></i> 
      </LearnMoreButton>
    </ProductCardContainer>
  );
};

export default SummerHolidayCard;