import React from 'react';
import Myth_Content from '../components/Myth_Content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import RTSection from '../components/RTSection';
import Monetization from '../components/Monetization';
import { Helmet } from "react-helmet-async";
function Myth() {
  return (
    <div>
      <Helmet>
        <title>Stories</title>
        <meta
          name="description"
          content="Get all mthylogy stories of indian god here on poojaarchana."
        />
        {/* <link rel="canonical" href="/Contact" /> */}
        <meta
          name="keywords"
          content="Pooja , Mythology, Stories, Ramayana, Mahabharata , Dasavtar , Bhagvad Gita ,"
        />
      </Helmet>
      <Navbar />
      <Myth_Content />
      {/* <RTSection /> */}
      <Monetization />
      <Footer />
    </div>
  );
}

export default Myth
