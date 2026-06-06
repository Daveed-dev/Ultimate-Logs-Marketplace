import React, { useState } from 'react';
import ScrollintoView from '../Functions';
import Icons from '../utils/Data';
import AccountsCard from './accountsCard';
import { cardsData } from '../utils/Data';

const Accounts = () => {
  const [ref, setAnimation] = ScrollintoView();

  return (
    <>
      <main className='pt-20 bg-[var(--light-gray)] min-h-screen '>
        <section className=' px-4 lg:px-16 '>
          <div
            className={` w-full  transition-all duration-1000 ease-in ${setAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            ref={ref}
          >
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl  text-[var(--dark)] text-center '>
              Buy Verified{' '}
              <span className='bg-gradient-to-r from-[var(--light-pur)] to-[var(--accent)] bg-clip-text text-transparent'>
                Account's & Logins
              </span>
            </h1>
            <p className='text-[var(--gray)]  lg:text-2xl text-xl text-center max-w-190 mx-auto pt-2 md:pt-4'>
              Purchase direct access to our strictly vetted inventory of social
              profiles, enterprise tools, and premium VPN networks.
            </p>
          </div>
          <div className='pt-8 md:pt-12 w-full md:flex md:flex-wrap md:justify-evenly lg:justify-start items-center gap-4 xl:grid xl:grid-cols-4'>
            {/* CARDS */}
            {cardsData.map((item, index) => {
              return <AccountsCard key={index} {...item} />;
            })}
          </div>
        </section>
        {/* ICONS */}
        <section className='h-30 w-full border-[0.1rem] border-[var(--border)] flex items-center'>
          <div className='animate-marquee flex'>
            {Icons.map((item, index) => {
              return (
                <span
                  className='transition-transform duration-300 hover:scale-[1.15]  mx-3 md:mx-7'
                  key={index}
                >
                  <i
                    className={`${item.icon} text-[2.35rem] text-[var(--icons)] hover:text-[var(--dark)]`}
                  ></i>
                </span>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Accounts;
