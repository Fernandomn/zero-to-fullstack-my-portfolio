import React from "react";

import styled from "styled-components";

const Contact = () => {
  const socialList = [
    {
      id: 1,
      icon: "icon",
      title: "GitHub",
      url: "https://github.com/Fernandomn",
    },
    {
      id: 2,
      icon: "icon",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/fernando-medeiros-do-nascimento/",
    },
    {
      id: 3,
      icon: "icon",
      title: "Youtube",
      url: "https://www.youtube.com/channel/UCqjeM9Cmz1rHru967lsulmw",
    },
    { id: 4, icon: "icon", title: "Udemy", url: "" },
    { id: 4, icon: "icon", title: "Telegram", url: "https://t.me/ferna_mn" },
  ];
  const renderSocialList = () => {
    return socialList.map((social) => (
      <SocialStyled key={social.id} href={social.url} target="_blank">
        {social.icon}
        <h3>{social.title}</h3>
      </SocialStyled>
    ));
  };

  return (
    <ContactStyled>
      <TitleStyled>
        <h2>Get in touch</h2>
      </TitleStyled>

      <AreasStyled>
        <div id="form">
          <form id="contact-form" method="post">
            Name: <input type="text" />
            Email: <input type="email" />
            Message: <textarea rows="5" />
            <button type="submit">Submit</button>
          </form>
        </div>

        <NetworksStyled>
          <div id="social">{renderSocialList()}</div>
        </NetworksStyled>
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

const NetworksStyled = styled.div`
  padding: 1rem 5rem;
`;

const SocialStyled = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 50px;
  padding-left: 2rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export default Contact;
