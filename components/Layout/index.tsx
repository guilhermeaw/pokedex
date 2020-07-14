import React from 'react';

import GlobalStyle from '../../styles/global';
import Header from '../Header';

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    {children}
    <GlobalStyle />
  </div>
);

export default Layout;
