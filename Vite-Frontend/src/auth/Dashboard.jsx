import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard-Comp/Sidebar.jsx';
import Main from '../Dashboard-Comp/Main.jsx';
import Notification from '../Dashboard-Comp/Notification.jsx';
import Userprofile from '../Dashboard-Comp/Userprofile.jsx';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [ActivePanel, SetActivePanel] = useState(null);

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
            className='fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden transition-all duration-300'
          ></div>
        )}

        <Main
          setIsSidebarOpen={setIsSidebarOpen}
          SetActivePanel={SetActivePanel}
        />

        {ActivePanel && (
          <div
            onClick={() => SetActivePanel(null)}
            className='fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300'
          />
        )}

        <Notification
          ActivePanel={ActivePanel}
          SetActivePanel={SetActivePanel}
        />
        <Userprofile
          ActivePanel={ActivePanel}
          SetActivePanel={SetActivePanel}
        />
      </section>
    </>
  );
};

export default Dashboard;
