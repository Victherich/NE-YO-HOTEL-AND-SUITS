import React, { useContext } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";

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

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;


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
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
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
    margin: 10px auto 0;
    background: linear-gradient(90deg, transparent, ${C.brass}, transparent);
  }
`;

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
  ul { list-style: none; display: flex; flex-wrap: wrap; gap: 10px; padding: 0; margin: 0; }
  li { font-size: 0.82rem; border: 1px solid ${C.brassLight}; padding: 2px 10px; border-radius: 20px; color: ${C.lagoonSoft}; }
  button {
    margin-top: auto; cursor: pointer; background: transparent;
    border: 1px solid ${C.lagoon}; color: ${C.lagoon};
    padding: 10px; min-height: 44px; font-weight: 500; transition: all 0.3s;
  }
  button:hover { background: ${C.lagoon}; color: ${C.white}; }
`;

export default function RoomsSection({ onSelectRoom }) {
 const {roomsData}= useContext(Context);   
 const navigate = useNavigate();
  return (
    <Section id="rooms" $tint>
      <Container>
        <Fade direction="up" triggerOnce>
          <Heading>
            <small>Rooms &amp; suites</small>
            <h2>Your private world, your way</h2>
            <p>All rooms are new and Air Conditioned, well equipped to enjoy a pleasant and comfortable stay.</p>
          </Heading>
        </Fade>
        <Grid $min="270px">
          {roomsData.map((r, i) => (
            <Fade key={r.id} direction="up" triggerOnce delay={i * 120} duration={1000} style={{ height: "100%" }}>
              <RoomCard>
                <div className="pic">
                  <img src={r.images[0]} alt={r.name} loading="lazy" />
                  <span className="price">{r.price} / night</span>
                </div>
                <div className="body">
                  <h3>{r.name}</h3>
                  <div className="meta">{r.size} • {r.guests}</div>
                  <ul>
                    {r.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                  <button onClick={() => navigate (`/hoteldetail/${r.id}`)}>
                    Reserve suite
                  </button>
                </div>
              </RoomCard>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}