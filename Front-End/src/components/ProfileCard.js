import { MDBBtn, MDBTable } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProfileCard(props) {
    return (
        <>
            <div style={{ 'margin': '2rem 2rem', 'padding': '2rem 2rem', 'borderRadius': '24px', 'backgroundColor': 'rgba(255, 153, 0, 0.05)', 'fontFamily': 'Inter' }}>
                <Link to='/' style={{ 'textDecoration': 'none' }}>
                    <p style={{ 'color': '#4B002D', 'fontSize': '14px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Home</p>
                </Link>
                <p style={{ 'color': 'black', 'fontSize': '24px', 'fontWeight': '600', 'lineHeight': '28px' }}>My Profile</p>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center' }}>
                    <p style={{ 'color': '#4C4C4C', 'font-style': 'normal', 'fontSize': '16px', 'fontWeight': '400', 'lineHeight': '28px' }}>You can manage your profile details here</p>
                    {/* <a href='/user/edit-profile'><i className='fas fa-edit'></i></a> */}
                </div>
                <div className="image d-flex justify-content-left align-items-center" style={{ 'margin': '1rem' }}>
                    <div style={{ 'margin': '3rem 6rem' }}>
                        <img src={props.src} height="150" width="150" />
                        <br></br><br>
                        </br>
                        {/* <p style={{ 'color': '#592EA9', 'textAlign': 'center' }}>Update Profile Picture</p> */}
                    </div>
                    <div style={{ 'margin': '2rem' }}>
                        <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center', 'justifyItems': 'flex-start', 'marginBottom': '1rem' }}>
                            <p style={{ 'marginRight': '2.5rem' }}>Full Name</p>
                            <p style={{ 'color': '#FF5C00' }}>{props.name}</p>
                        </div>
                        <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center', 'marginBottom': '1rem' }}>
                            <p style={{ 'marginRight': '4.7rem' }}>Email</p>
                            <p style={{ 'color': '#FF0099' }}>{props.email}</p>
                        </div>
                        <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center', 'marginBottom': '1rem' }}>
                            <p style={{ 'marginRight': '4rem' }}>Mobile</p>
                            <p style={{ 'color': '#FF5C00' }}>{props.phone}</p>
                        </div>
                        {/* <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center', 'marginBottom': '1rem' }}>
                            <p style={{ 'marginRight': '3.9rem' }}>Gender</p>
                            <p style={{ 'color': '#592EA9' }}>{props.gender}</p>
                        </div>*/}
                        <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center', 'marginBottom': '1rem' }}>
                            <p style={{ 'marginRight': '5.5rem' }}>Age</p>
                            <p style={{ 'color': '#FF0099' }}>{props.age}</p>
                        </div>
                        <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center', 'marginBottom': '1rem', 'justifyItems': 'center' }}>
                            <p style={{ 'marginRight': '3rem' }}>Interests</p>
                            <MDBBtn size='me' color='warning' style={{ 'color': 'black' }} rounded>{props.interests}</MDBBtn>
                        </div>


                    </div>

                </div>
                {/* <div style={{ 'marginBottom': '3rem', 'marginRight': '1rem' }}>
                    <p style={{ 'color': 'red', 'float': 'right' }}><u>Delete Account?</u></p>
                </div> */}

            </div>
        </>
    )
}

export default ProfileCard