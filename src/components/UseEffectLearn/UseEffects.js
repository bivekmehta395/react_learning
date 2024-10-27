import React,{useState,useEffect} from 'react'

export default function UseEffects() {
    const [count,setcount]=useState(0)
    const [text,settext]=useState('')
    useEffect(()=>{
        document.title=`clicked: ${count} times`
        console.log(`clicked: ${count} times`);
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <input
      type='text'
      value={text}
      onChange={(e)=>settext(e.target.value)}/>

    </div>
  )
}
