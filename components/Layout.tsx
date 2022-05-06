import * as React from 'react';
import { Header } from './../components/Header';
import { Footer } from './../components/Footer';
import site from './../data/site.json'

const Layout = ({ children }) => (
  <div>
    <Header data={site} />
    {children}
    <Footer />
  </div>
)

export default Layout
