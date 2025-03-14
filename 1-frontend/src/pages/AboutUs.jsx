import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

// Styled Components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  min-height: 100vh;
  background: url("/about.jpg") center/cover no-repeat; /* Background Image */
  padding: 20px;
  text-align: center;
`;

const AboutWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9); /* Slight Transparency */
  padding: 40px;
  max-width: 800px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #e63946;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin: 20px 0;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #d62828;
  margin-bottom: 10px;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;

  a {
    color: #e63946;
    font-size: 1.8rem;
    transition: 0.3s;

    &:hover {
      color: #d62828;
      transform: scale(1.1);
    }
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <Title>About Tasty Recipes 🍽️</Title>
        <Subtitle>Bringing Flavors to Life, One Recipe at a Time!</Subtitle>

        <Section>
          <SectionTitle>Our Story</SectionTitle>
          <SectionText>
            Tasty Recipes was born out of a passion for food, flavors, and the joy of cooking. What started as a small kitchen experiment has now grown into a vibrant community of food lovers.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <SectionText>
            ✔ **Tried & Tested Recipes** – Every recipe is crafted and perfected for the best taste. <br />
            ✔ **Easy-to-Follow Instructions** – Step-by-step guides make cooking fun and simple. <br />
            ✔ **Healthy & Indulgent Choices** – From comfort food to healthy meals, we have it all! <br />
            ✔ **Community-Driven** – Join our passionate food community and share your creations. <br />
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Join Our Culinary Adventure</SectionTitle>
          <SectionText>
            Explore hundreds of delicious recipes, get expert cooking tips, and connect with fellow food lovers. Follow us on social media for daily inspiration!  
          </SectionText>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
          </SocialIcons>
        </Section>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutUs;
