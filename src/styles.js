import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
}
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &:after {
    content: " 🦄";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: 25;
  }

  .mountain1 {
    position: absolute;
    bottom: -100px;
    width: 1500px;
    right: 0;
    z-index: 19;
  }

  .person {
    position: absolute;
    width: 650px;
    bottom: -100px;
    left: -70px;
    z-index: 20;
  }

  .mountain2 {
    position: absolute;
    width: 1100px;
    bottom: -100px;
    left: 0;
    z-index: 18;
  }

  .mountain3 {
    position: absolute;
    width: 900px;
    bottom: 150px;
    right: 0;
    z-index: 17;
  }

  .sky {
    position: absolute;
    width: 2100px;
    bottom: 250px;
    right: 0;
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    z-index: 30;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), transparent);
  }
`;

export const AppWrapper = styled.div``;
