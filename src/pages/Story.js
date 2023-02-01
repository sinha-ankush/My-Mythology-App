import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Episode from "../components/Episode";
import RSSection from "../components/RSSection";
import { Helmet } from "react-helmet-async";
import { Title } from "@mui/icons-material";

function Story() {
  return (
    <div>
      <Helmet>
        <title>Story</title>
      </Helmet>
      <Navbar />
      <Episode />
      <RSSection />
      <Footer />
    </div>
  );
}

export default Story;
