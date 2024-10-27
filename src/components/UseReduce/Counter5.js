import React, { useReducer } from 'react'

const initialState = {
    counterA: 0,
    counterB: 5
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increament':
            return { ...state,counterA: state.counterA+ action.value};
        case 'decreament':
            return { ...state,counterA: state.counterA- action.value};
            case 'decreament5':
            return { ...state,counterA: state.counterA- action.value};
        case 'reset':
            return initialState;
        default:
            return initialState;
    }

}
export default function Counter5() {
   const[count,dispatch]= useReducer(reducer, initialState)
    return (
        <div>
<h1> {count.counterA}</h1>
<button onClick={()=>{dispatch({type:'increament' ,value:1})} }>increament</button>
<button onClick={()=>{dispatch({type:'decreament',value:1})}}>decreament</button>
<button onClick={()=>{dispatch({type:'decreament5',value:5})}}>decreamentby5</button>
<button onClick={()=>{dispatch('reset')}}>reset</button>
        </div>
    )
}
