import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceDescription from './components/ServiceDescription';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceDescription />
      <Packages />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
