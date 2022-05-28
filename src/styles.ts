import styled from 'styled-components';
import { theme } from './theme/theme';

export const GlobalStyles = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.main_background};
  *,
  button,
  textarea,
  input {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: 'Epilogue', sans-serif;
  }
`;