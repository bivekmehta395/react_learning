import React from 'react'

export default function MapFunx() {
    const arr = [{
        name: 'bivek',
        class: ' bschelor',
        age: '24',
    },
    {
        name: 'sagar',
        class: ' bschelor',
        age: '24',
    },
    {
        name: 'anika',
        class: ' bschelor',
        age: '24',
    },
    ]
    return (
        <div>{
            arr.map((array) => {
                return (
                    <div key={array.name}>
                        <h1>{array.name} </h1>
                        <h1>{array.class} </h1>
                        <h1>{array.age} </h1>
                    </div>
                )
            })}
        </div>
    )
}
