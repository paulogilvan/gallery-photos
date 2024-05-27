import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
    padding-bottom: 2rem;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
  color: #333;

  .spinner {
    animation: ${spin} 2s linear infinite;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;