import React from "react";
import Loading from "./component/Loading";
import Routeur from "./routeur/index"
import "./App.css";

class App extends React.Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 2000);
  }

  render() {
    return !this.state.isLoading ? (<Loading /> ) : (
    <div>
      <Routeur/>
    </div>
    );
  }
}

export default App;