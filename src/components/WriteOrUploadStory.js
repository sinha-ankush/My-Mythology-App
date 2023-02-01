import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadAllCategories } from '../services/CategoryService';
import { toast } from 'react-hot-toast';
import { createStoryPost as doCreatePost } from '../services/PostStoryService';
import { uploadPostImage } from '../services/PostStoryService';
import { userStoryPost } from '../services/PostStoryService';
import { uploadEpisodeImage, uploadEpisodePoster, uploadEpisodeFile } from '../services/EpisodePost';

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
}
  from 'mdb-react-ui-kit';
import { getCurrentUserDetail } from '../auth';
import { createEpisodePost } from '../services/EpisodePost';

function WriteOrUploadStory() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const [categories, setCategories] = useState([])
  const [user, setUser] = useState('')

  const [epFile, setEpFile] = useState(null)

  const [userStory, setUserStory] = useState([])

  // const [content, setContent] = useState('')

  useEffect(() => {

    setUser(getCurrentUserDetail());

    loadAllCategories().then((data) => {
      // console.log(data)
      setCategories(data)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  const [post, setPost] = useState({
    title: '',
    description: '',
    categoryId: ''
  })

  const [episode, setEpisode] = useState({
    ep_number: '',
    content: '',
    storyPostId: ''
  })

  //field changed function
  const fieldChanged = (event) => {
    // console.log(event)
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const fieldChange = (event) => {
    // console.log(event)
    setEpisode({ ...episode, [event.target.name]: event.target.value })
  }
  //create post function
  const createPost = (event) => {

    event.preventDefault();

    if (post.categoryId === '') {
      toast.error("select some category !!")
      return;
    }

    if (post.title.trim() === '') {
      toast.error("post title is required !!")
      return;
    }

    if (post.description.trim() === '') {
      toast.error("post description is required !!")
      return
    }

    // console.log(user.id)

    post['userId'] = user.id;

    doCreatePost(post).then(data => {

      // uploadPostImage(image, data.storyPostId).then(data => {
      //   toast.success("Image Uploaded !!")
      // }).catch(error => {
      //   toast.error("Error in uploading image")
      //   // console.log(error)
      // })

      toast.success("Post Created !!")
      window.location.reload();

      // console.log(post)

      setPost({
        title: '',
        description: '',
        categoryId: ''
      })

    }).catch((error) => {
      toast.error("Post not created due to some error !!")
      // console.log(error)
    })

  }

  const createEpisode = (event) => {
    event.preventDefault();
    createEpisodePost(episode).then(data => {
      uploadEpisodeFile(epFile, data.episodePostId).then(data => {

        toast.success("File Uploaded !!")

      }).catch(error => {

        toast.error("Error in uploading file")

        console.log(error)

      })



      toast.success("Episode Created")
      setEpisode({
        ep_number: '',
        content: '',
        storyPostId: ''
      })
      toast.success("Uploaded Episode !!")
    }).catch((error) => {
      console.log(error)
    })
  }

  //handling file chagne event
  // const handleFileChange = (event) => {
  //   // console.log(event.target.files[0])
  //   setImage(event.target.files[0])
  // }

  const epFileUpload = (event) => {

    setEpFile(event.target.files[0])

  }
  useEffect(() => {
    const det = getCurrentUserDetail();
    // console.log(det);
    userStoryPost(det.id).then((data) => {
      // console.log(data)
      setUserStory(data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div style={{ 'margin': '2rem 2rem', 'padding': '2rem 2rem', 'borderRadius': '24px', 'backgroundColor': 'rgba(255, 153, 0, 0.05)', 'fontFamily': 'Inter' }}>
      <Link to='/' style={{ 'textDecoration': 'none' }}>
        <p style={{ 'color': '#4B002D', 'fontSize': '14px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Home</p>
      </Link>
      <div>
        {/* {JSON.stringify(post)} */}
        <MDBContainer className="my-4 d-flex flex-column w-50 ">

          <MDBTabs justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem >
              <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} style={{ 'fontSize': '17px', 'fontWeight': '600', 'color': '#4B002D', 'wordSpacing': '5px' }} className='bg-transparent'>
                Write Post
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} style={{ 'fontSize': '17px', 'fontWeight': '600', 'color': '#4B002D', 'wordSpacing': '5px' }} className='bg-transparent'>
                Upload Post Content
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>

            <MDBTabsPane show={justifyActive === 'tab1'}>
              <form onSubmit={createPost}>
                <div className='my-5'>
                  <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Select Category</label>
                    <select
                      className='scategory'
                      name="categoryId"
                      onChange={fieldChanged}
                    >
                      <option value='' selected disabled>Select</option>

                      {
                        categories.map((category) => {
                          return <option value={category.id} key={category.id}>
                            {category.categoryTitle}
                          </option>
                        })
                      }

                    </select>
                  </div>
                  <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Enter Title</label>
                    <input
                      type='text'
                      className='write_inputs'
                      name='title'
                      onChange={fieldChanged}
                    ></input>
                  </div>

                  <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Enter Description</label>

                    <textarea type='text'
                      className='write_inputs'
                      rows='6'
                      maxlength='200'
                      name='description'
                      onChange={fieldChanged}
                      placeholder="Character limit is 200"
                    >

                    </textarea>

                  </div>

                  {/* <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Upload Image</label>
                    <input type='file' onChange={handleFileChange} style={{ 'width': '70%' }}></input>
                  </div> */}

                  {/* <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Pen Name<span style={{ 'color': 'grey' }}>(Optional)</span></label>
                    <input type='text' className='write_inputs'></input>
                  </div> */}

                  <MDBBtn type='submit' className="mb-5 fw-600" size='lg' color='warning' style={{ 'float': 'right', 'borderRadius': '5px' }}>
                    Submit
                  </MDBBtn>
                </div>
                <br></br>
                <br></br>
                <p style={{ 'marginTop': '20px', 'marginLeft': '5rem' }}><i>Steps to Post Story: <br></br> 1. Create a post from Write Post tab. <br></br> 2. Submit the write post. <br></br> 3. Go to Upload Post Content Tab. <br></br> 4. Upload your content and submit.</i></p>

                <p style={{ 'fontSize': '14px', 'color': '#4B002D', 'marginTop': '20px', 'marginLeft': '5rem' }}><i>Note: Your story will first go through our screening standards. If it satisfies, it will be published.</i></p>
              </form>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>
              <form onSubmit={createEpisode}>
                <div className='my-5'>
                  <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Select Story</label>
                    <select
                      className='scategory'
                      placeholder='Select'
                      name='storyPostId'
                      onChange={fieldChange}
                    >
                      <option value='' selected disabled>Select</option>

                      {
                        userStory.map((story) => {
                          return <option value={story.storyPostId} key={story.storyPostId}>
                            {story.title}
                          </option>
                        })
                      }

                    </select>
                  </div>
                  <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Episode Name</label>
                    <input
                      type='text'
                      className='write_inputs'
                      placeholder='1. Episode'
                      name='ep_number'
                      onChange={fieldChange}
                    >
                    </input>
                  </div>

                  <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Enter Description</label>

                    <textarea type='text'
                      className='write_inputs'
                      rows='6'
                      maxlength='2000'
                      name='content'
                      onChange={fieldChange}
                    >

                    </textarea>

                  </div>

                  <div className='writestory'>
                    <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Upload file</label>
                    <input type='file' onChange={epFileUpload} style={{ 'width': '70%' }}></input>
                  </div>

                  {/* <div className='writestory'>
                  <label style={{ 'color': '#4B002D', 'marginTop': '0.3rem', 'fontWeight': '500' }}>Pen Name<span style={{ 'color': 'grey' }}>(Optional)</span></label>
                  <input type='text' className='write_inputs'></input>
                </div> */}

                  <MDBBtn type='submit' className="mb-4 fw-600" size='lg' color='warning' style={{ 'float': 'right', 'borderRadius': '5px' }}>
                    Submit
                  </MDBBtn>
                </div>
                <br></br>
                <br></br>
                <p style={{ 'marginTop': '20px', 'marginLeft': '5rem' }}><i>Note: Your story will first go through our screening standards. If it satisfies, it will be published.</i></p>

              </form>
            </MDBTabsPane>

          </MDBTabsContent>

        </MDBContainer>
      </div>
    </div>



  );
}

export default WriteOrUploadStory;