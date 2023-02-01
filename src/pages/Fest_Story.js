import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Fest_Con from '../components/Fest_Con';
import RC2Section from '../components/RC2Section';
import { Helmet } from "react-helmet-async";


function Fest_Story() {
  return (
    <div>
      <Helmet>
        <title>Festivals</title>
        <meta
          name="description"
          content="Get all festivals and reason behind the festivals celebration here on poojaarchana."
        />
        {/* <link rel="canonical" href="/Contact" /> */}
        <meta
          name="keywords"
          content="All Festivals, Pooja , Mythology, Diwali, Holi , RakshaBandhan , Ganesh chaturthi"
        />
      </Helmet>
      <Navbar />
      <Fest_Con />
      <RC2Section />
      <Footer />
    </div>
  );
}

export default Fest_Story
