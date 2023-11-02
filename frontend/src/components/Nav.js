import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = () => {
  const menuOption = {
    about: "<About Me />",
    portfolio: "<Portfolio />",
    contact: "<Contact />",
  };
  const menuOption_ = [
    { label: "<About Me />", url: "", key: "about" },
    { label: "<Portfolio />", url: "/portfolio", key: "portfolio" },
    { label: "<Contact />", url: "/contact", key: "contact" },
  ];

  const renderMenu = () => {
    return menuOption_.map((option, index) => (
      <li>
        <Link to={option.url} key={option.key}>
          {option.label}
        </Link>
      </li>
    ));
  };

  return (
    <StyledNav>
      <h1>
        <Link to={"/"}>Fernando Medeiros</Link>
      </h1>
      <ul>{renderMenu()}</ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
