// @flow
import React from 'react';
import styled from 'styled-components';


const LogoWrapper = styled.div`
  font-size: 1rem;
  font-family: ${props => props.theme.signFont};
  font-weight: 700;
  color: ${props => props.theme.colorLogo};
  margin-bottom: 0;
`;

const Logo = () => (
  <LogoWrapper>
    netflixroulette
  </LogoWrapper>
);

export default Logo;
