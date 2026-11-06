import React from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import hiringFlier from "../Images3/fl1.jpeg"; // Replace with your actual imported flier path

/* ------------------------------------------------------------------
   NE-YO HOTEL & SUITES — We Are Hiring Section
   Theme: Lagoon (#0F3B3A), Brass (#B08D57), Pearl (#F6F7F5)
   Rule kept: every margin, padding, and gap is 10px or less.
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

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const Section = styled.section`
  padding: 60px 10px;
  background: ${C.pearl};
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ---------------------------- LEFT CONTENT ---------------------------- */

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  small {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.3rem;
    color: ${C.brass};
  }

  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    line-height: 1.08;
    color: ${C.lagoon};
  }

  p {
    color: ${C.muted};
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .highlights {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 10px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.98rem;
      color: ${C.lagoonSoft};
      font-weight: 500;

      span {
        color: ${C.brass};
        font-size: 1.2rem;
      }
    }
  }

  .action-wrap {
    padding-top: 10px;
  }
`;

const ApplyButton = styled.button`
  cursor: pointer;
  border: none;
  background: linear-gradient(110deg, ${C.brass}, #D4B77E, ${C.brass});
  background-size: 200% 100%;
  color: ${C.lagoon};
  font-weight: 600;
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
  }
`;

/* ---------------------------- RIGHT FLIER IMAGE ---------------------------- */

const FlierWrap = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(15, 59, 58, 0.18);
  border: 1px solid ${C.brassLight};
  background: ${C.white};

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export default function WeAreHiringSection({ customFlier }) {
  // You can pass `customFlier` as a prop or use your direct import above
  const flierSrc = customFlier || hiringFlier;

  const handleApplyClick = () => {
    Swal.fire({
      title: "Apply for a Role",
      html: `
        <p style="font-size:0.95rem; color:#5E6D69; margin-bottom:12px;">
          Please send your CV, cover letter, and credentials to our recruitment desk:
        </p>
        <b style="color:#0F3B3A; font-size:1.1rem;">careers@neyohotel.com</b>
      `,
      icon: "info",
      confirmButtonText: "Close",
      confirmButtonColor: "#0F3B3A",
    });
  };

  return (
    <Section id="careers">
      <Container>
        <Grid>
          {/* Left Side: Editorial Write-Up */}
          <Fade direction="left" triggerOnce duration={1000}>
            <ContentBox>
              <small>Careers at NE-YO</small>
              <h2>Join Our World of Bespoke Hospitality</h2>
              <p>
                At NE-YO Hotel &amp; Suites, we pride ourselves on providing unhurried elegance and absolute stillness for our guests. Delivering this level of service requires an exceptional, dedicated team.
              </p>
              <p>
                We are actively looking for talented, passionate professionals to fill various roles across our housekeeping, front desk, culinary, and guest relations departments in Asaba.
              </p>

              <div className="highlights">
                <div><span>✓</span> Competitive remuneration &amp; staff benefits</div>
                <div><span>✓</span> Continuous professional training in luxury hospitality</div>
                <div><span>✓</span> A supportive and refined work environment</div>
              </div>
{/* 
              <div className="action-wrap">
                <ApplyButton onClick={handleApplyClick}>
                  Submit Your Application
                </ApplyButton>
              </div> */}
            </ContentBox>
          </Fade>

          {/* Right Side: Flier Image */}
          <Fade direction="right" triggerOnce duration={1000}>
            <FlierWrap>
              <img src={flierSrc} alt="NE-YO Hotel Careers Flier" />
            </FlierWrap>
          </Fade>
        </Grid>
      </Container>
    </Section>
  );
}