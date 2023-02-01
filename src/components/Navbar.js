import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.ts";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { doLogout, getCurrentUserDetail, isAdmin, isLoggedIn } from '../auth';
import { useNavigate } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function App() {


  // const [showBasic, setShowBasic] = useState(false);

  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };

  const [showBasic, setShowBasic] = useState(false);

  let navigate = useNavigate()
  const [login, setLogin] = useState(false)
  const [userName, setUserName] = useState(undefined)

  const [isDarkMode, setIsDarkMode] = useState(() => false);

  useEffect(() => {

    setLogin(isLoggedIn());
    setUserName(getCurrentUserDetail());

  }, [login])

  const logout = () => {
    doLogout(() => {

      setLogin(false)
      navigate("/")

    })
  }

  const [search, setsearch] = useState("");

  const fieldChange = (event) => {
    setsearch(event.target.value);
  }

  return (
    <MDBNavbar className='shadow-0' expand='xxl' sticky light bgColor='light'>
      <MDBContainer >
        <MDBNavbarBrand className='fs-2' href='/' style={{ 'float': 'left' }}>
          <span style={{ color: '#FF5C00', 'font-weight': '500', 'font-family': 'SeoulHangang CBL' }}>Pooja</span>
          <span style={{ color: '#FF0099', 'font-weight': '600', 'font-family': 'Playfair Display' }}>Archana</span>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' style={{ 'font-family': 'Inter', 'font-weight': 'bold' }}>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle size='lg' outline color='warning' className='ms-4' style={{ 'font-weight': 'bold' }}>
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/mythological-stories'>Mythology Stories</MDBDropdownItem>
                  <MDBDropdownItem link href='/characters'>Characters</MDBDropdownItem>
                  <MDBDropdownItem link href='/temples'>Temples</MDBDropdownItem>
                  <MDBDropdownItem link href='/festivals'>Festivals</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0 ms-3' style={{ 'font-family': 'Inter' }}>
            <MDBInputGroup tag="form" className='d-flex w-auto mt-3 mb-3 ms-5'>
              <input onChange={fieldChange} className='form-control' size='lg' placeholder='Search' aria-label="Search" type='Search' required style={{ border: '2px solid #FF9900', 'color': 'black', 'padding': '0.2rem' }} />
              <Link to={search === '' ? '/' : '/search-result'}
                state={{ search: search }}
              >
                <MDBBtn outline color='warning' size='mx-1' style={{ 'color': 'black', 'fontSize': '16.7px', 'border': '2px solid #FF9900' }} type="submit">
                  <i className='fa fa-search' ></i>
                </MDBBtn>
              </Link>
            </MDBInputGroup>

            {
              login && (

                <>

                  {/* <DarkModeSwitch
                    className='ms-5 mt-3'
                    onChange={setIsDarkMode}
                    checked={isDarkMode}
                    size={30}
                    moonColor="black"
                  />

                  <MDBNavbarItem>
                    <MDBNavbarLink className='fs-5 ms-2' active aria-current='page'>
                      <MDBBtn size='lg' color='light' style={{ 'font-weight': 'bold', color: 'black' }}>
                        <NotificationsIcon fontSize='medium'/>
                      </MDBBtn>
                    </MDBNavbarLink>
                  </MDBNavbarItem> */}

                  <MDBDropdown right className='ms-4'>
                    <MDBDropdownToggle size='lg' outline color='light' className='mt-2' style={{ 'color': 'black' }}>
                      <AccountCircleIcon fontSize='medium' />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link disabled>
                        <p style={{ 'color': 'black' }}><b>Logged in as</b></p>
                        <p style={{ 'color': 'black' }}>{userName.email}</p>
                        <p style={{ 'color': 'black' }}>{userName.name}</p>
                      </MDBDropdownItem>
                      <MDBDropdownItem divider />

                      <MDBDropdownItem link href='/user/profile' style={{ 'color': 'black' }}>Your Profile</MDBDropdownItem>
                      {(userName.roles[0].name === 'ROLE_ADMIN') ?
                        <MDBDropdownItem link href='/admin' style={{ 'color': 'black' }}>Admin</MDBDropdownItem>
                        : <MDBDropdownItem link href='/user/write-story' style={{ 'color': 'black' }}>Write a Story</MDBDropdownItem>}

                      <MDBDropdownItem divider />
                      <MDBDropdownItem link href='' onClick={logout}><b>Logout</b></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>


                </>

              )
            }
            {
              !login && (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink className='fs-5 ms-2' active aria-current='page' href='/signin'>
                      <MDBBtn size='lg' color='light' style={{ 'font-weight': 'bold', color: 'black' }}>
                        Signin
                      </MDBBtn>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active className='fs-5 ms-2 mt-0.5' aria-current='page' href='/signup'>
                      <MDBBtn size='lg' color='warning' style={{ 'font-weight': 'bold', color: 'black' }}>
                        Signup
                      </MDBBtn>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              )
            }

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}