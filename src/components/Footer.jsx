
// import React from 'react';
// import styled from 'styled-components';
// // import logo from '../Images2/logo2.png'
// import logo from '../Images2/harvanna logo 2.jpg';
// import { useNavigate } from 'react-router-dom';

// // Styled Components
// const FooterContainer = styled.footer`
//   background-color: #0d286d; /* Dark blue background */
//   color: #ffffff; /* White text color */
//   padding: 80px 0;
//   font-family: Arial, sans-serif;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const FooterContent = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 90%;
//   max-width: 1200px;
//   margin-bottom: 40px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }
// `;

// const Section = styled.div`
//   flex: 1;
//   padding: 0 20px;
//   max-width: 280px; /* Adjust as needed */

//   @media (max-width: 768px) {
//     margin-bottom: 30px;
//   }
// `;

// const CompanyDescription = styled(Section)`
//   max-width: 350px;
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Logo = styled.img`
//   height: 50px; /* Adjust as needed */
//   margin-right: 10px;
//   border-radius:10px;
// `;

// const LogoText = styled.span`
//   font-size: 28px;
//   font-weight: bold;
// `;

// const SectionTitle = styled.h3`
//   font-size: 18px;
//   margin-bottom: 15px;
//   font-weight: bold;
// `;

// const LinkList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 10px;
//   font-size: 14px;
//   cursor:pointer;
// `;

// const StyledLink = styled.a`
//   color: #ffffff;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const ContactInfo = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
//   font-size: 14px;
// `;

// const Icon = styled.span`
//   margin-right: 10px;
// `;

// const CopyrightSection = styled.div`
//   border-top: 1px solid rgba(255, 255, 255, 0.2);
//   padding-top: 20px;
//   width: 90%;
//   max-width: 1200px;
//   text-align: center;
//   font-size: 14px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 15px;

//   @media (max-width: 768px) {
//     margin-bottom: 15px;
//   }
// `;

// const SocialIcon = styled.a`
//   color: #ffffff;
//   font-size: 20px;
//   text-decoration: none;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const SettingsLink = styled.p`
//   font-size: 12px;
//   margin-top: 10px; /* Adjust as needed for spacing from copyright */
//   a {
//     color: #4CAF50; /* Example color, adjust to match original if known */
//     text-decoration: none;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// // React Component
// const Footer = () => {
// const navigate = useNavigate();


//   return (
//     <FooterContainer>
//       <FooterContent>
//         <CompanyDescription>
//           <LogoContainer>
//              <Logo src={logo} alt="Harvanna Travels and Tour Ltd Agency Logo" />
//              </LogoContainer>
//           <p>
//            Harvanna Travels and Tour Ltd is a premier international travel agency and recruitment service dedicated to providing exceptional travel experiences and job placement services worldwide. </p>
//         </CompanyDescription>

//         <Section>
//           <SectionTitle>Company</SectionTitle>
//           <LinkList>
//             <ListItem><StyledLink onClick={()=>navigate('/about')}>About Us</StyledLink></ListItem>
//             <ListItem><StyledLink onClick={()=>navigate('/services')}>Services</StyledLink></ListItem>
//             <ListItem><StyledLink onClick={()=>navigate('/visa-services')}>Visa Services</StyledLink></ListItem>
//             <ListItem><StyledLink onClick={()=>navigate('/plannedpackages')}>Planned Holidays</StyledLink></ListItem>
//             <ListItem><StyledLink onClick={()=>navigate('/requestholiday')}>Request Holiday</StyledLink></ListItem>
//             <ListItem><StyledLink onClick={()=>navigate('/events')}>Events</StyledLink></ListItem>
//             <ListItem><StyledLink onClick={()=>navigate('/payments')}>Payments</StyledLink></ListItem>
//           </LinkList>
//         </Section>

//         <Section>
//           <SectionTitle>Support</SectionTitle>
//           <LinkList>
//             <ListItem><StyledLink onClick={()=>navigate('/contactus')}>Contact Us</StyledLink></ListItem>
//             <ListItem><StyledLink onClick={()=>navigate('/blogs')}>Blog</StyledLink></ListItem>
//             <ListItem><StyledLink onClick={()=>navigate('/faq')}>FAQ</StyledLink></ListItem>
//             {/* <ListItem><StyledLink href="#">Terms Of Use</StyledLink></ListItem> */}
//             {/* <ListItem><StyledLink href="#">Privacy Policy</StyledLink></ListItem> */}
//             {/* <ListItem><StyledLink href="#">Flights</StyledLink></ListItem> */}
//           </LinkList>
//         </Section>

//         <Section>
//           <SectionTitle>Our Office</SectionTitle>
//           <ContactInfo>
//             <Icon><i className="fas fa-map-marker-alt"></i></Icon> {/* Font Awesome icon */}
//             <span>Plot 111/113, Destiny Plaza, Opposite Marcity B/Stop, Ago Palace Way, Okota Lagos State.</span>
//           </ContactInfo>
//           <ContactInfo>
//             <Icon><i className="fas fa-envelope"></i></Icon> {/* Font Awesome icon */}
//             <StyledLink href="mailto:info@harvannatravelsandtour.com">info@harvannatravelsandtour.com</StyledLink>
//           </ContactInfo>
//           <ContactInfo>
//             <Icon><i className="fas fa-phone"></i></Icon> {/* Font Awesome icon */}
//             <span>+234-707-560-3404</span>
//           </ContactInfo>
//         </Section>
//       </FooterContent>

//       <CopyrightSection>
//         <SocialIcons>
//           {/* Replace with actual social media icons/links if available, e.g., Font Awesome */}
//           <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
//           <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
//           <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
//           <SocialIcon href="#"><i className="fab fa-linkedin-in"></i></SocialIcon>
//         </SocialIcons>
//       <span>
//   Copyright © {new Date().getFullYear()} Harvanna Travels and Tour Ltd. All rights reserved.
// </span>

//         {/* <SettingsLink>
//           <a href="#">Powered by Elexdon Technologies Limited</a>
//         </SettingsLink> */}
//       </CopyrightSection>
//     </FooterContainer>
//   );
// };

// export default Footer;




import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

/* ------------------------------------------------------------------
   NE-YO HOTEL & SUITES — Footer
   Install:  npm i styled-components react-awesome-reveal
   Usage:    <NeYoFooter />   (render below <NeYoHotelLanding />)
   Rule kept: every margin, padding and gap is 10px or less.
------------------------------------------------------------------- */

const C = {
  pearl: "#F6F7F5",
  mist: "#E9EFEC",
  white: "#FFFFFF",
  lagoon: "#0F3B3A",
  lagoonDeep: "#0A2928",
  lagoonSoft: "#1D5754",
  brass: "#B08D57",
  brassLight: "#E3CFA6",
  muted: "#A9BDB8",
};

const DISPLAY = "'Cormorant Garamond', 'Times New Roman', serif";
const BODY = "'Jost', system-ui, sans-serif";

const explore = [
  { label: "About NE-YO", id: "about" },
  { label: "Rooms & Suites", id: "rooms" },
  { label: "Amenities", id: "amenities" },
  { label: "Gallery", id: "gallery" },
  { label: "Special Offers", id: "offers" },
];

const experiences = [
  { label: "Dining & Bars", id: "dining" },
  { label: "Spa & Wellness", id: "spa" },
  { label: "Weddings & Events", id: "events" },
  { label: "Guest Reviews", id: "reviews" },
  { label: "FAQ", id: "faq" },
];

const trust = [
  { i: "✦", t: "Best rate guarantee", d: "Book direct for our lowest price." },
  { i: "⟲", t: "Free cancellation", d: "Up to 48 hours before arrival." },
  { i: "☾", t: "24/7 concierge", d: "Always one message away." },
  { i: "⛨", t: "Secure booking", d: "Your details stay protected." },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.6 5.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    d: "M13.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.4-1.7 1.8-1.7h1.5V4.2S15.5 4 14.3 4C11.8 4 10.2 5.5 10.2 8.2v2.6H7.5V14h2.7v8h3.3z",
  },
  {
    name: "X",
    href: "https://x.com",
    d: "M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    d: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z",
  },
];

/* ---------------------------- ANIMATIONS --------------------------- */

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(176,141,87,0.5); }
  50%      { box-shadow: 0 0 0 8px rgba(176,141,87,0); }
`;

/* ------------------------------ STYLES ----------------------------- */

const Wrap = styled.footer`
  position: relative;
  // font-family: ${BODY};
  font-weight: 300;
  color: ${C.muted};
  background: ${C.lagoonDeep};
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px;
`;

/* --- CTA band --- */
const Cta = styled.div`
  position: relative;
  background:
    linear-gradient(rgba(15,59,58,0.9), rgba(15,59,58,0.94)),
    url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80") center / cover;
  border-bottom: 2px solid ${C.brass};
  text-align: center;
  color: ${C.white};
  padding: 10px;

  .in {
    max-width: 780px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  small { font-family: ${DISPLAY}; font-style: italic; font-size: 1.3rem; color: ${C.brassLight}; }
  h2 {
    font-family: ${DISPLAY};
    font-weight: 500;
    font-size: clamp(2.2rem, 6vw, 4rem);
    line-height: 1.05;
  }
  p { opacity: 0.9; max-width: 560px; }
  .btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding-top: 10px; }
`;

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  min-width: 180px;
  padding: 0 10px;
  border: 1px solid ${(p) => (p.$ghost ? C.white : C.brass)};
  border-radius: 2px;
  background: ${(p) => (p.$ghost ? "transparent" : `linear-gradient(110deg, ${C.brass}, #d4b77e, ${C.brass})`)};
  background-size: 200% 100%;
  color: ${(p) => (p.$ghost ? C.white : C.lagoon)};
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-2px);
    ${(p) => (p.$ghost ? `background:${C.white};color:${C.lagoon};` : "")}
    animation: ${(p) => (p.$ghost ? "none" : shimmer)} 1.2s linear infinite;
    box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
  }
`;

/* --- Trust strip --- */
const Trust = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(227, 207, 166, 0.18);
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }

  .item { display: flex; align-items: center; gap: 10px; padding: 10px; }
  .ic {
    flex-shrink: 0;
    width: 46px; height: 46px; border-radius: 50%;
    display: grid; place-items: center;
    border: 1px solid ${C.brass};
    color: ${C.brassLight};
    font-size: 1.2rem;
    transition: all 0.4s;
  }
  .item:hover .ic { background: ${C.brass}; color: ${C.lagoonDeep}; transform: rotate(10deg); }
  b { display: block; font-family: ${DISPLAY}; font-size: 1.25rem; font-weight: 600; color: ${C.white}; line-height: 1.1; }
  span { font-size: 0.88rem; }
`;

/* --- Main columns --- */
const Cols = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
  gap: 10px;
  padding: 10px 0;
  @media (max-width: 1000px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 560px) { grid-template-columns: 1fr; }

  .col { padding:5px; }
  h4 {
    font-family: ${DISPLAY};
    font-size: 1.5rem;
    font-weight: 600;
    color: ${C.brassLight};
    // padding-bottom: 10px;
    position: relative;
  }
  h4::after {
    content: ""; position: absolute; left: 0; bottom: 4px;
    width: 36px; height: 1px; background: ${C.brass};
  }
  ul { list-style: none; display: flex; flex-direction: column; gap: 1px; }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .logo { display: flex; align-items: center; gap: 10px; }
  .crest {
    width: 54px; height: 54px; border-radius: 50%;
    display: grid; place-items: center; position: relative;
    border: 1px solid ${C.brass}; color: ${C.brassLight};
    font-family: ${DISPLAY}; font-weight: 600; font-size: 1.3rem; letter-spacing: 1px;
    background: ${C.lagoon};
  }
  .crest::after { content: ""; position: absolute; inset: 3px; border-radius: 50%; border: 1px solid rgba(227,207,166,0.5); }
  .main { font-family: ${DISPLAY}; font-size: 1.8rem; font-weight: 600; letter-spacing: 3px; color: ${C.white}; line-height: 1; display: block; }
  .sub { font-size: 0.7rem; letter-spacing: 5px; color: ${C.brass}; }
  p { font-size: 0.97rem; max-width: 340px; }
  .stars { color: ${C.brass}; letter-spacing: 4px; font-size: 1.05rem; }
`;

const FLink = styled.a`
  display: inline-block;
  padding: 6px 0;
  // min-height: 36px;
  color: ${C.muted};
  text-decoration: none;
  font-size: 0.8rem;
  position: relative;
  transition: color 0.3s, padding-left 0.3s;
  &::before {
    content: "";
    position: absolute; left: 0; top: 50%;
    width: 0; height: 1px; background: ${C.brass};
    transition: width 0.3s;
  }
  &:hover { color: ${C.brassLight}; padding-left: 10px; }
  &:hover::before { width: 6px; }
`;

const Contact = styled.ul`
  li { display: flex; gap: 10px; padding: 6px 0; font-size: 0.97rem; align-items: flex-start; }
  li i { font-style: normal; flex-shrink: 0; width: 24px; color: ${C.brass}; }
  li a { color: ${C.muted}; text-decoration: none; transition: color 0.3s; }
  li a:hover { color: ${C.brassLight}; }
  li b { color: ${C.white}; font-weight: 400; }
`;

const Social = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
  a {
    width: 44px; height: 44px; border-radius: 50%;
    display: grid; place-items: center;
    border: 1px solid rgba(227, 207, 166, 0.45);
    color: ${C.brassLight};
    transition: all 0.4s ease;
  }
  a:hover { background: ${C.brass}; border-color: ${C.brass}; color: ${C.lagoonDeep}; transform: translateY(-4px); }
  svg { width: 20px; height: 20px; fill: currentColor; }
`;

/* --- Bottom bar --- */
const Bottom = styled.div`
  border-top: 1px solid rgba(227, 207, 166, 0.18);
  background: #072120;
  .in {
    max-width: 1300px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 0.88rem;
  }
  .legal { display: flex; flex-wrap: wrap; gap: 10px; }
  .legal a { color: ${C.muted}; text-decoration: none; padding: 10px; transition: color 0.3s; }
  .legal a:hover { color: ${C.brassLight}; }
  .pay { display: flex; flex-wrap: wrap; gap: 10px; }
  .pay span {
    padding: 2px 10px; border: 1px solid rgba(227,207,166,0.3);
    border-radius: 3px; font-size: 0.78rem; letter-spacing: 1px; color: ${C.brassLight};
  }
  .brand-name { color: ${C.brassLight}; font-weight: 400; }
  @media (max-width: 760px) {
    .in { justify-content: center; text-align: center; }
    .legal { justify-content: center; }
  }
`;

const Top = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 900;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${C.brass};
  background: ${C.lagoon};
  color: ${C.brassLight};
  cursor: pointer;
  display: grid;
  place-items: center;
  opacity: ${(p) => (p.$show ? 1 : 0)};
  pointer-events: ${(p) => (p.$show ? "auto" : "none")};
  transform: translateY(${(p) => (p.$show ? "0" : "10px")});
  transition: opacity 0.4s, transform 0.4s, background 0.3s;
  animation: ${pulse} 2.6s ease-in-out infinite;
  &:hover { background: ${C.brass}; color: ${C.lagoon}; }
  svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
