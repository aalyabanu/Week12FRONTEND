import React from 'react'

export default function Message(props) {
    return (
        <div className="message-notice">
            <span>{props.message}</span>
            <button onClick={props.clearMessage}>X</button>
            
        </div>
    )
}