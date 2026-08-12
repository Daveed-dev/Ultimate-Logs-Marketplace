import React, { useState } from 'react';

const Overview = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  return (
    <>
      <div className='w-full h-fit bg-gradient-to-r from-[var(--cl-purple)] to-[var(--dark-pur)]/50 rounded-2xl p-4 md:p-6 flex flex-col gap-2.5 relative'>
        <div className='absolute inset-0 pointer-events-none z-1'>
          <span className='absolute left-12 -top-10 h-[120%] w-[1.5px] bg-white/10 rotate-[14deg]'></span>

          <span className='absolute left-45 -top-10 h-[100%] w-[1px] bg-white/10 rotate-[-20deg]'></span>

          <span className='absolute right-26 -top-10 h-[105%] w-[1.5px] bg-white/10 rotate-[22deg]'></span>

          <span className='absolute right-10 -top-10 h-[90%] w-[1px] bg-white/10 rotate-[-9deg]'></span>
        </div>
        <h1 className='text-[var(--cl-white)] text-lg md:text-xl font-bold'>
          Dashboard Overview, John
        </h1>
        <div className='flex items-center gap-3 '>
          <p className='text-[var(--cl-white)]/80 text-sm md:text-[0.9rem]'>
            ACCOUNT BALANCE
          </p>
          <span
            className='text-[var(--cl-white)]/60 text-[0.6rem] md:text-base p-1.5 flex items-center justify-center rounded-full bg-[var(--white)]/10 cursor-pointer '
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
          >
            <i
              className={`fa-solid ${isBalanceVisible ? 'fa-eye' : 'fa-eye-slash'}`}
            ></i>
          </span>
        </div>
        <div>
          <h1 className='text-[var(--cl-white)] text-3xl md:text-4xl font-bold'>
            {isBalanceVisible ? '$0.00' : '****'}
          </h1>
        </div>
        <div className='flex items-center gap-2 md:block md:absolute md:right-12 md:top-10'>
          <a
            href='#'
            className='flex items-center gap-1 bg-[var(--cl-white)] text-[var(--cl-purple)] hover:-translate-y-0.5 transition-all text-sm font-bold duration-300 py-2 px-7 rounded-3xl md:mb-3'
          >
            <i className='fa-solid fa-plus '></i>
            <p>Add Funds</p>
          </a>
          <a
            href='#'
            className='flex items-center gap-1 bg-white/10 backdrop-blur-[10px] text-[var(--cl-white)] hover:-translate-y-0.5 transition-all text-sm font-bold duration-300 py-2 px-9 rounded-3xl border-1 border-[var(--cl-white)]/20 '
          >
            <p>History</p>
            <i className='fa-solid fa-arrow-right '></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Overview;
