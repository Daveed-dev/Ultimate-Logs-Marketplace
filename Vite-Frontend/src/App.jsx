import React from 'react';
import Home from './Modules/Home';
import scrollToPage from './utils/scrollToPage';

const App = () => {
  return (
    <>
      <scrollToPage />
      <Home />
    </>
  );
};

export default App;
