import React, { useState, useEffect } from 'react';
import { loadAllStory } from '../services/StoryService';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../services/Helper';
import ITCardItem from './ITCardItem';

function RC1Section() {

  const { id } = useParams();
  const [allStory, setAllStory] = useState([])
  var nextCharacter = [];

  useEffect(() => {

    loadAllStory(2).then((currStory) => {
      setAllStory(currStory);
    })
      .catch(error => {
        console.log(error);
      })

  }, [])

  allStory.forEach((product) => {

    if (product.id != id) {
      nextCharacter.push(product);
    }
  })

  nextCharacter = nextCharacter.slice(0, 4);



  return (
    <div style={{ 'margin': '2rem 2rem' }}>
      <h5 style={{ 'padding': '5px 10px', 'marginBottom': '40px', color: 'black', 'fontWeight': 'bold', 'fontFamily': 'Inter' }}>Check Other Characters</h5>
      <div className='rtsection__container'>
        {
          nextCharacter.map((index) => {

            return <ITCardItem
              path={'/user/characters/story/' + index.id}
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

export default RC1Section
