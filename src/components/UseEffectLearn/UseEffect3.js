import React, { useState, useEffect } from 'react'

export default function UseEffect3() {
    const [x, setx] = useState()
    const [y, sety] = useState()

    const MousePosition = (e) => {
        console.log('this is mouse event')
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log('mouse event is called')
        window.addEventListener('mousemove', MousePosition)

        return(()=>
        window.removeEventListener('mousemove', MousePosition) )
    },[]

    )
    return (
        <div>
            <h1>Mouse Position</h1>
            <h1>coordinate X,Y: {x} ,{y}</h1>
        </div>
    )
}
