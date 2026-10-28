import React, { useState } from "react";
import styled, { css } from "styled-components";
import media from '../Images3/im (1).mp4'

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

const ShowcaseSection = styled.section`
  padding: 60px 20px;
  background: ${C.pearl};
`;

const ShowcaseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  aspect-ratio: 9 / 16;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(15, 59, 58, 0.18);
  border: 1px solid rgba(176, 141, 87, 0.3);
  background: ${C.lagoon};

  video, iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(15, 59, 58, 0.85);
    backdrop-filter: blur(8px);
    color: ${C.brassLight};
    padding: 6px 14px;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 20px;
    border: 1px solid rgba(227, 207, 166, 0.3);
    z-index: 2;
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(10, 32, 31, 0.35);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${(p) => (p.$playing ? 0 : 1)};
  pointer-events: ${(p) => (p.$playing ? "none" : "auto")};

  .play-btn {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: ${C.brass};
    color: ${C.white};
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    transition: transform 0.3s ease, background 0.3s ease;
  }

  &:hover .play-btn {
    transform: scale(1.1);
    background: ${C.brassLight};
    color: ${C.lagoon};
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;

  small {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.3rem;
    color: ${C.brass};
  }

  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    line-height: 1.1;
    color: ${C.lagoon};
  }

  p {
    color: ${C.muted};
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .highlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding-top: 10px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.95rem;
      color: ${C.lagoonSoft};
      font-weight: 500;

      span {
        color: ${C.brass};
        font-size: 1.2rem;
      }
    }
  }

  .action-wrap {
    padding-top: 16px;
  }
`;

const ExploreButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(110deg, ${C.brass}, #D4B77E, ${C.brass});
  background-size: 200% 100%;
  color: ${C.lagoon};
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 1px;
  padding: 12px 28px;
  min-height: 48px;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(176, 141, 87, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
  }
`;

export default function HotelVideoShowcase({ videoSrc, onExploreClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <ShowcaseSection>
      <ShowcaseContainer>
        {/* Left: Vertical Video */}
        <VideoWrapper>
          <div className="badge">Cinematic Tour</div>
          <video
            ref={videoRef}
            // src={videoSrc || "https://assets.mixkit.co/videos/preview/mixkit-hotel-room-with-a-king-size-bed-41604-large.mp4"}
            src={media}
            playsInline
            loop
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
          />
          <PlayOverlay $playing={isPlaying} onClick={togglePlay}>
            <div className="play-btn">
              {isPlaying ? "❚❚" : "▶"}
            </div>
          </PlayOverlay>
        </VideoWrapper>

        {/* Right: Elegant Write-Up */}
        <ContentBox>
          <small>Immersive Experience</small>
          <h2>Where Unhurried Elegance Meets Modern Luxury</h2>
          <p>
            Step inside our world of refined comfort and quiet sophistication. From sweeping lagoon views to meticulously designed suites crafted with hand-finished linens and deep soaking tubs, every corner is curated for your ultimate relaxation.
          </p>
          <p>
            Whether you are joining us for a tranquil weekend retreat, a milestone celebration, or executive business, experience service that remembers your name and anticipates your every need.
          </p>

          <div className="highlights">
            <div><span>✓</span> 24/7 Private Butler</div>
            <div><span>✓</span> Infinity Pool &amp; Spa</div>
            <div><span>✓</span> Gourmet Rooftop Dining</div>
            <div><span>✓</span> High-Speed Fibre Wi-Fi</div>
          </div>

          <div className="action-wrap">
            <ExploreButton href="#rooms" onClick={onExploreClick}>
              Discover Our Suites
            </ExploreButton>
          </div>
        </ContentBox>
      </ShowcaseContainer>
    </ShowcaseSection>
  );
}