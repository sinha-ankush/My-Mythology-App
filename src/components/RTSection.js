import React , { useState, useEffect }from 'react';
import {loadAllStory} from '../services/StoryService';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../services/Helper';
import ITCardItem from './ITCardItem';

function RTSection() {

  const { id } = useParams();
  const [allTemples, setAllTemples] = useState([])
  var nextTemple = [];

  useEffect(() => {

    loadAllStory(4).then((currStory) => {
        setAllTemples(currStory);
      })  
    .catch(error => {
      console.log(error);
    })
    
  }, [])

  allTemples.forEach((product) => {

    if (product.id != id) {
      nextTemple.push(product);
    }
  })

  nextTemple = nextTemple.slice(0, 4);

  

  return (
    <div style={{'margin':'2rem 2rem'}}>
      <h5 style={{'padding':'5px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter'}}>Check Other Temples</h5>
      <div className='rtsection__container'>
      {
        nextTemple.map((index) => {
          
          return <ITCardItem
            path={'/user/temples/story/' + index.id}
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

export default RTSection
