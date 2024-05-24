import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

// css
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/animate/animate.css';
import '../assets/css/main.css';
import '../assets/css/util.min.css';
// end css

// nested router
function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
