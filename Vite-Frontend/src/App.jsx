import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Modules/Home';
import Auth from './Modules/Auth';
import Login from './auth/Login';
import Signup from './auth/Signup';
import AppLayout from './auth/AppLayout';
import Dashboard from './AppLayout-Comp/Pages/Dashboard';
import SmsService from './AppLayout-Comp/Pages/SmsService';
import EmailService from './AppLayout-Comp/Pages/EmailService';
import BillPayment from './AppLayout-Comp/Pages/BillPayment';
import AccountSettingLayout from './AppLayout-Comp/Pages/AccountSettingLaqyout';
import ProfileSetting from './AccountSetting-comp/ProfileSetting';
import PasswordSetting from './AccountSetting-comp/PasswordSetting';

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
          <Route path='email-service' element={<EmailService />} />
          <Route path='bills' element={<BillPayment />} />
          <Route element={<AccountSettingLayout />}>
            <Route path='profile-setting' element={<ProfileSetting />} />
            <Route path='change-password' element={<PasswordSetting />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
