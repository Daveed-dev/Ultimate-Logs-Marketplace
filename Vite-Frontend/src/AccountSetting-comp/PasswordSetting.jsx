import React, { useEffect } from 'react';

const PasswordSetting = () => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Change Password';
  }, []);
  return (
    <>
      <section className='w-full h-fit bg-[var(--cl-white)] border-1 border-[var(--border)] rounded-2xl md:rounded-3xl px-4 md:px-6 pt-4 pb-8'>
        <div className='py-2'>
          <h1 className='text-lg text-[var(--dark)] font-medium'>
            Change Password
          </h1>
          <p className='text-sm text-[var(--gray)]'>
            To change your password, please fill in the fields below
          </p>
        </div>
        <form
          action='
        '
          className='flex flex-col gap-2'
        >
          {/* Input */}
          <div className='flex flex-col pt-2'>
            <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
              Current Password
            </label>
            <div className='group'>
              <input
                type='text'
                placeholder='Enter current password'
                className='w-full max-w-100 border-1 border-[var(--border)] rounded-xl pl-4 pr-4 py-3 bg-[var(--cl-white)] outline-none  focus:ring-1 focus:shadow-[var(--shadow-sm)]
                focus:ring-[var(--light-pur)]/40 focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:text-[0.95rem]'
              />
            </div>
          </div>
          {/* Input */}
          <div className='flex flex-col pt-2'>
            <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
              Change Password
            </label>
            <div className='group'>
              <input
                type='text'
                placeholder='Enter new password'
                className='w-full max-w-100 border-1 border-[var(--border)] rounded-xl pl-4 pr-4 py-3 bg-[var(--cl-white)] outline-none  focus:ring-1 focus:shadow-[var(--shadow-sm)]
                focus:ring-[var(--light-pur)]/40 focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:text-[0.95rem]'
              />
            </div>
            <span className='text-[var(--dark)] text-sm block'>
              1 small letter minimum
            </span>
            <span className='text-[var(--dark)] text-sm block'>
              1 capital letter minimum
            </span>
            <span className='text-[var(--dark)] text-sm block'>
              1 number minimum
            </span>
            <span className='text-[var(--dark)] text-sm block'>
              1 special character minimum
            </span>
            <span className='text-[var(--dark)] text-sm block'>
              6 character password
            </span>
          </div>
          {/* Input */}
          <div className='flex flex-col pt-4'>
            <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
              Comfirm New Password
            </label>
            <div className='group'>
              <input
                type='text'
                placeholder='Comfirm new password'
                className='w-full max-w-100 border-1 border-[var(--border)] rounded-xl pl-4 pr-4 py-3 bg-[var(--cl-white)] outline-none  focus:ring-1 focus:shadow-[var(--shadow-sm)]
                focus:ring-[var(--light-pur)]/40 focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:text-[0.95rem]'
              />
            </div>
          </div>
          {/* Submit BT*/}
          <div className='pt-2'>
            <button
              type='submit'
              className='py-3 px-6 bg-[var(--cl-purple)] text-[var(--cl-white)] hover:bg-[var(--light-pur)] text-sm rounded-xl font-medium hover:-translate-y-0.5 transition-all duration-300'
            >
              Change Password
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default PasswordSetting;
