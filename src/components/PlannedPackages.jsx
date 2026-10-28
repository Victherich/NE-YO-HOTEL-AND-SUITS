
// import React from 'react'
// import Hero3 from './Hero3'
// import styled from 'styled-components'
// import TravelPackageCard from './TravelPackageCard'
// import FamilyTourPackagesCard from './FamilyTourPackagesCard'
// import tourcard1 from '../Images/tourcard1.jpeg'
// import SummerHolidayCard from './SummerHolidayCard'
// import SideCard from './SideCard'
// import PopularToursHeader from './PopularToursHeader'

// import harvaBali from '../Images2/harva Bali.jpg';
// import harvaDoha from '../Images2/harva Doha.jpg';
// import harvaDubai from '../Images2/harva Dubai.jpg';
// import harvaKigali from '../Images2/harva Kigali.jpg';
// import harvaLondon from '../Images2/harva London.jpg';
// import harvaMauritius from '../Images2/harva Mauritius.jpg';
// import harvaPackages from '../Images2/harva Packages.jpg';
// import harvaParis from '../Images2/harva Paris.jpg';
// import harvaSingapore from '../Images2/harva Singapore.jpg';
// import harvaThailand from '../Images2/harva Thailand.jpg';
// import harvaVisa from '../Images2/harva Visa.jpg';
// import harvaZanZiba from '../Images2/harva Zanziba.jpg';



// const Div = styled.div`
// display:flex;
// width:100%;
// padding:20px;

// `

// const Div1 = styled.div`
//     width:70%;
//     padding:10px;
// @media(max-width:768px){
//   width:100%;
// }

// `

// const Div2 = styled.div`
// width:30%;
// padding:20px;
// @media(max-width:768px){
//   display:none;
// }
// `

// const PlannedPackages = () => {

// const travelPackages = [
//   {
//     id: 1,
//     image: harvaDubai,
//     title: 'SUMMER IN DUBAI & SEYCHELLES',
//     location: 'DUBAI & SEYCHELLES',
//     duration: '3 Nights Dubai & 4 Nights Seychelles',
//     price: 2999999,
//     date: '6th – 14th August 2025',
//     link: '/packages/dubai-seychelles-summer',
//   },
//   {
//     id: 2,
//     image: harvaDoha,
//     title: 'SUMMER IN DOHA',
//     location: 'DOHA, QATAR',
//     duration: '7 Days & 6 Nights',
//     price: 3210608,
//     date: '15th – 21st August 2025',
//     link: '/packages/doha-summer-getaway',
//   },
//   {
//     id: 3,
//     image: harvaLondon,
//     title: 'LONDON CITY EXPLORER',
//     location: 'LONDON, UK',
//     duration: '5 Nights Hotel stay with breakfast',
//     price: 2800000,
//     date: '10th – 15th September 2025',
//     link: '/packages/london-city-explorer',
//   },
//   {
//     id: 4,
//     image: harvaParis,
//     title: 'ROMANTIC PARIS ESCAPE',
//     location: 'PARIS, FRANCE',
//     duration: '6 Days & 5 Nights',
//     price: 3200000,
//     date: '20th – 24th October 2025',
//     link: '/packages/paris-romantic-escape',
//   },
//   {
//     id: 5,
//     image: harvaBali,
//     title: 'BALI ADVENTURE PACKAGE',
//     location: 'BALI, INDONESIA',
//     duration: '6 Days & 5 Nights',
//     price: 1600000,
//     date: '1st – 10th November 2025',
//     link: '/packages/bali-adventure',
//   },
//   {
//     id: 6,
//     image: harvaKigali,
//     title: 'KIGALI CITY TOUR',
//     location: 'KIGALI, RWANDA',
//     duration: '5 Nights Hotel stay with breakfast',
//     price: 2900000,
//     date: '15th – 18th December 2025',
//     link: '/packages/kigali-city-tour',
//   },
//   {
//     id: 7,
//     image: harvaMauritius,
//     title: 'MAURITIUS ISLAND GETAWAY',
//     location: 'PORT LOUIS, MAURITIUS',
//     duration: '5 Nights Hotel stay with breakfast',
//     price: 2600000,
//     date: '5th – 11th January 2026',
//     link: '/packages/mauritius-getaway',
//   },
//   {
//     id: 8,
//     image: harvaSingapore,
//     title: 'SUMMER IN SINGAPORE',
//     location: 'SINGAPORE',
//     duration: '8 Nights',
//     price: 3200000, // Example, since it's a general category
//     date: 'ALL YEAR',
//     link: '/packages',
//   },
//   // {
//   //   id: 9,
//   //   image: harvaSummer,
//   //   title: 'SUMMER ESCAPES',
//   //   location: 'GLOBAL',
//   //   duration: 'VARIOUS',
//   //   price: 0,
//   //   date: 'SUMMER 2025',
//   //   link: '/packages/summer-escapes',
//   // },
//   {
//     id: 10,
//     image: harvaThailand,
//     title: 'THAILAND BEACH RETREAT',
//     location: 'PHUKET, THAILAND',
//     duration: '5 Nights Hotel stay with breakfast',
//     price: 1990000,
//     date: '10th – 19th February 2026',
//     link: '/packages/thailand-retreat',
//   },
//   // {
//   //   id: 11,
//   //   image: harvaVisa,
//   //   title: 'HARVA VISA SERVICES',
//   //   location: 'GLOBAL',
//   //   duration: 'N/A',
//   //   price: 0,
//   //   date: 'N/A',
//   //   link: '/services/visa-assistance',
//   // },
//   {
//     id: 12,
//     image: harvaZanZiba,
//     title: 'ZANZIBAR ISLAND HOLIDAY',
//     location: 'ZANZIBAR, TANZANIA',
//     duration: '6 Days & 5 Nights',
//     price: 2000000,
//     date: '20th – 25th March 2026',
//     link: '/packages/zanzibar-holiday',
//   },
// ];


// const relocationServices = [
//   {
//     id: 1, // Unique ID for React key prop
//     promoImage: harvaDubai, // Corresponds to image_df5b27.png / image_b49884.png
//     logo: 'https://via.placeholder.com/80x30/FFFFFF/000000?text=Harvanna Travels and Tour Ltd', // Placeholder for Harvanna Travels and Tour Ltd logo
//     title: 'Relocate to Canada',
//     rating: 5, // 5 stars as seen in the image
//     feeAmount: 390000, // N390,000
//     link: '/services/relocate-canada', // Example link for details
//   },
//   {
//     id: 2,
//     promoImage: harvaDoha, // Placeholder for another relocation service
//     logo: 'https://via.placeholder.com/80x30/FFFFFF/000000?text=Harvanna Travels and Tour Ltd',
//     title: 'Relocate to Australia',
//     rating: 4, // Example rating
//     feeAmount: 550000,
//     link: '/services/relocate-australia',
//   },]

//   return (
//     <div>
//       <Hero3/>
//       <Div>
//         <Div1>
//  {travelPackages.map(pkg => (
//           <TravelPackageCard
//             key={pkg.id} // Essential for React lists
//             image={pkg.image}
//             title={pkg.title}
//             location={pkg.location}
//             duration={pkg.duration}
//             price={pkg.price}
//             date={pkg.date}
//             link={pkg.link}
//           />
//         ))}
//         </Div1>
//         <Div2>
//             <PopularToursHeader/>
//    {relocationServices.map(service => (
//           <SideCard
//             key={service.id} // Essential for React lists
//             promoImage={service.promoImage}
//             logo={service.logo}
//             title={service.title}
//             rating={service.rating}
//             feeAmount={service.feeAmount}
//             link={service.link}
//           />
//         ))}
//         </Div2>
//       </Div>
//     </div>
//   )
// }

// export default PlannedPackages




import React from 'react';
import styled from 'styled-components';
// import { holidayPackages } from './holidayPackagesData'; // Assuming this file exists
import { holidayPackages } from './HolidayPackagesArray';
import Hero3 from './Hero3';
import TravelPackageCard from './TravelPackageCard';
import SideCard from './SideCard';
import PopularToursHeader from './PopularToursHeader';
import HolidayApplicationForm from './HolidayApplicationForm';

const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const Div1 = styled.div`
  width: 70%;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Div2 = styled.div`
  width: 30%;
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const PlannedPackages = () => {
  return (
    <div>
      <Hero3 />
      <Div>
        <Div1>
          {/* Main card section: displays all holiday packages */}
          {holidayPackages.map(pkg => (
            <TravelPackageCard
              key={pkg.id}
              image={pkg.image}
              title={pkg.title}
              description={pkg.description} // Added description
              location={pkg.location}
              duration={pkg.duration}
              price={pkg.price}
              rating={pkg.rating}
              link={`/holidaydetailspage/${pkg.id}`} // Link to the details page
            />
          ))}
        </Div1>
        <Div2>
          <PopularToursHeader />
          {/* Side card section: displays only the first 3 holiday packages */}
          {holidayPackages.slice(0, 3).map(pkg => (
            <SideCard
              key={pkg.id}
              promoImage={pkg.image}
              title={pkg.title}
              rating={pkg.rating}
              feeAmount={pkg.price} // Using price as fee amount for this example
              link={`/holidays/${pkg.id}`}
            />
          ))}
        </Div2>
      </Div>
    
    </div>
  );
};

export default PlannedPackages;