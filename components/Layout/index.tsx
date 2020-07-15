import React, { ReactNode } from 'react';

import { NextPage } from 'next';
import GlobalStyle from '../../styles/global';

interface Props {
  children?: ReactNode;
}

const Layout: NextPage = ({ children }: Props) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
