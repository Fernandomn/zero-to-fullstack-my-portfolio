import React from "react";
import { About, Description, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <h2>Fernando Medeiros</h2>
        <h2>Software Engineer</h2>

        <p>
          I'm a 32 YO brazillian developer, that is pivoting from front-end to
          full-stack development
        </p>
        <button>Contact Me</button>
      </Description>

      <Image>
        <img src="https://picsum.photos/600/400" alt="placeholder" />
      </Image>
    </About>
  );
};

export default AboutSection;
