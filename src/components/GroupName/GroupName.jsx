import React from 'react';
import './GroupName.css';

const GroupName = ({ groupName }) => {
  return (
    <div className="group-name">
      {groupName}
    </div>
  );
};

export default GroupName;