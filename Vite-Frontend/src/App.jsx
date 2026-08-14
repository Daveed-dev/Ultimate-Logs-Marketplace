import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Modules/Home';
import Auth from './Modules/Auth';
import Login from './auth/Login';
import Signup from './auth/Signup';
import AppLayout from './auth/AppLayout';
import Dashboard from './AppLayout-Comp/Dashboard';
import SmsService from './AppLayout-Comp/SmsService';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/*' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Signup />} />
        </Route>

        {/* Main App */}
        <Route path='/user' element={<AppLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='sms-service' element={<SmsService />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
