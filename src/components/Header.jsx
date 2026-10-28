import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------
   NE-YO HOTEL & SUITES — Header
   Install:  npm i styled-components react-awesome-reveal
   Usage:    <NeYoHeader />   (render above <NeYoHotelLanding />)
   Features: transparent over hero -> frosted white on scroll,
             hides on scroll down / returns on scroll up,
             scroll-progress line, active-section highlight,
             Experiences dropdown, animated hamburger + slide-in drawer.
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

const DISPLAY = "'Cormorant Garamond', 'Times New Roman', serif";
const BODY = "'Jost', system-ui, sans-serif";
const BP = "1100px"; // below this width the hamburger appears
const NAV_H = 74;

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Rooms & Suites", id: "rooms" },
  { label: "Amenities", id: "amenities" },
  {
    label: "Experiences",
    children: [
      { label: "Dining & Bars", id: "dining" },
      { label: "Spa & Wellness", id: "spa" },
      { label: "Weddings & Events", id: "events" },
      { label: "Gallery", id: "gallery" },
    ],
  },
  { label: "Offers", id: "offers" },
  { label: "Contact", id: "contact" },
];

const mobileExtra = [
  { label: "Guest Reviews", id: "reviews" },
  { label: "FAQ", id: "faq" },
];

const allIds = [
  "home", "about", "rooms", "amenities", "dining", "spa",
  "gallery", "offers", "events", "reviews", "faq", "contact",
];

/* ---------------------------- ANIMATIONS --------------------------- */

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;
const drop = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const backdropIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const drawerIn = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`;

/* ------------------------------ LAYOUT ----------------------------- */

const Shell = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: translateY(${(p) => (p.$hidden ? "0%" : "0")});
  transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  font-family: ${BODY};
`;

/* Top utility strip */
const Utility = styled.div`
  background: ${C.lagoon};
  color: ${C.brassLight};
  font-size: 0.82rem;
  max-height: ${(p) => (p.$solid ? "0" : "40px")};
  overflow: hidden;
  transition: max-height 0.4s ease;
font-size:0.7rem;
  .in {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .group { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  a { color: inherit; text-decoration: none; transition: color 0.3s; font-size:0.7rem; }
  a:hover { color: ${C.white}; }
  .sep { opacity: 0.4; }
  .note { color: ${C.white}; opacity: 0.85; }

  @media (max-width: 760px) { .hide-sm { display: none; } .in { justify-content: center; } }
  @media (max-width: 420px) { display: none; }
`;

const Bar = styled.header`
  position: relative;
  // background: ${(p) => (p.$solid ? "rgba(255,255,255,0.94)" : "linear-gradient(180deg, rgba(10,32,31,0.55), rgba(10,32,31,0))")};
 background: ${(p) => (p.$solid ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.94)")};
  backdrop-filter: ${(p) => (p.$solid ? "blur(14px) saturate(1.4)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$solid ? "blur(14px) saturate(1.4)" : "none")};
  box-shadow: ${(p) => (p.$solid ? "0 8px 30px rgba(15,59,58,0.12)" : "0 8px 30px rgba(15,59,58,0.12)")};
  border-bottom: 1px solid ${(p) => (p.$solid ? "rgba(176,141,87,0.35)" : "transparent")};
  transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
`;

const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  // min-height: ${NAV_H}px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: ${BP}) { min-height: 64px; }
`;

const Progress = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, ${C.brass}, ${C.brassLight}, ${C.brass});
  transform-origin: left;
  transform: scaleX(${(p) => p.$v});
  opacity: ${(p) => (p.$on ? 1 : 0)};
  transition: opacity 0.3s;
`;

/* ------------------------------- LOGO ------------------------------ */

