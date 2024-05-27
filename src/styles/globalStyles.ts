import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
`;