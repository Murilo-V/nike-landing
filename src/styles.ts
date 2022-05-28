import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from './assets/background.svg';

export const GlobalStyles = createGlobalStyle`
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
        overflow: hidden;
    }
`;

export const MainStyle = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;