const LogoWrap = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  // color: ${(p) => (p.$solid ? C.lagoon : C.white)};
  color: ${(p) => (p.$solid ? C.lagoon : C.lagoon)};
  transition: color 0.4s;
  flex-shrink: 0;

  .crest {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    border: 1px solid ${C.brass};
    background: ${(p) => (p.$solid ? C.lagoon : "rgba(255,255,255,0.12)")};
    color: ${C.brassLight};
    font-family: ${DISPLAY};
    font-weight: 600;
    font-size: 1.15rem;
    letter-spacing: 1px;
    position: relative;
    transition: all 0.4s;
  }
  .crest::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    border: 1px solid rgba(227, 207, 166, 0.55);
  }
  &:hover .crest { transform: rotate(8deg) scale(1.05); }

  .words { display: flex; flex-direction: column; line-height: 1.05; }
  .main {
    font-family: ${DISPLAY};
    font-weight: 600;
    font-size: 1.55rem;
    letter-spacing: 3px;
  }
  .sub {
    font-size: 0.68rem;
    letter-spacing: 5px;
    color: ${C.brass};
    padding-top: 2px;
  }
  @media (max-width: 420px) {
    .main { font-size: 1.25rem; letter-spacing: 2px; }
    .sub { font-size: 0.58rem; letter-spacing: 3px; }
    .crest { width: 40px; height: 40px; font-size: 1rem; }
  }
`;

/* ------------------------------ DESKTOP NAV ------------------------ */

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: ${BP}) { display: none; }
`;

const NavItem = styled.div`
  position: relative;
`;

