import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Monetization from "../components/Monetization";
import RTSection from "../components/RTSection";
import Char_Content from "../components/Char_Content";
import { Helmet } from "react-helmet-async";

function Char() {
  return (
    <div>
      <Helmet>
        <title>Characters</title>
        <meta
          name="description"
          content="Read all about every indian god character."
        />
        {/* <link rel="canonical" href="/Character" /> */}
        <meta
          name="keywords"
          content="Mythology, God, Pooja ,Characters ,Shiva, Parvati, Krishna, Vishnu, Lakshmi, Ganesh, Nataraja, Devi, Saraswati, Shakti, Buddha, Kali,  Hanuman , Ram , Krishna , vishnu , Shiva , Brahma , Ganesh "
        />
      </Helmet>

      <Navbar />
      <Char_Content />
      {/* <RTSection /> */}
      <Monetization />
      <Footer />
    </div>
  );
}

export default Char;
