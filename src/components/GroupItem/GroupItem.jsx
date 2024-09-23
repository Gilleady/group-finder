import React, { useState } from 'react';
import GroupName from '../GroupName/GroupName';
import PeopleList from '../PeopleList/PeopleList';
import Button from '../Button/Button';
import './GroupItem.css';

const GroupItem = ({ group, ...props }) => {
  const [people, setPeople] = useState(group.people);

  const addPerson = async () => {
    setPeople([...people, `Pessoa ${people.length + 1}`]);
    group.people = people;

    /* @TODO: IMPLEMENTAR MÉTODO PUT PARA ADICIONAR PESSOAS A GRUPOS EXISTENTES */
  }

  return (
    <div className="group-item" key={props.key}>
      <GroupName groupName={group.name} />
      <PeopleList people={people ? people : []} />
      <Button text="Adicionar pessoa" type='button' onClick={addPerson} />
    </div>
  );
};

export default GroupItem;