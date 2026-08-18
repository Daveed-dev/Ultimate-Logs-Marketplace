import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AccountSettingLayout = () => {
  const navLinkClass = ({ isActive }) =>
    `py-3.5 px-5  flex gap-3 items-center font-medium text-base ${isActive ? 'text-[var(--cl-purple)] bg-[var(--light-gray)] border-l-3 border-[var(--cl-purple)]' : 'text-[var(--gray)] bg-[var(--cl-white)]'}`;
  return (
    <>
      <section className='lg:ml-[var(--aside-width)] w-full lg:w-[calc(100%-var(--aside-width))] min-h-200 pt-[var(--nav-height)] bg-[var(--bg-body)]'>
        <main className='p-4 md:p-8'>
          <div className='md:pt-4 pt-2 pb-4'>
            <h1 className='text-xl font-semibold'>Account Setting</h1>
          </div>
          <div className='flex flex-col md:flex-row gap-6 items-start'>
            <div className='bg-[var(--cl-white)] flex flex-col w-full sm:w-70 rounded-2xl md:rounded-3xl border-1 border-[var(--border)] overflow-hidden'>
              <NavLink className={navLinkClass} to='/user/profile-setting'>
                <i className='fa-solid fa-user'></i>{' '}
                <span className=''>Profile Setting</span>
              </NavLink>
              <NavLink className={navLinkClass} to='/user/change-password'>
                <i className='fa-solid fa-lock'></i>{' '}
                <span className=''>Password</span>
              </NavLink>
            </div>

            <div className='w-full bg-[cl-white]'>
              <Outlet />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default AccountSettingLayout;
