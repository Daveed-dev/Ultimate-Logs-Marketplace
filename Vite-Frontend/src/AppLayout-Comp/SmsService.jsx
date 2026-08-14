import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const SmsService = () => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - SmsService';
  }, []);
  const { setIsSidebarOpen, SetActivePanel } = useOutletContext();
  return (
    <>
      <section className='lg:ml-[var(--aside-width)] w-full lg:w-[calc(100%-var(--aside-width))] h-screen pt-[var(--nav-height)] bg-[var(--bg-body)]'>
        <h1>SMS Servicves</h1>
      </section>
    </>
  );
};

export default SmsService;
