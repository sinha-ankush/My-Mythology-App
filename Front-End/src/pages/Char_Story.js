import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RC1Section from "../components/RC1Section";
import Char_Con from "../components/Char_Con";
import { Helmet } from "react-helmet-async";

function Char_Story() {
  return (
    <div>
      <Helmet>
        <title>Character</title>
        <meta
          name="description"
          content="Get Character of every indian god and mythology stories."
        />
        {/* <link rel="canonical" href="/Character" /> */}
        <meta
          name="keywords"
          content="Mythology, God, Pooja , Characters ,Shiva, Parvati, Krishna, Vishnu, Lakshmi, Ganesh, Nataraja, Devi, Saraswati, Shakti, Buddha, Kali,  Hanuman , Ram , Krishna , vishnu , Shiva , Brahma , Ganesh"
        />
      </Helmet>
      <Navbar />
      <Char_Con />
      <RC1Section />
      <Footer />
    </div>
  );
}

export default Char_Story;
