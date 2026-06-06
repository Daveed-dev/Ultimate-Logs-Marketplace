import React from 'react';
import ScrollintoView from '../Functions';
import { marketCardData, setupCardData } from '../utils/Data';
import MarketCard from './marketCard';
import SetupCard from './setupCard';

const Market = () => {
  const [ref, setAnimation] = ScrollintoView();
  const [ref2, setAnimation2] = ScrollintoView();
  const [ref3, setAnimation3] = ScrollintoView();
  return (
    <>
      <section className='pt-12 md:pt-20 bg-[var(--cl-white)]'>
        <article className='px-4 md:px-16'>
          <div
            className={`py-4 w-full  transition-all duration-400 ease-in ${setAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            ref={ref}
          >
            <h1 className='font-bold text-2xl md:text-3xl lg:text-[2.5rem] max-w-160 text-[var(--dark)] mx-auto text-center'>
              Why Buy From{' '}
              <span className='bg-gradient-to-r from-[var(--light-pur)] to-[var(--accent)] bg-clip-text text-transparent'>
                Ultimate Logs Marketplace
              </span>
            </h1>
            <p className='text-[var(--gray)]  lg:text-[1.3rem] text-xl text-center max-w-170 mx-auto pt-2 md:pt-4'>
              We supply the foundational accounts and logins that power
              marketing agencies, automated networks, and global scaling
              operations.
            </p>
          </div>
          <div className='pt-8 md:py-12 w-full md:flex md:flex-wrap md:justify-evenly lg:justify-between items-center gap-4'>
            {marketCardData.map((card, index) => (
              <MarketCard key={index} {...card} />
            ))}
          </div>
        </article>
        <article className='py-16 w-full bg-[var(--dark)]'>
          <div className='px-4 md:px-16'>
            <h3
              className={`text-[var(--gray)] md:mt-16 lg:text-[1.3rem] text-xl text-center max-w-170 mx-auto transition-all duration-400  ${setAnimation2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              ref={ref2}
            >
              From browsing our catalog to receiving your full credentials in
              exactly three steps.
            </h3>
            <div className='py-8 w-full md:flex md:flex-wrap md:justify-evenly xl:justify-between items-center gap-3'>
              {setupCardData.map((card, index) => (
                <SetupCard key={index} {...card} />
              ))}
            </div>
          </div>
        </article>
        <article className='bg-[var(--bg-body)] w-full'>
          <div className='px-4 py-12 md:px-16 md:py-24 lg:px-24'>
            <div
              className={`p-8 lg:px-16 lg:py-8  bg-[var(--light-pur)] transition-all duration-400 rounded-2xl ${setAnimation3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              ref={ref3}
            >
              <h1 className='text-4xl lg:text-5xl font-bold text-center text-white pt-8 pb-2'>
                Ready To Purchase Premium Logs?
              </h1>
              <p className='text-center text-white lg:text-[1.3rem] text-xl text-center max-w-210  mx-auto pt-2 md:pt-4'>
                Stop dealing with bans and unreliable vendors. Buy verified
                credentials from Ultimate Logs Marketplace and scale instantly.
              </p>
              <div className='flex flex-wrap justify-center gap-4 py-6'>
                <button className='bg-white text-black p-4 rounded-2xl hover:text-[var(--dark-pur)] transition-colors duration-300 font-medium text-[0.9rem] md:text-[1rem] hover:-translate-y-0.5 hover:shadow-[0px_8px_20px_rgba(141,55,226,0.2)] '>
                  Register Free Account
                </button>
                <button className='bg-[var(--dark-pur)] text-white p-4 rounded-2xl font-medium text-[0.9rem] md:text-[1rem]'>
                  Browse All Logins
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Market;
