// import React from 'react'
// import BookingSection from './BookingSection'
// import HeroSection from './Hero'
// import FamilyTourPackages from './FamilyTourPackages'
// import CustomerTestimonial from './CustomerTestimonial'
// import Partners from './Partners'
// import Newsletter from './Newsletter'
// import SecondQuarterDeals from './SecondQuarterDeals'
// import PopularToursSection from './PopularToursSection'
// import Gallery from './Gallery'

// const LandingPage = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <PopularToursSection/>
//       <SecondQuarterDeals/>
//       <FamilyTourPackages/>
//       <CustomerTestimonial/>
//       <BookingSection/>
//       <Partners/>
//       <Gallery/>
//       <Newsletter/>

      
//     </div>
//   )
// }

// export default LandingPage



import React, { useContext, useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import RoomsSection from "./RoomsSection";
import { Context } from "./Context";
import axios from "axios";
import Swal from "sweetalert2";
import im8 from '../Images3/im (8).jpeg'
import im2 from '../Images3/im (2).jpeg'
import im3 from '../Images3/im (3).jpeg'
import im97 from '../Images3/im (97).jpeg'
import im1 from '../Images3/im (1).jpeg';
import im4 from '../Images3/im (4).jpeg';
import im5 from '../Images3/im (5).jpeg';
import im6 from '../Images3/im (6).jpeg';
import im7 from '../Images3/im (7).jpeg';
import im10 from '../Images3/im (10).jpeg';
import im20 from '../Images3/im (20).jpeg';
import im28 from '../Images3/im (28).jpeg';
import HotelVideoShowcase from "./HotelVideoShowcase";

/* ------------------------------------------------------------------
   NE-YO HOTEL & SUITES — Landing page (no header / footer)
   Install:  npm i styled-components react-awesome-reveal
   Usage:    import NeYoHotelLanding from "./NeYoHotelLanding";
   Rule kept: every margin, padding and gap is 10px or less.
------------------------------------------------------------------- */

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

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

/* ------------------------------ DATA ------------------------------ */


const heroSlides = [
  { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", title: "A palace of quiet luxury", sub: "Suites made for slow mornings and unhurried evenings." },
  { img: im2, title: "A palace of quiet luxury", sub: "Suites made for slow mornings and unhurried evenings." },

  { img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80", title: "Swim into golden hour", sub: "An infinity pool that melts into the Lagos sky." },
  { img: im3, title: "Swim into golden hour", sub: "An infinity pool that melts into the Lagos sky." },

  { img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80", title: "Sleep well in pure silk", sub: "Hand-finished linens, deep soaking tubs, total stillness." },
  { img: im8, title: "Sleep well in pure silk", sub: "Hand-finished linens, deep soaking tubs, total stillness." },

  { img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80", title: "Dine beneath the stars", sub: "Chef-led menus on a candlelit rooftop terrace." },
  { img: im97, title: "Dine beneath the stars", sub: "Chef-led menus on a candlelit rooftop terrace." },
];

const stats = [
  { n: "120", l: "Suites & rooms" },
  { n: "24/7", l: "Private butler" },
  { n: "5★", l: "Guest rating" },
  { n: "15+", l: "Years of service" },
];



const amenities = [
  { i: "🏊", t: "Infinity pool", d: "Heated, with a poolside cabana service." },
  { i: "💆", t: "Signature spa", d: "Massage, hammam and facials." },
  { i: "🍸", t: "Sky lounge", d: "Craft cocktails and live jazz." },
  { i: "🏋️", t: "Fitness studio", d: "Open 24 hours with personal trainers." },
  { i: "🚘", t: "Chauffeur", d: "Airport pickup in a luxury sedan." },
  { i: "📶", t: "Fast Wi-Fi", d: "Fibre internet in every suite." },
  { i: "🛎️", t: "Concierge", d: "Tours, tables and tickets arranged." },
  { i: "🔒", t: "Safe & discreet", d: "24-hour security and backup power." },
];

const dining = [
  { img: "photo-1414235077428-338989a2e8c0", name: "Oriki Restaurant", d: "Modern Nigerian and continental tasting menus." },
  { img: "photo-1517248135467-4c7edcad34c4", name: "The Terrace", d: "Rooftop grill, seafood and sunset dining." },
  { img: "photo-1514933651103-005eec06c04b", name: "Velvet Bar", d: "Rare spirits, champagne and live music." },
];

// const gallery = [
//   { id: "photo-1564501049412-61c2a3083791", span: "tall" },
//   { id: "photo-1571896349842-33c89424de2d", span: "wide" },
//   { id: "photo-1540555700478-4be289fbecef", span: "" },
//   { id: "photo-1519741497674-611481863552", span: "" },
//   { id: "photo-1445019980597-93fa8acb246c", span: "wide" },
//   { id: "photo-1544161515-4ab6ce6db874", span: "tall" },
// ];


const gallery = [
  { id: im1, span: "tall" },
  { id: im4, span: "wide" },
  { id: im5, span: "" },
  { id: im6, span: "" },
  { id: im7, span: "wide" },
  { id: im10, span: "tall" },
];

const offers = [
  { t: "The Honeymoon Escape", d: "3 nights in a Royal Terrace Suite, champagne, couples spa and a private dinner.", tag: "Save 20%" },
  { t: "Weekend Retreat", d: "Late checkout, full breakfast and a 60-minute massage for two.", tag: "From ₦240,000" },
  { t: "Long Stay Residence", d: "Stay 7 nights, pay for 5. Laundry and airport transfers included.", tag: "2 nights free" },
];

const reviews = [
  { q: "Every detail felt considered. The suite was silent, the staff remembered my name by the second morning.", a: "Adaeze O.", r: "Business traveller, Abuja" },
  { q: "We celebrated our wedding weekend here. The terrace at sunset is the most beautiful setting in Lagos.", a: "Tunde & Ify", r: "Newlyweds, London" },
  { q: "The spa alone is worth the trip. I left rested in a way no hotel has managed before.", a: "Sarah M.", r: "Guest, Accra" },
];

const faqs = [
  { q: "What time are check-in and check-out?", a: "Check-in starts at 2:00 PM and check-out is at 12:00 noon. Early arrival and late checkout can be arranged on request." },
  { q: "Do you provide airport transfers?", a: "Yes. Our chauffeur meets you at Murtala Muhammed International Airport and drives you to the hotel in a luxury sedan." },
  { q: "Can I host a wedding or corporate event?", a: "Yes. Our ballroom seats up to 300 guests, and our events team plans everything from décor to catering." },
  { q: "Is breakfast included?", a: "Breakfast is included in all suite bookings. It is available as an add-on for Deluxe King Rooms." },
  { q: "What is your cancellation policy?", a: "You can cancel free of charge up to 48 hours before arrival. Later changes may be charged one night." },
];

/* --------------------------- ANIMATIONS --------------------------- */

const kenBurns = keyframes`
  from { transform: scale(1); }
  to   { transform: scale(1.14); }
`;
const textIn = keyframes`
  from { opacity: 0; transform: translateY(10px); letter-spacing: 4px; filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0); letter-spacing: 0; filter: blur(0); }
`;
const progress = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;
const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(6px); }
`;

/* ---------------------------- GLOBAL CSS -------------------------- */

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: ${C.pearl};
    color: ${C.ink};
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  img { max-width: 100%; display: block; }
  button, input, select, textarea { font-family: inherit; }
  :focus-visible { outline: 2px solid ${C.brass}; outline-offset: 2px; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
`;

/* ----------------------------- PRIMITIVES ------------------------- */

const Page = styled.main`
  width: 100%;
  overflow: hidden;
 
`;

const Section = styled.section`
  padding: 10px;
  background: ${(p) => (p.$tint ? C.mist : C.pearl)};
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px;
`;

const Heading = styled.div`
  text-align: ${(p) => (p.$left ? "left" : "center")};
  max-width: 680px;
  margin: ${(p) => (p.$left ? "0" : "0 auto")};
  padding: 10px 10px 10px;

  small {
    display: inline-block;
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.25rem;
    color: ${C.brass};
    padding-bottom: 4px;
  }
  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    line-height: 1.08;
    color: ${C.lagoon};
  }
  p {
    padding-top: 10px;
    color: ${C.muted};
    font-size: 1.05rem;
  }
  &::after {
    content: "";
    display: block;
    width: 70px;
    height: 1px;
    margin: 10px ${(p) => (p.$left ? "0" : "auto")} 0;
    background: linear-gradient(90deg, transparent, ${C.brass}, transparent);
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
  padding: 10px 10px;
  min-height: 48px;
  min-width: 170px;
  border-radius: 2px;
  transition: all 0.4s ease;
  &:hover {
    animation: ${shimmer} 1.2s linear infinite;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
    ${(p) => p.$ghost && css`background: ${C.white}; color: ${C.lagoon};`}
  }
`;

/* ------------------------------- HERO ----------------------------- */

const HeroWrap = styled.header`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${C.white};
  overflow: hidden;
  padding: 10px;
  background: ${C.lagoon};
   padding-top:100px;
`;

// const Slide_ = styled.div`
//   position: absolute;
//   inset: 0;
//   background: url(${(p) => p.$src}) center / cover no-repeat;
//   opacity: ${(p) => (p.$active ? 1 : 0)};
//   transition: opacity 1.8s ease-in-out;
//   ${(p) => p.$active && css`animation: ${kenBurns} 9s ease-out forwards;`}
// `;

const Slide_ = styled.div`
  position: absolute;
  inset: 0;
  /* Added double quotes inside url() to safely parse local file paths */
  background: url("${(p) => p.$src}") center / cover no-repeat;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transition: opacity 1.8s ease-in-out;
  ${(p) => p.$active && css`animation: ${kenBurns} 9s ease-out forwards;`}
`;

const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15,59,58,0.55) 0%, rgba(15,59,58,0.25) 45%, rgba(10,32,31,0.8) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .brand {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    color: ${C.brassLight};
  }
  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: clamp(2.8rem, 8.5vw, 6.5rem);
    line-height: 1;
    animation: ${textIn} 1.4s ease forwards;
  }
  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 560px;
    color: rgba(255, 255, 255, 0.9);
    animation: ${textIn} 1.6s 0.2s ease both;
  }
  .name {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    font-size: clamp(1rem, 2.4vw, 1.4rem);
    letter-spacing: 6px;
    padding: 10px 0;
    border-top: 1px solid ${C.brassLight};
    border-bottom: 1px solid ${C.brassLight};
  }
`;

const HeroBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding-top: 10px;
`;

const Bars = styled.div`
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  width: min(420px, 90%);
  display: flex;
  gap: 10px;
`;

const Bar = styled.button`
  flex: 1;
  height: 12px;
  background: transparent;
  border: 0;
  cursor: pointer;
  position: relative;
  &::before, &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; top: 5px;
    height: 2px;
  }
  &::before { background: rgba(255,255,255,0.35); }
  &::after {
    background: ${C.brassLight};
    transform-origin: left;
    transform: scaleX(${(p) => (p.$done ? 1 : 0)});
    ${(p) => p.$active && css`animation: ${progress} 6s linear forwards;`}
  }
`;

const BookBar = styled.form`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 980px;
  margin-top: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  border-radius: 4px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  text-align: left;
  color: ${C.ink};

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    color: ${C.muted};
    padding: 0 10px;
  }
  input, select {
    border: 0;
    border-bottom: 1px solid ${C.brassLight};
    background: transparent;
    padding: 6px 0;
    font-size: 1rem;
    color: ${C.lagoon};
    min-height: 38px;
  }
  button { width: 100%; align-self: end; }

  @media (max-width: 860px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const Scroll = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 10px;
  right: 10px;
  width: 22px;
  height: 36px;
  border: 1px solid rgba(255,255,255,0.7);
  border-radius: 12px;
  &::after {
    content: "";
    position: absolute;
    left: 50%; top: 6px;
    width: 3px; height: 8px;
    margin-left: -1.5px;
    background: ${C.brassLight};
    border-radius: 2px;
    animation: ${float} 1.6s ease-in-out infinite;
  }
  @media (max-width: 600px) { display: none; }
`;

/* ----------------------------- ABOUT ------------------------------ */

const Two = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
  @media (max-width: 880px) { grid-template-columns: 1fr; }
`;

const Collage = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 10px;
  img { width: 100%; height: 100%; object-fit: cover; border-radius: 2px; }
  .a { grid-row: span 2; min-height: 460px; }
  .b { min-height: 225px; }
  .c { min-height: 225px; }
`;

const Copy = styled.div`
  padding: 10px;
  p { color: ${C.muted}; padding-bottom: 10px; font-size: 1.05rem; }
  .sign {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.5rem;
    color: ${C.lagoon};
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
  background: ${C.lagoon};
  color: ${C.white};
  text-align: center;
  div { padding: 10px; border-right: 1px solid rgba(227,207,166,0.3); }
  div:last-child { border-right: 0; }
  strong {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 5vw, 3.4rem);
    font-weight: 500;
    color: ${C.brassLight};
    line-height: 1.1;
  }
  span { font-size: 0.95rem; opacity: 0.85; }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    div:nth-child(2) { border-right: 0; }
  }
`;

/* ------------------------------ ROOMS ----------------------------- */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(p) => p.$min || "260px"}, 1fr));
  gap: 10px;
  padding: 10px;
