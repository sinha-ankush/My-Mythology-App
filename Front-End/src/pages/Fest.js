import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Monetization from '../components/Monetization';
import RC1Section from '../components/RC1Section';
import Fest_Content from '../components/Fest_Content';
import { Helmet } from "react-helmet-async";
function Fest() {
  return (
    <div>
      <Helmet>
        <title>Festivals</title>
        <meta
          name="description"
          content="Read about all  festivals and reason behind the festivals celebration here on poojaarchana."
        />
        {/* <link rel="canonical" href="/Contact" /> */}
        <meta
          name="keywords"
          content="All Festivals, Pooja , Diwali, Holi , RakshaBandhan , Ganesh chaturthi"
        />
      </Helmet>
      <Navbar />
      <Fest_Content />
      {/* <RC1Section /> */}
      <Monetization />
      <Footer />
    </div>
  );
}

export default Fest
