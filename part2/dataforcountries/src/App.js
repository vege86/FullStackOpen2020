import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [foundCountries, setFoundCountries] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);

  const handlesearchTextChange = (event) => {
    setSearchText(event.target.value);
    setFoundCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Filter
        handlesearchTextChange={handlesearchTextChange}
        searchText={searchText}
      />
      <Countries foundCountries={foundCountries} />
    </div>
  );
};

export default App;
