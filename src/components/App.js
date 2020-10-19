import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let cities = [
      { city: "Goa", country: "India" },
      { city: "Amsterdam", country: "Netherlands" },
      { city: "New York", country: "USA" },
      { city: "Darjeeling", country: "India" },
      { city: "Tokyo", country: "Japan" },
      { city: "Lonavala", country: "India" }
    ];

    return (
      <>
        <ol>
          {cities.map((city, index) =>
            city.country === "India" ? (
              <li key={"location" + index}>{city}</li>
            ) : null
          )}
        </ol>
      </>
    );
  }
}

export default App;
