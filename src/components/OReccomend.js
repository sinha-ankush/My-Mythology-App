import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

function OReccomend() {
    return (
        <div style={{ 'margin': '2rem 5rem', 'fontFamily': 'Inter' }}>
            <h5 style={{ 'padding': '5px 5px', 'marginBottom': '40px', color: 'black', 'fontWeight': 'bold', 'fontFamily': 'Inter' }}>Topic Match for you</h5>
            <div style={{ 'marginBottom': '1rem' }}>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': '#FF9900', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-2'>God's Youth</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Myths</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Latest</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Festivals</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Historical</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Faith</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Epics</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Religion</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Temples</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Culture</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Characters</MDBBtn>
                <MDBBtn color='warning' style={{ color: 'black', 'borderRadius': '10px', 'backgroundColor': 'rgba(255, 153, 0, 0.4)', 'fontSize': '12px', 'lineHeight': '30px', 'textTransform': 'capitalize' }} size='sm' className='mx-3'>Worship</MDBBtn>
            </div>
            <div className='top__container'>
                <img src='top1.svg'></img>
                <img src='top2.svg'></img>
                <img src='top3.svg'></img>
                <img src='top4.svg'></img>
                <img src='top5.svg'></img>
            </div>
        </div>
    )
}

export default OReccomend