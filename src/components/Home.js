import React from 'react';
import Hero from './Views/Hero';
import About from './About';
import Feature from './Feature';
import Enrollment from './Enrollment';
import FAQ from './FAQ';



const Home = () => {
  return (
    <div className="main">
        <Hero/>
        <About />
        <Feature />
        <Enrollment />
        <FAQ />
    </div>
  );
};

export default Home;