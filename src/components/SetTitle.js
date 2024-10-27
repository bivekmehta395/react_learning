import React,{useState} from 'react'

export default function SetTitle() {
    const[title,setTitle]=useState('how are you?');
  return (
    <div>
      {title}
      <button onClick={()=>setTitle('i am fine')}>click me to get ans</button>
    </div>
  )
}
