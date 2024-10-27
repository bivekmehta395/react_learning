import React,{useState} from 'react'
import UseEffect3 from './UseEffect3'

export default function UseEffect4() {
    const [display,setdisplay]=useState(true)

  return (
    <div>
      <button onClick={()=>setdisplay(!display)}>click to toggle</button>
      {display && <UseEffect3/>}
    </div>
  )
}
