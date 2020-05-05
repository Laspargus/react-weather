import React, { Component } from "react";
import Forecast from "./forecast";
class Forecasts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { apiresult } = this.props;
    let weatherList = [];
    let i = 1;
    for (i; i < 6; i++) {
      let data = {
        minTemp: apiresult[i].app_min_temp,
        maxTemp: apiresult[i].app_max_temp,
        image: apiresult[i].weather.icon,
        date: apiresult[i].datetime,
      };

      weatherList.push(data);
    }

    let forecast = weatherList.map((weather, index) => (
      <Forecast
        key={index}
        minTemp={weather.minTemp}
        maxTemp={weather.maxTemp}
        date={weather.date}
        image={weather.image}
      />
    ));

    return <div className="row">{forecast}</div>;
  }
}

export default Forecasts;
