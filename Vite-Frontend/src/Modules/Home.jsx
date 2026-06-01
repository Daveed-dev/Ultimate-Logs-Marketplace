import React, { useEffect } from 'react';
import Navbar from '../Home-component/navbar';
import Header from '../Home-component/header';
import Accounts from '../Home-component/accounts';
import Market from '../Home-component/market';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Accounts />
      <Market />
    </>
  );
};

export default Home;
