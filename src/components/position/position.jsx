import React, { Component } from "react";
import Forecasts from "../forecast/forecasts";
import City from "../cities/city";

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      latitude: 0,
      longitude: 0,
      url:
        "https://api.weatherbit.io/v2.0/forecast/daily?key=d4c6a44092d04182ab4006f17f682510&city=Papeete",
      apiresponse: "",
      apicall: false,
      city: "Papeete",
      message: "",
    };
  }

  apiCall = () => {
    const call = fetch(this.state.url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          apiresponse: result.data,
          apicall: true,
        });
      })
      .catch((error) => console.error("error:", error));
  };

  componentDidMount = () => {
    this.apiCall();
  };

  setCity = (e, name) => {
    this.setState({
      city: name,
      url:
        "https://api.weatherbit.io/v2.0/forecast/daily?key=d4c6a44092d04182ab4006f17f682510&city=" +
        name,
    });
    this.apiCall();
  };

  getlocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        this.setState({
          location: true,
          latitude: lat,
          longitude: lon,
          url:
            "https://api.weatherbit.io/v2.0/forecast/daily?key=d4c6a44092d04182ab4006f17f682510&lat=" +
            lat +
            "&lon=" +
            lon,
          city: "la ou tu te situe",
        });
        this.apiCall();
      },
      (error) => {
        if (error.code == error.PERMISSION_DENIED)
          console.log("you denied me :-(");
        this.setState({
          message: "you denied the geolocalisation",
        });
      }
    );
  };

  render() {
    let message = this.state.message;

    if ("geolocation" in navigator) {
      this.getlocation();
    }

    let forecasts;
    if (this.state.apicall) {
      forecasts = <Forecasts apiresult={this.state.apiresponse} />;
    }
    return (
      <section className="container weathercard">
        {message}
        <div className="row mt-5">
          <City onClick={this.setCity} type="warning" name="San Francisco" />
          <City onClick={this.setCity} type="info" name="Libreville" />
          <City onClick={this.setCity} type="danger" name="Tokyo" />
          <City onClick={this.setCity} type="success" name="Montreal" />
        </div>
        <div className="text-center mt-5 mb-3">
          Voici la meteo pour la ville de {this.state.city}
        </div>
        <div className="mt-5 text-center">{forecasts}</div>
      </section>
    );
  }
}
export default Position;
