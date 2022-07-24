import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Chicago</h1>
      <ul>
        <li>Sunday July 24th</li>
        <li>Partly Cloiudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          22 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Wind Speed: 6 km/hr</li>
            <li>Humidity: 23%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
