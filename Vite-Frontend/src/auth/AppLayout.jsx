import React, { useEffect, useState } from 'react';
import Sidebar from '../AppLayout-Comp/Sidebar.jsx';
import Dashboard from '../AppLayout-Comp/Dashboard.jsx';
import Notification from '../AppLayout-Comp/Notification.jsx';
import NotificationSidebar from '../AppLayout-Comp/NotificationSidebar.jsx';
import UserprofileSidebar from '../AppLayout-Comp/UserprofileSidebar.jsx';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [ActivePanel, SetActivePanel] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    if (isSidebarOpen || ActivePanel || selectedNotification) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen, ActivePanel, selectedNotification]);

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

        <Dashboard
          setIsSidebarOpen={setIsSidebarOpen}
          SetActivePanel={SetActivePanel}
        />

        {(ActivePanel || selectedNotification) && (
          <div
            onClick={() => {
              SetActivePanel(null);
              setSelectedNotification(null);
            }}
            className='fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300'
          />
        )}

        <Notification
          selectedNotification={selectedNotification}
          setSelectedNotification={setSelectedNotification}
        />

        <NotificationSidebar
          ActivePanel={ActivePanel}
          SetActivePanel={SetActivePanel}
          setSelectedNotification={setSelectedNotification}
        />
        <UserprofileSidebar
          ActivePanel={ActivePanel}
          SetActivePanel={SetActivePanel}
        />
      </section>
    </>
  );
};

export default AppLayout;
