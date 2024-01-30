import React from 'react';
import Hero from './Views/Hero';
import About from './About';



const Home = () => {
  return (
    <div className="main">
        <Hero/>
        <About />
    </div>
  );
};

export default Home;