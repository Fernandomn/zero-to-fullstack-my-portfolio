import React from "react";

import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import SocialNetworkSection from "../components/SocialNetworkSection";

const Contact = () => {
  return (
    <ContactStyled>
      <TitleStyled>
        <h2>Get in touch</h2>
      </TitleStyled>

      <AreasStyled>
        <ContactForm />
        
        <SocialNetworkSection />
      </AreasStyled>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  padding: 1rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const TitleStyled = styled.div`
  margin-bottom: 4rem;
  h2 {
    color: white;
  }
`;

const AreasStyled = styled.div`
  display: flex;
  align-items: center;
`;

export default Contact;
