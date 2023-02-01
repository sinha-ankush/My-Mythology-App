import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCardItem(props) {
  return (

    <div className='cardItem'>
      <Link to={props.path} style={{ 'textDecoration': 'none' }}>
        <div className='category'>
          <img src={props.img_path} alt={props.text}></img>
        </div>
      </Link>
      <div>
        <h6 style={{ 'padding': '20px 10px', color: 'black', 'fontWeight': 'bold', 'fontFamily': 'Inter' }}>
          {props.heading}
        </h6>
      </div>
    </div>
  )
}


export default CategoryCardItem

