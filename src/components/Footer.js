import { MDBFooter, MDBIcon, MDBCol, MDBRow, MDBInput, MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  const [isValid, setIsValid] = useState(0);
  const isValidEmail = /^[\w-\.]+@([\w-][\w-][\w-]+\.)+[\w-]{2,4}$/g;
  const validateEmail = (event) => {
    const email = event.target.value;
    if (isValidEmail.test(email)) {
      setIsValid(1);
    } else {
      setIsValid(0);
    }
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // if (isValid) {
    emailjs.sendForm('service_wk9dpfh', 'template_zd95c49', form.current, 'xyWg7OWM_BKJXmaXg')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
    toast.success("Subscribed Successfully");
    // }
    // else {
    //   form.current.reset();
    //   alert("Enter valid mail");
    // }
  };
  return (
    <div style={{ 'margin': '2rem 5.1rem', 'marginTop': '6rem', 'padding': '20px 20px', 'fontFamily': 'Inter', 'backgroundColor': '#FF9900', 'borderRadius': '15px' }}>
      <MDBFooter bgColor='#FF9900' className='text-center text-lg-start text-muted'>
        <div className='d-flex justify-content-center justify-content-lg-between p-2' style={{ color: 'black' }}>
          <div className='me-5 d-none d-lg-block'>
          </div>
          <div>
            <a href='/about-us' className='me-4 text-reset'>
              <b>About Us</b>
            </a>
            <a href='/contact-us' className='me-4 text-reset'>
              <b>Contact Us</b>
            </a>
            <a href='/user/write-story' className='me-4 text-reset'>
              <b>Write a Story</b>
            </a>
          </div>
        </div>
        <div style={{ 'margin': '35px 10px' }}>
          <MDBContainer className='p-4 pb-0'>
            <form action='' ref={form} onSubmit={sendEmail}>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size='auto' className='mb-4 mb-md-0'>
                  <p className='pt-2' style={{ color: 'black' }}>
                    <strong>Subscribe to our weekly email digests </strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                  <MDBInput type='email' name='email' id='form5Example2' required label='Email address' contrast />
                </MDBCol>

                <MDBCol size='auto' className='mb-4 mb-md-0'>
                  <MDBBtn outline color='dark' style={{ 'fontWeight': 'bold' }}>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBContainer>
        </div>

        <div className='d-flex justify-content-center justify-content-lg-between p-4' style={{ color: 'black' }}>
          <div className='me-5 d-none d-lg-block'>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-black' href=''>
              PoojaArchana
            </a>
          </div>

          <div>
            {/* <h4> <b>HashedIn By Deloitte</b> </h4> */}
            <img src='company.svg'>
            </img>
          </div>
          {/* <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div> */}
        </div>
      </MDBFooter>

    </div>
  )
}

export default Footer
