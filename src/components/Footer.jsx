

// import React, { useCallback, useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import { Fade, Slide, Zoom } from "react-awesome-reveal";
// import bd from '../Images3/bd.jpg';

// /* ------------------------------------------------------------------
//     NE-YO HOTEL & SUITES — Footer
//     Rule kept: every margin, padding and gap is 10px or less.
// ------------------------------------------------------------------- */

// const C = {
//   pearl: "#F6F7F5",
//   mist: "#E9EFEC",
//   white: "#FFFFFF",
//   lagoon: "#0F3B3A",
//   lagoonDeep: "#0A2928",
//   lagoonSoft: "#1D5754",
//   brass: "#B08D57",
//   brassLight: "#E3CFA6",
//   muted: "#A9BDB8",
// };

// const DISPLAY = "'Cormorant Garamond', 'Times New Roman', serif";
// const BODY = "'Jost', system-ui, sans-serif";

// const explore = [
//   { label: "About NE-YO", id: "about" },
//   { label: "Rooms & Suites", id: "rooms" },
//   { label: "Amenities", id: "amenities" },
//   { label: "Gallery", id: "gallery" },
//   { label: "Special Offers", id: "offers" },
// ];

// const experiences = [
//   { label: "Dining & Bars", id: "dining" },
//   { label: "Spa & Wellness", id: "spa" },
//   { label: "Weddings & Events", id: "events" },
//   { label: "Guest Reviews", id: "reviews" },
//   { label: "FAQ", id: "faq" },
// ];

// const trust = [
//   { i: "✦", t: "Best rate guarantee", d: "Book direct for our lowest price." },
//   { i: "⟲", t: "Free cancellation", d: "Up to 48 hours before arrival." },
//   { i: "☾", t: "24/7 concierge", d: "Always one message away." },
//   { i: "⛨", t: "Secure booking", d: "Your details stay protected." },
// ];

// const socials = [
//   {
//     name: "Facebook",
//     href: "https://www.facebook.com/share/1CCMFRCzSk/",
//     d: "M13.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.4-1.7 1.8-1.7h1.5V4.2S15.5 4 14.3 4C11.8 4 10.2 5.5 10.2 8.2v2.6H7.5V14h2.7v8h3.3z",
//   },
//   {
//     name: "TikTok",
//     href: "https://vm.tiktok.com/ZS9yf3pmosgH7-xUNDs/",
//     d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
//   },
// ];

// /* ---------------------------- ANIMATIONS --------------------------- */

// const shimmer = keyframes`
//   0%   { background-position: 0% 50%; }
//   100% { background-position: 200% 50%; }
// `;
// const pulse = keyframes`
//   0%, 100% { box-shadow: 0 0 0 0 rgba(176,141,87,0.5); }
//   50%       { box-shadow: 0 0 0 8px rgba(176,141,87,0); }
// `;

// /* ------------------------------ STYLES ----------------------------- */

// const Wrap = styled.footer`
//   position: relative;
//   font-weight: 300;
//   color: ${C.muted};
//   background: ${C.lagoonDeep};
//   overflow: hidden;
// `;

// const Inner = styled.div`
//   max-width: 1300px;
//   margin: 0 auto;
//   padding: 10px;
// `;

// const Cta = styled.div`
//   position: relative;
//   border-bottom: 2px solid ${C.brass};
//   text-align: center;
//   color: ${C.white};
//   padding: 10px;
//   background:
//     linear-gradient(rgba(15,59,58,0.7), rgba(15,59,58,0.7)),
//     url(${bd}) bottom / cover;
  
//   .in {
//     max-width: 780px;
//     margin: 0 auto;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 10px;
//   }
//   small { font-family: ${DISPLAY}; font-style: italic; font-size: 1.3rem; color: ${C.brassLight}; }
//   h2 {
//     font-family: ${DISPLAY};
//     font-weight: 500;
//     font-size: clamp(2.2rem, 6vw, 4rem);
//     line-height: 1.05;
//   }
//   p { opacity: 0.9; max-width: 560px; }
//   .btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding-top: 10px; }
// `;

// const Btn = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 50px;
//   min-width: 180px;
//   padding: 0 10px;
//   border: 1px solid ${(p) => (p.$ghost ? C.white : C.brass)};
//   border-radius: 2px;
//   background: ${(p) => (p.$ghost ? "transparent" : `linear-gradient(110deg, ${C.brass}, #d4b77e, ${C.brass})`)};
//   background-size: 200% 100%;
//   color: ${(p) => (p.$ghost ? C.white : C.lagoon)};
//   font-weight: 500;
//   font-size: 0.95rem;
//   letter-spacing: 1px;
//   text-decoration: none;
//   cursor: pointer;
//   transition: all 0.4s ease;
//   &:hover {
//     transform: translateY(-2px);
//     ${(p) => (p.$ghost ? `background:${C.white};color:${C.lagoon};` : "")}
//     animation: ${(p) => (p.$ghost ? "none" : shimmer)} 1.2s linear infinite;
//     box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
//   }
// `;

// const Trust = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 10px;
//   padding: 10px 0;
//   border-bottom: 1px solid rgba(227, 207, 166, 0.18);
//   @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
//   @media (max-width: 480px) { grid-template-columns: 1fr; }

//   .item { display: flex; align-items: center; gap: 10px; padding: 10px; }
//   .ic {
//     flex-shrink: 0;
//     width: 46px; height: 46px; border-radius: 50%;
//     display: grid; place-items: center;
//     border: 1px solid ${C.brass};
//     color: ${C.brassLight};
//     font-size: 1.2rem;
//     transition: all 0.4s;
//   }
//   .item:hover .ic { background: ${C.brass}; color: ${C.lagoonDeep}; transform: rotate(10deg); }
//   b { display: block; font-family: ${DISPLAY}; font-size: 1.25rem; font-weight: 600; color: ${C.white}; line-height: 1.1; }
//   span { font-size: 0.88rem; }
// `;

// const Cols = styled.div`
//   display: grid;
//   grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
//   gap: 10px;
//   padding: 10px 0;
//   @media (max-width: 1000px) { grid-template-columns: 1fr 1fr; }
//   @media (max-width: 560px) { grid-template-columns: 1fr; }

//   .col { padding: 5px; }
//   h4 {
//     font-family: ${DISPLAY};
//     font-size: 1.5rem;
//     font-weight: 600;
//     color: ${C.brassLight};
//     position: relative;
//   }
//   h4::after {
//     content: ""; position: absolute; left: 0; bottom: 4px;
//     width: 36px; height: 1px; background: ${C.brass};
//   }
//   ul { list-style: none; display: flex; flex-direction: column; gap: 1px; }
// `;

// const Brand = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   .logo { display: flex; align-items: center; gap: 10px; }
//   .main { font-family: ${DISPLAY}; font-size: 1.8rem; font-weight: 600; letter-spacing: 3px; color: ${C.white}; line-height: 1; display: block; }
//   .sub { font-size: 0.7rem; letter-spacing: 5px; color: ${C.brass}; }
//   p { font-size: 0.97rem; max-width: 340px; }
//   .stars { color: ${C.brass}; letter-spacing: 4px; font-size: 1.05rem; }
// `;

// const FLink = styled.a`
//   display: inline-block;
//   padding: 6px 0;
//   color: ${C.muted};
//   text-decoration: none;
//   font-size: 0.8rem;
//   position: relative;
//   transition: color 0.3s, padding-left 0.3s;
//   &::before {
//     content: "";
//     position: absolute; left: 0; top: 50%;
//     width: 0; height: 1px; background: ${C.brass};
//     transition: width 0.3s;
//   }
//   &:hover { color: ${C.brassLight}; padding-left: 10px; }
//   &:hover::before { width: 6px; }
// `;

// const Contact = styled.ul`
//   li { display: flex; gap: 10px; padding: 6px 0; font-size: 0.97rem; align-items: flex-start; }
//   li i { font-style: normal; flex-shrink: 0; width: 24px; color: ${C.brass}; }
//   li a { color: ${C.muted}; text-decoration: none; transition: color 0.3s; }
//   li a:hover { color: ${C.brassLight}; }
//   li b { color: ${C.white}; font-weight: 400; }
// `;

// const Social = styled.div`
//   display: flex;
//   gap: 10px;
//   padding-top: 10px;
//   a {
//     width: 44px; height: 44px; border-radius: 50%;
//     display: grid; place-items: center;
//     border: 1px solid rgba(227, 207, 166, 0.45);
//     color: ${C.brassLight};
//     transition: all 0.4s ease;
//   }
//   a:hover { background: ${C.brass}; border-color: ${C.brass}; color: ${C.lagoonDeep}; transform: translateY(-4px); }
//   svg { width: 20px; height: 20px; fill: currentColor; }
// `;

