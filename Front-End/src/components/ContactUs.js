import React, { useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBRadio
}
  from 'mdb-react-ui-kit';
import { submitFeedback } from "../services/UserService";
import { toast } from 'react-hot-toast';

function ContactUs() {


  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    description: "",
    issue: ""
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  const resetData = () => {
    setData({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      description: "",
      issue: ""
    });
  };

  const submitForm = (event) => {

    event.preventDefault();

    console.log(data);

    // call server api for sending data
    submitFeedback(data)
      .then((resp) => {
        // alert("Thankyou for you valuable feedback");
        toast.success("Thankyou for you valuable feedback !!")
        resetData();
        window.location.reload();
        setData({
          firstname: "",
          lastname: "",
          email: "",
          contact: "",
          description: "",
          issue: ""
        });
      })
      .catch((error) => {
        toast.error("Error in Posting FeedBack");
        window.location.reload();
        setError({
          errors: error,
          isError: true,
        });
      })
  };

  return (
    <div style={{ 'margin': '1rem', 'fontFamily': 'Inter' }}>
      <div style={{ 'color': 'black', 'textAlign': 'center' }}>
        <h1>Get in Touch</h1>
        <h6>We are here for you! How can we help?</h6>
      </div>
      <div className='contactinfo'>
        <div className='cbox'>
          <div className='cicon'>
            <CallIcon />
          </div>
          <br></br>
          <p>+91 9553889349</p>
        </div>
        <div className='cbox'>
          <div className='cicon'>
            <EmailIcon />
          </div>
          <br></br>
          <p>poojaarchana@gmail.com</p>
        </div>
      </div>
      <div style={{ 'display': 'flex', 'justifyContent': 'center', 'flexDirection': 'column', 'padding': '1rem', 'alignContent': 'center', 'borderRadius': '18px', 'overflow': 'hidden', 'color': 'black' }}>
        <h3 style={{ 'color': 'black', 'padding': '0.5 rem', 'marginLeft': '2rem' }}>ContactUs</h3>
        {/* <div style={{ 'backgroundImage': 'url(/bg.svg)', 'padding': '1.5rem', 'backgroundPosition': 'center center', 'backgroundSize': 'cover', 'borderRadius': '18px', 'overflow': 'hidden', 'color': 'black', 'width': '30rem' }}>
          <h4>Contact Information</h4>
          <p>Say something</p>
          <br></br>
          <br></br>
          <p><CallIcon />&emsp;+91 9553889349</p>
          <p><EmailIcon />&emsp;pooja@archana.com</p>
          {/* <div style={{ 'display': 'flex', 'justifyContent': 'left', 'alignContent': 'center', 'marginTop': '5rem' }}>
            <p style={{ 'margin': '0.5rem' }}><FacebookIcon /></p>
            <p style={{ 'margin': '0.5rem' }}><InstagramIcon /></p>

          </div>
        </div> */}
        <div style={{ 'margin': '2rem' }}>
          <form onSubmit={submitForm}>
            <MDBRow>

              <MDBCol md='12'>
                <MDBInput wrapperClass='mb-4' label='Full Name' size='lg' id='form1' type='text' labelClass='text-black' onChange={(e) => handleChange(e, "firstname")} name="firstname" required autoComplete="off" />
              </MDBCol>

            </MDBRow>


            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' labelClass='text-black' onChange={(e) => handleChange(e, "lastname")} name="lastname" required autoComplete="off" />
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' labelClass='text-black' onChange={(e) => handleChange(e, "contact")} name="contact" required autoComplete="off" />
              </MDBCol>
              <MDBCol md='12' className='mb-4' onChange={(e) => handleChange(e, "issue")} name="issue" autoComplete="off">
                <MDBRadio name='inlineRadio' id='inlineRadio1' labelClass='text-black' value='Feedback' label='Feedback' required inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' labelClass='text-black' value='Complaint' label='Complaint' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' labelClass='text-black' value='Support' label='Support' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' labelClass='text-black' value='Suggestion' label='Suggestion' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' labelClass='text-black' value='Others' label='Others' inline />
              </MDBCol>


            </MDBRow>
            <MDBCol>
              <MDBTextArea wrapperClass='mb-4' label='Your Message' labelClass='text-black' rows='4' onChange={(e) => handleChange(e, "description")} name="description" required autoComplete="off" placeholder='Character Limit upto 150'></MDBTextArea>
            </MDBCol>
            <MDBBtn className='mb-4' size='lg' style={{ 'float': 'right', 'color': 'black' }} outline color='warning' type='submit'>Send Message</MDBBtn>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactUs
