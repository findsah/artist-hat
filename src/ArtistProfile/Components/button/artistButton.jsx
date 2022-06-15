import React from 'react'
import './artistButton.css';

const ArtistButton = ({ text, color, padding, fontSize, border,width,height }) => {
    return (
        <div>
            <button
                className="helpButton"
                style={{ backgroundColor: color, padding: padding, border: border,width,height}}
            ><span className="artistReviewsText"  style={{fontSize : fontSize}}>{text}</span>
            </button>
        </div>
    )
}

export default ArtistButton;
