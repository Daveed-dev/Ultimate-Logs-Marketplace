import React from 'react';

const Userprofile = ({ ActivePanel, SetActivePanel }) => {
  return (
    <>
      <section
        className={`w-80 bg-[var(--cl-white)] h-full p-6  z-50 overflow-y-auto scrollbar-hidden fixed right-0 bottom-0 transition-all duration-300 ${ActivePanel === 'userprofile' ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <div className='flex items-center justify-between mb-8 text-sm '>
          <span className='text-[var(--dark)] text-lg font-bold text-base'>
            My Profile
          </span>
          <span className='bg-[var(--light-gray)] w-8 h-8 rounded-full flex justify-center items-center hover:bg-[var(--accent)] hover:*:[animation:spin-once_0.3s_ease-in-out] transition-all duration-300 cursor-pointer hover:*:text-[var(--white)]'>
            <i
              className='fa-solid fa-xmark  text-[var(--text-muted)]/60 '
              onClick={() => SetActivePanel(null)}
            ></i>
          </span>
        </div>
      </section>
    </>
  );
};

export default Userprofile;