// const Bottom = styled.div`
//   border-top: 1px solid rgba(227, 207, 166, 0.18);
//   background: #072120;
//   .in {
//     max-width: 1300px;
//     margin: 0 auto;
//     padding: 10px;
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: space-between;
//     gap: 10px;
//     font-size: 0.88rem;
//   }
//   .legal { display: flex; flex-wrap: wrap; gap: 10px; }
//   .legal a { color: ${C.muted}; text-decoration: none; padding: 10px; transition: color 0.3s; }
//   .legal a:hover { color: ${C.brassLight}; }
//   .pay { display: flex; flex-wrap: wrap; gap: 10px; }
//   .pay span {
//     padding: 2px 10px; border: 1px solid rgba(227,207,166,0.3);
//     border-radius: 3px; font-size: 0.78rem; letter-spacing: 1px; color: ${C.brassLight};
//   }
//   .brand-name { color: ${C.brassLight}; font-weight: 400; }
//   @media (max-width: 760px) {
//     .in { justify-content: center; text-align: center; }
//     .legal { justify-content: center; }
//   }
// `;

// const Top = styled.button`
//   position: fixed;
//   right: 10px;
//   bottom: 10px;
//   z-index: 900;
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   border: 1px solid ${C.brass};
//   background: ${C.lagoon};
//   color: ${C.brassLight};
//   cursor: pointer;
//   display: grid;
//   place-items: center;
//   opacity: ${(p) => (p.$show ? 1 : 0)};
//   pointer-events: ${(p) => (p.$show ? "auto" : "none")};
//   transform: translateY(${(p) => (p.$show ? "0" : "10px")});
//   transition: opacity 0.4s, transform 0.4s, background 0.3s;
//   animation: ${pulse} 2.6s ease-in-out infinite;
//   &:hover { background: ${C.brass}; color: ${C.lagoon}; }
//   svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
// `;

// /* ============================== COMPONENT ========================== */

// export default function NeYoFooter() {
//   const [showTop, setShowTop] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setShowTop(window.scrollY > 700);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const go = useCallback((e, id) => {
//     e.preventDefault();
//     if (location.pathname !== "/") {
//       navigate(`/#${id}`);
//     } else {
//       const el = document.getElementById(id);
//       if (el) {
//         window.scrollTo({ 
//           top: el.getBoundingClientRect().top + window.scrollY - 30, 
//           behavior: "smooth" 
//         });
//       }
//     }
//   }, [location.pathname, navigate]);

//   const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <Wrap>
//       <Cta>
//         <div className="in">
//           <Fade cascade damping={0.2} direction="up" triggerOnce duration={1100}>
//             <small>Your suite is waiting</small>
//             <h2>Come home to NE-YO</h2>
//             <p>Book direct and enjoy complimentary breakfast, a late checkout and our best available rate.</p>
//             <div className="btns">
//               <Btn href="#contact" onClick={(e) => go(e, "contact")}>Reserve now</Btn>
//               <Btn $ghost href="tel:+2348181924856">Call +234 818 192 4856</Btn>
//             </div>
//           </Fade>
//         </div>
//       </Cta>

//       <Inner>
//         <Trust>
//           {trust.map((t, i) => (
//             <Zoom key={t.t} triggerOnce delay={i * 100} duration={800}>
//               <div className="item">
//                 <span className="ic">{t.i}</span>
//                 <div>
//                   <b>{t.t}</b>
//                   <span>{t.d}</span>
//                 </div>
//               </div>
//             </Zoom>
//           ))}
//         </Trust>

//         <Cols>
//           <Slide direction="up" triggerOnce duration={900}>
//             <div className="col">
//               <Brand>
//                 <div className="logo">
//                   <img src='/logo.png' alt='logo' style={{ width: "100px" }} />
//                   <div>
//                     <span className="main">NE-YO</span>
//                     <span className="sub">HOTEL &amp; SUITES</span>
//                   </div>
//                 </div>
//                 <p>A five-star address in the heart of Asaba, where every stay is shaped around you.</p>
//                 <span className="stars" aria-label="Five star hotel">★★★★★</span>
//                 <Social>
//                   {socials.map((s) => (
//                     <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
//                       <svg viewBox="0 0 24 24" aria-hidden="true"><path d={s.d} /></svg>
//                     </a>
//                   ))}
//                 </Social>
//               </Brand>
//             </div>
//           </Slide>

//           <Slide direction="up" triggerOnce duration={900} delay={100}>
//             <div className="col">
//               <h4>Explore</h4>
//               <ul>
//                 {explore.map((l) => (
//                   <li key={l.id}><FLink href={`/#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</FLink></li>
//                 ))}
//               </ul>
//             </div>
//           </Slide>

