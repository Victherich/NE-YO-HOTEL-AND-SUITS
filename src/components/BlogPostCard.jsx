
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; /* Indicate clickable */
  height: 100%; /* Ensure cards in a grid have equal height */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px; /* Fixed height for blog post image */
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allows content to expand and push button to bottom */
`;

const PostMeta = styled.div`
  font-size: 0.85rem;
  color: #888888;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  i {
    font-size: 0.9rem;
  }
`;

const PostTitle = styled.h3`
  font-size: 1.4rem;
  color: #0d286d; /* Dark blue */
  margin-bottom: 15px;
  line-height: 1.3;
  font-weight: bold;
`;

const PostExcerpt = styled.p`
  font-size: 0.8rem;
  color: #555555;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1; /* Allows excerpt to take available space */
`;

const ReadMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #e60000; /* Red button */
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  align-self: flex-start; /* Align button to the left */

  &:hover {
    background-color: #cc0000;
  }

  i {
    font-size: 0.8rem;
  }
`;

const BlogPostCard = ({ image, title, author, date, excerpt, link }) => {
  return (
    <CardContainer onClick={() => window.location.href = link}> {/* Simple navigation for demo */}
      {/* <CardImage src={image} alt={title} /> */}
      <CardContent>
        <PostMeta>
          <span><i className="far fa-calendar-alt"></i> {date}</span>
          <span><i className="fas fa-user"></i> {author}</span>
        </PostMeta>
        <PostTitle>{title}</PostTitle>
        <PostExcerpt>{excerpt}</PostExcerpt>
        {/* <ReadMoreButton href={link}>
          Read More <i className="fas fa-arrow-right"></i>
        </ReadMoreButton> */}
      </CardContent>
    </CardContainer>
  );
};

export default BlogPostCard;