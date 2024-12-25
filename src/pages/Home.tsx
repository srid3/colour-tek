import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductShowcase from '../components/Products';
import ColourInspiration from '../components/ColourInspiration';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ProductShowcase />
      <ColourInspiration />
      <Testimonials />
    </div>
  );
};

export default Home;