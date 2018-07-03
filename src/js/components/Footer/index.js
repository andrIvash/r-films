// @flow
import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  text-align: left;
  min-height: 2.5rem;
  background-color: ${props => props.theme.bgDark};
`;

const Footer = () => (
  <FooterWrapper>
    <div className='container'>
      <Logo />
    </div>
  </FooterWrapper>
);

export default Footer;
