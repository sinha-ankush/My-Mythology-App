import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Temp_Con from '../components/Temp_Con';
import RTSection from '../components/RTSection';
import { Helmet } from "react-helmet-async";

function Temp_Story() {
  return (
    <div>
      <Helmet>
        <title>Temples</title>
        <meta
          name="description"
          content="Get all temples and reason behind the establishment of temples here on poojaarchana."
        />
        {/* <link rel="canonical" href="/Contact" /> */}
        <meta
          name="keywords"
          content="All Temples, Pooja , Indian temples, Somnath , Badrinath , Hidimba , Kamakhya , Lepakshi , Kailashnath"
        />
      </Helmet>
      <Navbar />
      <Temp_Con />
      <RTSection />
      <Footer />
    </div>
  );
}

export default Temp_Story
