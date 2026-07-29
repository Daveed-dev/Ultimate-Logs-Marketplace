import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Modules/Home';
import Auth from './Modules/Auth';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Dashboard from './auth/Dashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/*' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Signup />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
