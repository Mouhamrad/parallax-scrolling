import React from "react";

import { HeaderWrapper } from "../styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <div className="container">
          <h3 className="logo">
            Brand<span>Name any change</span>
          </h3>
          <div className="hamburger-menu">
            <div className="bar" />
          </div>
        </div>
      </nav>
      <h1 className="big-title translate" data-speed="0.1">
        Discover.
      </h1>
      <img
        src="img/person.png"
        className="person translate"
        data-speed="-0.25"
        alt=""
      />
      <img
        src="img/mountain1.png"
        className="mountain1 translate"
        data-speed="-0.2"
        alt=""
      />
      <img
        src="img/mountain2.png"
        className="mountain2 translate"
        data-speed="0.4"
        alt=""
      />
      <img
        src="img/mountain3.png"
        className="mountain3 translate"
        data-speed="0.3"
        alt=""
      />
      <img
        src="img/sky.png"
        className="sky translate"
        data-speed="0.5"
        alt=""
      />
    </HeaderWrapper>
  );
};

export default Header;
