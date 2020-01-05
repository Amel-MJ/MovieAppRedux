import {movieList}  from "../component/map/input";

const init = {
  newInput: "",
  movieList,
  stars: ""
};

const SEARCH_TEXT = "SEARCH_TEXT";
const SEARCH_RATE = "SEARCH_RATE";
const ADD_FILM = "ADD_FILM";
const DELETE = "DELETE";
const EDIT = "EDIT";

function reducer(state = init, action) {
  switch (action.type) {
    case SEARCH_TEXT:
      return { ...state, newInput: action.payload };
    case SEARCH_RATE:
      return { ...state, stars: action.payload };
    case ADD_FILM:
      return { ...state, movieList: [...state.movieList, action.payload] };
    case DELETE:
      state.movieList.splice(action.payload, 1);
      return { ...state, movieList: [...state.movieList] };
    case EDIT:
      state.movieList[action.payload.id].lien = action.payload.lien;
      state.movieList[action.payload.id].name = action.payload.name;
      state.movieList[action.payload.id].rate = action.payload.rate.toString();
      return { ...state, movieList: [...state.movieList] };

    default:
      return state;
  }
}

export default reducer