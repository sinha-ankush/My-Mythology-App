import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import {Helmet} from 'react-helmet-async';

function About() {
  return (
    <div>
      <Helmet>
        <title>About </title>
        <meta
          name="description"
          content="About section for Stories temples festivals characters of indian mythology."
        />
        {/* <link rel="canonical" href="/About" /> */}
        <meta name="keywords" content="Mythology, God, Pooja , About " />
      </Helmet>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About
