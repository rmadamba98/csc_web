import React from 'react'
import './popup.css'

export default function PopUp(props) {
    return (
        <div className='suped'>
            {props.img}
            <div class="suped-overlay">
                <h1>
                  {props.name}
                </h1>
                <h2>
                  {props.desc}
                </h2>
            </div>
        </div>
    )
}
 
