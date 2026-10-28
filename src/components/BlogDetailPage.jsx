
import React from 'react';
import styled from 'styled-components';

// --- Page-level Styled Components ---
const BlogDetailPageContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f8f8f8; /* Light background */
  color: #333333;
  line-height: 1.6;
`;

// --- Post Header Section Styles ---
const PostHeaderSection = styled.section`
  position: relative;
  width: 100%;
  height: 400px; /* Height for the header background image */
  background-image: url(${props => props.image}); /* Dynamic background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align content to the bottom */
  padding: 40px;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Stronger shadow for readability */
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: 0;
`;

const PostTitle = styled.h1`
  position: relative;
  z-index: 1;
  font-size: 48px;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: left; /* Align title to left */

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const PostMeta = styled.div`
  position: relative;
  z-index: 1;
  font-size: 16px;
  color: #e0e0e0; /* Lighter color for meta info */
  display: flex;
  gap: 20px;
  text-align: left; /* Align meta to left */

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  i {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

// --- Main Blog Content Section Styles ---
const PostContentSection = styled.section`
  padding: 60px 40px;
  max-width: 900px; /* Max width for readability */
  margin: 0 auto; /* Center the content */
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); /* Soft shadow */
  margin-top: -80px; /* Pulls the content section up over the hero */
  position: relative; /* For z-index */
  z-index: 2; /* Ensure it's above the hero */
  text-align: left; /* Content is left-aligned */

  @media (max-width: 1024px) {
    padding: 50px 30px;
    margin-top: -60px;
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: -40px;
    max-width: 95%; /* More width on smaller screens */
  }
`;

const PostBody = styled.div`
  font-size: 1.1rem;
  color: #333333;

  h2, h3, h4 {
    color: #0d286d; /* Dark blue for subheadings */
    margin-top: 30px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  p {
    margin-bottom: 15px;
  }

  ul, ol {
    margin-bottom: 15px;
    padding-left: 25px;
  }

  li {
    margin-bottom: 8px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  strong {
    font-weight: bold;
  }
`;

// --- React Component: BlogDetailPage ---
const BlogDetailPage = ({ post }) => {
  // Fallback for when post data isn't provided (e.g., direct access without data)
  if (!post) {
    return (
      <BlogDetailPageContainer>
        <PostContentSection>
          <p>Blog post not found. Please navigate from the blog listing page.</p>
        </PostContentSection>
      </BlogDetailPageContainer>
    );
  }

  // Basic rendering of content. For complex markdown, consider a markdown parser library.
  // This example assumes content is simple paragraphs, headings, etc.
  const renderContent = (content) => {
    // A very basic way to handle newlines for paragraphs.
    // For richer content (bold, lists, etc.), you'd parse markdown or use dangerouslySetInnerHTML
    // with sanitized HTML from a rich text editor.
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={index}>{paragraph.substring(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index}>{paragraph.substring(4)}</h3>;
      } else if (paragraph.startsWith('#### ')) {
        return <h4 key={index}>{paragraph.substring(5)}</h4>;
      } else if (paragraph.trim() === '') {
        return null; // Skip empty lines
      }
      return <p key={index}>{paragraph}</p>;
    });
  };

  return (
    <BlogDetailPageContainer>
      {/* Post Header Section */}
      <PostHeaderSection image={post.image}>
        <HeaderOverlay />
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          <span><i className="fas fa-user"></i> {post.author}</span>
          <span><i className="far fa-calendar-alt"></i> {post.date}</span>
        </PostMeta>
      </PostHeaderSection>

      {/* Main Blog Content Section */}
      <PostContentSection>
        <PostBody>
          {renderContent(post.content)}
          {/* Example of adding an image within the content body */}
          {/* <img src="https://via.placeholder.com/800x500/ADD8E6/000000?text=Related+Image" alt="Related" />
          <p>This is a paragraph following a related image within the blog post content. It helps break up long texts and provide visual context.</p> */}
        </PostBody>
      </PostContentSection>
    </BlogDetailPageContainer>
  );
};

export default BlogDetailPage;