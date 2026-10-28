
import React from 'react';
import styled from 'styled-components';
import BlogPostCard from './BlogPostCard'; // Make sure the path is correct
import bbg from '../Images/bbg.png'

// --- Page-level Styled Components ---
const BlogPageContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  color: #333333;
`;

// --- Hero Section Styles (similar to previous hero sections) ---
const BlogHeroSection = styled.section`
  position: relative;
  background-image: url(${bbg}); /* REPLACE with your actual hero image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 80px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px; /* Slightly taller hero for blog */
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 20px;
    min-height: 300px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Darker overlay for strong contrast */
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 52px;
  margin-bottom: 15px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);

  @media (max-width: 1024px) {
    font-size: 45px;
  }
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 22px;
  max-width: 800px;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 19px;
  }
  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

// --- Blog Posts Section Styles ---
const BlogPostsSection = styled.section`
  padding: 80px 40px;
  background-color: #f8f8f8; /* Light background */
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 32px;
  color: #081a4d;
  margin-bottom: 50px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Responsive grid for cards */
  gap: 40px; /* Space between cards */
  max-width: 1200px; /* Max width for the grid */
  margin: 0 auto; /* Center the grid */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack cards on smaller screens */
    gap: 30px;
  }
`;

// --- React Component: BlogPage ---
const BlogPage = () => {
  // Placeholder blog data for Harvanna Travels and Tour Ltd
//   const blogPosts = [
//     {
//       id: 1,
//       image: 'https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Exploring+Dubai',
//       title: 'Top 5 Must-Visit Places in Dubai for Your Next Adventure',
//       author: 'Harvanna Team',
//       date: 'July 18, 2025',
//       excerpt: 'Dubai offers a blend of futuristic marvels and rich cultural experiences. From towering skyscrapers to desert safaris, discover our top recommendations for an unforgettable trip.',
//       content: `Dubai, a city of dazzling contrasts, invites travelers to explore its iconic landmarks and hidden gems. Begin your journey at the breathtaking Burj Khalifa, the world's tallest building, offering panoramic views of the cityscape. For a taste of tradition, wander through the historic Al Fahidi neighborhood and explore the vibrant gold and spice souks. Adrenaline junkies will love a thrilling desert safari, complete with dune bashing, camel rides, and stargazing under the desert sky. Don't miss the spectacular Dubai Fountain show at the base of Burj Khalifa, a mesmerizing water and light spectacle. Finally, unwind at the pristine beaches or indulge in world-class shopping at The Dubai Mall. Each experience in Dubai promises an unforgettable adventure.`,
//       link: '/blog/exploring-dubai',
//     },
//     {
//       id: 2,
//       image: 'https://via.placeholder.com/600x400/3CB371/FFFFFF?text=Seychelles+Escape',
//       title: 'Seychelles: The Ultimate Tropical Paradise Getaway',
//       author: 'Harvanna Team',
//       date: 'July 10, 2025',
//       excerpt: 'Dreaming of pristine beaches and crystal-clear waters? Seychelles is your perfect escape. Learn why these islands are a favorite among luxury travelers and nature lovers alike.',
//       content: `The Seychelles archipelago is a true jewel of the Indian Ocean, renowned for its unparalleled natural beauty. Its iconic granite boulders, powdery white sands, and turquoise waters create a postcard-perfect setting. Spend your days snorkeling or diving in vibrant coral reefs, encountering diverse marine life. Explore the lush national parks, home to unique flora and fauna, including the giant Aldabra tortoises. Anse Source d'Argent on La Digue island is often hailed as one of the world's most beautiful beaches, a must-visit. For the adventurous, hiking trails offer stunning views, while those seeking relaxation can simply bask in the sun and enjoy the tranquility. Seychelles promises an idyllic retreat from the everyday.`,
//       link: '/blog/seychelles-paradise',
//     },
//     {
//       id: 3,
//       image: 'https://via.placeholder.com/600x400/9370DB/FFFFFF?text=London+Adventures',
//       title: 'London Calling: Your Guide to a Historic & Modern City Break',
//       author: 'Harvanna Team',
//       date: 'June 28, 2025',
//       excerpt: 'London offers a unique blend of history, culture, and modern vibrancy. From royal palaces to trendy markets, get ready to explore the best of the UK capital.',
//       content: `London, a city where ancient history meets contemporary flair, offers an endless array of experiences. Begin with iconic landmarks like the Tower of London, Buckingham Palace, and the Houses of Parliament with Big Ben. Immerse yourself in culture at world-class museums such as the British Museum and the National Gallery. Explore the vibrant West End for a captivating theatre show, or stroll through the charming streets of Notting Hill. For a taste of local life, visit Borough Market or Camden Market. Enjoy panoramic views from the London Eye, or take a peaceful walk along the South Bank of the River Thames. London promises a dynamic and diverse urban adventure for every traveler.`,
//       link: '/blog/london-guide',
//     },
//     {
//       id: 4,
//       image: 'https://via.placeholder.com/600x400/DAA520/FFFFFF?text=Family+Vacations',
//       title: 'Planning the Perfect Family Vacation on a Budget',
//       author: 'Guest Author',
//       date: 'June 15, 2025',
//       excerpt: 'Family vacations don\'t have to break the bank! Discover smart tips and tricks to plan an exciting and memorable trip without overspending.',
//       content: `Creating cherished family memories doesn't require a hefty budget. The key to affordable family travel lies in smart planning and flexibility. Consider off-peak travel dates to snag better deals on flights and accommodations. Look for vacation rentals or apartments with kitchens to save on dining out. Research free attractions like parks, museums with free entry days, or local festivals. Opt for destinations that offer good value, like Southeast Asia, parts of Eastern Europe, or domestic road trips. Pack light to avoid baggage fees, and look into public transport options. With a little creativity and foresight, your family can enjoy an incredible vacation that's kind to your wallet.`,
//       link: '/blog/family-budget-travel',
//     },
//     {
//       id: 5,
//       image: 'https://via.placeholder.com/600x400/8B0000/FFFFFF?text=Visa+Tips',
//       title: 'Navigating Visa Applications: Essential Tips for Smooth Travel',
//       author: 'Visa Experts',
//       date: 'May 30, 2025',
//       excerpt: 'Visa applications can be complex, but with the right guidance, they don\'t have to be. Read our expert tips to ensure a hassle-free process for your next international journey.',
//       content: `Successfully navigating visa applications is crucial for international travel. Start by understanding the visa requirements for your destination country, as these can vary significantly based on your nationality and purpose of travel. Begin the application process well in advance of your planned departure date, as processing times can be unpredictable. Gather all necessary documents, including your passport, photographs, flight itineraries, accommodation bookings, and proof of funds. Be meticulous in filling out application forms, ensuring all information is accurate and consistent. Consider consulting with a reputable travel agency or visa service for assistance, as their expertise can streamline the process and help avoid common pitfalls. Staying organized and informed is key to a smooth visa application experience.`,
//       link: '/blog/visa-tips',
//     },
//     {
//       id: 6,
//       image: 'https://via.placeholder.com/600x400/483D8B/FFFFFF?text=Flight+Booking',
//       title: 'Smart Flight Booking: How to Find the Best Deals Every Time',
//       author: 'Travel Hacks',
//       date: 'May 20, 2025',
//       excerpt: 'Finding cheap flights is an art and a science! Learn the best strategies, tools, and times to book your flights for maximum savings and minimal stress.',
//       content: `Securing affordable flights is often the biggest factor in reducing travel costs. Start by being flexible with your travel dates; flying mid-week or during off-peak seasons can lead to significant savings. Use flight comparison websites that allow you to compare prices across multiple airlines and online travel agencies. Consider flying into or out of alternative airports near your destination, as they might offer cheaper fares. Look into budget airlines, but be mindful of their extra fees for baggage or seat selection. Set up price alerts to be notified when fares drop for your desired route. Booking in advance, but not too far in advance, typically yields better prices. Combining these strategies can help you consistently find the best flight deals.`,
//       link: '/blog/flight-booking-tips',
//     },
//   ];



const blogPosts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Exploring+Dubai',
    title: 'Top 5 Must-Visit Places in Dubai for Your Next Adventure',
    author: 'Harvanna Team',
    date: 'July 18, 2025',
    excerpt: 'Dubai offers a blend of futuristic marvels and rich cultural experiences. From towering skyscrapers to desert safaris, discover our top recommendations for an unforgettable trip.',
    content: `Explore Dubai's iconic sights: the towering Burj Khalifa, the traditional Al Fahidi neighborhood and its souks, thrilling desert safaris, the mesmerizing Dubai Fountain show, and relaxing beaches combined with world-class shopping at The Dubai Mall. Each offers a unique and unforgettable adventure.`,
    link: '/blog/exploring-dubai',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/600x400/3CB371/FFFFFF?text=Seychelles+Escape',
    title: 'Seychelles: The Ultimate Tropical Paradise Getaway',
    author: 'Harvanna Team',
    date: 'July 10, 2025',
    excerpt: 'Dreaming of pristine beaches and crystal-clear waters? Seychelles is your perfect escape. Learn why these islands are a favorite among luxury travelers and nature lovers alike.',
    content: `Discover Seychelles, an Indian Ocean jewel with stunning granite boulders, white sands, and clear waters. Enjoy snorkeling in coral reefs, exploring lush national parks with giant tortoises, visiting Anse Source d'Argent beach, and hiking scenic trails for an idyllic retreat.`,
    link: '/blog/seychelles-paradise',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/600x400/9370DB/FFFFFF?text=London+Adventures',
    title: 'London Calling: Your Guide to a Historic & Modern City Break',
    author: 'Harvanna Team',
    date: 'June 28, 2025',
    excerpt: 'London offers a unique blend of history, culture, and modern vibrancy. From royal palaces to trendy markets, get ready to explore the best of the UK capital.',
    content: `Experience London's rich history and modern flair. Visit iconic landmarks like the Tower of London and Buckingham Palace, immerse yourself in culture at world-class museums, catch a West End show, explore Notting Hill, and discover vibrant markets like Borough and Camden. Enjoy dynamic and diverse urban adventures.`,
    link: '/blog/london-guide',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/600x400/DAA520/FFFFFF?text=Family+Vacations',
    title: 'Planning the Perfect Family Vacation on a Budget',
    author: 'Guest Author',
    date: 'June 15, 2025',
    excerpt: 'Family vacations don\'t have to break the bank! Discover smart tips and tricks to plan an exciting and memorable trip without overspending.',
    content: `Plan memorable family vacations on a budget by leveraging smart strategies. Travel during off-peak seasons, choose accommodations with kitchens, explore free attractions, opt for good-value destinations, pack light to avoid fees, and utilize public transport. Creative planning ensures an incredible trip that's wallet-friendly.`,
    link: '/blog/family-budget-travel',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/600x400/8B0000/FFFFFF?text=Visa+Tips',
    title: 'Navigating Visa Applications: Essential Tips for Smooth Travel',
    author: 'Visa Experts',
    date: 'May 30, 2025',
    excerpt: 'Visa applications can be complex, but with the right guidance, they don\'t have to be. Read our expert tips to ensure a hassle-free process for your next international journey.',
    content: `Ensure smooth visa applications by understanding requirements early, starting the process well in advance, meticulously gathering all documents (passport, photos, itineraries, funds), and ensuring accuracy on forms. Consulting a reputable travel agency can streamline the process and prevent common pitfalls.`,
    link: '/blog/visa-tips',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/600x400/483D8B/FFFFFF?text=Flight+Booking',
    title: 'Smart Flight Booking: How to Find the Best Deals Every Time',
    author: 'Travel Hacks',
    date: 'May 20, 2025',
    excerpt: 'Finding cheap flights is an art and a science! Learn the best strategies, tools, and times to book your flights for maximum savings and minimal stress.',
    content: `Master cheap flight booking by being flexible with dates (mid-week, off-peak), using flight comparison sites, considering alternative airports, and understanding budget airline fees. Set price alerts and book in advance to consistently find the best deals for maximum savings.`,
    link: '/blog/flight-booking-tips',
  },
];

  return (
    <BlogPageContainer>
      {/* Blog Hero Section */}
      <BlogHeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Harvanna Travels & Tour Ltd. Blog</HeroTitle>
          <HeroSubtitle>
            Your ultimate guide to unforgettable travel experiences, tips, and destinations.
          </HeroSubtitle>
        </HeroContent>
      </BlogHeroSection>

      {/* Blog Posts Section */}
      <BlogPostsSection>
        <SectionHeader>Latest Articles</SectionHeader>
        <BlogGrid>
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              image={post.image}
              title={post.title}
              author={post.author}
              date={post.date}
              excerpt={post.content}
              link={post.link}
            />
          ))}
        </BlogGrid>
      </BlogPostsSection>
    </BlogPageContainer>
  );
};

export default BlogPage;