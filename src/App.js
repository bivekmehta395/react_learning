import logo from './logo.svg';
import './App.css';
// import { DemoComponent } from './components/DemoComponent';
import SetTitle from './components/SetTitle';
import MapFunx from './components/MapFunx';
import Syling from './components/Syling';
import Counter2 from './components/Counter2';
import ArrayMod from './components/ArrayMod';
// import UseEffects3 from './components/UseEffectLearn/UseEffects3';
// import UseEffect3 from './components/UseEffectLearn/UseEffect3';
import UseEffect4 from './components/UseEffectLearn/UseEffect4';
import MultiplePosts from './components/UseEffectLearn/MultiplePosts';
import Counter5 from './components/UseReduce/Counter5';
import React, { useReducer } from 'react';
import { useContext } from 'react';
import Counter4 from './components/UseReduce/Counter4';
import StateAndReduce from './components/UseStateand UseRedece/StateAndReduce';

// export const CountContext = React.createContext(); // Renamed for consistency

// const initialState = { counterA: 0 }; // Changed to an object to match the reducer structure

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'increment': // Fixed spelling
//             return { ...state, counterA: state.counterA + action.value };
//         case 'decrement': // Fixed spelling
//             return { ...state, counterA: state.counterA - action.value };
//         case 'reset':
//             return initialState; // Reset to the initialState object
//         default:
//             return state; // Return the current state instead of initialState
//     }
// };


// const [state, dispatch] = useReducer(reducer, initialState); // Updated variable names for clarity


// <div>
//     <CountContext.Provider value={{ countState: state.counterA, countDispatch: dispatch }}>
//         <div>Count: {state.counterA}</div> {/* Updated to display the correct count */}
//         <Counter4 />
//     </CountContext.Provider>
function App() {
  return (
    <div>
      <StateAndReduce />
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import Child from './Child';

// function App() {
//   const [message, setMessage] = useState(''); // State to store the message

//   // This function will handle data coming from the child
//   const handleDataFromChild = (data) => {
//     setMessage(data); // Update the state with the data received from the child
//   };

//   return (
//     <div>
//       <h1>Message from Child: {message}</h1>
//       <Child sendData={handleDataFromChild} /> {/* Pass the function as a prop */}
//     </div>
//   );
// }


{/* <DemoComponent name='Bivek' class='bachelor'/>
      <DemoComponent name='pranish' class='bachelor'/>
      <DemoComponent name='Hritik' class='bachelor'/> */}

{/* <SetTitle/> */ }
{/* <MapFunx/> */ }
{/* <Syling/> */ }
{/* <Counter2/> */ }
{/* <ArrayMod/> */ }
{/* <UseEffect3/> */ }
{/* <UseEffect4/> */ }
{/* <MultiplePosts/> */ }