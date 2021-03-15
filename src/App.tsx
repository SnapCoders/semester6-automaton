import React from 'react';

import AppProvider from './hooks';

import Home from './pages/Home';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Home />
      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
