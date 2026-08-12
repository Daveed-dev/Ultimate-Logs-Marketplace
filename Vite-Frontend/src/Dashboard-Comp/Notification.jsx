import React from 'react';

const Notification = ({ ActivePanel, SetActivePanel }) => {
  return (
    <>
      <section
        className={`fixed right-0 bottom-0 md:w-100 w-80 bg-[var(--cl-white)] h-full p-6  z-50 overflow-y-auto scrollbar-hidden transition-all duration-300 ${ActivePanel === 'notification' ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <div className='flex items-center justify-between mb-8 text-sm '>
          <span className='text-[var(--dark)] text-lg font-medium'>
            Notification
          </span>
          <i
            className='fa-solid fa-xmark cursor-pointer text-[var(--text-muted)]/60'
            onClick={() => SetActivePanel(null)}
          ></i>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='hover:bg-[var(--light-gray)] cursor-pointer transition-all duration-300 rounded-xl p-2'>
            <h1 className='font-medium text-lg'>How Referrals Work</h1>
            <p className='text-[var(--text-muted)] text-[0.95rem]'>
              Our Referral Program is now Active ✅.. Refer and Earn &nbsp;
              Referral Rules1. Minimum Deposit RequirementYour referrals m..
            </p>
            <p className='text-[var(--gray)]/70 text-[0.8rem] mt-2'></p>
          </div>
          <div className='hover:bg-[var(--light-gray)] cursor-pointer transition-all duration-300 rounded-xl p-2'>
            <h1 className='font-medium text-lg'>How Referrals Work</h1>
            <p className='text-[var(--text-muted)] text-[0.95rem]'>
              Our Referral Program is now Active ✅.. Refer and Earn &nbsp;
              Referral Rules1. Minimum Deposit RequirementYour referrals m..
            </p>
            <p className='text-[var(--gray)]/70 text-[0.8rem] mt-2'>
              3 Months ago
            </p>
          </div>
          <div className='hover:bg-[var(--light-gray)] cursor-pointer transition-all duration-300 rounded-xl p-2'>
            <h1 className='font-medium text-lg'>How Referrals Work</h1>
            <p className='text-[var(--text-muted)] text-[0.95rem]'>
              Our Referral Program is now Active ✅.. Refer and Earn &nbsp;
              Referral Rules1. Minimum Deposit RequirementYour referrals m..
            </p>
            <p className='text-[var(--gray)]/70 text-[0.8rem] mt-2'>
              6 Months ago
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notification;
