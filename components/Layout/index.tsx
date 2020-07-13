import React from 'react';

import GlobalStyle from '../../styles/global';

const Layout: React.FC = ({ children }) => (
  <div>
    {children}
    <GlobalStyle />
  </div>
);

export default Layout;
