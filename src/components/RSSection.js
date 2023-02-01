import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../services/Helper';
import { loadEpisodeById, loadEpisodeOfStory } from '../services/EpisodeService';
import { useParams } from 'react-router-dom';
import ITCardItem from './ITCardItem';
import { loadAllStory } from '../services/StoryService';


function RSSection() {

  const { id } = useParams();
  var indx = -1;
  var curr = 0;
  var size = 4;
  const [currEpisode, setcurrEpisode] = useState([])
  const [currCategory, setcurrCategory] = useState([])
  const [allStory, setAllStory] = useState([])
  var currNextEpisode = [];
  var nextStory = [];

  useEffect(() => {

    loadEpisodeById(id).then((data) => {
      setcurrEpisode(data);

      loadAllStory(1).then((currStory) => {
        setAllStory(currStory);
      })
      loadEpisodeOfStory(data.story.id).then((currStory) => {
        setcurrCategory(currStory);
      })
    })
      .catch(error => {
        console.log(error);
      })

  }, [])

  currCategory.forEach((product) => {

    if (product.id == currEpisode.id) {
      indx = curr;
    }
    curr++;
    // console.log(curr, indx)
  })

  for (let i = indx + 1; i < currCategory.length; i++)
    currNextEpisode.push(currCategory[i]);
  // console.log(currNextEpisode)

  currNextEpisode = currNextEpisode.slice(0, size);
  // console.log(currNextEpisode)

  allStory.forEach((product) => {

    if (product.id != currEpisode.story.id) {
      nextStory.push(product);
    }
  })

  return (
    <div style={{ 'margin': '2rem 2rem' }}>
      <h5 style={{ 'padding': '5px 10px', 'marginBottom': '40px', color: 'black', 'fontWeight': 'bold', 'fontFamily': 'Inter' }}>{indx != curr - 1 ? 'Check Next Episodes ' : 'Check Other Stories '}</h5>
      <div className='rtsection__container'>

        {
          indx != curr - 1 ?
            currNextEpisode.map((index) => {

              return <ITCardItem
                path={'/user/mythological-stories/episodes/story/' + index.id}
                src={BASE_URL + "/story/image/" + index.imageName}
                heading={index.ep_number}
                description={index.content}
              />

            })
            : nextStory.map((index) => {

              return <ITCardItem
                path={'/user/mythological-stories/episodes/' + index.id}
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

export default RSSection


