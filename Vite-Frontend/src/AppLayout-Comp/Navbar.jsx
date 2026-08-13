import React from 'react';

const Navbar = ({ SetActivePanel, setIsSidebarOpen }) => {
  return (
    <>
      <nav className='lg:left-[var(--aside-width)] w-full lg:w-[calc(100%-var(--aside-width))] h-[var(--nav-height)] flex items-center justify-between px-2 lg:px-4 border-b-1 border-[var(--border)] fixed top-0 left-0 z-30 bg-[var(--cl-white)]'>
        <div
          className='w-11 h-10 bg-[var(--white)] hover:bg-[var(--cl-purple)]  rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 lg:hidden text-[var(--cl-purple)] hover:text-[var(--cl-white)]'
          onClick={() => setIsSidebarOpen(true)}
        >
          <i className='fa-solid fa-bars'></i>
        </div>
        <div>
          <img src='/images/logo.png' alt='logo' className=' h-6 lg:hidden' />
        </div>
        <div className='flex items-center gap-2 md:gap-3'>
          <div className='relative'>
            <i
              className='fa-solid fa-bell text-sm lg:text-base text-[var(--gray)] cursor-pointer'
              onClick={() => SetActivePanel('notification')}
            ></i>
            <span className='absolute bottom-4.5 left-3 w-2 h-2 bg-[#DC2626] rounded-full'></span>
          </div>
          <div
            className='flex items-center gap-1.5 md:gap-2 p-0.5 rounded-3xl hover:bg-[var(--white)] cursor-pointer transition-all duration-300 border-1 border-[var(--cl-white)]  hover:border-[var(--light-pur)] border-[var(--gray)]/20 hover:-translate-y-0.5 cursor-pointer'
            onClick={() => SetActivePanel('userprofile')}
          >
            <img
              src='/images/profile11.png'
              alt='profile'
              className='h-9.5 border-2 border-[var(--cl-purple)] rounded-full'
            />
            <span>
              <i className='fa-solid fa-angle-down text-[var(--gray)]'></i>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