`;

/* ============================== COMPONENT ========================== */

export default function NeYoFooter() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Wrap>
      {/* ---------- Call to action ---------- */}
      <Cta>
        <div className="in">
          <Fade cascade damping={0.2} direction="up" triggerOnce duration={1100}>
            <small>Your suite is waiting</small>
            <h2>Come home to NE-YO</h2>
            <p>Book direct and enjoy complimentary breakfast, a late checkout and our best available rate.</p>
            <div className="btns">
              <Btn href="#contact" onClick={(e) => go(e, "contact")}>Reserve now</Btn>
              <Btn $ghost href="tel:+2348181924856">Call +234 818 192 4856</Btn>
            </div>
          </Fade>
        </div>
      </Cta>

      <Inner>
        {/* ---------- Trust strip ---------- */}
        <Trust>
          {trust.map((t, i) => (
            <Zoom key={t.t} triggerOnce delay={i * 100} duration={800}>
              <div className="item">
                <span className="ic">{t.i}</span>
                <div>
                  <b>{t.t}</b>
                  <span>{t.d}</span>
                </div>
              </div>
            </Zoom>
          ))}
        </Trust>

        {/* ---------- Columns ---------- */}
        <Cols>
          <Slide direction="up" triggerOnce duration={900}>
            <div className="col">
              <Brand>
                <div className="logo">
                  <span className="crest">NY</span>
                  <div>
                    <span className="main">NE-YO</span>
                    <span className="sub">HOTEL &amp; SUITES</span>
                  </div>
                </div>
                <p>A five-star address in the heart of Victoria Island, where every stay is shaped around you.</p>
                <span className="stars" aria-label="Five star hotel">★★★★★</span>
                <Social>
                  {socials.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={s.d} /></svg>
                    </a>
                  ))}
                </Social>
              </Brand>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce duration={900} delay={100}>
            <div className="col">
              <h4>Explore</h4>
              <ul>
                {explore.map((l) => (
                  <li key={l.id}><FLink href={`#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</FLink></li>
                ))}
              </ul>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce duration={900} delay={200}>
            <div className="col">
              <h4>Experiences</h4>
              <ul>
                {experiences.map((l) => (
                  <li key={l.id}><FLink href={`#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</FLink></li>
                ))}
              </ul>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce duration={900} delay={300}>
            <div className="col">
              <h4>Visit us</h4>
              <Contact>
                <li><i>📍</i><span>7 NE-YO Road, GRA Phase 2, Asaba,<br />Delta State, Nigeria</span></li>
                <li><i>📞</i><a href="tel:+2348181924856">+234 818 192 4856, +234 818 192 4836</a></li>
                <li><i>✉️</i><a href="mailto:stay@neyohotel.com">stay@neyohotel.com</a></li>
                <li><i>🕑</i><span><b>Check-in</b> 2:00 PM · <b>Check-out</b> 12:00 PM</span></li>
                <li><i>🛎️</i><span>Reception and concierge open 24 hours</span></li>
              </Contact>
            </div>
          </Slide>
        </Cols>
      </Inner>

      {/* ---------- Bottom bar ---------- */}
      <Bottom>
        <Fade triggerOnce duration={1200}>
          <div className="in">
            <span>
              © {new Date().getFullYear()} <span className="brand-name">NE-YO HOTEL &amp; SUITES</span>. All rights reserved.
            </span>
            <div className="legal">
              <a href="/privacy">Privacy policy</a>
              <a href="/terms">Terms of stay</a>
        
            </div>
            <div className="pay" aria-label="Accepted payments">
              <span>VISA</span><span>MASTERCARD</span><span>VERVE</span><span>TRANSFER</span>
            </div>
          </div>
        </Fade>
      </Bottom>

      <Top $show={showTop} onClick={toTop} aria-label="Back to top">
        <svg viewBox="0 0 24 24"><path d="M6 15l6-6 6 6" /></svg>
      </Top>
    </Wrap>
  );
}
