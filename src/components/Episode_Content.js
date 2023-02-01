import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { load } from '../services/StoryService';
import { toast } from 'react-hot-toast';
import EpisodeCardItem from './EpisodeCardItem';
import EpisodePageHeading from './EpisodePageHeading';
import { useParams } from 'react-router-dom';
import { BASE_URL, myAxios } from '../services/Helper';


function Episode_Content() {

  const { id } = useParams();

  const [episode, setEpisode] = useState([]);

  const [heading, setHeading] = useState([]);

  useEffect(() => {
    // load post of postId 
    load(id).then(data => {
      console.log(data);
      setHeading(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  //load episode of story with storyId

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await myAxios.get("episode/story/" + id);
        console.log(data);
        setEpisode(data);
      } catch (err) {
        console.error(err);
        toast.error("Error in loading")
      }
    };
    fetch();
  }, []);

  return (
    <div style={{ 'margin': '2rem 2rem', 'padding': '2rem 2rem', 'borderRadius': '24px', 'backgroundColor': 'rgba(255, 153, 0, 0.05)', 'fontFamily': 'Inter' }}>

      <EpisodePageHeading
        title={heading.title}
        description={heading.description}
      />

      <p style={{ 'color': 'black', 'fontSize': '18px', 'fontWeight': '600', 'lineHeight': '28px', 'marginTop': '2rem' }}>{episode.length} Episodes</p>
      <div className='content__container' style={{ 'margin': '2rem 0rem' }}>

        {episode.map((index) => {

          return <EpisodeCardItem
            path={index.id}
            src={BASE_URL + "/episode/image/" + index.imageName}
            ep_number={index.ep_number}
            description={index.content}
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

export default Episode_Content
