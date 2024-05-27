import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
  }

  .info {
    padding: 1rem;
    text-align: center;
  }
`;

