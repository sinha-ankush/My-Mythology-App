import React from 'react'
import LogIn from '../components/Login'
import { Helmet } from "react-helmet-async";

function SignIn() {
  return (
    <div>
      <Helmet>
        <title>SignIn</title>
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
      <LogIn />
    </div>
  )
}

export default SignIn
