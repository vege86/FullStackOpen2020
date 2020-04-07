import React from "react";
import Country from "./Country";

const Countries = ({ foundCountries, handleShowCountry }) => {
  let foundCountriesLength = foundCountries.length;

  if (foundCountriesLength > 1 && foundCountriesLength < 11) {
    return (
      <div>
        {foundCountries.map((country) => (
          <p key={country.name}> {country.name}  <button onClick={handleShowCountry}>show</button> </p>
        ))}
      </div>
    );
  } else if (foundCountriesLength === 1) {
    return (
      <div>
        {foundCountries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    );
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};

export default Countries;
