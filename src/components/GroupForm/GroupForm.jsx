import React, { useState } from "react"
import GroupList from "../GroupList/GroupList";
import Button from "../Button/Button";
import './GroupForm.css'

const GroupForm = () => {
    const [groups, setGroups] = useState([
        { name: 'Grupo 1', people: ['Pessoa 1', 'Pessoa 2', 'Pessoa 3', 'Pessoa 4', 'Pessoa 5', 'Pessoa 6'] },
        { name: 'Grupo 2', people: ['Pessoa 1', 'Pessoa 2', 'Pessoa 3', 'Pessoa 4', 'Pessoa 5', 'Pessoa 6'] },
        { name: 'Grupo 3', people: ['Pessoa 1', 'Pessoa 2', 'Pessoa 3', 'Pessoa 4', 'Pessoa 5', 'Pessoa 6'] },
    ]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function createGroup() {
        const newGroup = {
            name,
            description,
            people: [],
        };
        setGroups([...groups, newGroup]);
        setName("");
        setDescription("");
    }

    return (
        <form className="create-group-form">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Group Name"
            />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Group Description"
            />
            <Button text="Criar Grupo" onClick={createGroup} />
            <GroupList groups={groups} />
        </form>
    )
}

export default GroupForm