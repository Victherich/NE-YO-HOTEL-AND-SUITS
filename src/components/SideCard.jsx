
// import React from 'react';
// import styled from 'styled-components';

// // --- Helper Functions (Reused from previous components) ---
// const formatPrice = (value) => {
//   // Assuming prices like N390,000 are whole numbers
//   return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
// };

// const renderStars = (numStars, totalStars = 5) => {
//   const stars = [];
//   for (let i = 0; i < totalStars; i++) {
//     stars.push(
//       <i key={i} className={i < numStars ? "fas fa-star" : "far fa-star"}></i>
//     );
//   }
//   return stars;
// };

// // --- Styled Components for the Relocation Service Card ---
// const CardContainer = styled.div`
//   background-color: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   align-items: center; /* Center content horizontally within the card */
//   font-family: Arial, sans-serif;
//   max-width: 400px; /* Max width to resemble the image's proportions */
//   margin: 20px auto; /* Center the card when used alone */
//   text-align: center; /* Default text alignment for children */
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
//   }
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: auto; /* Let image natural height or specific height set below */
// `;

// const CardImage = styled.img`
//   width: 100%;

//   object-fit: cover; /* Cover the area, potentially cropping */
//   display: block;

//   @media (max-width: 576px) {
//     height: 300px;
//   }
// `;



// const ContentArea = styled.div`
//   padding: 25px;
//   width: 100%; /* Ensure content area takes full width for padding */
//   display: flex;
//   flex-direction: column;
//   align-items: center; /* Center items inside content area */
// `;

// const CardTitle = styled.h3`
//   font-size: 24px;
//   color: #0d286d; /* Dark blue */
//   margin-bottom: 15px;
//   font-weight: bold;
//   text-align: center;
//   line-height: 1.3;

//   @media (max-width: 576px) {
//     font-size: 20px;
//   }
// `;

// const StarRating = styled.div`
//   color: #daa520; /* Gold/yellow color for stars */
//   font-size: 18px;
//   margin-bottom: 20px;

//   i {
//     margin-right: 2px;
//   }
// `;

// const FeeInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 25px;
// `;

// const FeeLabel = styled.span`
//   font-size: 15px;
//   color: #777777;
//   margin-bottom: 5px;
// `;

// const FeeAmount = styled.span`
//   font-size: 28px;
//   font-weight: bold;
//   color: #0d286d; /* Dark blue for the price */

//   @media (max-width: 576px) {
//     font-size: 24px;
//   }
// `;

// const LearnMoreButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   background-color: #e60000; /* Red button */
//   color: #ffffff;
//   padding: 12px 30px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   font-weight: bold;
//   text-decoration: none;
//   transition: background-color 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     background-color: #cc0000;
//   }

//   i {
//     font-size: 14px;
//   }
// `;

// // --- React Component: RelocationServiceCard ---
// const SideCard = ({
//   promoImage,
//   logo,
//   title,
//   rating,
//   feeAmount,
//   link
// }) => {
//   return (
//     <CardContainer>
//       <ImageWrapper>
//         <CardImage src={promoImage} alt={title} />
     
//       </ImageWrapper>
//       {/* <ContentArea>
//         <CardTitle>{title}</CardTitle>
//         {rating && <StarRating>{renderStars(rating)}</StarRating>}
//         <FeeInfo>
//           <FeeLabel>Processing fee:</FeeLabel>
//           <FeeAmount>₦{formatPrice(feeAmount)}</FeeAmount>
//         </FeeInfo>
//         <LearnMoreButton href={link} target="_blank" rel="noopener noreferrer">
//           LEARN MORE <i className="fas fa-angle-double-right"></i>
//         </LearnMoreButton>
//       </ContentArea> */}
//     </CardContainer>
//   );
// };

// export default SideCard;






import React from 'react';
import styled from 'styled-components';

// --- Helper Functions (Reused from previous components) ---
const formatPrice = (value) => {
  // Assuming prices like N390,000 are whole numbers
  return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const renderStars = (numStars, totalStars = 5) => {
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <i key={i} className={i < numStars ? "fas fa-star" : "far fa-star"}></i>
    );
  }
  return stars;
};

// --- Styled Components for the Relocation Service Card ---
const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally within the card */
  font-family: Arial, sans-serif;
  max-width: 400px; /* Max width to resemble the image's proportions */
  margin: 20px auto; /* Center the card when used alone */
  text-align: center; /* Default text alignment for children */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto; /* Let image natural height or specific height set below */
`;

const CardImage = styled.img`
  width: 100%;

  object-fit: cover; /* Cover the area, potentially cropping */
  display: block;

  @media (max-width: 576px) {
    height: 300px;
  }
`;



const ContentArea = styled.div`
  padding: 25px;
  width: 100%; /* Ensure content area takes full width for padding */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items inside content area */
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #0d286d; /* Dark blue */
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const StarRating = styled.div`
  color: #daa520; /* Gold/yellow color for stars */
  font-size: 18px;
  margin-bottom: 20px;

  i {
    margin-right: 2px;
  }
`;

const FeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const FeeLabel = styled.span`
  font-size: 15px;
  color: #777777;
  margin-bottom: 5px;
`;

const FeeAmount = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #0d286d; /* Dark blue for the price */

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const LearnMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #e60000; /* Red button */
  color: #ffffff;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }

  i {
    font-size: 14px;
  }
`;

// --- React Component: RelocationServiceCard ---
const SideCard = ({
  promoImage,
  logo,
  title,
  rating,
  feeAmount,
  link
}) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <CardImage src={promoImage} alt={title} />
     
      </ImageWrapper>
      <ContentArea>
        <CardTitle>{title}</CardTitle>
        {rating && <StarRating>{renderStars(rating)}</StarRating>}
        <FeeInfo>
          <FeeLabel>Processing fee:</FeeLabel>
          <FeeAmount>₦{formatPrice(feeAmount)}</FeeAmount>
        </FeeInfo>
        <LearnMoreButton href={link} target="_blank" rel="noopener noreferrer">
          LEARN MORE <i className="fas fa-angle-double-right"></i>
        </LearnMoreButton>
      </ContentArea>
    </CardContainer>
  );
};

export default SideCard;