`;

const RoomCard = styled.article`
  background: ${C.white};
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 30px rgba(15, 59, 58, 0.08);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  height: 100%;
  &:hover { transform: translateY(-6px); box-shadow: 0 18px 44px rgba(15, 59, 58, 0.16); }

  .pic { position: relative; overflow: hidden; height: 250px; }
  .pic img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s ease; }
  &:hover .pic img { transform: scale(1.08); }
  .price {
    position: absolute; left: 10px; bottom: 10px;
    background: ${C.lagoon}; color: ${C.brassLight};
    padding: 4px 10px; font-size: 0.9rem;
  }
  .body { padding: 10px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
  h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.7rem; font-weight: 600; color: ${C.lagoon}; line-height: 1.1; }
  .meta { color: ${C.muted}; font-size: 0.9rem; }
  ul { list-style: none; display: flex; flex-wrap: wrap; gap: 10px; }
  li { font-size: 0.82rem; border: 1px solid ${C.brassLight}; padding: 2px 10px; border-radius: 20px; color: ${C.lagoonSoft}; }
  button {
    margin-top: auto; cursor: pointer; background: transparent;
    border: 1px solid ${C.lagoon}; color: ${C.lagoon};
    padding: 10px; min-height: 44px; font-weight: 500; transition: all 0.3s;
  }
  button:hover { background: ${C.lagoon}; color: ${C.white}; }