const linkBase = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 10px;
  min-height: 44px;
  background: none;
  border: 0;
  cursor: pointer;
  font-family: ${BODY};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  // color: ${(p) => (p.$solid ? C.ink : C.white)};
    color: ${(p) => (p.$solid ? C.ink : C.ink)};

  transition: color 0.3s;

  &::after {
    content: "";
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 6px;
    height: 1px;
    // background: ${C.brass};
      background: transparent;
    transform: scaleX(${(p) => (p.$active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  &:hover, &:focus-visible { color: ${C.brass}; }
  &:hover::after, &:focus-visible::after { transform: scaleX(1); }
  // ${(p) => p.$active && css`color: ${C.brass};`}
    // ${(p) => p.$active && css`color: ;`}
`;

const NavLink = styled.a`${linkBase}`;
const NavButton = styled.button`${linkBase}`;

const Caret = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(${(p) => (p.$open ? "-135deg" : "45deg")}) translateY(${(p) => (p.$open ? "-1px" : "-2px")});
  transition: transform 0.3s;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 230px;
  list-style: none;
  padding: 10px;
  background: ${C.white};
  border: 1px solid ${C.brassLight};
  border-top: 2px solid ${C.brass};
  box-shadow: 0 20px 40px rgba(15, 59, 58, 0.18);
  animation: ${drop} 0.3s ease both;

  a {
    display: block;
    padding: 10px;
    min-height: 44px;
    color: ${C.lagoon};
    text-decoration: none;
    font-size: 0.95rem;
    border-left: 2px solid transparent;
    transition: all 0.3s;
  }
  a:hover, a:focus-visible, a.on {
    background: ${C.mist};
    border-left-color: ${C.brass};
    color: ${C.lagoonSoft};
  }
`;

/* ------------------------------ BOOK BUTTON ------------------------ */

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Book = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 10px;
  min-width: 140px;
  border: 1px solid ${C.brass};
  border-radius: 2px;
  background: linear-gradient(110deg, ${C.brass}, #d4b77e, ${C.brass});
  background-size: 200% 100%;
  color: ${C.lagoon};
  font-weight: 500;
  font-size: 0.92rem;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    animation: ${shimmer} 1.2s linear infinite;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(176, 141, 87, 0.4);
  }
  @media (max-width: 480px) { display: none; }
`;

/* ------------------------------ HAMBURGER -------------------------- */

const Burger = styled.button`
  display: none;
  position: relative;
  width: 46px;
  height: 46px;
  border: 1px solid ${(p) => (p.$solid ? C.brass : "rgba(255,255,255,0.6)")};
  border-radius: 50%;
  background:${C.lagoon};
  // background: ${(p) => (p.$solid ? "transparent" : "rgba(255,255,255,0.1)")};
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1002;

  span {
    position: absolute;
    left: 12px;
    right: 12px;
    height: 1.5px;
    background: ${(p) => (p.$open || p.$solid ? C.white : C.white)};
    transition: transform 0.4s ease, opacity 0.3s, top 0.4s ease, background 0.3s;
  }
  span:nth-child(1) { top: ${(p) => (p.$open ? "22px" : "16px")}; transform: rotate(${(p) => (p.$open ? "45deg" : "0")}); }
  span:nth-child(2) { top: 22px; opacity: ${(p) => (p.$open ? 0 : 1)}; transform: scaleX(${(p) => (p.$open ? 0 : 0.7)}); transform-origin: right; }
  span:nth-child(3) { top: ${(p) => (p.$open ? "22px" : "28px")}; transform: rotate(${(p) => (p.$open ? "-45deg" : "0")}); }
  &:hover span:nth-child(2) { transform: scaleX(1); }

  @media (max-width: ${BP}) { display: block; }
`;

/* ------------------------------- DRAWER ---------------------------- */

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1001;
  background: rgba(10, 32, 31, 0.6);
  backdrop-filter: blur(3px);
  animation: ${backdropIn} 0.4s ease both;
`;

const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;
  width: min(420px, 100%);
  background: ${C.pearl};
  display: flex;
  flex-direction: column;
  animation: ${drawerIn} 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) both;
  box-shadow: -20px 0 60px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  font-family: ${BODY};

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;
    padding: 0 10px;
    background: ${C.lagoon};
    color: ${C.brassLight};
    border-bottom: 2px solid ${C.brass};
  }
  .top b { font-family: ${DISPLAY}; font-size: 1.35rem; font-weight: 600; letter-spacing: 3px; }
  .scroll { flex: 1; overflow-y: auto; padding: 10px; overscroll-behavior: contain; }
  .foot {
    padding: 10px;
    background: ${C.mist};
    border-top: 1px solid ${C.brassLight};
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.92rem;
    color: ${C.muted};
  }
  .foot a { color: ${C.lagoon}; text-decoration: none; font-weight: 500; }
`;

const Close = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid ${C.brassLight};
  color: ${C.brassLight};
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover { background: ${C.brass}; color: ${C.lagoon}; transform: rotate(90deg); }
`;

const MLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 52px;
  padding: 10px;
  text-decoration: none;
  font-family: ${DISPLAY};
  font-size: 1.65rem;
  font-weight: 500;
  color: ${(p) => (p.$active ? C.brass : C.lagoon)};
  border-bottom: 1px solid rgba(176, 141, 87, 0.3);
  transition: all 0.3s;
  &:hover { color: ${C.brass}; padding-left: 10px; background: ${C.white}; }
  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-top: 1.5px solid ${C.brass};
    border-right: 1.5px solid ${C.brass};
    transform: rotate(45deg);
    opacity: ${(p) => (p.$active ? 1 : 0.5)};
  }
`;

const MGroup = styled.div`
  .head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 52px;
    padding: 10px;
    background: none;
    border: 0;
    border-bottom: 1px solid rgba(176, 141, 87, 0.3);
    cursor: pointer;
    font-family: ${DISPLAY};
    font-size: 1.65rem;
    font-weight: 500;
    color: ${C.lagoon};
  }
  .plus { color: ${C.brass}; font-size: 1.6rem; transition: transform 0.4s; transform: rotate(${(p) => (p.$open ? "45deg" : "0")}); }
  .sub {
    display: grid;
    grid-template-rows: ${(p) => (p.$open ? "1fr" : "0fr")};
    transition: grid-template-rows 0.5s ease;
    background: ${C.mist};
  }
  .sub > div { overflow: hidden; }
  .sub a {
    display: block;
    padding: 10px;
    min-height: 46px;
    text-decoration: none;
    color: ${C.lagoonSoft};
    font-size: 1.02rem;
    border-left: 2px solid ${C.brass};
    margin-left: 10px;
  }
  .sub a:hover { background: ${C.white}; color: ${C.brass}; }
`;

const MBook = styled(Book)`
  display: inline-flex;
  width: 100%;
  min-height: 50px;
