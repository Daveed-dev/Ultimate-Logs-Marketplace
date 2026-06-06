import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Auth;
