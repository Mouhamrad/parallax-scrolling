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
`;

export const AppWrapper = styled.div``;
