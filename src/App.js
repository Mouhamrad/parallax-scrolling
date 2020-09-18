import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
