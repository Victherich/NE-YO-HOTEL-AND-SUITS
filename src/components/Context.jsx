import React, { createContext } from 'react'
import im9 from '../Images3/im (9).jpeg';
import im10 from '../Images3/im (10).jpeg';
import im11 from '../Images3/im (11).jpeg';
import im12 from '../Images3/im (12).jpeg';
import im13 from '../Images3/im (13).jpeg';
import im14 from '../Images3/im (14).jpeg';
import im15 from '../Images3/im (15).jpeg';
import im16 from '../Images3/im (16).jpeg';
import im17 from '../Images3/im (17).jpeg';
import im18 from '../Images3/im (18).jpeg';
import im19 from '../Images3/im (19).jpeg';
import im20 from '../Images3/im (20).jpeg';
import im21 from '../Images3/im (21).jpeg';
import im22 from '../Images3/im (22).jpeg';
import im23 from '../Images3/im (23).jpeg';
import im24 from '../Images3/im (24).jpeg';
import im25 from '../Images3/im (25).jpeg';
import im26 from '../Images3/im (26).jpeg';
import im27 from '../Images3/im (27).jpeg';
import im28 from '../Images3/im (28).jpeg';
import im29 from '../Images3/im (29).jpeg';
import im30 from '../Images3/im (30).jpeg';
import im31 from '../Images3/im (31).jpeg';
import im32 from '../Images3/im (32).jpeg';
import im33 from '../Images3/im (33).jpeg';
import im34 from '../Images3/im (34).jpeg';
import im35 from '../Images3/im (35).jpeg';
import im36 from '../Images3/im (36).jpeg';
import im37 from '../Images3/im (37).jpeg';
import im38 from '../Images3/im (38).jpeg';
import im39 from '../Images3/im (39).jpeg';
import im40 from '../Images3/im (40).jpeg';
import im41 from '../Images3/im (41).jpeg';
import im42 from '../Images3/im (42).jpeg';
import im43 from '../Images3/im (43).jpeg';
import im44 from '../Images3/im (44).jpeg';
import im45 from '../Images3/im (45).jpeg';
import spstand1 from '../Images3/spstand1 (1).jpeg';

import spstand2 from '../Images3/spstand1 (2).jpeg';
import spstand3 from '../Images3/spstand1 (3).jpeg';
// 1
import spexe1 from '../Images3/spexe1 (1).jpeg';

// 2
import spexe2 from '../Images3/spexe1 (2).jpeg';

// 3
import spexe3 from '../Images3/spexe1 (3).jpeg';

// 4
import spexe4 from '../Images3/spexe1 (4).jpeg';

import spexe5 from '../Images3/spexe1 (5).jpeg';
import stndd1 from '../Images3/stndd (1).jpeg';
import stndd2 from '../Images3/stndd (2).jpeg';
import stndd3 from '../Images3/stndd (3).jpeg';
import stndd4 from '../Images3/stndd (4).jpeg';
import stndd5 from '../Images3/stndd (5).jpeg';
import stndd6 from '../Images3/stndd (6).jpeg';
// 1
import glb1 from '../Images3/glb1.jpeg';

// 2
import glb2 from '../Images3/glb2.jpeg';

// 3
import glb3 from '../Images3/glb3.jpeg';

// 4
import glb4 from '../Images3/glb4.jpeg';

// 5
import glb5 from '../Images3/glb5.jpeg';

// 6
import glb6 from '../Images3/glb6.jpeg';

// 7
import glb7 from '../Images3/glb7.jpeg';

// 8
import glb8 from '../Images3/glb8.jpeg';

export const Context = createContext();

const ContextProvider = ({children}) => {
// const api_url="https://neyohotel.com/api_neyo"

const api_url="https://neyohotel.com/api_neyo"


// const roomsData = [
//   {
//     id: 1,
//     images: ["photo-1618773928121-c32242e63f39", "photo-1590490360182-c33d57733427", "photo-1584622650111-993a426fbf0a"],
//     name: "Deluxe King Room",
//     size: "38 m²",
//     guests: "2 guests",
//     price: "₦185,000",
//     perks: ["King bed", "City view", "Rain shower"]
//   },
//   {
//     id: 2,
//     images: ["photo-1578683010236-d716f9a3f461", "photo-1616486338812-3dadae4b4ace", "photo-1507652313519-d4e9174996dd"],
//     name: "Executive Suite",
//     size: "62 m²",
//     guests: "3 guests",
//     price: "₦320,000",
//     perks: ["Lounge area", "Work desk", "Lagoon view"]
//   },
//   {
//     id: 3,
//     images: ["photo-1582719478250-c89cae4dc85b", "photo-1596394516093-501ba68a0ba6", "photo-1584132967334-10e028bd69f7"],
//     name: "Royal Terrace Suite",
//     size: "95 m²",
//     guests: "4 guests",
//     price: "₦520,000",
//     perks: ["Private terrace", "Butler", "Jacuzzi"]
//   },
//   {
//     id: 4,
//     images: ["photo-1631049307264-da0ec9d70304", "photo-1566665797739-1674de7a421a", "photo-1600566753376-12c8ab7fb75b"],
//     name: "Presidential Suite",
//     size: "180 m²",
//     guests: "6 guests",
//     price: "₦1,200,000",
//     perks: ["Two bedrooms", "Dining room", "Private lift"]
//   },
// ];

const roomsData = [
  {
    id: 1,
    images: [spexe1, spexe2, spexe3, spexe4, spexe5],
    name: "Super Executive Luxury Room",
    size: "First Floor",
    guests: "2 guests",
    price: 80000,
    perks: ["Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  },
  {
    id: 2,
    // images: [im13, im14, im15, im16],
    images:[glb1, glb2, glb3,glb4,glb5,glb6,glb7,glb8],
    name: "Luxury Executive Room",
    size: "First Floor",
    guests: "2 guests",
    price: 70000,
    perks: ["Twin beds (2 x 0.90m)", "Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  },
  {
    id: 3,
    images: [im18, im17, im19, im20],
    name: "Standard Executive Room",
    size: "First Floor",
    guests: "2 guests",
    price: 60000,
    perks: ["Large bed", "Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  },
  {
    id: 4,
    // images: [im21, im22, im23, im24],
    images:[stndd1, stndd2, stndd3, stndd4, stndd5, stndd6],
    name: "Standard Deluxe Room",
    size: "Ground / First Floor",
    guests: "2 guests",
    price: 40000,
    perks: ["Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  },
  {
    id: 5,
    images: [spstand1, spstand2, spstand3],
    name: "Super Standard Room",
    size: "First Floor",
    guests: "2 guests",
    price: 50000,
    perks: ["Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  }
];


  return (
    <Context.Provider value={{api_url, roomsData}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
