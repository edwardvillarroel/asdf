<<<<<<< HEAD
import React from 'react';
import NavbarFerremax from './components/navbar/navbar';
import HeaderFerremax from './components/header/header';
import ImgBanner from './components/carousel/imagenesCarousel';
import FooterFerremax from './components/footer/footer';
import MediaCard from './components/desarrollo/cards';

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <HeaderFerremax/>
        <NavbarFerremax/>
        <ImgBanner/>
      </header>
      <main>
        <div className='div-card'>
          <MediaCard/>
        </div>
      </main>
      <footer>
        <FooterFerremax/>
      </footer>
    </div>
  );
}

export default App;
=======
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
>>>>>>> 4815882e3199dc3b47c96d9149d5af4c0b744d91
