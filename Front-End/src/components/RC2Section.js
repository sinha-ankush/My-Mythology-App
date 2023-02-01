import React , { useState, useEffect }from 'react';
import {loadAllStory} from '../services/StoryService';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../services/Helper';
import ITCardItem from './ITCardItem';

function RC2Section() {

  const { id } = useParams();
  const [allFestival, setAllFestival] = useState([])
  var nextFestival = [];

  useEffect(() => {

    loadAllStory(3).then((currStory) => {
        setAllFestival(currStory);
      })  
    .catch(error => {
      console.log(error);
    })
    
  }, [])

  allFestival.forEach((product) => {

    if (product.id != id) {
      nextFestival.push(product);
    }
  })

  nextFestival = nextFestival.slice(0, 4);

  

  return (
    <div style={{'margin':'2rem 2rem'}}>
      <h5 style={{'padding':'5px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter'}}>Check Other Festivals</h5>
      <div className='rtsection__container'>
      {
        nextFestival.map((index) => {
          
          return <ITCardItem
            path={'/user/festivals/story/' + index.id}
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

export default RC2Section