`;

/* ---------------------------- AMENITIES --------------------------- */

const AmenityCard = styled.div`
  text-align: center;
  padding: 10px;
  background: ${C.white};
  border: 1px solid rgba(176, 141, 87, 0.25);
  height: 100%;
  transition: all 0.4s ease;
  .ic {
    width: 62px; height: 62px; margin: 0 auto 10px;
    display: grid; place-items: center; font-size: 1.7rem;
    border-radius: 50%;
    background: ${C.mist};
    border: 1px solid ${C.brassLight};
    transition: all 0.4s;
  }
  h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.45rem; color: ${C.lagoon}; font-weight: 600; }
  p { color: ${C.muted}; font-size: 0.95rem; }
  &:hover { background: ${C.lagoon}; border-color: ${C.lagoon}; transform: translateY(-4px); }
  &:hover h3 { color: ${C.brassLight}; }
  &:hover p { color: rgba(255,255,255,0.8); }
  &:hover .ic { background: ${C.brass}; border-color: ${C.brass}; }
`;

/* ------------------------------ DINING ---------------------------- */

const DineCard = styled.div`
  position: relative;
  min-height: 420px;
  height: 100%;
  overflow: hidden;
  color: ${C.white};
  display: flex;
  align-items: flex-end;
  img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 1.4s ease; }
  &:hover img { transform: scale(1.1); }
  &::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 35%, rgba(10,32,31,0.9)); }
  .txt { position: relative; z-index: 2; padding: 10px; }
  h3 { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 500; color: ${C.brassLight}; }
  p { font-size: 0.98rem; opacity: 0.92; }
