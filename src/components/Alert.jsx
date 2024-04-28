import React from 'react'
import "./Alert.css"

export const Alert = ({ mensaje, color }) => {
    return (
        <>
            {
                mensaje && 
                (
                    color === 'red' ?
                    <div class="alert alert-danger alert-mensaje" role="alert">{mensaje}</div>
                    :
                    <div class="alert alert-primary alert-mensaje" role="alert">{mensaje}</div>
                )
            }
        </>
    )
}

