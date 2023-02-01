import React, { useState } from 'react';
import { signUp } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCardBody,
  MDBCard,

} from 'mdb-react-ui-kit';
import '../components/style.css'

function Register() {
  const [isValid, setIsValid] = useState(0);
  var pattern = new RegExp(/^[0-9\b]+$/);
  const [isPhone, setPhone] = useState(0);
  const navigate = useNavigate();


  const isValidEmail = /^[\w-\.]+@([\w-][\w-][\w-]+\.)+[\w-]{2,4}$/g;


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    interest: "",
    age: ""
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handlePhone = (event, property) => {
    //dynamic setting the values
    const phone = event.target.value;
    if (pattern.test(phone) && phone.length === 10) {
      setPhone(1);
    } else {
      setPhone(0);
    }
    setData({ ...data, [property]: event.target.value });
  };
  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values


    const email = event.target.value;
    if (isValidEmail.test(email)) {
      setIsValid(1);
    } else {
      setIsValid(0);
    }


    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      contact: "",
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    console.log(data);
    // if (isValid && isPhone) {

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("Successfully Registered!");
        setData({
          name: "",
          email: "",
          password: "",
          contact: "",
          interest: "",
          age: ""
        });
        navigate('/signin')
      })
      .catch((error) => {
        console.log(error);
        toast.error("Provide valid Information");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
    //   }
    //   else {
    //     if (!isValid)
    //       alert("Enter valid mail");
    //     else
    //       alert("Enter valid Phone");
    //   }
  }

  const selector = (event, property) => {
    // console.log(event.target.value)
    setData({
      ...data, [property]: event.target.value == 1 ? 'story' :
        event.target.value == 2 ? 'characters' :
          event.target.value == 3 ? 'festivals' : 'temples'
    });
    // console.log(data.interest)

  }

  return (
    <div style={{ 'fontFamily': 'Inter', backgroundImage: 'url(bg.svg)', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center center', 'backgroundSize': 'cover' }}>

      <br></br>

      <a href='/' style={{ 'color': 'white', 'marginLeft': '10rem', 'fontSize': '20px', 'fontWeight': 'bold' }}><i className='fas fa-arrow-left'></i> Home </a>

      <MDBContainer fluid className='d-flex align-items-center justify-content-center'>

        <MDBCard className='m-4 p-4' style={{ maxWidth: '600px', borderRadius: '16px' }}>

          <MDBCardBody className='px-5 py-5'>

            <form className='form-outline' onSubmit={submitForm}>

              <h2 className="text-capitalize text-center font-weight-bolder mb-5"
                style={{ 'color': 'black' }}
              >
                Create an account

              </h2>

              <MDBInput wrapperClass='mb-3'
                labelClass='text-black'
                label='Name'
                size='lg'
                id='form1'
                type='text'
                name="username"
                onChange={(e) => handleChange(e, "name")}
                value={data.name}
                required
                invalid={
                  error.errors?.response?.data?.name ? true : false
                }
              />

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Email'
                size='lg'
                id='form2'
                type='email'
                name="email"
                onChange={(e) => handleChange(e, "email")}
                value={data.email}
                required
                invalid={
                  error.errors?.response?.data?.email ? true : false
                }
              />

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Password'
                size='lg'
                id='form3'
                type='password'
                name="password"
                onChange={(e) => handleChange(e, "password")}
                value={data.password}
                required
                invalid={
                  error.errors?.response?.data?.password ? true : false
                }
              />

              {/* <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Confirm Password'
                size='lg'
                id='form3'
                type='password'
                name="password"
              /> */}

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Mobile Number'
                size='lg'
                id='form2'
                type='text'
                name="number"
                onChange={(e) => handlePhone(e, "contact")}
                value={data.contact}
                required
                invalid={
                  error.errors?.response?.data?.about ? true : false
                }
              />

              <select className='rcategory mb-4' required onChange={(e) => selector(e, "interest")}>
                <option value="">Select your Interest</option>
                <option value="1" >Mythology Stories</option>
                <option value="2">Characters</option>
                <option value="3">Festivals</option>
                <option value="4">Temples</option>
              </select>

              <MDBInput wrapperClass='mb-3'
                labelClass='text-black'
                label='Age'
                size='lg'
                id='form1'
                type='text'
                name="age"
                onChange={(e) => handleChange(e, "age")}
                value={data.age}
                required
              />

              <MDBBtn
                className='mb-3 w-100'
                size='lg'
                type='submit'
                style={{ 'backgroundColor': '#FF9900', 'borderRadius': '20px' }}
              >
                Register

              </MDBBtn>

              <div className='text-center mb-3'>
                <br></br>

                <p className='text-center' style={{ color: 'black' }}>
                  Have an account? <a href='/signin' style={{ 'color': '#FF9900' }}>
                    <b>
                      SignIn Here
                    </b>
                  </a>
                </p>

              </div>
            </form>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
    </div>
  )
}

export default Register
