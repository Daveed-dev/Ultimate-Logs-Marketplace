import React from 'react';
import ScrollintoView from '../Functions';

const MarketCard = ({ title, description, icon }) => {
  const [ref, setAnimation] = ScrollintoView();

  return (
    <>
      <div
        className={`md:h-80 md:w-70 lg:w-85 lg:h-65 rounded-xl p-8 border border-[var(--border)] hover:bg-[var(--light-gray)] transition-all duration-300 hover:border-[var(--dark-pur)] mb-6 ${setAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        ref={ref}
      >
        <div className='h-12 w-12 rounded-xl  bg-[var(--white)] flex items-center justify-center'>
          <i className={`${icon} text-2xl text-[var(--dark-pur)]`}></i>
        </div>
        <h1 className='font-bold text-xl pt-4'>{title}</h1>
        <p className='text-[var(--gray)] pt-2 text-sm md:text-[1.1rem]'>
          {description}
        </p>
      </div>
    </>
  );
};

export default MarketCard;
