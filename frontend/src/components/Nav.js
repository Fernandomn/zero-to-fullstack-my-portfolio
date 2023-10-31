import React from "react";

import styled from "styled-components";

const Nav = () => {
  const menuOption = {
    about: "<About Me />",
    portfolio: "<Portfolio />",
    contact: "<Contact />",
  };

  const renderMenu = () => {
    return menuOption.map((option) => <li></li>);
  };

  return (
    <nav>
      <h1>Fernando Medeiros</h1>
      <ul></ul>
    </nav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
`;

export default Nav;
