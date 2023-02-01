import React from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit'

function AboutUs() {
    return (
        <div style={{ 'margin': '3rem 3rem', 'fontFamily': 'Inter' }}>
            <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignContent': 'center', 'margin': '4rem' }}>
                <img src='title.svg'></img>
            </div>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between', 'alignContent': 'center', 'margin': '2rem' }}>
                <div className='aboutus'>
                    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                        <MDBCol>
                            <MDBCard border='light' background='white' className='ms-auto me-auto' style={{ width: '30rem', }}>
                                <MDBCardBody>
                                    <MDBCardTitle style={{ 'color': '#FF9900', 'fontWeight': '600' }}><u>OUR MISSION</u></MDBCardTitle>
                                    <MDBCardText style={{ 'color': 'black', 'fontSize': '17px' }}>
                                        The younger generation is learning less and less about India's rich tradition and culture. Mythology stories are rarely told in an engaging manner. Our goal is to help the reader comprehend our ancient history while also giving them the greatest content possible in a fun way.                        </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                        <MDBCol>
                            <MDBCard border='light' background='white' className='ms-auto me-auto' style={{ width: '30rem', }}>
                                <MDBCardBody>
                                    <MDBCardTitle style={{ 'color': '#FF9900', 'fontWeight': '600' }}><u>OUR VISION</u></MDBCardTitle>
                                    <MDBCardText style={{ 'color': 'black', 'fontSize': '17px' }}>
                                        One way to increase user engagement is to make the content appealing; one tale should inevitably lead to another that are related. The product has an interesting approach of delivering mythology tales. Gamification will be used to engage users with a pleasing user interface.                        </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
                <div style={{ 'margin': '3rem' }}>
                    <h2 style={{ 'padding': '3rem', 'textAlign': 'center', 'color': 'black', 'fontWeight': '600' }}>
                        <span style={{ color: '#FF5C00', 'font-weight': '600', 'marginRight': '0.5rem' }}>OUR</span>
                        <span style={{ color: '#FF0099', 'font-weight': '600' }}>SQUAD</span>
                    </h2>
                    <div className='profile_container'>
                        <div style={{ 'margin': '1rem', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
                            <img src='profile.svg' height='100rem' width='100rem'></img>
                            <br></br>
                            <p style={{ 'color': '#FF5C00', 'fontWeight': 'bold', 'padding': '1rem', 'fontSize': '25px' }}>Rajeshwari Gupta</p>
                        </div>
                        <div style={{ 'margin': '1rem', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
                            <img src='profile.svg' height='100rem' width='100rem'></img>
                            <br></br>
                            <p style={{ 'color': '#FF0099', 'fontWeight': 'bold', 'padding': '1rem', 'fontSize': '25px' }}>Tanmay Chakraborty</p>
                        </div>
                        <div style={{ 'margin': '1rem', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
                            <img src='profile.svg' height='100rem' width='100rem'></img>
                            <br></br>
                            <p style={{ 'color': '#FF5C00', 'fontWeight': 'bold', 'padding': '1rem', 'fontSize': '25px' }}>AmruthaRatna Varada</p>
                        </div>
                        <div style={{ 'margin': '1rem', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
                            <img src='profile.svg' height='100rem' width='100rem'></img>
                            <br></br>
                            <p style={{ 'color': '#FF0099', 'fontWeight': 'bold', 'padding': '1rem', 'fontSize': '25px' }}>Ankush Sinha</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
