import React from 'react'

function EpisodePageHeading(props) {
    return (
        <div>
            <div className='bc-icons-2' >
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a class="black-text" href="/" style={{ 'color': '#4B002D', 'fontSize': '15px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Home</a><i class="fas fa-angle-right mx-2"
                            aria-hidden="true"></i></li>
                        <li class="breadcrumb-item"><a class="black-text" href="/mythological-stories" style={{ 'color': '#4B002D', 'fontSize': '15px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Mythology Stories</a><i class="fas fa-angle-right mx-2"
                            aria-hidden="true"></i></li>
                        <li class="breadcrumb-item active" style={{ 'color': '#4B002D', 'fontSize': '16px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>{props.title}</li>
                    </ol>
                </nav>
            </div>

            <p style={{ 'color': 'black', 'fontSize': '24px', 'fontWeight': '600', 'lineHeight': '28px' }}>{props.title}</p>
            <div style={{ 'alignContent': 'center', 'marginTop': '2rem' }}>
                <p style={{ 'color': '#4C4C4C', 'font-style': 'normal', 'fontSize': '16px', 'fontWeight': '400', 'lineHeight': '28px' }}>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default EpisodePageHeading