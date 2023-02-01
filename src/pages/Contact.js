import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact PoojaArchana team for any feedback, story upload issue, joining our team."
        />
        {/* <link rel="canonical" href="/Contact" /> */}
        <meta
          name="keywords"
          content="Contact, Author, Pooja , Character , Aarti, Feedback , Join "
        />
      </Helmet>
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Contact
