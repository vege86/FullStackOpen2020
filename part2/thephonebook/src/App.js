import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import personsService from "./services/persons";
import Notification from "./components/Notification";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsFiltered, setPersonsFiltered] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    personsService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
      setNotificationMessage(
        `Person '${returnedPerson.name}' was added`
      )
      setTimeout(() => {
        setNotificationMessage(null)
      }, 3000)
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handlesearchTextChange = (event) => {
    setSearchText(event.target.value);
    setPersonsFiltered(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const deletePersonOf = id => {
    const personToDelete = persons.find(person => person.id === id)

    personsService
      .remove(id)
      .then(
        setPersons(persons.filter(person => person.id !== id))
      )
      .catch(error => {
        alert(
          `the person '${personToDelete.name}' was already deleted from server`
        )
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handlesearchTextChange={handlesearchTextChange}
        searchText={searchText}
      />

      <h3>Add a new</h3>
      
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Notification message={notificationMessage} />

      <h3>Numbers</h3>
      <Persons 
        persons={searchText.length === 0 ? persons : personsFiltered} 
        deletePerson={deletePersonOf} 
      />
    </div>
  );
};

export default App;
