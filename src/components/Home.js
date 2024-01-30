import React from 'react';
import Hero from './Views/Hero';
import About from './About';
import Feature from './Feature';
import Enrollment from './Enrollment';



const Home = () => {
  return (
    <div className="main">
        <Hero/>
        <About />
        <Feature />
        <Enrollment />
    </div>
  );
};

export default Home;