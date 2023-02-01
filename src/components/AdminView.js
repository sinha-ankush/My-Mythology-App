import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { getEpisodePostOfStoryPost } from '../services/EpisodePost';

import AdminViewCard from './AdminViewCard';



function AdminView() {



    const { storyPostid } = useParams();

    const [epPost, setEpPost] = useState([])



    useEffect(() => {

        getEpisodePostOfStoryPost(storyPostid).then((data) => {

            // console.log(data)

            setEpPost(data);

        }).catch((error) => {

            console.log(error)

        })

    }, [])



    // console.log(epPost)



    return (

        <>

            {

                epPost.map((index) => {

                    return <AdminViewCard

                        story={index.storyPost.title}

                        ep_number={index.ep_number}

                        content={index.content}

                        image={index.imageName}

                        poster={index.posterImage}

                        file={index.fileName}

                    />

                })

            }

        </>

    )

}



export default AdminView