import React from 'react';
import ANavbar from '../components/ANavbar';
import { Helmet } from "react-helmet-async";

function Admin() {
  return (
    <div>
      <Helmet>
        <title>Admin </title>
        <meta
          name="description"
          content="Admin page for approval."
        />
        {/* <link rel="canonical" href="/admin" /> */}
      </Helmet>
      <ANavbar />
    </div>
  );
}

export default Admin
