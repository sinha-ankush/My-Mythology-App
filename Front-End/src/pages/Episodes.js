import React from 'react';
import Episode_Content from '../components/Episode_Content';
import Monetization from '../components/Monetization';
import Navbar from '../components/Navbar';
import RC2Section from '../components/RC2Section';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";

function Episodes() {
  return (
    <div>
      <Helmet>
        <title>Episode</title>
        <meta
          name="description"
          content="Read the full episode here on poojaarchana."
        />
        {/* <link rel="canonical" href="/Contact" /> */}
        <meta
          name="keywords"
          content="Full episode, Full story, Pooja , Mythology, Stories, Ramayana, Mahabharata , Dasavtar , Bhagvad Gita ,"
        />
      </Helmet>
      <Navbar />
      <Episode_Content />
      {/* <RC2Section /> */}
      <Monetization />
      <Footer />
    </div>
  );
}

export default Episodes
