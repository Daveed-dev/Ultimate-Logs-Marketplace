import React, { useEffect } from 'react';
import { buyEmailCardsData } from '../../utils/AppLayoutDatas';
const EmailService = () => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Email Service';
  }, []);
  return (
    <>
      <section className='lg:ml-[var(--aside-width)] w-full lg:w-[calc(100%-var(--aside-width))] min-h-200 pt-[var(--nav-height)] bg-[var(--bg-body)]'>
        <main className='p-8'>
          <div className='md:pt-4 pt-2 pb-4 md:flex justify-between items-center'>
            <div>
              <h1 className='text-lg md:text-xl font-semibold'>Buy Email</h1>
              <p className='text-sm text-[var(--text-muted)]'>
                You will receive an instant refund if no email is received.
              </p>
            </div>
            <span className='flex items-center rounded-4xl gap-2 py-1 px-4 bg-[#15803D]/10 text-[#15803D] mt-2 md:mt-0 max-w-80'>
              <svg
                class='w-4 h-4'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                viewBox='0 0 24 24'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
                ></path>
              </svg>
              <p className='text-sm md:text-[0.91rem] font-sans'>
                Instant refund if no email received
              </p>
            </span>
          </div>
          {/*  */}
          <div>
            <h1 className='text-[0.9rem] text-[var(--gray)] font-medium pb-4'>
              Choose a domain to get started
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  gap-3 md:gap-1.5 lg:gap-3 xl:gap-5'>
              {buyEmailCardsData.map((card) => {
                return (
                  <div
                    key={card.id}
                    className='w-full h-fit bg-[linear-gradient(145deg,#fff_0%,rgba(243,230,255,0.95)_100%)] p-4 lg:p-6 border-1 border-[var(--border)] rounded-2xl hover:border-[var(--light-pur)]/50 hover:-translate-y-1 transition-all transform-300 cursor-pointer hover:shadow-[var(--shadow-md)] flex items-center gap-3'
                  >
                    <span className='w-13 h-13 rounded-xl bg-[var(--bg-body)] flex justify-center items-center'>
                      <img alt='img' src={card.img} className='w-6.5 h-6.5' />
                    </span>
                    <div>
                      <h1 className='text-base md:text-lg font-semibold'>
                        {card.title}
                      </h1>
                      <p className='text-sm text-[var(--text-muted)]'>
                        {card.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default EmailService;
