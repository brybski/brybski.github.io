import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Attractions from './pages/Attractions';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/atrakcje" element={<Attractions />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;