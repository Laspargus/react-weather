import React, { Component } from "react";

class forecast extends Component {
  render() {
    let { minTemp, maxTemp, date, image } = this.props;
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let d = new Date(date);
    let dayName = days[d.getDay()];

    return (
      <div className="text-center col-md-2 ml-1 card p-2">
        <img
          src={"https://www.weatherbit.io/static/img/icons/" + image + ".png"}
          alt={dayName}
        ></img>
        <p>Min : {minTemp}</p>
        <p>Max : {maxTemp}</p>
        <small>{dayName}</small>
      </div>
    );
  }
}

export default forecast;
