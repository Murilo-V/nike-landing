import styled from 'styled-components';

export const LandingStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 2rem;
    font-weight: 800;
    font-size: 85pt;
  }

  img {
    width: 45%;
    transform: rotate(30deg);
  }

  button {
      position: fixed;
      bottom: 30vh;
      right: 30vw;
      z-index: 7;
      background-color: black;
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 40px;
      font-weight: 500;
      font-size: 12pt;
      cursor: pointer;
      opacity: 70%;
      transition: 200ms;

      &:hover {
          opacity: 100%;
          transform: scale(110%);
      }
  }
`;