import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentCardItem from './ContentCardItem';
import { toast } from 'react-hot-toast';
import { BASE_URL,myAxios } from '../services/Helper';

function Temp_Content() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await myAxios.get("/story/category/4");
        // console.log(data);
        setStory(data);
      } catch (err) {
        console.error(err);
        toast.error("Error in loading")
      }
    };
    fetch();
  }, []);
  return (
    <div style={{ 'margin': '2rem 2rem', 'padding': '1rem 2rem', 'borderRadius': '24px', 'backgroundColor': 'rgba(255, 153, 0, 0.05)', 'fontFamily': 'Inter' }}>
      <Link to='/' style={{ 'textDecoration': 'none' }}>
        <p style={{ 'color': '#4B002D', 'fontSize': '14px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Home</p>
      </Link>
      <p style={{ 'color': 'black', 'fontSize': '24px', 'fontWeight': '600', 'lineHeight': '28px' }}>Temples</p>
      <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center' }}>
        <p style={{ 'color': '#4C4C4C', 'font-style': 'normal', 'fontSize': '16px', 'fontWeight': '400', 'lineHeight': '28px' }}>Secrets & Stories from India’s Sacred Places</p>
        {/* <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center' }}>
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
        </div> */}
      </div>
      <div className='content__container'>
      {story.map((index) => {

return <ContentCardItem
  path={'/user/temples/story/' + index.id}
  src={ BASE_URL+"/story/image/"+ index.imageName}
  heading={index.title}
  description={index.description}
/>

})
}

      </div>
      {/* <nav aria-label="Search results pages">
        <ul class="pagination justify-content-center pagination-circle">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav> */}
    </div>
  )
}

export default Temp_Content
