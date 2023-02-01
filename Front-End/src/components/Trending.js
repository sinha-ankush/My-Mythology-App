import React, { useState, useEffect } from 'react';
import TrendingCardItem from './TrendingCardItem'
import './style.css'
import {
  load, loadAll
} from '../services/StoryService';
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../services/Helper';

function Trending() {

  const [story, setStory] = useState([]);
  const [cid, setCid] = useState();

  useEffect(() => {
    loadAll().then(data => {
      data.reverse();
      setCid(data[0].category.id);
      var size = 4;
      var items = data.slice(0, size);
      // console.log(items)
      setStory(items)
    }).catch(error => {
      console.log(error);
    })
  })

  const returnURL = (cid) => {

    return cid == 3 ?
      '/user/festivals/story/'
      : cid == 2
        ? '/user/characters/story/'
        : cid == 4
          ? '/user/temples/story/' : ''
      ;
  }

  const printDate = (numbers) => {
    return new Date(numbers).toLocaleDateString()
  }

  // const [character, setCharacter] = useState([]);
  // const [festival, setFestival] = useState([]);
  // const [temple, setTemple] = useState([]);

  // useEffect(() => {
  //   // load post of postId 
  //   load(2).then(data => {
  //     console.log(data);
  //     setStory(data)
  //   }).catch(error => {
  //     console.log(error)
  //     toast.error("Error in loading")
  //   })

  // }, [])

  // useEffect(() => {
  //   // load post of postId 
  //   load(10).then(data => {
  //     console.log(data);
  //     setCharacter(data)
  //   }).catch(error => {
  //     console.log(error)
  //     toast.error("Error in loading")
  //   })

  // }, [])

  // useEffect(() => {
  //   // load post of postId 
  //   load(11).then(data => {
  //     console.log(data);
  //     setFestival(data)
  //   }).catch(error => {
  //     console.log(error)
  //     toast.error("Error in loading")
  //   })

  // }, [])

  // useEffect(() => {
  //   // load post of postId 
  //   load(12).then(data => {
  //     console.log(data);
  //     setTemple(data)
  //   }).catch(error => {
  //     console.log(error)
  //     toast.error("Error in loading")
  //   })

  // }, [])



  return (
    <div style={{ 'margin': '2rem 5.1rem', 'fontFamily': 'Inter' }}>
      <h5 style={{ 'padding': '5px 10px', 'marginBottom': '40px', color: 'black', 'fontWeight': 'bold', 'fontFamily': 'Inter' }}>Recent Posts to read</h5>
      <div className='trending__container'>
        {
          story.map((index) => {
            return <TrendingCardItem
              path={returnURL(cid) + index.id}
              src={BASE_URL + "/story/image/" + index.imageName}
              author={index.user.name}
              posted={printDate(index.date)}
              heading={index.title}
              description={index.description}
            />
          })
        }
        {/* <TrendingCardItem
          src='e5.svg'
          author='Arundhati Roy'
          posted='Sep 14, 2022'
          time_to_read='3 min'
          heading={character.title}
          description={character.description}
        />
        <TrendingCardItem
          src='rakhi 1.svg'
          author='Vikram Seth'
          posted='Oct 09, 2022'
          time_to_read='5 min'
          heading={festival.title}
          description={festival.description}
        />
        <TrendingCardItem
          src='tem3.svg'
          author='Amitav Ghosh'
          posted='Apr 18, 2012'
          time_to_read='3 min'
          heading={temple.title}
          description={temple.description}
        /> */}
      </div>
    </div>
  )
}

export default Trending
