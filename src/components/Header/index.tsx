import React from 'react';
import nikeLogo from '../../assets/nike-logo.svg';
import { HeaderStyle } from './styles';

const Header = () => {
  return (
    <HeaderStyle>
      <img src={nikeLogo} alt="Nike Logo" />
      <nav>
          <ul>
              <li>New & Featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
          </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
