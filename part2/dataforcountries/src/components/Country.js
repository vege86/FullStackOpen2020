import React from "react";

const Country = ({ country}) => {

    let languages = country.languages;

    return (
      <>
        <h1>{country.name}</h1>
        capital {country.capital} <br />
        population {country.population}
        <h3>languages</h3>
        <ul>
          {languages.map((language) => (
            <li key={language.iso639_1}>{language.name}</li>
          ))}
        </ul>
        <img style={{ width: "50px" }} src={country.flag} alt="country flag" />
      </>
    );
  
};

export default Country;
