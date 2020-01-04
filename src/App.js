import React from "react";
import "./App.css";

import Search from "./component/search/search";
import MapFilm from "./component/map/mapFilm";
import Add from "./component/add/add";
import Rate from "./component/rate/rate";
import Loading from "./component/Loading";

class App extends React.Component {
  state = { };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 2000);
  }

  render() {
    return !this.state.isLoading ? (<Loading /> ) : (
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

export default App;
