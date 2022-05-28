import React from 'react';
import Header from '../../components/Header';
import { LandingStyles } from './styles';
import airMax from '../../assets/presto.webp';

const Landing = () => {
    return (
        <>
            <Header />
            <LandingStyles>
                <h1>NIKE PRESTO</h1>
                <img src={airMax} alt='AirMax' />
                <button>buy now</button>
            </LandingStyles>
        </>
    );
};

export default Landing;
