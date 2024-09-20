import React from 'react';
import GroupItem from '../GroupItem/GroupItem';
import './GroupList.css';

const GroupList = ({ groups = [], ...props }) => {
  return (
    <div className="group-list">
      {groups.map((group, index) => (
        <GroupItem group={group} key={index} />
      ))}
    </div>
  );
};

export default GroupList;