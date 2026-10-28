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

export const Context = createContext();

const ContextProvider = ({children}) => {
// const api_url="https://elexdonpay.com/api_neyo"

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
    images: [im9, im10, im11, im12],
    name: "Super Executive Luxury Room",
    size: "First Floor",
    guests: "2 guests",
    price: "₦80,000",
    perks: ["Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  },
  {
    id: 2,
    images: [im13, im14, im15, im16],
    name: "Luxury Executive Room",
    size: "First Floor",
    guests: "2 guests",
    price: "₦70,000",
    perks: ["Twin beds (2 x 0.90m)", "Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  },
  {
    id: 3,
    images: [im18, im17, im19, im20],
    name: "Standard Executive Room",
    size: "First Floor",
    guests: "2 guests",
    price: "₦60,000",
    perks: ["Large bed", "Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  },
  {
    id: 4,
    images: [im21, im22, im23, im24],
    name: "Standard Deluxe Room",
    size: "Ground / First Floor",
    guests: "2 guests",
    price: "₦50,000",
    perks: ["Air conditioning", "Gym & pool access", "Minibar", "Flat-screen TV", "Free Wi-Fi", "Breakfast included"]
  },
  {
    id: 5,
    images: [im25, im26, im27, im28],
    name: "Super Standard Room",
    size: "First Floor",
    guests: "2 guests",
    price: "₦40,000",
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
