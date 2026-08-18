import React, { useEffect } from 'react';

const ProfileSetting = () => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Profile Setting';
  }, []);
  return (
    <>
      <section className='w-full h-fit bg-[var(--cl-white)] border-1 border-[var(--border)] rounded-2xl md:rounded-3xl px-4 md:px-6 pt-4 pb-8'>
        <section className='w-full py-4 flex items-center  gap-4  border-b-1 border-[var(--border)] shrink-0'>
          <div className='relative inline-block'>
            <img
              src='/images/profile11.png'
              alt='profile'
              className='h-17 border-3 border-[var(--bg-body)] rounded-full'
            />
            <div className='absolute bottom-0 right-1 p-0.5 bg-[var(--cl-white)] rounded-full '>
              <span className='bg-[var(--cl-purple)] rounded-full flex items-center justify-center w-6 h-6'>
                <i className='text-[var(--cl-white)] text-[0.8rem] fa-regular fa-camera'></i>
              </span>
            </div>
          </div>
          <div className=''>
            <h1 className='text-[var(--dark)] text-base font-medium'>
              John Doe
            </h1>
            <p className='text-[var(--gray)] text-sm'>john.doe@example.com</p>
          </div>
        </section>
        <section className='pt-4'>
          <div className='py-2'>
            <h1 className='text-lg text-[var(--dark)] font-medium'>
              Personal Details
            </h1>
            <p className='text-sm text-[var(--gray)]'>
              Edit your personal details and save from here
            </p>
          </div>
          <form
            action=''
            method='post'
            className='grid grid-cols-1 md:grid-cols-2 gap-3'
          >
            {/* Input */}
            <div className='flex flex-col pt-2'>
              <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                FIRST NAME
              </label>
              <div className='group'>
                <input
                  type='text'
                  defaultValue='John'
                  className='w-full border-1 border-[var(--border)] rounded-xl pl-4 pr-4 py-3 bg-[var(--cl-white)] outline-none  focus:ring-1 focus:shadow-[var(--shadow-sm)]
                focus:ring-[var(--light-pur)]/40 focus:ring-inset transition-all duration-300 placeholder:text-[var(--dark)] placeholder:text-[0.95rem]'
                />
              </div>
            </div>
            {/* Input */}
            <div className='flex flex-col pt-2'>
              <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                LAST NAME
              </label>
              <div className='group'>
                <input
                  type='text'
                  defaultValue='Doe'
                  className='w-full border-1 border-[var(--border)] rounded-xl pl-4 pr-4 py-3 bg-[var(--cl-white)] outline-none  focus:ring-1 focus:shadow-[var(--shadow-sm)]
                focus:ring-[var(--light-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--dark)] placeholder:text-[0.95rem]'
                />
              </div>
            </div>
            {/* Input */}
            <div className='flex flex-col pt-2'>
              <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                EMAIL
              </label>
              <div className='group'>
                <input
                  type='text'
                  value='john.doe@example.com'
                  readOnly
                  className='w-full border-1 border-[var(--border)] rounded-xl pl-4 pr-4 py-3 bg-[var(--light-gray)] outline-none  
                 value:text-[var(--dark)] value:text-[0.95rem] cursor-not-allowed select-none'
                />
              </div>
            </div>
            {/* Input */}
            <div className='flex flex-col pt-2'>
              <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                Phone Number
              </label>
              <div className='group'>
                <input
                  type='text'
                  defaultValue='904567017'
                  className='w-full border-1 border-[var(--border)] rounded-xl pl-4 pr-4 py-3 bg-[var(--cl-white)] outline-none  focus:ring-1 focus:shadow-[var(--shadow-sm)]
                focus:ring-[var(--light-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--dark)] placeholder:text-[0.95rem]'
                />
              </div>
            </div>
            {/* Submit BT*/}
            <div className='pt-2'>
              <button
                type='submit'
                className='py-3 px-6 bg-[var(--cl-purple)] text-[var(--cl-white)] hover:bg-[var(--light-pur)] text-sm rounded-xl font-medium hover:-translate-y-0.5 transition-all duration-300'
              >
                Save Profile
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default ProfileSetting;
