import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { movieList } from "./component/map/input";

import "./index.css";

const init = {
  newInput: "",
  movieList,
  stars: ""

};

const SEARCH_TEXT = "SEARCH_TEXT";
const SEARCH_RATE = "SEARCH_RATE";
const ADD_FILM="ADD_FILM"

function Reducer(state = init, action) {
  switch (action.type) {
    case SEARCH_TEXT:
      return { ...state, newInput: action.payload }
      case SEARCH_RATE:
      return { ...state, stars: action.payload }
      case ADD_FILM:
        return { ...state, movieList: [...state.movieList, action.payload] };
    

    default:
      return state;
  }
}

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
