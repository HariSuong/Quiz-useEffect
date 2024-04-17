import React from "react";
import LogoImage from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={LogoImage} />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;
