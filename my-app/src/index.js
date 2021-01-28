import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  tracks: [
    { name: "Smells like spirit", id: Math.random() * Date.now() },
    { name: "Entyer Sandman", id: Math.random() * Date.now() },
  ],
  playlists: ["My Home", "Meditation"],
};

// The function passed as an argument when creatn g store called reducer
function playlist(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    console.log(action.payload);
    return {
      ...state,
      tracks: [
        ...state.tracks,
        { name: action.payload.name, id: action.payload.id },
      ],
    };
  } else if (action.type === "DELETE_TRACK") {
    let newArr = state.tracks.filter((e) => e.name === action.payload);
    newArr.forEach((f) => state.tracks.findIndex((e) => e.name === f.name), 1);
    return {
      ...state,
      tracks: [...newArr],
    };
  } else return state;
}

const store = createStore(
  playlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
