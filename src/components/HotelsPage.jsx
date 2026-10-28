
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// // Styled Components
// const Hero = styled.div`
//   background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
//   height: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   text-shadow: 0 3px 6px rgba(0,0,0,0.3);
// `;

// const HeroText = styled.h1`
//   font-size: 3rem;
//   text-align: center;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 2rem auto;
//   padding: 0 1rem;
// `;

// const HotelsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
// `;

// const Card = styled.div`
//   background: #fff;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0,0,0,0.1);
//   overflow: hidden;
//   transition: transform 0.3s ease;
//   &:hover { transform: translateY(-5px); }

//   img {
//     width: 100%;
//     height: 180px;
//     object-fit: cover;
//   }

//   .card-body {
//     padding: 1rem;

//     h2 {
//       font-size: 1.4rem;
//       margin-bottom: 0.5rem;
//     }

//     p {
//       font-size: 1rem;
//       margin-bottom: 1rem;
//       color: #555;
//     }

//     button {
//       background: #ff6b6b;
//       color: #fff;
//       border: none;
//       padding: 0.6rem 1.2rem;
//       border-radius: 6px;
//       cursor: pointer;
//       transition: background 0.3s ease;
//       &:hover { background: #ff4757; }
//     }
//   }
// `;






// const HotelsPage = () => {
//   // const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

  
// const hotels = [
//   {
//     "id": 1,
//     "hotel_name": "Grand Azure Resort & Spa",
//     "price_per_night": 75000,
//     "hotel_images": [
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     "id": 2,
//     "hotel_name": "The Metropolitan Hotel",
//     "price_per_night": 52000,
//     "hotel_images": [
//       "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     "id": 3,
//     "hotel_name": "Serene Palms Lodge",
//     "price_per_night": 38000,
//     "hotel_images": [
//       "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     "id": 4,
//     "hotel_name": "Royal Oak Suites",
//     "price_per_night": 95000,
//     "hotel_images": [
//       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     "id": 5,
//     "hotel_name": "Ocean Breeze Inn",
//     "price_per_night": 45000,
//     "hotel_images": [
//       "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     "id": 6,
//     "hotel_name": "Alpine Peak Hotel",
//     "price_per_night": 68000,
//     "hotel_images": [
//       "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     "id": 7,
//     "hotel_name": "Urban Nest Boutique",
//     "price_per_night": 42000,
//     "hotel_images": [
//       "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
//     ]
//   },
//   {
//     "id": 8,
//     "hotel_name": "Golden Tulip Haven",
//     "price_per_night": 110000,
//     "hotel_images": [
//       "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
//     ]
//   }
// ]

//   // useEffect(() => {
//   //   const fetchHotels = async () => {
//   //     try {
//   //       const response = await axios.get('https://harvannatravelsandtour.com/api/get_hotels.php', {
//   //       //   headers: { 'Cache-Control': 'no-cache' } // optional
//   //       });

//   //       if (response.data.success) {
//   //         setHotels(response.data.hotels);
//   //       } else {
//   //         Swal.fire('Error', response.data.error, 'error');
//   //       }
//   //     } catch (error) {
//   //       Swal.fire('Error', 'Failed to fetch hotels', 'error');
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchHotels();
//   // }, []);

//   if (loading) return <Container>Loading...</Container>;

//   return (
//     <>
//       <Hero>
//         <HeroText>Discover Our Hotels</HeroText>
//       </Hero>

//       <Container>
//         <HotelsGrid>
//           {hotels.map(hotel => (
//             <Card key={hotel.id}>
//               <img src={`https://harvannatravelsandtour.com/api/uploads/hotels/${hotel.hotel_images[0]}`} alt={hotel.hotel_name} />
//               <div className="card-body">
//                 <h2 style={{color:"blue"}}>{hotel.hotel_name.toUpperCase()}</h2>
//                 <p style={{ fontWeight: "bold" }}>
//   NGN {Number(hotel.price_per_night).toLocaleString()}
// </p>

//                 <button onClick={() => navigate(`/hoteldetail/${hotel.id}`)}>View</button>
//               </div>
//             </Card>
//           ))}
//         </HotelsGrid>
//       </Container>
//     </>
//   );
// };

// export default HotelsPage;





import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled Components
const Hero = styled.div`
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 3px 6px rgba(0,0,0,0.3);
`;

const HeroText = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover { transform: translateY(-5px); }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .card-body {
    padding: 1rem;

    h2 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: #555;
    }

    button {
      background: #ff6b6b;
      color: #fff;
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;
      &:hover { background: #ff4757; }
    }
  }
`;

const HotelsPage = () => {
  const [loading, setLoading] = useState(false); // Fixed: set to false so it doesn't stay stuck on loading
  const navigate = useNavigate();

  const hotels = [
    {
      "id": 1,
      "hotel_name": "Grand Azure Resort & Spa",
      "price_per_night": 75000,
      "hotel_images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 2,
      "hotel_name": "The Metropolitan Hotel",
      "price_per_night": 52000,
      "hotel_images": [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 3,
      "hotel_name": "Serene Palms Lodge",
      "price_per_night": 38000,
      "hotel_images": [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 4,
      "hotel_name": "Royal Oak Suites",
      "price_per_night": 95000,
      "hotel_images": [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 5,
      "hotel_name": "Ocean Breeze Inn",
      "price_per_night": 45000,
      "hotel_images": [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 6,
      "hotel_name": "Alpine Peak Hotel",
      "price_per_night": 68000,
      "hotel_images": [
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 7,
      "hotel_name": "Urban Nest Boutique",
      "price_per_night": 42000,
      "hotel_images": [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 8,
      "hotel_name": "Golden Tulip Haven",
      "price_per_night": 110000,
      "hotel_images": [
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  if (loading) return <Container>Loading...</Container>;

  return (
    <>
      <Hero>
        <HeroText>Discover Our Hotels</HeroText>
      </Hero>

      <Container>
        <HotelsGrid>
          {hotels.map(hotel => (
            <Card key={hotel.id}>
              {/* Fixed: Use the direct Unsplash URL instead of prepending server path */}
              <img src={hotel.hotel_images[0]} alt={hotel.hotel_name} />
              <div className="card-body">
                <h2 style={{color:"blue"}}>{hotel.hotel_name.toUpperCase()}</h2>
                <p style={{ fontWeight: "bold" }}>
                  NGN {Number(hotel.price_per_night).toLocaleString()}
                </p>
                <button onClick={() => navigate(`/hoteldetail/${hotel.id}`)}>View</button>
              </div>
            </Card>
          ))}
        </HotelsGrid>
      </Container>
    </>
  );
};

export default HotelsPage;