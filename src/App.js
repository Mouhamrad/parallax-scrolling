import React from "react";

import Header from "./components/Header";

import { GlobalStyle, AppWrapper } from "./styles";

export default function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <section>
        <div class="shadow"></div>

        <div class="container">
          <div class="content opacity">
            <h3 class="title">
              About
              <div class="border"></div>
            </h3>
            <p class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              officiis quos expedita ipsa, a quidem inventore voluptates debitis
              accusamus tenetur qui et voluptas dicta, culpa earum, doloribus
              odio consectetur consequuntur soluta quasi nobis! Deserunt
              voluptatum reiciendis iure expedita sequi quisquam laboriosam
              temporibus exercitationem.
            </p>
          </div>

          <div class="imgContainer opacity">
            <img src="img/image.jpg" alt="" />
          </div>
        </div>
      </section>
    </AppWrapper>
  );
}
