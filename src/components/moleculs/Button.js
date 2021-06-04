import React from 'react'
import './style.css'

function Button({name, color, size, backColor,bordCol, func}) {
    return (
        <div>
            <button style={{color: color, width: size, background: backColor, borderColor: bordCol, borderRadius:'4px', height:'37px', padding:'5px', marginLeft:'5px'}} onClick={func}>{name}</button>
        </div>
    )
}

export default Button