`;

/* =============================== COMPONENT ========================= */

export default function NeYoHeader() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const [group, setGroup] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const dropRef = useRef(null);
  const navigate = useNavigate();
const location = useLocation(); // 1. Get current route location

  const isHome = location.pathname === "/";

  /* scroll state: solid bg, hide/show, progress */
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setSolid(y > 60);
        setProgress(max > 0 ? Math.min(y / max, 1) : 0);
        if (y > lastY.current && y > 360) setHidden(true);
        else if (y < lastY.current) setHidden(false);
        lastY.current = y;
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll-spy: highlight the section in view */
  useEffect(() => {
    const els = allIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* lock body scroll while the drawer is open, close on Escape or resize */
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && (setMenu(false), setDrop(false));
    const onResize = () => window.innerWidth > 1100 && setMenu(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menu]);

  /* close the dropdown when clicking elsewhere */
  useEffect(() => {
    const onDoc = (e) => dropRef.current && !dropRef.current.contains(e.target) && setDrop(false);
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const go = useCallback((e, id) => {
    e.preventDefault();
    setMenu(false);
    setDrop(false);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = id === "home" ? 0 : 30;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
  }, []);

  const groupActive = links.find((l) => l.children)?.children.some((c) => c.id === active);
  const light = solid || menu; // dark text colours when the bar is white



const handleNav = (e, item) => {
    e.preventDefault();
    setMenu(false);
    setDrop(false);

    // Explicit route navigations
    if (item.id === "about") {
      navigate("/about");
      return;
    }
    if (item.id === "contact") {
      navigate("/contact"); // Change to "/contact-us" if your route path is named that
      return;
    }
    if (item.id === "home") {
      if (!isHome) {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Scroll behavior for on-page sections on the home route
    if (isHome) {
      const el = document.getElementById(item.id);
      if (el) {
        const offset = 30;
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - offset,
          behavior: "smooth"
        });
      }
    } else {
      // If user clicks another section while on a sub-page, navigate home first
      navigate("/", { state: { scrollTo: item.id } });
    }
  };


  // Filter links: show all on home '/', but only Home, About, & Contact on other routes
  const visibleLinks = isHome
    ? links
    : links.filter((l) => ["home", "about", "contact"].includes(l.id));



  return (
    <>
      <Shell $hidden={hidden && !menu}>
        <Utility $solid={solid}>
          <div className="in">
            <div className="group">
              <a href="tel:+2348181924856">📞 +234 818 192 4856, +234 818 192 4836</a>
              <span className="sep hide-sm">|</span>
              
            </div>
            <div className="group">
              {/* <span className="note">Free airport pickup on stays of 3 nights or more</span> */}
            <a className="hide-sm" href="mailto:stay@neyohotel.com">✉️ stay@neyohotel.com</a>
            </div>
          </div>
        </Utility>

        <Bar $solid={solid}>
          <Inner>
            <Fade direction="down" triggerOnce duration={1000}>
              <LogoWrap href="#home" $solid={light} onClick={(e) => go(e, "home")} aria-label="NE-YO Hotel & Suites, home">
                {/* <span className="crest">NY</span> */}
                <img src='/logo.png' alt="logo" style={{width:"40px"}}/>
                <span className="words">
                  <span className="main">NE-YO</span>
                  <span className="sub" style={{fontWeight:"500"}}>HOTEL &amp; SUITES</span>
                </span>
              </LogoWrap>
            </Fade>

            <Fade direction="down" cascade damping={0.08} triggerOnce duration={900} delay={200}>
              {/* <Nav aria-label="Primary">
                {links.map((l) =>
                  l.children ? (
                    <NavItem
                      key={l.label}
                      ref={dropRef}
                      onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setDrop(true)}
                      onMouseLeave={() => window.matchMedia("(hover: hover)").matches && setDrop(false)}
                    >
                      <NavButton $solid={solid} $active={groupActive} aria-haspopup="true" aria-expanded={drop} onClick={() => setDrop((d) => !d)}>
                        {l.label}
                        <Caret $open={drop} />
                      </NavButton>
                      {drop && (
                        <Dropdown>
                          {l.children.map((c) => (
                            <li key={c.id}>
                              <a href={`#${c.id}`} className={active === c.id ? "on" : ""} onClick={(e) => go(e, c.id)}>
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </Dropdown>
                      )}
                    </NavItem>
                  ) : (
                    <NavLink key={l.id} href={`#${l.id}`} $solid={solid} $active={active === l.id} onClick={(e) => {go(e, l.id);navigate('/')}}>
                      {l.label}
                      
                    </NavLink>
                  )
                )}
              </Nav> */}
              <Nav aria-label="Primary">
  {visibleLinks.map((l) =>
    l.children ? (
      <NavItem
        key={l.label}
        ref={dropRef}
        onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setDrop(true)}
        onMouseLeave={() => window.matchMedia("(hover: hover)").matches && setDrop(false)}
      >
        <NavButton $solid={solid} $active={groupActive} aria-haspopup="true" aria-expanded={drop} onClick={() => setDrop((d) => !d)}>
          {l.label}
          <Caret $open={drop} />
        </NavButton>
        {drop && (
          <Dropdown>
            {l.children.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className={active === c.id ? "on" : ""} onClick={(e) => handleNav(e, c)}>
                  {c.label}
                </a>
              </li>
            ))}
          </Dropdown>
        )}
      </NavItem>
    ) : (
      <NavLink
        key={l.id}
        href={l.id === "about" ? "/about" : l.id === "contact" ? "/contact" : `#${l.id}`}
        $solid={solid}
        $active={active === l.id}
        onClick={(e) => handleNav(e, l)}
      >
        {l.label}
      </NavLink>
    )
  )}
