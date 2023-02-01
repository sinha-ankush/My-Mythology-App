import React, { useEffect, useState } from 'react'
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit'
import { BASE_URL } from '../services/Helper'
import { approve, deleteStoryPost } from '../services/PostStoryService';
import { toast } from 'react-hot-toast';
import { createStory, uploadStoryImage } from '../services/StoryService';
import { Link } from 'react-router-dom';
import { createEpisode, placeFileName, uploadFile } from '../services/EpisodeService';
import { getEpisodePostOfStoryPost } from '../services/EpisodePost';

function AdminTable(props) {

    const deletePost = (postId, event) => {
        event.preventDefault();
        deleteStoryPost(postId).then(res => {
            toast.success("Post Deleted Successfully")
            window.location.reload();
        }).catch(error => {
            console.log(error);
            toast.error("Error Occured")
        })
        // window.location.reload();
    }

    const [episode, setEpisode] = useState([])
    const [file, setFile] = useState([])



    const [story, setStory] = useState({
        title: '',
        description: '',
        categoryId: '',
        userId: ''
    })

    const [ep, setEp] = useState([])

    const approvePost = (poststory, event) => {
        event.preventDefault();
        // console.log("Hello")
        // console.log(poststory)
        setStory({
            title: poststory.title,
            description: poststory.description,
            categoryId: poststory.category.id,
            userId: poststory.user.id
        })

        getEpisodePostOfStoryPost(poststory.storyPostId).then((data) => {
            // console.log(data)
            setEp(data);
        }).catch((error) => {
            console.log(error)
        })

        createStory(story).then(data => {

            episode['ep_number'] = ep[0].ep_number
            episode['content'] = ep[0].content
            episode['storyId'] = data.id

            createEpisode(episode).then((data) => {
                file['fileName'] = ep[0].fileName
                file['episodeId'] = data.id
                placeFileName(file).then((data) => {
                    toast.success("Yes")
                }).catch((error) => {
                    console.log(error)
                })
                toast.success("Done")
                setFile({
                    fileName: '',
                    episodeId: ''
                })


            }).catch((error) => {
                console.log(error)
            })

            toast.success("Story Added Successfully")

            setEpisode({
                ep_number: '',
                content: '',
                storyId: ''
            })

            // deleteStoryPost(poststory.storyPostId)

            // window.location.reload();

        }).catch(error => {
            toast.error("Story not added due to some error !!")
            console.log(error)
        })
    }

    // const approveEpisode = () => {

    // }

    // const fun = (event) => {
    //     approvePost(props.poststory, event)
    //     approveEpisode()
    // }

    return (
        <tr>

            <th scope='row'>{props.name}</th>

            <td>{props.category}</td>

            <td>{props.title}</td>

            <td>
                {props.description}
            </td>

            <td>
                <a href={BASE_URL + `/story/post/image/${props.image}`} target="_blank" rel="noopener noreferrer">
                    {props.image}
                </a>
            </td>

            <td>
                <MDBBtn color='danger' size='sm' onClick={(event) => deletePost(props.postId, event)}>
                    <i className='fas fa-times'></i>
                </MDBBtn>
            </td>

            <td>
                <MDBBtn color='success' size='sm' onClick={(event) => approvePost(props.poststory, event)}>
                    <MDBIcon fas icon="check" />
                </MDBBtn>
            </td>

            {/* <td>
                <MDBBtn color='success' size='sm' onClick={(event) => fun(event)}>
                    <MDBIcon fas icon="check" />
                </MDBBtn>
            </td> */}

            <td>
                <Link to={`/admin/view-content/${props.route}`}>
                    <MDBBtn color='dark' size='sm'>
                        <MDBIcon far icon="eye" />
                    </MDBBtn>
                </Link>

            </td>

        </tr>

    )
}

export default AdminTable

