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
  MDBCollapse
} from 'mdb-react-ui-kit';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import { useNavigate } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AdminTable from './AdminTable';
import { loadAllStoryPosts, loadAllFeedback } from '../services/AdminService';
import FeedbackTable from './FeedbackTable';


function ANavbar() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
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

  const [postedStory, setPostedStory] = useState([])
  const [postedFeedback, setFeedback] = useState([])

  useEffect(() => {
    loadAllStoryPosts().then((data) => {
      console.log(data);
      setPostedStory(data.reverse());
    }).catch(error => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    loadAllFeedback().then((data) => {
      console.log(data);
      setFeedback(data.reverse());
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <MDBNavbar className='shadow-0' expand='xxl' sticky light bgColor='light'>
        <MDBContainer >
          <MDBNavbarBrand href='/'>
            <span style={{ 'color': '#FF0099', 'fontSize': '25px', 'padding': '1rem', 'paddingRight': '4rem' }} > <i className='fas fa-home'></i></span>
          </MDBNavbarBrand>
          <MDBNavbarBrand className='fs-2' href='/admin'>
            <span style={{ color: '#FF5C00', 'font-weight': '600', 'font-family': 'SeoulHangang CBL' }}>Pooja</span>
            <span style={{ color: '#FF0099', 'font-weight': '600', 'font-family': 'Playfair Display' }}>Archana</span>
            <span style={{ color: '#FF5C00', 'font-weight': '500', 'font-family': 'SeoulHangang CBL' }}>Admin</span>
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

              </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0' style={{ 'font-family': 'Inter' }}>
              {/* <MDBInputGroup tag="form" className='d-flex w-auto mt-3 mb-3'>
                <input className='form-control' size='lg' placeholder='Search' aria-label="Search" type='Search' style={{ border: '2px solid #FF9900', 'color': 'black' }} />
                <MDBBtn outline color='warning' size='mx-2' style={{ 'color': 'black', 'fontSize': '17px' }}><i className='fa fa-search'></i></MDBBtn>
              </MDBInputGroup> */}

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
                          <NotificationsIcon fontSize='medium' />
                        </MDBBtn>
                      </MDBNavbarLink>
                    </MDBNavbarItem> */}

                    <MDBDropdown className='ms-5'>
                      <MDBDropdownToggle size='lg' outline color='light' className='mt-2 ms-5' style={{ 'color': 'black' }}>
                        <AccountCircleIcon fontSize='medium' />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link disabled>
                          <p style={{ 'color': 'black' }}><b>Logged in as</b></p>
                          <p style={{ 'color': 'black' }}>{userName.email}</p>
                          <p style={{ 'color': 'black' }}>{userName.name}</p>
                        </MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem link href='' style={{ 'color': 'black' }}>Your Profile</MDBDropdownItem>
                        <MDBDropdownItem link href='/user/write-story' style={{ 'color': 'black' }}>Write a Story</MDBDropdownItem>
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
      <MDBContainer className="my-4 d-flex flex-column">

        <MDBTabs justify className='mb-3 d-flex flex-row justify-content-between'>
          <MDBTabsItem >
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} style={{ 'fontSize': '17px', 'fontWeight': '600', 'color': '#4B002D', 'wordSpacing': '5px' }} className='bg-transparent'>
              User's Posts
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink style={{ 'fontSize': '17px', 'fontWeight': '600', 'color': '#4B002D', 'wordSpacing': '5px' }} onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className='bg-transparent'>
              User's FeedBacks
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

          <MDBTabsPane show={justifyActive === 'tab1'}>
            <div>
              <MDBTable align='middle'>
                <MDBTableHead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Image</th>
                    <th scope='col'>Delete</th>
                    <th scope='col'>Approve</th>
                    <th scope='col'>View Content</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>

                  {
                    postedStory.map((post) => {
                      return (
                        <AdminTable
                          name={post.user.name}
                          category={post.category.categoryTitle}
                          title={post.title}
                          description={post.description}
                          image={post.imageName}
                          postId={post.storyPostId}
                          poststory={post}
                          route={post.storyPostId}
                        />
                      )
                    })
                  }


                </MDBTableBody>
              </MDBTable>
            </div>


          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'tab2'}>
            <div>
              <MDBTable align='middle'>
                <MDBTableHead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Id</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Mobile No</th>
                    <th scope='col'>Issue</th>
                    <th scope='col'>Message</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>

                  {
                    postedFeedback.map((post) => {
                      return (
                        <FeedbackTable
                          name={post.firstname}
                          contact={post.contact}
                          email={post.lastname}
                          description={post.description}
                          Id={post.id}
                          issue={post.issue}
                        />
                      )
                    })
                  }


                </MDBTableBody>
              </MDBTable>
            </div>


          </MDBTabsPane>

        </MDBTabsContent>

      </MDBContainer>
















    </>

  );
}

export default ANavbar
