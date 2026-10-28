// Gallery.js
import React from 'react';
import styled from 'styled-components';
import h1 from '../Images2/h1.jpg';
import h2 from '../Images2/h2.jpg';
import h3 from '../Images2/h3.jpg';
import h4 from '../Images2/h4.jpg';
import h5 from '../Images2/h5.jpg';
import h6 from '../Images2/h6.jpg';
import h7 from '../Images2/h7.jpg';
import h8 from '../Images2/h8.jpg';
import h9 from '../Images2/h9.jpg';
import h10 from '../Images2/h10.jpg';
import h11 from '../Images2/h11.jpg';
import h12 from '../Images2/h12.jpg';
import h13 from '../Images2/h13.jpg';
import h14 from '../Images2/h14.jpg';
import h15 from '../Images2/h15.jpg';
import h16 from '../Images2/h16.jpg';
import h17 from '../Images2/h17.jpg';
import h18 from '../Images2/h18.jpg';

// Image data is now defined directly in this component file
const images = [
  // { id: 1, src: h1, title: 'Image 1' },
  // { id: 2, src: h2, title: 'Image 2' },
  // { id: 3, src: h3, title: 'Image 3' },
  // { id: 4, src: h4, title: 'Image 4' },
  // { id: 5, src: h5, title: 'Image 5' },
  // { id: 6, src: h6, title: 'Image 6' },
  // { id: 7, src: h7, title: 'Image 7' },
  // { id: 8, src: h8, title: 'Image 8' },
  // { id: 9, src: h9, title: 'Image 9' },
  // { id: 10, src: h10, title: 'Image 10' },
  // { id: 11, src: h11, title: 'Image 11' },
  // { id: 12, src: h12, title: 'Image 12' },
  { id: 13, src: h13, title: 'Image 13' },
  { id: 14, src: h14, title: 'Image 14' },
  { id: 15, src: h15, title: 'Image 15' },
  { id: 16, src: h16, title: 'Image 16' },
  { id: 17, src: h17, title: 'Image 17' },
  { id: 18, src: h18, title: 'Image 18' },
];

// Styled components
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  margin: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

// Main Gallery Component
const Gallery = () => {
  return (
    <GalleryContainer>
      {images.map((image) => (
        <ImageCard key={image.id}>
          <GalleryImage src={image.src} alt={image.title} />
          <ImageTitle>{image.title}</ImageTitle>
        </ImageCard>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;