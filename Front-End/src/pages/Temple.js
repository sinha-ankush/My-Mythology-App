import React from 'react';
import Footer from '../components/Footer';
import Monetization from '../components/Monetization';
import Navbar from '../components/Navbar';
import RC1Section from '../components/RC1Section';
import Temp_Content from '../components/Temp_Content';
import { Helmet } from "react-helmet-async";

function Temple() {
  return (
    <div>
      <Helmet>
        <title>Temples</title>
        <meta
          name="description"
          content="Read about indian  temples and reason behind the establishment of temples here on poojaarchana."
        />
        {/* <link rel="canonical" href="/Contact" /> */}
        <meta
          name="keywords"
          content="All Temples, Pooja , Indian temples, Somnath , Badrinath , Hidimba , Kamakhya , Lepakshi , Kailashnath"
        />
      </Helmet>
      <Navbar />
      <Temp_Content />
      {/* <RC1Section /> */}
      <Monetization />
      <Footer />
    </div>
  );
}

export default Temple
