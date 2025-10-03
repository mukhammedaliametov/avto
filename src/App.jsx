import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Consulting from './components/Consulting';
import Services from './components/Services';
import Footer from './components/Footer';
import ChooseUs from './components/ChooseUs';
import OurWorks from './components/OurWorks';
import Models from './components/Models';
import Contact from './components/Contact';
import Map from './components/Map';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Consulting />
      <Services />
      <ChooseUs />
      <OurWorks />
      <Models />
      <Contact />
      <Map />
      <Footer />
    </>
  );
};

export default App;