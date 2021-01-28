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

// Grabbing html elems
const addTrackBtn = document.getElementById('addTrack')
const trackName = document.getElementById('trackInput');
const list = document.getElementById('list')

store.subscribe(()=>{
  console.log('subscribe', store.getState())
  // empty list to kater append store array's values
   list.innerHTML= ''
  // empty input
   trackName.value = ''
  // go through each state elem and append it to ul
 store.getState().forEach(track => {
   const li = document.createElement('li'); 
   li.textContent = track
   list.appendChild(li)
 })
})

// How to change data in the store? 

store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit' })
store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman' })

//Adding a listener to the button: 
addTrackBtn.addEventListener('click', ()=>{
  console.log('tack name' ,trackName.value)
 trackName.value? store.dispatch({type: 'ADD_TRACK', payload: trackName.value}) : alert('Empty input')
})


