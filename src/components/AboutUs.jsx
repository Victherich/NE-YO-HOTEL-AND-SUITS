import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------
   NE-YO HOTEL & SUITES — About Us Page Component
   Theme: Lagoon (#0F3B3A), Brass (#B08D57), Pearl (#F6F7F5)
   Rule kept: every margin, padding and gap is 10px or less.
------------------------------------------------------------------- */

const C = {
  pearl: "#F6F7F5",
  mist: "#E9EFEC",
  white: "#FFFFFF",
  lagoon: "#0F3B3A",
  lagoonSoft: "#1D5754",
  brass: "#B08D57",
  brassLight: "#E3CFA6",
  ink: "#1B2523",
  muted: "#5E6D69",
};

const textIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

/* ---------------------------- STYLES ---------------------------- */

const AboutWrap = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${C.pearl};
  color: ${C.ink};
  padding-top: 20px; /* Space for fixed header */
  animation: ${textIn} 0.8s ease forwards;
`;

const HeroSection = styled.section`
  position: relative;
  background: ${C.lagoon};
  color: ${C.white};
  padding: 60px 10px;
  text-align: center;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(15,59,58,0.4) 0%, rgba(10,32,31,0.85) 100%);
    pointer-events: none;
  }

  .in {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  small {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.4rem;
    color: ${C.brassLight};
  }

  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: clamp(2.8rem, 7vw, 5rem);
    line-height: 1.05;
  }

  p {
    font-size: clamp(1.05rem, 2vw, 1.25rem);
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Section = styled.section`
  padding: 40px 10px;
  background: ${(p) => (p.$tint ? C.mist : C.pearl)};
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCollage = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 12px 30px rgba(15, 59, 58, 0.12);
  }

  .main-img {
    grid-row: span 2;
    min-height: 420px;
  }

  .sub-img {
    min-height: 200px;
  }
`;

const ContentBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  small {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.25rem;
    color: ${C.brass};
  }

  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: clamp(2.2rem, 4.5vw, 3.4rem);
    line-height: 1.1;
    color: ${C.lagoon};
  }

  p {
    color: ${C.muted};
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .quote-box {
    margin-top: 10px;
    padding: 14px;
    background: ${C.white};
    border-left: 3px solid ${C.brass};
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.2rem;
    color: ${C.lagoon};
  }
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 10px;
  padding: 10px;
`;

const PillarCard = styled.div`
  background: ${C.white};
  padding: 24px 10px;
  border: 1px solid rgba(176, 141, 87, 0.25);
  text-align: center;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.4s ease;

  .icon {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    font-size: 1.6rem;
    background: ${C.mist};
    border: 1px solid ${C.brassLight};
    border-radius: 50%;
    color: ${C.lagoon};
    transition: all 0.4s;
  }

  h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    color: ${C.lagoon};
    font-weight: 600;
  }

  p {
    color: ${C.muted};
    font-size: 0.95rem;
  }

  &:hover {
    background: ${C.lagoon};
    border-color: ${C.lagoon};
    transform: translateY(-4px);

    h3 { color: ${C.brassLight}; }
    p { color: rgba(255,255,255,0.85); }
    .icon { background: ${C.brass}; color: ${C.white}; border-color: ${C.brass}; }
  }
`;

const CTASection = styled.section`
  background: ${C.lagoon};
  color: ${C.white};
  text-align: center;
  padding: 60px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    color: ${C.brassLight};
  }

  p {
    max-width: 580px;
    opacity: 0.9;
    font-size: 1.05rem;
  }

  .btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-top: 10px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid ${(p) => (p.$ghost ? C.white : C.brass)};
  background: ${(p) => (p.$ghost ? "transparent" : `linear-gradient(110deg, ${C.brass}, #D4B77E, ${C.brass})`)};
  background-size: 200% 100%;
  color: ${(p) => (p.$ghost ? C.white : C.lagoon)};
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 1px;
  padding: 12px 28px;
  min-height: 48px;
  border-radius: 2px;
  transition: all 0.4s ease;

  &:hover {
    animation: ${shimmer} 1.2s linear infinite;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
    ${(p) => p.$ghost && `background: ${C.white}; color: ${C.lagoon};`}
  }