`;

/* ------------------------------- SPA ------------------------------ */

const SpaBand = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${C.lagoon};
  color: ${C.white};
  gap: 10px;
  padding: 10px;
  align-items: stretch;
  @media (max-width: 860px) { grid-template-columns: 1fr; }
  .pic { min-height: 420px; overflow: hidden; }
  .pic img { width: 100%; height: 100%; object-fit: cover; }
  .txt { padding: 10px; display: flex; flex-direction: column; justify-content: center; gap: 10px; }
  h2 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(2.2rem, 5vw, 3.6rem); line-height: 1.05; color: ${C.brassLight}; }
  p { opacity: 0.9; font-size: 1.05rem; }
  ul { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  li { border-left: 2px solid ${C.brass}; padding-left: 10px; font-size: 0.98rem; }
`;

/* ----------------------------- GALLERY ---------------------------- */

const Masonry = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 10px;
  padding: 10px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; grid-auto-rows: 240px; }
`;

const Tile = styled.button`
  position: relative;
  border: 0;
  padding: 0;
  cursor: zoom-in;
  overflow: hidden;
  grid-column: ${(p) => (p.$span === "wide" ? "span 2" : "span 1")};
  grid-row: ${(p) => (p.$span === "tall" ? "span 2" : "span 1")};
  @media (max-width: 480px) { grid-column: span 1; grid-row: span 1; }
  img { width: 100%; height: 100%; object-fit: cover; transition: transform 1s ease, filter 0.6s; }
  &:hover img { transform: scale(1.1); filter: brightness(0.85); }
`;

const Lightbox = styled.div`
  position: fixed; inset: 0; z-index: 100;
  background: rgba(10, 32, 31, 0.94);
  display: grid; place-items: center; padding: 10px; cursor: zoom-out;
  img { max-height: 90vh; max-width: 100%; object-fit: contain; border: 1px solid ${C.brass}; }
`;

/* ------------------------------ OFFERS ---------------------------- */

const OfferCard = styled.div`
  position: relative;
  height: 100%;
  padding: 10px;
  background: ${C.white};
  border: 1px solid ${C.brassLight};
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.4s;
  &::before {
    content: ""; position: absolute; inset: 4px;
    border: 1px solid rgba(176,141,87,0.35); pointer-events: none;
  }
  &:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(176,141,87,0.25); }
  .tag { align-self: flex-start; background: ${C.brass}; color: ${C.white}; padding: 2px 10px; font-size: 0.85rem; }
  h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.9rem; color: ${C.lagoon}; line-height: 1.1; font-weight: 600; }
  p { color: ${C.muted}; }
  a { color: ${C.lagoon}; font-weight: 500; text-decoration: none; border-bottom: 1px solid ${C.brass}; align-self: flex-start; margin-top: auto; }
`;

/* ----------------------------- REVIEWS ---------------------------- */

const Reviews = styled.div`
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  min-height: 280px;
  .mark { font-family: 'Cormorant Garamond', serif; font-size: 5rem; line-height: 0.6; color: ${C.brass}; }
  .stars { color: ${C.brass}; letter-spacing: 4px; padding: 10px 0; }
  blockquote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.4rem, 3.4vw, 2.2rem);
    font-style: italic;
    color: ${C.lagoon};
    line-height: 1.35;
    animation: ${textIn} 1s ease both;
  }
  cite { display: block; padding-top: 10px; font-style: normal; color: ${C.muted}; }
  cite b { color: ${C.lagoon}; font-weight: 500; }
