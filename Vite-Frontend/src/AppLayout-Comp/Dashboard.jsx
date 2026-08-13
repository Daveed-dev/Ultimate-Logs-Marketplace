import React, { useEffect } from 'react';
import Main from '../Dashboard-Comp/main.jsx';
import Navbar from './Navbar.jsx';

const Dashboard = ({ setIsSidebarOpen, SetActivePanel }) => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Dashboard';
  }, []);
  return (
    <>
      <section className='lg:ml-[var(--aside-width)] w-full lg:w-[calc(100%-var(--aside-width))] h-screen pt-[var(--nav-height)] '>
        {/* 
        NAVBAR
        */}
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          SetActivePanel={SetActivePanel}
        />
        {/* 
        MAIN CONTENT 
        */}
        <Main />
      </section>
    </>
  );
};

export default Dashboard;
