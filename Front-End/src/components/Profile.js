import { MDBBtn, MDBTable } from 'mdb-react-ui-kit'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProfileCard from './ProfileCard'
import { getCurrentUserDetail } from '../auth'

function Profile() {

    const [user, setUser] = useState('')

    useEffect(() => {
        setUser(getCurrentUserDetail());
    }, '')

    console.log(user)

    return (
        <ProfileCard
            src='../profile.svg'
            name={user.name}
            email={user.email}
            phone={user.contact}
            // gender='Female'
            age={user.age}
            interests={user.interest}

        />
    )
}

export default Profile