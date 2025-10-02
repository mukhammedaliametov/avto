import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Consulting from './components/Consulting';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Consulting />
      <Services />
      <Footer />
    </>
  );
};

export default App;