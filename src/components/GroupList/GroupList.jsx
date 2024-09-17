import React from 'react';
import GroupName from '../GroupName/GroupName';
import PeopleList from '../PeopleList/PeopleList';
import RequestEntryButton from '../RequestEntryButton/RequestEntryButton';

const GroupList = () => {
  // Dados de exemplo:
  const groups = [
    { name: 'Grupo 1', people: ['Pessoa 1', 'Pessoa 2', 'Pessoa 3', 'Pessoa 4', 'Pessoa 5', 'Pessoa 6'] },
    { name: 'Grupo 2', people: ['Pessoa 1', 'Pessoa 2', 'Pessoa 3', 'Pessoa 4', 'Pessoa 5', 'Pessoa 6'] },
    { name: 'Grupo 3', people: ['Pessoa 1', 'Pessoa 2', 'Pessoa 3', 'Pessoa 4', 'Pessoa 5', 'Pessoa 6'] },
  ];

  return (
    <div className="group-list">
      {groups.map((group, index) => (
        <div className="group-item" key={index}>
          <GroupName groupName={group.name} />
          <PeopleList people={group.people} />
          <RequestEntryButton />
        </div>
      ))}
    </div>
  );
};

export default GroupList;