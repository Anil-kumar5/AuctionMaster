import React from 'react'

function BackgroundImage(props) {
    return (
        <div style={{backgroundImage:'url(./Background.png)',padding:'50px',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
           {props.children} 
        </div>
    )
}

export default BackgroundImage
