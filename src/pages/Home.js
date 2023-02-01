import React, { useEffect, useState } from 'react';
import Carousel from '../components/Herosection';
import Navbar from '../components/Navbar';
import Category from '../components/Category'
import Trending from '../components/Trending';
import TopMatch from '../components/TopMatch';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { getCurrentUserDetail, isLoggedIn } from '../auth';
import OReccomend from '../components/OReccomend';
import Write from '../components/Write';


function Home() {

  const [login, setLogin] = useState(false)


  useEffect(() => {

    setLogin(isLoggedIn());


  }, [login])
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Stories temples festivals characters of indian mythology."
        />
        {/* <link rel="canonical" href="/Home" /> */}
        <meta name="keywords" content="Mythology, God, Pooja ,Indian Character, Temples, Festivals " />
      </Helmet>
      <Navbar />
      <Carousel />
      <Category />
      <Trending />
      <Write />
      {login ? <TopMatch /> : <OReccomend />}
      <Footer />
    </div>
  );
}

export default Home
