import React, { Component } from "react";

import Search from "../component/search/search";
import MapFilm from "../component/map/mapFilm";
import Add from "../component/add/add";
import Rate from "../component/rate/rate";

export default class home extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Search />
          <Rate />
        </div>
        <MapFilm />
        <Add />
      </div>
    );
  }
}