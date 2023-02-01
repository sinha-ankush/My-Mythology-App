import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import { Helmet } from "react-helmet-async";

function ProfilePage() {
  return (
    <div>
      <Helmet>
        <title>Profile</title>
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
      <Profile />
      <Footer />
    </div>
  )
}

export default ProfilePage