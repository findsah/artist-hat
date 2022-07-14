import React from 'react'
import './button.css';

const Button = ({ text, color, textColor, padding, fontSize, border, width, event, height, fontWeight }) => {
    return (
        <>
            <button
                onClick={() => event()}
                style={{ backgroundColor: color, padding, border, width, fontSize, height, fontWeight, color: textColor,borderRadius:'3rem' }}
            >{text}
            </button>
        </>
    )
}

export default Button;
