import React from 'react';
import Overview from './Overview.jsx';

const Main = ({ setIsSidebarOpen }) => {
  return (
    <>
      <section className='lg:ml-[var(--aside-width)] w-full lg:w-[calc(100%-var(--aside-width))] h-screen overflow-y-auto'>
        <nav className='w-full h-18 flex items-center justify-between px-2 lg:px-4 border-b-1 border-[var(--border)]'>
          <div
            className='w-11 h-10 bg-[var(--white)] hover:bg-[var(--cl-purple)]  rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 lg:hidden text-[var(--cl-purple)] hover:text-[var(--cl-white)]'
            onClick={() => setIsSidebarOpen(true)}
          >
            <i className='fa-solid fa-bars '></i>
          </div>
          <div>
            <img src='/images/logo.png' alt='logo' className=' h-6 lg:hidden' />
          </div>
          <div className='flex items-center gap-2 md:gap-3'>
            <div className='relative'>
              <i className='fa-solid fa-bell text-sm lg:text-base text-[var(--gray)] cursor-pointer'></i>
              <span className='absolute bottom-4.5 left-3 w-2 h-2 bg-[#DC2626] rounded-full'></span>
            </div>
            <div className='flex items-center gap-1.5 md:gap-2 p-0.5 rounded-3xl hover:bg-[var(--white)] cursor-pointer transition-all duration-300 border-1 border-[var(--cl-white)]  hover:border-[var(--light-pur)] border-[var(--gray)]/20 hover:-translate-y-0.5 cursor-pointer'>
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
        <main className='w-full h-full pt-2 md:pt-4 px-2 lg:px-4 pb-2 lg:pb-8 bg-[var(--input-bg)]'>
          <div className='py-3 px-1 bg-[#FBBF24]/10  rounded-xl flex items-center gap-2.5 text-[#b45309] mb-1'>
            <i className='fa-solid fa-warning text-xs lg:text-base ml-6'></i>
            <h2 className='text-[0.65rem] md:text-[0.95rem] md:font-bold font-medium '>
              This platfrom provides digitals tools for legitimate use only.
              Users are responsible.
            </h2>
          </div>
          <div className='flex gap-4 items-center py-4 overflow-clip md:py-4'>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-plus text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Fund Account
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-cart-shopping text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Buy Account
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-mobile-screen text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Rent Numbers
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-envelope text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Temp Email
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-wifi text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Buy Data
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-mobile-screen text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Artime
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-wifi text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Buy Airtime
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-bolt text-[0.65rem] text-[var(--cl-purple)]'></i>
              </span>
              VTU Top-Up
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-tv text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Cable TV
            </a>
            <a
              href='#'
              className='flex items-center text-base  p-2 font-semibold rounded-3xl bg-[var(--cl-white)] gap-2 text-[var(--dark)] border-1 border-[var(--border)] hover:border-[var(--cl-purple)] transition-all duration-300 hover:-translate-y-0.5 shrink-0'
            >
              <span className='w-5 h-5 bg-[var(--white)] rounded-full flex items-center justify-center'>
                <i className='fa-solid fa-lightbulb text-[0.65rem] text-[var(--cl-purple)]  '></i>
              </span>
              Electricity
            </a>
          </div>
          {/* Dashboard Overview */}
          <Overview />
        </main>
      </section>
    </>
  );
};

export default Main;
