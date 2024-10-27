import React,{useState} from 'react'

export default function Counter() {
    const [state, setstate] = useState(0)
    const value=0;
    const increament=()=>{
        setstate(prevCount=>prevCount+1)
    }
    return (     
    <div>
     <h1>Counter: {state}</h1>
     <button onClick={increament}>increament</button>
     <button onClick={()=>setstate(state-1)}>decreament</button>
     <div>

     <button onClick-={()=>setstate(value)}>reset</button>
     </div>
    </div>
  )
}
