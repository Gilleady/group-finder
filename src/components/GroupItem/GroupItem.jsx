import React, { useState } from 'react';
import GroupName from '../GroupName/GroupName';
import PeopleList from '../PeopleList/PeopleList';
import Button from '../Button/Button';
import './GroupItem.css';

const GroupItem = ({ group, ...props }) => {
  const [people, setPeople] = useState(group.people);

  function addPerson() {
    setPeople([...people, `Pessoa ${people.length + 1}`]);
    group.people = people;
  }

  return (
    <div className="group-item" key={props.key}>
      <GroupName groupName={group.name} />
      <PeopleList people={people ? people : []} />
      <Button text="Adicionar pessoa" onClick={addPerson} />
    </div>
  );
};

export default GroupItem;