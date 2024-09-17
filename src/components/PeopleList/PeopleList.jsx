import React from 'react';
import PersonItem from '../PersonItem/PersonItem';

const PeopleList = ({ people }) => {
  return (
    <ul className="people-list">
      {people.map((person, index) => (
        <PersonItem key={index} person={person} />
      ))}
    </ul>
  );
};

export default PeopleList;