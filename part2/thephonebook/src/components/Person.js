import React from "react";

const Person = ({ person, deletePerson }) => {
  return (
    <>
      <p>
        {person.name} {person.number}
        <button
          onClick={(e) =>
            window.confirm("Are you sure you wish to clear the page?") &&
            deletePerson(person.id)
          }
        >
          delete
        </button>
      </p>
    </>
  );
};

export default Person;
