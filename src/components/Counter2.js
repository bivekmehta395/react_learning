import React, { useState } from 'react'


export default function Counter2() {
    const [state, setstate] = useState({ name: '', employee: '' })
    return (
        <div>
            <input type='text' value={state.name} onChange={(e) => setstate({...state, name: e.target.value })} />
            <input type='text' value={state.employee} onChange={(e) => setstate({...state, employee: e.target.value })} />
            <h1> my name is {state.name}</h1>
            <h1>i work in {state.employee}</h1>
        </div>
    
    )
}
