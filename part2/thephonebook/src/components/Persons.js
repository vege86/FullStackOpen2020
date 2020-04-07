import React from "react";
import Person from "./Person";

const Persons = ({ persons, deletePerson }) => (
  <div>
    {persons.map(person => (
      <Person 
        key={person.name} 
        person={person}
        deletePerson={() => deletePerson(person.id)} 
      />
    ))}
  </div>
);

export default Persons;
