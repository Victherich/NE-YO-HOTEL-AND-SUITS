import React from "react";
import styled, { keyframes } from "styled-components";
import { Zoom } from "react-awesome-reveal";

/* ---------------- COLOR PALETTE & FONTS ---------------- */
const C = {
  pearl: "#F6F7F5",
  white: "#FFFFFF",
  lagoon: "#0F3B3A",
  lagoonSoft: "#1D5754",
  brass: "#B08D57",
  brassLight: "#E3CFA6",
  ink: "#1B2523",
  muted: "#5E6D69",
};

const DISPLAY = "'Cormorant Garamond', 'Times New Roman', serif";
const BODY = "'Jost', system-ui, sans-serif";

/* ---------------- ANIMATIONS ---------------- */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

/* ---------------- STYLED COMPONENTS ---------------- */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(10, 32, 31, 0.75);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: grid;
  place-items: center;
  padding: 10px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Modal = styled.div`
  position: relative;
  width: min(540px, 95vw);
  background: ${C.pearl};
  border: 1px solid ${C.brassLight};
  border-radius: 4px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  font-family: ${BODY};
  text-align: center;
  padding: 10px;

  &::before {
    content: "";
    position: absolute;
    inset: 6px;
    border: 1px solid rgba(176, 141, 87, 0.35);
    pointer-events: none;
    border-radius: 2px;
  }
`;

const Header = styled.div`
  background: ${C.lagoon};
  color: ${C.brassLight};
  padding: 10px;
  margin: -10px -10px 10px -10px;

  .subtitle {
    font-family: ${DISPLAY};
    font-style: italic;
    font-size: 1.1rem;
    color: ${C.brassLight};
    letter-spacing: 1px;
  }

  h2 {
    font-family: ${DISPLAY};
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 600;
    line-height: 1.1;
    color: ${C.white};
    margin-top: 2px;
  }
`;

const Badge = styled.div`
  display: inline-block;
  background: linear-gradient(110deg, ${C.brass}, #e6ca65, ${C.brass});
  color: ${C.lagoon};
  font-weight: 600;
  font-size: 0.82rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  padding: 0 10px;

  p {
    color: ${C.muted};
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
`;

const RateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 10px;
  margin-bottom: 10px;
`;

const RateCard = styled.div`
  background: ${C.white};
  border: 1px solid rgba(176, 141, 87, 0.3);
  padding: 8px 10px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .old-price {
    font-size: 0.8rem;
    color: ${C.muted};
    text-decoration: line-through;
  }

  .new-price {
    font-family: ${DISPLAY};
    font-size: 1.35rem;
    font-weight: 700;
    color: ${C.lagoon};
  }

  .save-tag {
    font-size: 0.7rem;
    font-weight: 600;
    color: ${C.brass};
  }
`;

const DatesBanner = styled.div`
  background: ${C.mist};
  border-left: 3px solid ${C.brass};
  padding: 8px 10px;
  font-size: 0.88rem;
  color: ${C.lagoon};
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-bottom: 5px;
`;

const ClaimButton = styled.button`
  cursor: pointer;
  border: 1px solid ${C.brass};
  background: linear-gradient(110deg, ${C.brass}, #e6ca65, ${C.brass});
  background-size: 200% 100%;
  color: ${C.lagoon};
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 1px;
  padding: 10px;
  min-height: 46px;
  flex: 1;
  border-radius: 2px;
  transition: all 0.3s;

  &:hover {
    animation: ${shimmer} 1.2s linear infinite;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(176, 141, 87, 0.4);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(227, 207, 166, 0.6);
  background: rgba(15, 59, 58, 0.5);
  color: ${C.brassLight};
  font-size: 1.2rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.3s;
  z-index: 10;

  &:hover {
    background: ${C.brass};
    color: ${C.lagoon};
    transform: rotate(90deg);
  }
`;

/* ---------------- PROMO DATA ---------------- */
const promoRates = [
  { oldP: "₦40,000", newP: "₦25,000", save: "Save ₦15k" },
  { oldP: "₦50,000", newP: "₦35,000", save: "Save ₦15k" },
  { oldP: "₦60,000", newP: "₦45,000", save: "Save ₦15k" },
  { oldP: "₦70,000", newP: "₦55,000", save: "Save ₦15k" },
  { oldP: "₦80,000", newP: "₦65,000", save: "Save ₦15k" },
];

export default function PromoPopup({ isOpen, onClose, onClaim }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close Promo">
          ×
        </CloseButton>

        <Header>
          <span className="subtitle">Exclusive Limited-Time Offer</span>
          <h2>End-Of-Year Special Promo</h2>
        </Header>

        <Content>
          <Badge>₦15,000 Off Every Suite</Badge>
          <p>Book & pay within the promo window to enjoy discounted luxury rates!</p>

          <RateGrid>
            {promoRates.map((r, i) => (
              <RateCard key={i}>
                <span className="old-price">{r.oldP}</span>
                <span className="new-price">{r.newP}</span>
                <span className="save-tag">{r.save}</span>
              </RateCard>
            ))}
          </RateGrid>

          <DatesBanner>
            📅 <b>Valid Period:</b> November 1st – December 15th, 2026
          </DatesBanner>

          <Actions>
            <ClaimButton
              onClick={() => {
                onClose();
                if (onClaim) onClaim();
              }}
            >
              Claim Promo & Book Now
            </ClaimButton>
          </Actions>
        </Content>
      </Modal>
    </Overlay>
  );
}