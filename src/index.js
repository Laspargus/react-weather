import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Position from "./components/position/position";

class App extends React.Component {
  render() {
    return (
      <>
        <Position />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
