import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
<Weather />
        <footer>
          {" "}
          This project open sourced on{" "}
          <a
            href="https://github.com/strigenzc/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>{" "}
          <br></br>
          Portfolio found
          <a
            href="https://strigenz-portfolio.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            here
          </a>
        </footer>
      </div>
    </div>
  );
}