`;

const Dots = styled.div`
  display: flex; justify-content: center; gap: 10px; padding: 10px;
  button {
    width: 10px; height: 10px; border-radius: 50%; border: 1px solid ${C.brass}; cursor: pointer;
    background: transparent; transition: all 0.3s;
  }
  button.on { background: ${C.brass}; transform: scale(1.4); }
`;

/* ------------------------------ EVENTS ---------------------------- */

const Events = styled.div`
  position: relative;
  min-height: 460px;
  display: grid;
  place-items: center;
  text-align: center;
  color: ${C.white};
  padding: 10px;
  background: linear-gradient(rgba(15,59,58,0.7), rgba(15,59,58,0.78)), url(${(p) => p.$src}) center / cover fixed;
  @media (max-width: 900px) { background-attachment: scroll; }
  .in { max-width: 740px; padding: 10px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
  h2 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(2.3rem, 6vw, 4.2rem); line-height: 1.05; }
  p { opacity: 0.92; font-size: 1.1rem; }
  .chips { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
  .chips span { border: 1px solid ${C.brassLight}; padding: 2px 10px; border-radius: 20px; font-size: 0.9rem; color: ${C.brassLight}; }
`;

/* ------------------------------- FAQ ------------------------------ */

const FaqList = styled.div`
  max-width: 820px; margin: 0 auto; padding: 10px; display: flex; flex-direction: column; gap: 10px;
`;

const FaqItem = styled.div`
  background: ${C.white};
  border: 1px solid ${(p) => (p.$open ? C.brass : "rgba(176,141,87,0.25)")};
  transition: border-color 0.3s;
  button {
    width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 10px;
    padding: 10px; min-height: 52px; background: transparent; border: 0; cursor: pointer; text-align: left;
    font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 600; color: ${C.lagoon};
  }
  .plus { font-size: 1.6rem; color: ${C.brass}; transition: transform 0.4s; transform: rotate(${(p) => (p.$open ? "45deg" : "0")}); }
  .ans { display: grid; grid-template-rows: ${(p) => (p.$open ? "1fr" : "0fr")}; transition: grid-template-rows 0.5s ease; }
  .ans > div { overflow: hidden; }
  .ans p { padding: 0 10px 10px; color: ${C.muted}; }
`;

/* ----------------------------- CONTACT ---------------------------- */

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 10px;
  padding: 10px;
  @media (max-width: 880px) { grid-template-columns: 1fr; }
`;

const Info = styled.div`
  background: ${C.lagoon};
  color: ${C.white};
  padding: 10px;
  display: flex; flex-direction: column; gap: 10px;
  h3 { font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: ${C.brassLight}; font-weight: 500; }
  .row { display: flex; gap: 10px; align-items: flex-start; padding: 10px; border-bottom: 1px solid rgba(227,207,166,0.25); }
  .row i { font-style: normal; font-size: 1.3rem; }
  .row b { display: block; font-weight: 500; color: ${C.brassLight}; }
  .row span { opacity: 0.9; font-size: 0.97rem; }
  .map { flex: 1; min-height: 200px; border: 0; width: 100%; filter: grayscale(0.3); }
`;

const Form = styled.form`
  background: ${C.white};
  padding: 10px;
  border: 1px solid ${C.brassLight};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-content: start;
  @media (max-width: 560px) { grid-template-columns: 1fr; }
  h3 { grid-column: 1 / -1; font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: ${C.lagoon}; font-weight: 600; }
  label { display: flex; flex-direction: column; font-size: 0.85rem; color: ${C.muted}; }
  label.full, .full { grid-column: 1 / -1; }
  input, select, textarea {
    margin-top: 2px; padding: 10px; border: 1px solid ${C.brassLight}; background: ${C.pearl};
    font-size: 1rem; color: ${C.ink}; min-height: 46px; border-radius: 2px; resize: vertical;
  }
  input:focus, select:focus, textarea:focus { outline: none; border-color: ${C.brass}; background: ${C.white}; }
  .ok { grid-column: 1 / -1; padding: 10px; background: ${C.mist}; border-left: 3px solid ${C.brass}; color: ${C.lagoon}; }
`;

const Newsletter = styled.div`
  background: ${C.mist};
  padding: 10px;
  text-align: center;
  form { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 10px; }
  input {
    flex: 1 1 260px; max-width: 420px; min-height: 48px; padding: 10px;
    border: 1px solid ${C.brassLight}; background: ${C.white}; font-size: 1rem;
  }
`;

/* =============================== PAGE ============================== */

export default function LandingPage() {
  const [slide, setSlide] = useState(0);
  const [review, setReview] = useState(0);
  const [open, setOpen] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [sent, setSent] = useState(false);
  const [joined, setJoined] = useState(false);
  const {api_url}=useContext(Context);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
 


  // Handle controlled input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  useEffect(() => {
    const t = setTimeout(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearTimeout(t);
  }, [slide]);

  useEffect(() => {
    const t = setInterval(() => setReview((r) => (r + 1) % reviews.length), 6500);
    return () => clearInterval(t);
  }, []);

  const goBook = (e) => {
    e.preventDefault();
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  const current = heroSlides[slide];




  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const payload = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    message: form.message
  };

  // Show SweetAlert2 loading indicator
  Swal.fire({
    title: 'Sending Request...',
    text: 'Please wait while we submit your inquiry...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const res = await axios.post(`${api_url}/send_contact_inquiry.php`, payload);
    
    if (res.data.success) {
      // Close loading and display success alert
      Swal.fire({
        icon: 'success',
        title: 'Request Sent',
        text: 'Thank you! Our concierge team will reach out to you shortly.',
        confirmButtonColor: '#0F3B3A', // NE-YO Lagoon theme color
      });
      setSent(true);

      setForm({
        name:'',email:"", phone:"", message:""
      })
    } else {
      // Handle backend validation error response
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: res.data.error || 'Failed to send your request. Please try again.',
        confirmButtonColor: '#0F3B3A',
      });
    }
  } catch (err) {
    console.error(err);
    // Handle network / connection error
    Swal.fire({
      icon: 'error',
      title: 'Connection Error',
      text: 'Unable to connect to the server. Please check your internet connection.',
      confirmButtonColor: '#0F3B3A',
    });
  }
};

  return (
    <Page>
      <Global />

      {/* ---------------------------- HERO ---------------------------- */}
      <HeroWrap id="home">
        {heroSlides.map((s, i) => (
          <Slide_ key={s.img} $src={s.img} $active={i === slide} aria-hidden="true" />
        ))}
        <HeroShade />

        <Bars aria-label="Hero slides">
          {heroSlides.map((s, i) => (
            <Bar key={s.img} $active={i === slide} $done={i < slide} onClick={() => setSlide(i)} aria-label={`Show slide ${i + 1}`} />
          ))}
        </Bars>

        <HeroContent>
          <Fade triggerOnce duration={1400}>
            <span className="brand">Welcome to</span>
          </Fade>
          <Zoom triggerOnce duration={1500}>
            <span className="name">NE-YO HOTEL &amp; SUITES</span>
          </Zoom>
          <h1 key={`t${slide}`}>{current.title}</h1>
          <p key={`p${slide}`}>{current.sub}</p>
          <Fade triggerOnce delay={500} duration={1200}>
            <HeroBtns>
              <Button onClick={goBook}>Explore suites</Button>
              <Button $ghost onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Plan an event
              </Button>
            </HeroBtns>
          </Fade>
        </HeroContent>

        <Slide direction="up" triggerOnce delay={700} duration={1200} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <BookBar onSubmit={goBook}>
            <label>
              Check-in
              <input type="date" required />
            </label>
            <label>
              Check-out
              <input type="date" required />
            </label>
            <label>
              Guests
              <select defaultValue="2">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                ))}
              </select>
            </label>
            <Button type="submit">Check availability</Button>
          </BookBar>
        </Slide>
        <Scroll />
      </HeroWrap>

      {/* ---------------------------- ABOUT --------------------------- */}
      <Section id="about">
        <Container>
          <Two>
            <Slide direction="left" triggerOnce duration={1200}>
              {/* <Collage>
                <img className="a" src={img("photo-1564501049412-61c2a3083791", 800)} alt="NE-YO Hotel lobby" loading="lazy" />
                <img className="b" src={img("photo-1445019980597-93fa8acb246c", 600)} alt="Resort pool view" loading="lazy" />
                <img className="c" src={img("photo-1584132967334-10e028bd69f7", 600)} alt="Hotel suite" loading="lazy" />
              </Collage> */}
               <Collage>
                <img className="a" src={im1} alt="NE-YO Hotel lobby" loading="lazy" />
                <img className="b" src={im5} alt="Resort pool view" loading="lazy" />
                <img className="c" src={im6} alt="Hotel suite" loading="lazy" />
              </Collage>
            </Slide>
            <Copy>
              <Fade cascade damping={0.2} triggerOnce duration={1000}>
                <Heading $left>
                  <small>Our story</small>
                  <h2>Hospitality, refined to the last detail</h2>
                </Heading>
                <p>
                  NE-YO Hotel &amp; Suites is a five-star address built around one idea: you should never have to ask twice.
                  From the marble lobby to your turn-down service, every moment is shaped by people who care.
                </p>
                <p>
                  Choose from amazing rooms and suites, restaurants and bars, full spa and pools.
                </p>
                <span className="sign">The NE-YO Family</span>
              </Fade>
            </Copy>
          </Two>
          <Zoom triggerOnce duration={1000}>
            <Stats>
              {stats.map((s) => (
                <div key={s.l}>
                  <strong>{s.n}</strong>
                  <span>{s.l}</span>
                </div>
              ))}
            </Stats>
          </Zoom>
        </Container>
      </Section>

