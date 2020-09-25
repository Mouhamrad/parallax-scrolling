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

export const Section = styled.section`
  width: 100%;
  background-color: #151515;
  position: relative;

  .container {
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  img {
    width: 100%;
  }

  .container > * {
    margin: 2rem;
  }

  .content {
    color: #fff;
    transform: translateY(-50px);
  }

  .imgContainer {
    transform: translateY(50px);
  }

  .title {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    position: relative;
  }

  .border {
    position: absolute;
    width: 0%;
    height: 3px;
    background-color: #fff;
    bottom: 0;
    left: 0;
  }

  .shadow {
    position: absolute;
    bottom: 100%;
    height: 300px;
    width: 100%;
    left: 0;
    z-index: 20;
    background: linear-gradient(to top, #151515, transparent);
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 70rem;
    padding: O 2rem;
    margin: 0 auto;
  }

  &:after {
    content: "";
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

  nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: #fff;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .logo span {
    font-weight: 300;
  }

  .hamburger-menu {
    width: 1.55rem;
    height: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .bar {
    position: relative;
    width: 1.2rem;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
  }

  .bar:before,
  .bar:after {
    content: "";
    position: absolute;
    width: 1.55rem;
    height: 3px;
    right: 0;
    background-color: #fff;
    border-radius: 2px;
  }

  .bar:before {
    transform: translateY(-8px);
  }

  .bar:after {
    transform: translateY(8px);
  }

  .big-title {
    position: absolute;
    z-index: 30;
    line-height: 4rem;
    top: calc(50% - 2rem);
    width: 100%;
    text-align: center;
    font-size: 5rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const AppWrapper = styled.div``;
