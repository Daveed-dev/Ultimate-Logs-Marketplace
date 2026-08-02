import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard-Comp/Sidebar.jsx';
import Main from '../Dashboard-Comp/Main.jsx';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Dashboard';
  }, []);

  return (
    <>
      <section className='w-full bg-[var(--cl-white)] h-screen'>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className='fixed inset-0 z-40 bg-white/10 backdrop-blur-sm lg:hidden transition-all duration-300'
          ></div>
        )}

        <Main setIsSidebarOpen={setIsSidebarOpen} />
      </section>
    </>
  );
};

export default Dashboard;
