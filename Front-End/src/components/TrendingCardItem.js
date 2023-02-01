import React from 'react';
import { Link } from 'react-router-dom';

function TrendingCardItem(props) {
  return (
    <div className='tcardItem'>
      <figure>
        <Link to={props.path}>
          {/* <img src={props.src} /> */}
          {/* <br></br>
          <br></br> */}
          <h4 style={{ 'margin': '20px 0px', color: 'black', 'fontWeight': 'bold' }}>{props.heading}</h4>
          <p style={{ color: 'black', 'fontSize': '16px', 'width': '320px' }}>{props.description}</p>
          <p style={{ color: 'black', 'fontSize': '14px' }}>By <span style={{ color: '#FF9900' }}>{props.author}</span> | {props.posted} </p>

        </Link>
      </figure>
    </div>
  )
}



export default TrendingCardItem

