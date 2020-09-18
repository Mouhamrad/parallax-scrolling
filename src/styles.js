import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
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
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const AppWrapper = styled.div``;
