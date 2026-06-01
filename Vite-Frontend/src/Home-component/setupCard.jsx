import React from 'react';
import ScrollintoView from '../Functions';

const SetupCard = ({ title, description, icon }) => {
  const [ref, setAnimation] = ScrollintoView();
  return (
    <>
      <div
        className={`setup-card md:h-70 md:w-70 lg:w-87 lg:h-60 rounded-xl p-8 mb-6 transition-all duration-400 ${setAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        ref={ref}
      >
        <div className='h-12 w-12 rounded-xl bg-[var(--dark-pur)] flex items-center justify-center mx-auto'>
          <i className={`${icon} text-2xl text-[var(--cl-white)]`}></i>
        </div>
        <h1 className='font-bold text-xl pt-4 text-white text-center mx-auto'>
          {title}
        </h1>
        <p className='font-medium text-[var(--gray)] pt-2 text-sm md:text-[1.1rem] text-center mx-auto'>
          {description}
        </p>
      </div>
    </>
  );
};

export default SetupCard;
