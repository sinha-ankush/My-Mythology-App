import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WriteOrUploadStory from '../components/WriteOrUploadStory';
import { Helmet } from "react-helmet-async";

function WriteStory() {
  return (
    <div>
      <Helmet>
        <title>WritePost</title>
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
      <WriteOrUploadStory />
      <Footer />

    </div>
  )
}

export default WriteStory