</Nav>
            </Fade>

            <Fade direction="down" triggerOnce duration={1000} delay={300}>
              <Actions>
                <Book href="#contact" onClick={(e) => go(e, "contact")}>Book / Enquire</Book>
                <Burger
                  $solid={solid}
                  $open={menu}
                  onClick={() => setMenu((m) => !m)}
                  aria-label={menu ? "Close menu" : "Open menu"}
                  aria-expanded={menu}
                  aria-controls="mobile-drawer"
                >
                  <span /><span /><span />
                </Burger>
              </Actions>
            </Fade>
          </Inner>
          <Progress $v={progress} $on={solid} />
        </Bar>
      </Shell>

      {menu && (
        <>
          <Backdrop onClick={() => setMenu(false)} />
          <Drawer id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Site menu">
            <div className="top">
              <b>NE-YO</b>
              <Close onClick={() => setMenu(false)} aria-label="Close menu">×</Close>
            </div>

            {/* <div className="scroll">
              <Fade cascade damping={0.07} direction="right" triggerOnce duration={600}>
                {links.map((l) =>
                  l.children ? (
                    <MGroup key={l.label} $open={group}>
                      <button className="head" onClick={() => setGroup((g) => !g)} aria-expanded={group}>
                        {l.label}
                        <span className="plus">+</span>
                      </button>
                      <div className="sub">
                        <div>
                          {l.children.map((c) => (
                            <a key={c.id} href={`#${c.id}`} onClick={(e) => go(e, c.id)}>{c.label}</a>
                          ))}
                    
                        </div>
                      </div>
                    </MGroup>
                  ) : (
                    <MLink key={l.id} href={`#${l.id}`} $active={active === l.id} onClick={(e) => go(e, l.id)}>
                      {l.label}
                    
                    </MLink>
                  )
                )}
                {mobileExtra.map((l) => (
                  <MLink key={l.id} href={`#${l.id}`} $active={active === l.id} onClick={(e) => go(e, l.id)}>
                    {l.label}
                  </MLink>
                ))}
              </Fade>
            </div> */}

            <div className="scroll">
  <Fade cascade damping={0.07} direction="right" triggerOnce duration={600}>
    {visibleLinks.map((l) =>
      l.children ? (
        <MGroup key={l.label} $open={group}>
          <button className="head" onClick={() => setGroup((g) => !g)} aria-expanded={group}>
            {l.label}
            <span className="plus">+</span>
          </button>
          <div className="sub">
            <div>
              {l.children.map((c) => (
                <a key={c.id} href={`#${c.id}`} onClick={(e) => handleNav(e, c)}>
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </MGroup>
      ) : (
        <MLink
          key={l.id}
          href={l.id === "about" ? "/about" : l.id === "contact" ? "/contact" : `#${l.id}`}
          $active={active === l.id}
          onClick={(e) => handleNav(e, l)}
        >
          {l.label}
        </MLink>
      )
    )}
    {/* Hide mobile extra links when not on home page */}
    {isHome &&
      mobileExtra.map((l) => (
        <MLink key={l.id} href={`#${l.id}`} $active={active === l.id} onClick={(e) => handleNav(e, l)}>
          {l.label}
        </MLink>
      ))}
  </Fade>
</div>

            <div className="foot">
              <MBook href="#contact" onClick={(e) => go(e, "contact")}>Book your stay</MBook>
              <span>1 NE-YO Avenue, Victoria Island, Lagos</span>
              <span>
                <a href="tel:+2348000000000">+234 800 000 0000</a> · <a href="mailto:stay@neyohotel.com">stay@neyohotel.com</a>
              </span>
            </div>
          </Drawer>
        </>
      )}
    </>
  );
}
