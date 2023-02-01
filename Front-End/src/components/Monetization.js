import React,{useEffect} from 'react';
import AdSense from 'react-adsense';


function Monetization(props) {
  const { currentPath } = props
  window.onload = function() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
}

  return (
    <div key={currentPath} style={{'margin':'3rem 3rem','borderRadius':'20px'}}>
        <p style={{'padding':'6rem 6rem','display':'flex','justifyContent':'center'}}>Monetization Content</p>
        <ins className='adsbygoogle'
           style={{ display: 'block' }}
           data-ad-client='ca-pub-7292810486004926'
           data-ad-slot='7806394673'
           data-ad-format='auto' />
    </div>
  )
}

export default Monetization
