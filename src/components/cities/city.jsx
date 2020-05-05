import React, { Component } from "react";

class City extends Component {
  render() {
    let { name, type } = this.props;
    return (
      <div className="ml-3">
        <button
          id={name}
          onClick={(e) => this.props.onClick(e, name)}
          className={"btn btn-outline-" + type}
        >
          {name}
        </button>
      </div>
    );
  }
}

export default City;
