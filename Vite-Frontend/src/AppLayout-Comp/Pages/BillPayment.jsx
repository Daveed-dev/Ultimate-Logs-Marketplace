import React, { useEffect } from 'react';
import { billPaymentCardsData } from '../../utils/AppLayoutDatas';

const BillPayment = () => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Bill Payment';
  }, []);
  return (
    <>
      <section className='lg:ml-[var(--aside-width)] w-full lg:w-[calc(100%-var(--aside-width))] min-h-200 pt-[var(--nav-height)] bg-[var(--bg-body)]'>
        <main className='p-8'>
          <div className='md:pt-4 pt-2 pb-4'>
            <h1 className='text-xl font-semibold'>Bill Payment</h1>
            <p className='text-base text-[var(--text-muted)]'>
              Pay your bills instantly from your wallet.
            </p>
          </div>

          {/*  */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2  gap-3 md:gap-1.5 lg:gap-3 xl:gap-5 my-2'>
              {billPaymentCardsData.map((card) => {
                return (
                  <div
                    key={card.id}
                    className='w-full h-fit bg-[var(--cl-white)] py-5 px-3 border-1 border-[var(--border)] rounded-2xl hover:border-[var(--light-pur)]/50 hover:-translate-y-1 transition-all transform-300 cursor-pointer hover:shadow-[var(--shadow-md)] flex items-center gap-3'
                  >
                    <span className='w-13 h-13 rounded-xl bg-[var(--bg-body)] flex justify-center items-center shrink-0'>
                      <i
                        className={`fa-solid ${card.icon} text-[var(--cl-purple)] text-xl`}
                      ></i>
                    </span>
                    <div>
                      <h1 className='text-base md:text-lg font-semibold'>
                        {card.title}
                      </h1>
                      <p className='text-sm text-[var(--text-muted)]'>
                        {card.text}
                      </p>
                    </div>
                    <span className='ml-auto'>
                      <i className='fa-solid fa-angle-right text-[var(--placeholder)] text-base'></i>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='w-[110%] sm:w-full -ml-[5%] sm:-ml-[0%] min-h-70 bg-[var(--cl-white)] px-3 sm:px-6 py-4 mt-10 rounded-2xl'>
            <div className='flex justify-between items-center py-2'>
              <h1 className='text-sm font-semibold text-black'>
                Recent Transcations
              </h1>{' '}
              <p className='text-sm text-[var(--cl-purple)] font-medium'>
                Refresh
              </p>
            </div>
            <div className='flex justify-center items-center h-50'>
              <div className='text-center'>
                <svg
                  className='w-12 h-12 mb-2 text-[#E5E7EB] mx-auto'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='1'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
                  ></path>
                </svg>
                <h1 className='text-base  font-semibold text-[var(--gray)]/70'>
                  No transactions yet
                </h1>
                <p className='text-sm text-[var(--placeholder)]'>
                  Your bill payment history will appear here
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default BillPayment;
