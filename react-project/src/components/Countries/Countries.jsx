import React, { use } from "react";
import Country from "../Country";
import "./Countries.css"
const Countries = ({ countriesPromise }) => {
  const countriesPromiseData = use(countriesPromise);
  const countryValue = countriesPromiseData.countries;
  // console.log(countryValue)
  return (
    <div>
      <h3 className="text">in the countries {countryValue.length}</h3>
      <div className="Countries">
        {countryValue.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
