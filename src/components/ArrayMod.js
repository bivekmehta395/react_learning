import React,{useState} from 'react'

export default function ArrayMod() {
    const[state,setstate]=useState({name:"",employee:"hello"})
  return (
    <div>
      <h1> please provide your name</h1>
      <input
      type='text'
      value={state.name}
      onChange={(e)=>setstate({...state,name:e.target.value})}/>
      <h1>please provide employee name</h1>
      <input
      type='text'
      value={state.employee}
      onChange={(e)=>setstate({...state,employee:e.target.value})}/>
      <h1>name: {state.name} employee:{state.employee}</h1>
    </div>
  )
}
