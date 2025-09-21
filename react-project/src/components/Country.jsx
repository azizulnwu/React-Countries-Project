import React, { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  console.log(country.area.area);
  const [Visited, setvisited] = useState(false);
  const eventHandeler = () => {
    // setvisited (Visited ? false:true)
    setvisited(!Visited);
  };
  return (
    <div className={Visited ? `countryVisited` : `country`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital[0]}</p>
      <p>
        Country Area: {country.area.area} ({" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"} )
      </p>
      <button onClick={eventHandeler} className="btn">
        {Visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
