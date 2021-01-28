// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import {createStore} from 'redux'


function playlist(state = [], action){
  if (action.type === 'ADD_TRACK'){
    return [
      ...state, 
      action.payload]
  }
  console.log(action)
  return state
}
// this will accept a function as an argument in createStore
const store = createStore(playlist);

console.log(store);

// We can see how our store looks

console.log(store.getState()); 


// We can see this message: 'subscribe' and the state when it changes: 
store.subscribe(()=>{
  console.log('subscribe', store.getState())
})

// How to change data in the store? 

store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit' })
store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman' })

// subscribe ["Smells like spirit"]
// subscribe (2) ["Smells like spirit", "Enter Sandman"]