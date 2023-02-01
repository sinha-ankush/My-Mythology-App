import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentCardItem from './ContentCardItem';
import { toast } from 'react-hot-toast';
import { BASE_URL, myAxios } from '../services/Helper';
import { useLocation } from 'react-router-dom';

function SearchResult() {

  const location = useLocation()
  const { search } = location.state

  const [story, setStory] = useState([]);
  const [image, setImage] = useState('');

  const returnURL = (pathName) => {

    return pathName === 'Mythological Stories' ?
    '/user/mythological-stories/episodes/':
    pathName === 'Temples' ? `/user/temples/story/` :
    pathName === 'Characters' ? `/user/characters/story/` :
    `/user/festivals/story/`
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await myAxios.get(`/story/search?query=${search}`);
        setStory(data);
        console.log(data);
        console.log(data[0].category.categoryTitle);
      } catch (err) {
        console.error(err);
        toast.error("Error in loading")
      }
    };
    fetch();
  }, []);


  return (
    <div style={{ 'margin': '2rem 2rem', 'padding': '1rem 2rem', 'borderRadius': '24px', 'fontFamily': 'Inter' }}>
      <Link to='/' style={{ 'textDecoration': 'none' }}>
        <p style={{ 'color': '#4B002D', 'fontSize': '14px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Home</p>
      </Link>
      <p style={{ 'color': 'black', 'fontSize': '24px', 'fontWeight': '600', 'lineHeight': '28px' }}>Results for ' {search} '.......</p>
      {/* <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center' }}>
        <p style={{ 'color': '#4C4C4C', 'font-style': 'normal', 'fontSize': '16px', 'fontWeight': '400', 'lineHeight': '28px' }}>Check out our interesting stories. Click on any one to dive into the episodes of Mythology!</p>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center' }}>
          <label>Sort By:</label>
          <div class="input-field col s12 sort_div">
            <select className='sort'>
              <option value="1" selected>Most Popular</option>
              <option value="2">Latest First</option>
              <option value="3">Oldest First</option>
              <option value="4">Shortest First</option>
              <option value="5">Highest First</option>
            </select>
          </div>
        </div>
      </div> */}
      {
          story.length>0 ?
          <div className='content__container' style={{ 'margin': '3rem 0rem' }}>
        
        {story.map((index) => {
          console.log(index.category.categoryTitle);
          return <ContentCardItem
            path={returnURL(index.category.categoryTitle) + index.id}
            src={BASE_URL+"/story/image/"+index.imageName}
            heading={index.title}
            description={index.description}
          />

        })
        }
      </div>
      :
      <div className='content__container' style={{ 'margin': '3rem 0rem','color':'black' }}>
        <h1 style={{'textAlign':'center'}}>
          <h2>Not Found</h2><br></br>
          
          Back to search <a href='/'>here</a>
        </h1>
      </div>
        }
      
    </div>
  )
}

export default SearchResult