<HotelVideoShowcase/>

      {/* ---------------------------- ROOMS --------------------------- */}
      {/* <Section id="rooms" $tint>
        <Container>
          <Fade direction="up" triggerOnce>
            <Heading>
              <small>Rooms &amp; suites</small>
              <h2>Your private world, your way</h2>
              <p>Every room includes breakfast, fast Wi-Fi and 24-hour room service.</p>
            </Heading>
          </Fade>
          <Grid $min="270px">
            {rooms.map((r, i) => (
              <Fade key={r.name} direction="up" triggerOnce delay={i * 120} duration={1000} style={{ height: "100%" }}>
                <RoomCard>
                  <div className="pic">
                    <img src={img(r.img, 800)} alt={r.name} loading="lazy" />
                    <span className="price">{r.price} / night</span>
                  </div>
                  <div className="body">
                    <h3>{r.name}</h3>
                    <span className="meta">{r.size} · {r.guests}</span>
                    <ul>{r.perks.map((p) => <li key={p}>{p}</li>)}</ul>
                    <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                      Reserve this room
                    </button>
                  </div>
                </RoomCard>
              </Fade>
            ))}
          </Grid>
        </Container>
      </Section> */}

      <RoomsSection/>

      {/* -------------------------- AMENITIES ------------------------- */}
      <Section id="amenities">
        <Container>
          <Fade direction="up" triggerOnce>
            <Heading>
              <small>Amenities</small>
              <h2>Everything you need, already arranged</h2>
            </Heading>
          </Fade>
          <Grid $min="220px">
            {amenities.map((a, i) => (
              <Zoom key={a.t} triggerOnce delay={(i % 4) * 100} duration={900} style={{ height: "100%" }}>
                <AmenityCard>
                  <div className="ic">{a.i}</div>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
                </AmenityCard>
              </Zoom>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ---------------------------- DINING -------------------------- */}
      <Section id="dining" $tint>
        <Container>
          <Fade direction="up" triggerOnce>
            <Heading>
              <small>Dining &amp; bars</small>
              {/* <h2>Three places to taste Lagos</h2> */}
              <p>Local ingredients, global technique and service that glides.</p>
            </Heading>
          </Fade>
          <Grid $min="280px">
            {dining.map((d, i) => (
              <Slide key={d.name} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} triggerOnce duration={1100} style={{ height: "100%" }}>
                <DineCard>
                  <img src={img(d.img, 900)} alt={d.name} loading="lazy" />
                  <div className="txt">
                    <h3>{d.name}</h3>
                    <p>{d.d}</p>
                  </div>
                </DineCard>
              </Slide>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ------------------------------ SPA --------------------------- */}
      <Section id="spa">
        <Container>
          <SpaBand>
            <Slide direction="left" triggerOnce duration={1200} style={{ height: "100%" }}>
              <div className="pic" style={{ height: "100%" }}>
                <img src={img("photo-1540555700478-4be289fbecef", 1000)} alt="Spa treatment room" loading="lazy" />
              </div>
            </Slide>
            <div className="txt">
              <Fade cascade damping={0.18} triggerOnce duration={1000} direction="up">
                <h2>Spa &amp; wellness sanctuary</h2>
                <p>Eight treatment rooms, a hammam, a steam room and a quiet garden. Our therapists blend African botanicals with classic technique.</p>
                <ul>
                  <li>Deep-tissue massage</li>
                  <li>Couples rituals</li>
                  <li>Hammam &amp; steam</li>
                  <li>Facials &amp; body wraps</li>
                </ul>
                <div><Button>Book a treatment</Button></div>
              </Fade>
            </div>
          </SpaBand>
        </Container>
      </Section>

      {/* ---------------------------- GALLERY ------------------------- */}
      <Section id="gallery" $tint>
        <Container>
          <Fade direction="up" triggerOnce>
            <Heading>
              <small>Gallery</small>
              <h2>A glimpse inside NE-YO</h2>
            </Heading>
          </Fade>
          <Masonry>
            {gallery.map((g, i) => (
              <Zoom key={g.id} triggerOnce delay={i * 90} duration={900} style={{ display: "contents" }}>
                <Tile $span={g.span} onClick={() => setLightbox(g.id)} aria-label="Open photo">
                  <img src={g.id} alt="NE-YO Hotel and Suites" loading="lazy" />
                </Tile>
              </Zoom>
            ))}
          </Masonry>
        </Container>
      </Section>
      {lightbox && (
        <Lightbox onClick={() => setLightbox(null)} role="dialog" aria-label="Photo preview">
          <img src={img(lightbox, 1800)} alt="NE-YO Hotel and Suites enlarged" />
        </Lightbox>
      )}

      {/* ----------------------------- OFFERS ------------------------- */}
      <Section id="offers">
        <Container>
          <Fade direction="up" triggerOnce>
            <Heading>
              <small>Special offers</small>
              <h2>Reasons to stay a little longer</h2>
            </Heading>
          </Fade>
          <Grid $min="280px">
            {offers.map((o, i) => (
              <Fade key={o.t} direction="up" triggerOnce delay={i * 150} duration={1000} style={{ height: "100%" }}>
                <OfferCard>
                  <span className="tag">{o.tag}</span>
                  <h3>{o.t}</h3>
                  <p>{o.d}</p>
                  <a href="#contact">Claim this offer</a>
                </OfferCard>
              </Fade>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ---------------------------- EVENTS -------------------------- */}
      <Events $src={img("photo-1519741497674-611481863552", 2000)} id="events">
        <div className="in">
          <Fade cascade damping={0.2} triggerOnce duration={1100} direction="up">
            <h2>Weddings, galas and boardrooms</h2>
            <p>A ballroom for 300, a garden terrace for 120 and four meeting suites. Our events team handles décor, catering and every last detail.</p>
            <div className="chips">
              <span>Weddings</span><span>Corporate retreats</span><span>Birthdays</span><span>Conferences</span>
            </div>
            <Button $ghost onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Request a proposal
            </Button>
          </Fade>
        </div>
      </Events>

      {/* ---------------------------- REVIEWS ------------------------- */}
      <Section id="reviews" $tint>
        <Container>
          <Fade direction="up" triggerOnce>
            <Heading>
              <small>Guest voices</small>
              <h2>Words from those who stayed</h2>
            </Heading>
          </Fade>
          <Zoom triggerOnce duration={1000}>
            <Reviews>
              <div className="mark">“</div>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote key={review}>{reviews[review].q}</blockquote>
              <cite><b>{reviews[review].a}</b> · {reviews[review].r}</cite>
              <Dots>
                {reviews.map((r, i) => (
                  <button key={r.a} className={i === review ? "on" : ""} onClick={() => setReview(i)} aria-label={`Review ${i + 1}`} />
                ))}
              </Dots>
            </Reviews>
          </Zoom>
        </Container>
      </Section>

      {/* ------------------------------ FAQ --------------------------- */}
      <Section id="faq">
        <Container>
          <Fade direction="up" triggerOnce>
            <Heading>
              <small>Good to know</small>
              <h2>Frequently asked questions</h2>
            </Heading>
          </Fade>
          <FaqList>
            <Fade cascade damping={0.12} triggerOnce direction="up" duration={800}>
              {faqs.map((f, i) => (
                <FaqItem key={f.q} $open={open === i}>
                  <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                    {f.q}
                    <span className="plus">+</span>
                  </button>
                  <div className="ans"><div><p>{f.a}</p></div></div>
                </FaqItem>
              ))}
            </Fade>
          </FaqList>
        </Container>
      </Section>

      {/* ----------------------------- CONTACT ------------------------ */}
      <Section id="contact" $tint>
        <Container>
          <Fade direction="up" triggerOnce>
            <Heading>
              <small>Reservations</small>
              <h2>Let us prepare your arrival</h2>
              <p>Send your dates and our team replies within the hour.</p>
            </Heading>
          </Fade>
          <ContactGrid>
            <Slide direction="left" triggerOnce duration={1100} style={{ height: "100%" }}>
              <Info>
                <h3>Find us</h3>
                <div className="row"><i>📍</i><div><b>Address</b><span>7 NE-YO Road, GRA Phase 2, Asaba, Delta State, Nigeria</span></div></div>
                <div className="row"><i>📞</i><div><b>Reservations</b><span>+234 818 192 4856, +234 818 192 4836</span></div></div>
                <div className="row"><i>✉️</i><div><b>Email</b><span>stay@neyohotel.com</span></div></div>
                {/* <div className="row"><i>🛬</i><div><b>Airport</b><span>45 minutes from Murtala Muhammed International</span></div></div> */}
                <iframe
                  className="map"
                  title="NE-YO Hotel location"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Victoria+Island+Lagos&output=embed"
                />
              </Info>
            </Slide>
       <Slide direction="right" triggerOnce duration={1100}>
      <Form onSubmit={handleSubmit}>
        <h3>Enquire now</h3>
        <label>
          Full name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@email.com"
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234"
          />
        </label>

        <label className="full">
          Special requests
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Anniversary, airport pickup, dietary needs…"
          />
        </label>

        <div className="full">
          <Button type="submit">Send request</Button>
        </div>

        {sent && (
          <div className="ok">
            Thank you. Your request is received and our team will contact you shortly.
          </div>
        )}
      </Form>
    </Slide>
          </ContactGrid>
        </Container>
      </Section>

      {/* ---------------------------- NEWSLETTER ---------------------- */}
      <Newsletter>
        <Fade direction="up" triggerOnce>
          <Heading>
            <small>Stay in touch</small>
            <h2>Private offers, first</h2>
          </Heading>
          <form onSubmit={(e) => { e.preventDefault(); setJoined(true); }}>
            <input type="email" required placeholder="Your email address" aria-label="Email address" />
            <Button type="submit">{joined ? "You're subscribed" : "Subscribe"}</Button>
          </form>
        </Fade>
      </Newsletter>
    </Page>
  );
}
