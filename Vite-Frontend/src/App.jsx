import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Modules/Home';
import Auth from './Modules/Auth';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/*' element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
