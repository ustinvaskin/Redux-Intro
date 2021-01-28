import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {createStore} from 'redux'
import {Provider} from 'react-redux'


const initialState = ['Smells like spirit', 'Enetr Sandman']

// The function passed as an argument when creatn g store called reducer 
function playlist(state = initialState, action){
  if (action.type === 'ADD_TRACK'){
    return [
      ...state, 
      action.payload]
  }
  console.log(action)
  return state
}


const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


