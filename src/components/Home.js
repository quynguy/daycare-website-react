import React from 'react';
import Hero from './Views/Hero';
import About from './About';
import Feature from './Feature';



const Home = () => {
  return (
    <div className="main">
        <Hero/>
        <About />
        <Feature />
    </div>
  );
};

export default Home;