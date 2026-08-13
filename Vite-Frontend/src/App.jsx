import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Modules/Home';
import Auth from './Modules/Auth';
import Login from './auth/Login';
import Signup from './auth/Signup';
import AppLayout from './auth/AppLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/*' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Signup />} />
          <Route path='dashboard' element={<AppLayout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
