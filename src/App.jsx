import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';

function App() {
  return (
    <main className='pb-14 lg:pb-0'>
      <AppHeader />
      <div className='pt-16'>
      <Outlet />
      </div>
      <Footer />
      <MobileNavigation/>
    </main>
  );
}

export default App;
 