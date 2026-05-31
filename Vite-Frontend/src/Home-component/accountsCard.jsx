import React, { useState } from 'react';
import ScrollintoView from '../Functions';

const AccountsCard = ({ bg, cl, linear, icon, title, description, status }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, setAnimation] = ScrollintoView();
  return (
    <>
      <div
        className={`md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8  bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8 ${setAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`h-17 w-17 rounded-xl bg-[${bg}] flex justify-center items-center mb-2`}
          style={{
            boxShadow: hovered
              ? '0px 20px 40px transparent'
              : 'var(--shadow-3d)',
            background: `${linear}`,
            transform: hovered
              ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
              : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
            transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }}
        >
          <i className={`${icon} text-3xl text-${cl} text-center mx-auto`}></i>
        </div>
        <h1 className='font-bold py-1.5 text-[1.3rem] text-[var(--dark)]'>
          {title}
        </h1>
        <p className='text-[var(--gray)] text-[1.15rem] h-30'>{description}</p>
        <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
        <div className='flex justify-between items-center pt-4'>
          <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
            {status}
          </p>
          <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
            Buy Now
            <i
              className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered ? 'ml-1.5' : ''}`}
            ></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default AccountsCard;
