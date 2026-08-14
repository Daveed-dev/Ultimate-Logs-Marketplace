import React, { useEffect } from 'react';
import Main from '../Dashboard-Comp/main.jsx';
import { useOutletContext } from 'react-router-dom';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Dashboard';
  }, []);
  const { setIsSidebarOpen, SetActivePanel } = useOutletContext();

  return (
    <>
      <section className='lg:ml-[var(--aside-width)] w-full lg:w-[calc(100%-var(--aside-width))] h-screen pt-[var(--nav-height)] '>
        {/* 
        MAIN CONTENT 
        */}
        <Main />
      </section>
    </>
  );
};

export default Dashboard;
