import React, { useEffect } from 'react';
import Navbar from '../Home-component/navbar';
import Header from '../Home-component/header';
import Accounts from '../Home-component/accounts';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Accounts />
    </>
  );
};

export default Home;
