import React from 'react';
import Cards from './Cards.jsx';
import Overview from './Overview.jsx';

const Main = () => {
  return (
    <>
      <main className='w-full  pt-2 md:pt-4 px-2.5 lg:px-4 pb-2 lg:pb-8 bg-[var(--input-bg)]'>
        <div className='py-3 px-1 bg-[#FBBF24]/10  rounded-xl text-[#b45309] mb-1'>
          <h2 className='text-sm md:text-[0.95rem] md:font-bold font-medium md:ml-6'>
            <i className='fa-solid fa-warning text-xs lg:text-base mr-1'></i>{' '}
            This platfrom provides digitals tools for legitimate use only. Users
            are responsible.
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

        {/*
           Cards 
           */}
        <Cards />
      </main>
    </>
  );
};

export default Main;
