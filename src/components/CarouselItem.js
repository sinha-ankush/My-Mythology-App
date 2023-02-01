import React from 'react';
import './style.css'
import {
    MDBBtn,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function CarouselItem(props) {

    return (

        <MDBCarouselItem
            className='w-100 d-block hero__img'
            itemId={props.id}
            src={props.img}
            alt={props.text}
        >
            <div className='hero__items'>

                <h1 style={{ color: '#FFF8E1' }}><b>{props.title}</b></h1>

                <br></br>
                {/* |  {props.date} |  {props.views} <i className='fa fa-eye'></i> */}
                <p style={{ color: '#FFF8E1' }}>
                    By <span style={{ color: 'orangered' }}>{props.author}</span>
                </p>
                <p style={{ color: '#FFF8E1' }}>{props.description}</p>
                <br></br>
                {/* <span>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{ color: '#FFF8E1' }}> Historical </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{ color: '#FFF8E1' }}> Worship </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{ color: '#FFF8E1' }}> God </MDBBtn>
                </span> 
                <br></br>
                <br></br>*/}
                <Link to={props.path}>
                    <MDBBtn color='warning' size='lg' style={{ color: 'black' }}>Read More</MDBBtn>
                </Link>

                <br></br>
            </div>

        </MDBCarouselItem>



    );
}

export default CarouselItem