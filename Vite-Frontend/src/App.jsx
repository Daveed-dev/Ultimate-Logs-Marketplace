import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Modules/Home';
import Auth from './Modules/Auth';
import Login from './auth/Login';
import Signup from './auth/Signup';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/*' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
