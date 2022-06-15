import React from 'react'
import './button.css';

const Button = ({ text, color, textColor, padding, fontSize, border, width, event, height, fontWeight }) => {
    return (
        <>
            <button
                onClick={() => event()}
                className='artistReviews'
                style={{ backgroundColor: color, padding, border, width, fontSize, height, fontWeight, color: textColor }}
            >{text}
            </button>
        </>
    )
}

export default Button;
