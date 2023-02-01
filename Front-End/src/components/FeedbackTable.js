import React, { useState } from 'react'
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit'
import { BASE_URL } from '../services/Helper'
import { approve, deleteStoryPost } from '../services/PostStoryService';
import { toast } from 'react-hot-toast';
import { createStory, uploadStoryImage } from '../services/StoryService';
import { Link } from 'react-router-dom';

function FeedbackTable(props) {

    return (
        <tr>

            <th scope='row'>{props.name}</th>

            <th scope='row'>{props.Id}</th>

            <td>{props.email}</td>

            <td>{props.contact}</td>

            <td>{props.issue}</td>

            <td>
                {props.description}
            </td>


        </tr>

    )
}

export default FeedbackTable