import React from "react";
import { About, Description, Image } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  // const imgUrl =
  //   "https://www.lojavirtual.com.br/wp-content/uploads/2017/09/produtos-servi%C3%A7os.png";
  // const imgUrl = "./../../assets/services.webp";
  const imgUrl =
    "https://internt.slu.se/globalassets/mw/stod-serv/campus-och-hus/services.jpg?width=480&height=480&mode=crop&upscale=false&format=webp";

  return (
    <Services>
      <Image>
        <img src={imgUrl} alt="" />
      </Image>

      <ServiceDescription>
        <h2>Things I do</h2>
        <Cards>
          <Card>
            <div className="icon">
              Icone
              <h3>Portfolio</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </Card>

          <Card>
            <div className="icon">
              Icone
              <h3>Courses</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </Card>

          <Card>
            <div className="icon">
              Icone
              <h3>Hobbies</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </Card>

          <Card>
            <div className="icon">
              Icone
              <h3>GitHub</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </Card>
        </Cards>
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

const Card = styled.div`
  padding: 0.5rem;
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background-color: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;