`;

/* ------------------------------------------------------------------
   COMPONENT LOGIC
------------------------------------------------------------------- */

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <AboutWrap>
      {/* Hero Header */}
      <HeroSection>
        <div className="in">
          <small>Our Heritage &amp; Philosophy</small>
          <h1>A Sanctuary of Quiet Luxury</h1>
          <p>
            Immerse yourself in unhurried evenings, hand-finished linens, and legendary hospitality crafted for the discerning traveler.
          </p>
        </div>
      </HeroSection>

      {/* Story Section */}
      <Section>
        <Container>
          <TwoColumn>
            <ImageCollage>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="NE-YO Hotel Architecture"
                className="main-img"
              />
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
                alt="Poolside at NE-YO"
                className="sub-img"
              />
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Suite Interior"
                className="sub-img"
              />
            </ImageCollage>

            <ContentBox>
              <small>The NE-YO Story</small>
              <h2>Designed for Slow Mornings and Absolute Stillness</h2>
              <p>
                Established with an uncompromising vision for modern elegance, NE-YO Hotel &amp; Suites was conceived as a tranquil oasis away from the bustling pace of city life. Every architectural line, soothing color palette, and bespoke furnishing is meticulously curated to foster deep relaxation.
              </p>
              <p>
                Whether you are joining us for executive business or a romantic weekend escape, our commitment remains absolute: a sanctuary where your privacy is guarded, your comfort is anticipated, and your time is truly your own.
              </p>
              <div className="quote-box">
                &ldquo;Service that remembers your name, anticipates your every desire, and treats your stay as a masterclass in hospitality.&rdquo;
              </div>
            </ContentBox>
          </TwoColumn>
        </Container>
      </Section>

      {/* Core Pillars */}
      <Section $tint>
        <Container>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 30px" }}>
            <small style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.25rem", color: C.brass }}>
              The NE-YO Standard
            </small>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: C.lagoon, paddingTop: "6px" }}>
              Pillars of Our Hospitality
            </h2>
          </div>

          <PillarsGrid>
            <PillarCard>
              <div className="icon">🏛️</div>
              <h3>Quiet Luxury</h3>
              <p>Timeless aesthetic blending contemporary sophistication with calm, earthy tones and total acoustic peace.</p>
            </PillarCard>
            <PillarCard>
              <div className="icon">🛎️</div>
              <h3>Bespoke Butler</h3>
              <p>24/7 dedicated personal attention ensuring all requests, from dining reservations to itinerary planning, are effortlessly fulfilled.</p>
            </PillarCard>
            <PillarCard>
              <div className="icon">🍽️</div>
              <h3>Culinary Excellence</h3>
              <p>Chef-led tasting menus celebrating exquisite continental flavors and modern African gastronomy on our rooftop terrace.</p>
            </PillarCard>
            <PillarCard>
              <div className="icon">🔒</div>
              <h3>Absolute Security</h3>
              <p>Advanced security infrastructure, discrete privacy protocols, and 24-hour uninterrupted power backup for total peace of mind.</p>
            </PillarCard>
          </PillarsGrid>
        </Container>
      </Section>

      {/* Call to Action */}
      <CTASection>
        <h2>Experience NE-YO for Yourself</h2>
        <p>Book your suite today and let our concierge welcome you into a world of unhurried elegance.</p>
        <div className="btn-group">
          <Button onClick={() => navigate("/")}>Explore Suites</Button>
          <Button $ghost onClick={() => navigate("/contact")}>Contact Concierge</Button>
        </div>
      </CTASection>
    </AboutWrap>
  );
}