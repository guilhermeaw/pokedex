import React from 'react';

import { NextPage } from 'next';
import { Container } from './styles';

const Header: NextPage = () => {
  return (
    <Container>
      <img src="/pokemon-logo.png" alt="pokemon-logo" />
    </Container>
  );
};

export default Header;
