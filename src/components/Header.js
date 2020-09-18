import React from "react";

import { HeaderWrapper } from "../styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <div class="container">
          <h3 class="logo">
            Brand<span>Name</span>
          </h3>
          <div class="hamburger-menu">
            <div class="bar"></div>
          </div>
        </div>
      </nav>

      <h1 class="big-title translate" data-speed="0.1">
        Discover.
      </h1>
      <img
        src="img/person.png"
        class="person translate"
        data-speed="-0.25"
        alt=""
      />
      <img
        src="img/mountain1.png"
        class="mountain1 translate"
        data-speed="-0.2"
        alt=""
      />
      <img
        src="img/mountain2.png"
        class="mountain2 translate"
        data-speed="0.4"
        alt=""
      />
      <img
        src="img/mountain3.png"
        class="mountain3 translate"
        data-speed="0.3"
        alt=""
      />
      <img src="img/sky.png" class="sky translate" data-speed="0.5" alt="" />
    </HeaderWrapper>
  );
};

export default Header;
