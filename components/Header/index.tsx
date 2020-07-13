import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src="/pokemon-logo.png" alt="pokemon-logo" />
    </Container>
  );
};

export default Header;
