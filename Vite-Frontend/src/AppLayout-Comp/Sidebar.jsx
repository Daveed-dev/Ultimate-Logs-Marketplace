import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  const isDashboard = location.pathname === '/user/dashboard';

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2.5 text-base  py-2 px-2 font-semibold rounded-lg  ${isActive ? 'bg-[var(--white)] text-[var(--cl-purple)]' : 'text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)]'} `;

  return (
    <>
      <aside
        className={`
    fixed top-0 left-0 h-100vh h-dvh z-50 flex flex-col
    bg-[var(--cl-white)] border-r border-[var(--border)]
    transition-all duration-300 ease-in-out
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0
    w-[var(--aside-width)]
  `}
      >
        <section className='w-full h-18 flex items-center  border-b-1 border-[var(--border)] pl-4 shrink-0'>
          <div>
            <img src='/images/logo.png' alt='logo' className='h-9 ' />
          </div>
          <div
            className='absolute right-6  hover:bg-[var(--white)] flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-300 lg:hidden'
            onClick={() => setIsSidebarOpen(false)}
          >
            <i className='fa-solid fa-close none text-[var(--gray)] text-sm'></i>
          </div>
        </section>
        <section className='w-full h-18 flex items-center gap-4 px-4 border-b-1 border-[var(--border)] shrink-0'>
          <div className='relative inline-block'>
            <img
              src='/images/profile11.png'
              alt='profile'
              className='h-10.5 border-2 border-[var(--cl-purple)] rounded-full'
            />
            <div className='absolute bottom-0 right-0 w-3.5 h-3.5 bg-amber-300 rounded-full flex items-center justify-center'>
              <span className='text-white text-[0.6rem] font-bold'>0</span>
            </div>
          </div>
          <div>
            <h1 className='text-[var(--dark)] text-base font-medium'>
              John Doe
            </h1>
            <p className='text-[var(--gray)] text-sm'>john.doe@example.com</p>
          </div>
        </section>
        {/*
          Sidebar  Balance
          */}
        {!isDashboard && (
          <section className='p-3'>
            <div className='w-full h-fit bg-gradient-to-r from-[var(--cl-purple)] to-[var(--dark-pur)]/50 rounded-2xl px-4 py-3 flex flex-col gap-1.5 relative'>
              <div className='absolute inset-0 pointer-events-none z-1'>
                <span className='absolute left-12 -top-10 h-[120%] w-[1.5px] bg-white/10 rotate-[14deg]'></span>

                <span className='absolute left-45 -top-10 h-[100%] w-[1px] bg-white/10 rotate-[-20deg]'></span>

                <span className='absolute right-26 -top-10 h-[105%] w-[1.5px] bg-white/10 rotate-[22deg]'></span>

                <span className='absolute right-10 -top-10 h-[90%] w-[1px] bg-white/10 rotate-[-9deg]'></span>
              </div>

              <div className=' '>
                <p className='text-[var(--cl-white)]/80 text-sm md:text-[0.9rem]'>
                  ACCOUNT BALANCE
                </p>
              </div>
              <div>
                <h1 className='text-[var(--cl-white)] text-xl md:text-2xl font-bold'>
                  $540.00
                </h1>
              </div>
              <div className='w-25'>
                <NavLink
                  href='#'
                  className='flex items-center gap-1 bg-white/10 backdrop-blur-[10px] text-[var(--cl-white)] hover:-translate-y-0.5 transition-all text-sm font-bold duration-300 py-1 px-4 rounded-3xl border-1 border-[var(--cl-white)]/20'
                >
                  <i className='fa-solid fa-add '></i>
                  <p>History</p>
                </NavLink>
              </div>
            </div>
          </section>
        )}
        {/*
          end of Sidebar Balance
          */}
        <section className='w-full px-4 pt-2 pb-4 overflow-y-auto  flex-1 scrollbar-hidden'>
          {/* FirstSection */}
          <div>
            <h1 className='text-[var(--gray)] text-sm  font-medium'>
              Marketplace
            </h1>
            <nav className='pt-1  flex flex-col gap-0.5 pl-1.5'>
              <NavLink
                to='/user/dashboard'
                className={navLinkClass}
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className='fas fa-home'></i>Dashboard
              </NavLink>
              <a
                href='#'
                className='flex items-center gap-2.5 text-base  py-2 px-2 font-semibold rounded-lg text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)]'
              >
                <i className='fa-solid fa-users'></i>Buy Social Accounts
              </a>
              <NavLink
                to='/user/sms-service'
                className={navLinkClass}
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className='fa-solid fa-phone'></i>Buy Number
              </NavLink>
              <NavLink
                to='/user/email-service'
                className={navLinkClass}
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className='fa-solid fa-envelope'></i>Buy Emails
              </NavLink>
              <a
                href='#'
                className='flex items-center gap-2.5 text-base  py-2 px-2 font-semibold rounded-lg text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)]'
              >
                <i className='fa-solid fa-clock-rotate-left'></i>Manage Rentals
              </a>
              <NavLink
                to='/user/bills'
                className={navLinkClass}
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className='fa-solid fa-file-invoice-dollar'></i>Bill Payment
              </NavLink>
            </nav>
          </div>
          {/* SecondSection */}
          <div>
            <h1 className='text-[var(--gray)] text-sm  font-medium'>History</h1>
            <nav className='pt-1  flex flex-col gap-0.5 pl-1.5'>
              <a
                href='#'
                className='flex items-center gap-2.5 text-base  py-2 px-2 font-semibold rounded-lg text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)]'
              >
                <i className='fa-solid fa-clock-rotate-left'></i>Order History
              </a>
              <a
                href='#'
                className='flex items-center gap-2.5 text-base  py-2 px-2 font-semibold rounded-lg text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)]'
              >
                <i className='fa-solid fa-list-ul'></i>Transactions
              </a>
              <a
                href='#'
                className='flex items-center gap-2.5 text-base  py-2 px-2 font-semibold rounded-lg text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)]'
              >
                <i className='fa-solid fa-wallet'></i>Wallet
              </a>
            </nav>
          </div>
          {/* ThirdSection */}
          <div>
            <h1 className='text-[var(--gray)] text-sm font-medium'>Account</h1>
            <nav className='pt-1  flex flex-col gap-0.5 pl-1.5'>
              <NavLink
                to='/user/profile-setting'
                className={navLinkClass}
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className='fa-solid fa-user-gear'></i>Profile Settings
              </NavLink>
              <a
                href='#'
                className='flex items-center gap-2.5 text-base  py-2 px-2 font-semibold rounded-lg text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)]'
              >
                <i className='fa-solid fa-code'></i>Developer API
              </a>
              <a
                href='#'
                className='flex items-center gap-2.5 text-base  py-2 px-2 font-semibold rounded-lg text-[var(--text-muted)] hover:bg-[var(--white)] hover:text-[var(--cl-purple)]'
              >
                <i className='fa-solid fa-circle-question'></i>Help Center
              </a>
            </nav>
          </div>
          <div className='relative w-full h-fit p-3 wp rounded-3xl flex flex-col items-center gap-2'>
            <div className='absolute inset-0 pointer-events-none z-0'>
              <i className='fa-solid fa-circle absolute top-5 left-5 text-[#25D366]/20 text-xs animatefloatup'></i>

              <i className='fa-solid fa-circle absolute top-6 right-6 text-[#25D366]/20 text-sm animatefloatdown'></i>

              <i className='fa-solid fa-circle absolute top-10 left-20 text-[#25D366]/20 text-[0.5rem] animatefloatdown'></i>
              <i className='fa-solid fa-circle absolute top-10 right-20 text-[#25D366]/20 text-[0.5rem] animatefloatdown'></i>

              <i className='fa-solid fa-circle absolute bottom-12 right-5 text-[#25D366]/20 text-sm animatefloatup'></i>

              <i className='fa-solid fa-circle absolute bottom-15 left-6 text-[#25D366]/20 text-[10px] animatefloatup'></i>
            </div>
            <span className='flex w-10 h-10 items-center justify-center rounded-full  bg-[#25D366] z-10'>
              <i className='fa-brands fa-whatsapp text-[var(--cl-white)] text-lg'></i>
            </span>
            <div className='z-10'>
              <h1 className='text-[#064e3b] font-medium text-center'>
                Ultimate Log News
              </h1>
              <p className='text-sm text-[#047857]'>
                Get exclusive updates and drops
              </p>
            </div>
            <button className='bg-[#25D366] text-[var(--cl-white)] w-full py-2 px-4 rounded-full font-semibold hover:bg-[#064e3b] hover:-translate-y-0.5 z-10 transition-all duration-300 '>
              Join WhatsApp
            </button>
          </div>
        </section>
        <section className='pt-2 pb-1 px-4 shrink-0 bg-[var(--cl-white)]'>
          <NavLink to='/user/login'>
            <div className='w-full h-11 flex items-center gap-2 text-[#DC2626] border-1 border-[#ffa9a9] hover:bg-[#ffa9a9] bg-[var(--white)] justify-center rounded-lg cursor-pointer transition-all duration-300 rounded-xl'>
              <i className='fa-solid fa-right-from-bracket'></i>{' '}
              <span className='text-lg font-medium'>Logout</span>
            </div>
          </NavLink>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
