import React, { useEffect, useState } from 'react';
import ContentCardItem from './ContentCardItem';
import { toast } from 'react-hot-toast';
import { myAxios } from '../services/Helper';
import { BASE_URL } from '../services/Helper';
import { getCurrentUserDetail } from '../auth'

function TopMatch() {


  const [story, setStory] = useState([]);
  const [user, setUser] = useState(getCurrentUserDetail());

  const returnURL = (pathName) => {

    return pathName === 'story' ?
      '/user/mythological-stories/episodes/' :
      `/user/${pathName}/story/`;
  }

  useEffect(() => {

    // console.log(user);
    // console.log("abcd");
    // console.log(cat);
    const fetch = async () => {

      try {
        // console.log(user.interest);
        var temp = user.interest === 'story' ? 1 :
          user.interest === 'temples' ? 4 :
            user.interest === 'characters' ? 2 : 3;


        // console.log(temp);
        const { data } = await myAxios.get(`/story/category/${temp}`);
        var items = data.slice(0, 4);
        setStory(items);

      } catch (err) {
        console.error(err);
        toast.error("Error in loading")
      }
    };
    fetch();

  }, []);

  return (
    <div style={{ 'margin': '2rem 5.1rem', 'fontFamily': 'Inter' }}>
      <h5 style={{ 'padding': '5px 5px', 'marginBottom': '40px', color: 'black', 'fontWeight': 'bold', 'fontFamily': 'Inter' }}>Topic Match based on your interest  {user.interest}</h5>
      <div className='content_container'>

        {story.map((index) => {
          return <ContentCardItem
            path={returnURL(user.interest) + index.id}
            src={BASE_URL + "/story/image/" + index.imageName}
            heading={index.title}
            description={index.description}
          />
        })
        }

      </div>
    </div>
  )
}

export default TopMatch
