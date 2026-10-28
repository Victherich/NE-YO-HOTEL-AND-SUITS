import React, { useState, useContext } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { Context } from "./Context"; // Adjust path to your Context file if needed

/* ------------------------------------------------------------------
   NE-YO HOTEL & SUITES — Contact Us Page Component
   Theme Colors: Lagoon (#0F3B3A), Brass (#B08D57), Pearl (#F6F7F5)
   Rule kept: every margin, padding, and gap is 10px or less.
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

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const textIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ---------------------------- STYLES ---------------------------- */

const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${C.pearl};
  color: ${C.ink};
  padding: 80px 10px 40px;
  animation: ${textIn} 0.8s ease forwards;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

const Header = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 40px;
  padding: 10px;

  small {
    display: inline-block;
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.25rem;
    color: ${C.brass};
    padding-bottom: 4px;
  }
  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    line-height: 1.1;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 10px;
  align-items: stretch;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  background: ${C.lagoon};
  color: ${C.white};
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 12px 30px rgba(15, 59, 58, 0.15);

  h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    color: ${C.brassLight};
    font-weight: 500;
  }

  p {
    opacity: 0.9;
    font-size: 0.98rem;
  }

  .row {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    padding: 10px;
    border-bottom: 1px solid rgba(227, 207, 166, 0.25);
  }

  .row i {
    font-style: normal;
    font-size: 1.3rem;
  }

  .row b {
    display: block;
    font-weight: 500;
    color: ${C.brassLight};
  }

  .row span {
    opacity: 0.9;
    font-size: 0.97rem;
  }

  .map-wrap {
    flex: 1;
    min-height: 220px;
    border-radius: 2px;
    overflow: hidden;
    margin-top: 10px;

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      filter: grayscale(0.3);
    }
  }
`;

const FormBox = styled.form`
  background: ${C.white};
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${C.brassLight};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-content: start;
  box-shadow: 0 12px 30px rgba(15, 59, 58, 0.08);

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }

  h3 {
    grid-column: 1 / -1;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    color: ${C.lagoon};
    font-weight: 600;
  }

  .intro-text {
    grid-column: 1 / -1;
    color: ${C.muted};
    font-size: 0.98rem;
    padding-bottom: 10px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    color: ${C.muted};
    gap: 4px;
  }

  label.full, .full {
    grid-column: 1 / -1;
  }

  input, select, textarea {
    padding: 10px;
    border: 1px solid ${C.brassLight};
    background: ${C.pearl};
    font-size: 1rem;
    color: ${C.ink};
    min-height: 48px;
    border-radius: 2px;
    transition: border-color 0.3s ease, background 0.3s ease;
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: ${C.brass};
    background: ${C.white};
  }

  button {
    grid-column: 1 / -1;
    cursor: pointer;
    border: 0;
    background: linear-gradient(110deg, ${C.brass}, #D4B77E, ${C.brass});
    background-size: 200% 100%;
    color: ${C.lagoon};
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 12px;
    min-height: 50px;
    border-radius: 2px;
    transition: all 0.4s ease;
    box-shadow: 0 4px 15px rgba(176, 141, 87, 0.2);
    margin-top: 10px;

    &:hover {
      animation: ${shimmer} 1.2s linear infinite;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
    }
  }
`;

/* ------------------------------------------------------------------
   COMPONENT LOGIC
------------------------------------------------------------------- */

export default function ContactUsPage() {
  const { api_url } = useContext(Context) || { api_url: "" };
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message
    };

    // Show SweetAlert2 loading indicator
    Swal.fire({
      title: 'Sending Inquiry...',
      text: 'Please wait while we submit your message to our concierge...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Connects directly with your send_contact_inquiry.php backend script
      const endpoint = api_url ? `${api_url}/send_contact_inquiry.php` : 'send_contact_inquiry.php';
      const res = await axios.post(endpoint, payload);

      if (res.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Request Sent Successfully',
          text: res.data.message || 'Thank you! Our concierge team will reach out to you shortly.',
          confirmButtonColor: '#0F3B3A',
        });

        // Reset form fields
        setForm({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: res.data.error || 'Failed to send your request. Please try again.',
          confirmButtonColor: '#0F3B3A',
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Connection Error',
        text: 'Unable to connect to the server. Please check your network connection.',
        confirmButtonColor: '#0F3B3A',
      });
    }
  };

  return (
    <PageWrap id="contact">
      <Container>
        <Header>
          <small>Get in Touch</small>
          <h1>Contact Our Concierge</h1>
          <p>We are at your service for reservations, private events, and bespoke inquiries.</p>
        </Header>

        <ContactGrid>
          {/* Left Column: Contact Info & Embedded Map */}
          <InfoBox>
            <h3>NE-YO Hotel &amp; Suites</h3>
            <p>Experience unhurried elegance and absolute stillness in Asaba.</p>

            <div className="row">
              <i>📍</i>
              <div>
                <b>Location</b>
                <span>7 NE-YO Road, GRA Phase 2, Asaba,
Delta State, Nigeria</span>
              </div>
            </div>

            <div className="row">
              <i>📞</i>
              <div>
                <b>Direct Line</b>
                <span>+234 818 192 4856, +234 818 192 4836</span>
              </div>
            </div>

            <div className="row">
              <i>✉️</i>
              <div>
                <b>Concierge Email</b>
                <span>admin@neyo.com</span>
              </div>
            </div>

            <div className="row">
              <i>⏰</i>
              <div>
                <b>Front Desk &amp; Butler</b>
                <span>Open 24 Hours / 7 Days a Week</span>
              </div>
            </div>

            <div className="map-wrap">
              <iframe
                title="Hotel Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d6.7335!3d6.2058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMjEuMCJOIDTCsDQ0JzAwLjYiE!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </InfoBox>

          {/* Right Column: Fully Working Contact Form */}
          <FormBox onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="intro-text">
              Fill out the form below and our guest relations team will respond promptly.
            </div>

            <label>
              Full Name *
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                required
              />
            </label>

            <label>
              Email Address *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />
            </label>

            <label className="full">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 701 234 5678"
              />
            </label>

            <label className="full">
              Special Requests / Message *
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your booking inquiries, suite preferences, or event planning needs..."
                required
              />
            </label>

            <button type="submit">Submit Inquiry</button>
          </FormBox>
        </ContactGrid>
      </Container>
    </PageWrap>
  );
}