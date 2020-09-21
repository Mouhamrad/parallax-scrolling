import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";

import { AppWrapper, GlobalStyle } from "./styles";

export default function App() {
  return (
    <HelmetProvider>
      <AppWrapper>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <Header />
        <section>
          <div className="shadow" />
          <div className="container">
            <div className="content opacity">
              <h3 className="title">
                About
                <div className="border" />
              </h3>
              <p className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                officiis quos expedita ipsa, a quidem inventore voluptates
                debitis accusamus tenetur qui et voluptas dicta, culpa earum,
                doloribus odio consectetur consequuntur soluta quasi nobis!
                Deserunt voluptatum reiciendis iure expedita sequi quisquam
                laboriosam temporibus exercitationem.
              </p>
            </div>
            <div className="imgContainer opacity">
              <img src="img/image.jpg" alt="" />
            </div>
          </div>
        </section>
      </AppWrapper>
    </HelmetProvider>
  );
}
