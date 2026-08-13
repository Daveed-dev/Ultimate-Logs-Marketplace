import React from 'react';
import { Link } from 'react-router-dom';

const Userprofile = ({ ActivePanel, SetActivePanel }) => {
  const ProgressRating = '0.00%';
  return (
    <>
      <section
        className={`w-80 bg-[var(--cl-white)] h-full p-6 pt-8 pb-0 z-50 overflow-y-auto scrollbar-hidden fixed right-0 bottom-0 transition-all duration-300 ${ActivePanel === 'userprofile' ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
      >
        <div className='flex items-center justify-between text-sm border-b-1 border-[var(--border)] pb-4'>
          <span className='text-[var(--dark)] text-lg font-bold text-base'>
            My Profile
          </span>
          <span className='bg-[var(--gray)]/30 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[var(--accent)] hover:*:[animation:spin-once_0.3s_ease-in-out] transition-all duration-300 cursor-pointer hover:*:text-[var(--white)]'>
            <i
              className='fa-solid fa-xmark  text-[var(--text-muted)]'
              onClick={() => SetActivePanel(null)}
            ></i>
          </span>
        </div>

        <section className='border-b-1 border-[var(--border)] pt-4 pb-2'>
          <div className='w-full py-3 flex flex-col items-center justify-center gap-0.5 px-4  shrink-0'>
            <img
              src='/images/profile11.png'
              alt='profile'
              className='h-25 border-3 border-[var(--cl-purple)] rounded-full'
            />

            <h1 className='text-[var(--dark)] text-base lg:text-lg font-medium'>
              John Doe
            </h1>
            <p className='text-[var(--gray)] text-sm'>john.doe@example.com</p>
          </div>
          <div className='w-full flex flex-col gap-2 py-3'>
            <div className='w-full flex items-center justify-between text-sm'>
              <p className=' text-[var(--text-muted)]/80 font-medium'>
                Progress to Level 1
              </p>
              <p className='text-[var(--cl-purple)] font-bold'>
                {ProgressRating}
              </p>
            </div>
            <span className='w-full h-3 rounded-lg bg-[var(--light-gray)]'></span>
          </div>
        </section>
        <div className='py-3'>
          <nav className='pt-1  flex flex-col gap-2.5'>
            <a
              href='#'
              className='flex items-center gap-2.5 text-base  py-3 px-2 font-semibold rounded-2xl text-[var(--text-muted)] bg-[var(--light-gray)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)] border-1 border-transparent hover:border-[var(--cl-purple)] hover:-translate-x-1.5 transition-all duration-300'
            >
              <i className='fa-solid fa-user-gear'></i>Profile Setting
            </a>
            <a
              href='#'
              className='flex items-center gap-2.5 text-base  py-3 px-2 font-semibold rounded-2xl text-[var(--text-muted)] bg-[var(--light-gray)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)] border-1 border-transparent hover:border-[var(--cl-purple)] hover:-translate-x-1.5 transition-all duration-300'
            >
              <i className='fa-solid fa-lock'></i>Change Password
            </a>
            <a
              href='#'
              className='flex items-center gap-2.5 text-base  py-3 px-2 font-semibold rounded-2xl text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)] border-1 border-transparent hover:border-[var(--cl-purple)] hover:-translate-x-1.5 transition-all duration-300 bg-[var(--light-gray)]'
            >
              <i className='fa-solid fa-credit-card'></i>Payment Method
            </a>
            <a
              href='#'
              className='flex items-center gap-2.5 text-base  py-3 px-2 font-semibold rounded-2xl text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)] border-1 border-transparent hover:border-[var(--cl-purple)] hover:-translate-x-1.5 transition-all duration-300 bg-[var(--light-gray)]'
            >
              <i className='fa-solid fa-trophy'></i>Discount Tiers
            </a>
          </nav>
        </div>
        <section className=' mt-auto py-2'>
          <Link to='/user/login'>
            <div className='w-full h-11 flex items-center gap-2 text-[#DC2626] border-1 border-transparent hover:border-[#ffa9a9] hover:bg-[#ffa9a9]/30 bg-[var(--white)]/80 justify-start rounded-2xl cursor-pointer transition-all duration-300 rounded-xl px-4 hover:-translate-x-1.5'>
              <i className='fa-solid fa-right-from-bracket text-[var(--text-muted)]'></i>{' '}
              <span className='text-lg font-medium'>Logout</span>
            </div>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Userprofile;
