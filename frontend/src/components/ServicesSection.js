import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles";

import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faImages,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const ServicesSection = () => {
  // const imgUrl =
  //   "https://www.lojavirtual.com.br/wp-content/uploads/2017/09/produtos-servi%C3%A7os.png";
  // const imgUrl = "./../../assets/services.webp";
  const imgUrl =
    "https://internt.slu.se/globalassets/mw/stod-serv/campus-och-hus/services.jpg?width=480&height=480&mode=crop&upscale=false&format=webp";

  const renderDescriptionCardsList = () => {
    const cardsInfo = [
      {
        title: "Portfolio",
        text: "Check my work on my portfolio",
        icon: faLaptopCode,
      },
      {
        title: "Courses",
        text: "Check my work on my portfolio",
        icon: faGraduationCap,
      },
      {
        title: "Hobbies",
        text: "Check my work on my portfolio",
        icon: faImages,
      },
      {
        title: "Github",
        text: "Check my work on my portfolio",
        icon: faGithubSquare,
      },
    ];

    return cardsInfo.map((card) => (
      <Card title={card.title} text={card.text} icon={card.icon} />
    ));
  };

  return (
    <Services>
      <Image>
        <img src={imgUrl} alt="" />
      </Image>

      <ServiceDescription>
        <h2>Things I do</h2>
        <Cards>{renderDescriptionCardsList()}</Cards>
      </ServiceDescription>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-top: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const ServiceDescription = styled(Description)`
  flex: 2;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

export default ServicesSection;
