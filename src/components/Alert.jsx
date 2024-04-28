import React from 'react'

export const Alert = ({ mensaje, color }) => {
    return (
        <>
            {mensaje && <h1 style={{ color: color }}>{mensaje}</h1>}
        </>
    )
}

