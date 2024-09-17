import React from 'react';
import Header from './components/Header/Header';
import CreateGroupButton from './components/CreateGroupButton/CreateGroupButton';
import GroupList from './components/GroupList/GroupList';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <CreateGroupButton />
      <GroupList />
    </div>
  );
}

export default App;