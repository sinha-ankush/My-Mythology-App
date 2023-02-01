import React from 'react';
import { Link } from 'react-router-dom';


function Write() {
    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'center', 'marginBottom': '3rem' }}>
            <Link to='/user/write-story'>
                <img src='write.svg' alt='write your own story' height='368px'></img>
            </Link>
        </div>
    )
}

export default Write