//           <Slide direction="up" triggerOnce duration={900} delay={200}>
//             <div className="col">
//               <h4>Experiences</h4>
//               <ul>
//                 {experiences.map((l) => (
//                   <li key={l.id}><FLink href={`/#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</FLink></li>
//                 ))}
//               </ul>
//             </div>
//           </Slide>

//           <Slide direction="up" triggerOnce duration={900} delay={300}>
//             <div className="col">
//               <h4>Visit us</h4>
//               <Contact>
//                 <li><i>📍</i><span>No. 7 Ne-yo Road, by Midwifery Market, Opp. Christ The King 
// Catholic Church, GRA Phase 2, Asaba,<br />Delta State, Nigeria</span></li>
//                 <li><i>📞</i><a href="tel:+2348181924856">+234 818 192 4856, +234 818 192 4836</a></li>
//                 <li><i>✉️</i><a href="mailto:stay@neyohotel.com">stay@neyohotel.com</a></li>
//                 <li><i>✉️</i><a href="mailto:admin@neyohotel.com">admin@neyohotel.com</a></li>
//                 <li><i>✉️</i><a href="mailto:contact@neyohotel.com">contact@neyohotel.com</a></li>
//                 <li><i>🕑</i><span><b>Check-in</b> 2:00 PM · <b>Check-out</b> 12:00 PM</span></li>
//                 <li><i>🛎️</i><span>Reception and concierge open 24 hours</span></li>
//               </Contact>
//             </div>
//           </Slide>
//         </Cols>
//       </Inner>

//       <Bottom>
//         <Fade triggerOnce duration={1200}>
//           <div className="in">
//             <span>
//               © {new Date().getFullYear()} <span className="brand-name">NE-YO HOTEL &amp; SUITES</span>. All rights reserved.
//             </span>
//             <div className="legal">
//               <a href="/privacy">Privacy policy</a>
//               <a href="/terms">Terms of stay</a>
//             </div>

//             <p 
//               style={{cursor:"pointer", textDecoration:"underline", fontStyle:"italic"}}
//               onClick={()=>window.open('https://elexdontech.com', '_blank')}>DESIGNED AND POWERED BY ELEXDON DIGITAL TECHNOLOGIES LIMITED</p>
//           </div>
//         </Fade>
//       </Bottom>

//       <Top $show={showTop} onClick={toTop} aria-label="Back to top">
//         <svg viewBox="0 0 24 24"><path d="M6 15l6-6 6 6" /></svg>
//       </Top>
//     </Wrap>
//   );
// }




import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import bd from '../Images3/bd.jpg';
import tiktokimg from '../Images3/tiktokimg.jpg'

/* ------------------------------------------------------------------
    NE-YO HOTEL & SUITES — Footer
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
  muted:"#FFFFFF"
  // muted: "#A9BDB8",
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

/* ---------------------------- ANIMATIONS --------------------------- */

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;
const pulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4); }
  50%      { transform: scale(1.06); box-shadow: 0 12px 30px rgba(37, 211, 102, 0.7); }
`;

/* ------------------------------ STYLES ----------------------------- */

const Wrap = styled.footer`
  position: relative;
  font-weight: 300;
  color: ${C.muted};
  // background: ${C.lagoonDeep};
  background:rgba(0, 50, 126, 0.7);
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px;
`;

const Cta = styled.div`
  position: relative;
  border-bottom: 2px solid ${C.brass};
  text-align: center;
  color: ${C.white};
  padding: 10px;
  // background:
  //   linear-gradient(rgba(15,59,58,0.7), rgba(15,59,58,0.7)),
  //   url(${bd}) bottom / cover;
    background:
    linear-gradient(rgba(0, 50, 126, 0.7), rgba(0, 50, 126, 0.7)),
    url(${bd}) bottom / cover;
  
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

const Cols = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
  gap: 10px;
  padding: 10px 0;
  @media (max-width: 1000px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 560px) { grid-template-columns: 1fr; }

  .col { padding: 5px; }
  h4 {
    font-family: ${DISPLAY};
    font-size: 1.5rem;
    font-weight: 600;
    color: ${C.brassLight};
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
  .main { font-family: ${DISPLAY}; font-size: 1.8rem; font-weight: 600; letter-spacing: 3px; color: ${C.white}; line-height: 1; display: block; }
  .sub { font-size: 0.7rem; letter-spacing: 5px; color: ${C.white}; }
  p { font-size: 0.97rem; max-width: 340px; }
  .stars { color: ${C.white}; letter-spacing: 4px; font-size: 1.05rem; }
`;

const FLink = styled.a`
  display: inline-block;
  padding: 6px 0;
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
  align-items: center;
  gap: 10px;
  padding-top: 10px;

  .social-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(227, 207, 166, 0.3);
    color: ${C.white};
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .social-btn:hover {
    background: ${C.brass};
    color: ${C.lagoonDeep};
    border-color: ${C.brass};
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(176, 141, 87, 0.35);
  }

  .icon-img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(227, 207, 166, 0.18);
  // background: #072120;
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
  .brand-name { color: ${C.brassLight}; font-weight: 400; }
  @media (max-width: 760px) {
    .in { justify-content: center; text-align: center; }
    .legal { justify-content: center; }
  }
`;

/* Floating fixed WhatsApp Button */
const FixedWhatsapp = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25D366;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  animation: ${pulse} 2.5s infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.12);
  }

  svg {
    width: 32px;
    height: 32px;
    fill: #FFFFFF;
  }
`;

/* ============================== COMPONENT ========================== */

export default function NeYoFooter() {
  const navigate = useNavigate();
  const location = useLocation();

  const go = useCallback((e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ 
          top: el.getBoundingClientRect().top + window.scrollY - 30, 
          behavior: "smooth" 
        });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <Wrap>
      {/* FIXED HOVERING WHATSAPP BUTTON ON ALL PAGES */}
      <FixedWhatsapp 
        href="https://wa.me/2349064091574" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with NE-YO Hotel on WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </FixedWhatsapp>

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

        <Cols>
          <Slide direction="up" triggerOnce duration={900}>
            <div className="col">
              <Brand>
                <div className="logo">
                  <img src='/logo.png' alt='logo' style={{ width: "100px" }} />
                  <div>
                    <span className="main">NE-YO</span>
                    <span className="sub">HOTEL &amp; SUITES</span>
                  </div>
                </div>
                <p>A five-star address in the heart of Asaba, where every stay is shaped around you.</p>
                <span className="stars" aria-label="Five star hotel">★★★★★</span>
                
                {/* LARGER VISIBLE FACEBOOK & TIKTOK BUTTONS */}
                <Social>
                  <a 
                    className="social-btn" 
                    href="https://www.facebook.com/share/1CCMFRCzSk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img 
                      className="icon-img" 
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
                      alt="Facebook" 
                    />
                    <span>Facebook</span>
                  </a>

                  <a 
                    className="social-btn" 
                    href="https://vm.tiktok.com/ZS9yf3pmosgH7-xUNDs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img 
                      className="icon-img" 
                      src={tiktokimg}
                      alt="TikTok" 
                    />
                    <span>TikTok</span>
                  </a>
                </Social>
              </Brand>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce duration={900} delay={100}>
            <div className="col">
              <h4>Explore</h4>
              <ul>
                {explore.map((l) => (
                  <li key={l.id}><FLink href={`/#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</FLink></li>
                ))}
              </ul>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce duration={900} delay={200}>
            <div className="col">
              <h4>Experiences</h4>
              <ul>
                {experiences.map((l) => (
                  <li key={l.id}><FLink href={`/#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</FLink></li>
                ))}
              </ul>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce duration={900} delay={300}>
            <div className="col">
              <h4>Visit us</h4>
              <Contact>
                <li><i>📍</i><span>No. 7 Ne-yo Road, by Midwifery Market, Opp. Christ The King 
Catholic Church, GRA Phase 2, Asaba,<br />Delta State, Nigeria</span></li>
                <li><i>📞</i><a href="tel:+2348181924856">+234 818 192 4856, +234 818 192 4836</a></li>
                <li><i>✉️</i><a href="mailto:stay@neyohotel.com">stay@neyohotel.com</a></li>
                <li><i>✉️</i><a href="mailto:admin@neyohotel.com">admin@neyohotel.com</a></li>
                <li><i>✉️</i><a href="mailto:contact@neyohotel.com">contact@neyohotel.com</a></li>
                <li><i>🕑</i><span><b>Check-in</b> 2:00 PM · <b>Check-out</b> 12:00 PM</span></li>
                <li><i>🛎️</i><span>Reception and concierge open 24 hours</span></li>
              </Contact>
            </div>
          </Slide>
        </Cols>
      </Inner>

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

            <p 
              style={{cursor:"pointer", textDecoration:"underline", fontStyle:"italic"}}
              onClick={()=>window.open('https://elexdontech.com', '_blank')}>DESIGNED AND POWERED BY ELEXDON DIGITAL TECHNOLOGIES LIMITED</p>
          </div>
        </Fade>
      </Bottom>
    </Wrap>
  );
}