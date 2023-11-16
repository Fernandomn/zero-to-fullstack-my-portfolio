import React from "react";
import styled from "styled-components";

import {
  faGithubSquare,
  faLinkedin,
  faTelegramPlane,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialNetworkSection = () => {
  const socialList = [
    {
      id: 1,
      icon: faGithubSquare,
      title: "GitHub",
      url: "https://github.com/Fernandomn",
    },
    {
      id: 2,
      icon: faLinkedin,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/fernando-medeiros-do-nascimento/",
    },
    {
      id: 3,
      icon: faYoutubeSquare,
      title: "YouTube",
      url: "https://www.youtube.com/channel/UCqjeM9Cmz1rHru967lsulmw",
    },
    { id: 4, icon: faGraduationCap, title: "Udemy", url: "" },
    {
      id: 4,
      icon: faTelegramPlane,
      title: "Telegram",
      url: "https://t.me/ferna_mn",
    },
  ];
  const renderSocialList = () => {
    return socialList.map((social) => (
      <SocialStyled key={social.id} href={social.url} target="_blank">
        <FontAwesomeIcon icon={social.icon} size="3x" />
        <h3>{social.title}</h3>
      </SocialStyled>
    ));
  };
  return (
    <NetworksStyled>
      <div id="social">{renderSocialList()}</div>
    </NetworksStyled>
  );
};

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
  color: inherit;

  &:hover {
    cursor: pointer;
    background-color: yellow;
  }

  h3 {
    color: grey;
    margin: 2rem;
  }
`;

export default SocialNetworkSection;
