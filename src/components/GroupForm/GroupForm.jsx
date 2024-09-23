import React, { useEffect, useState } from "react"
import GroupList from "../GroupList/GroupList";
import Button from "../Button/Button";
import './GroupForm.css'

const GroupForm = () => {
    const [groups, setGroups] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(
        () => {
            getGroups();
        }, [])

    const createGroup = async () => {
        const newGroup = {
            name,
            description,
            people: [],
        };

        const response = await fetch('http://localhost:3005/grupos', {
            method: 'POST',
            headers: new Headers({'Content-type':'application/json'}),
            body: JSON.stringify(newGroup)
        })

        const data = await response.json();
        alert(`Grupo: ${data.name} cadastrado com sucesso`);

        getGroups();
        setName("");
        setDescription("");
    }

    const getGroups = async () => {
        const response = await fetch('http://localhost:3005/grupos');

        console.log(response);

        const data = await response.json();
        setGroups(data);
    }

    /* getGroups(); */

    return (
        <form className="create-group-form" onSubmit={createGroup}>
            <input 
                id="groupName"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Group Name"
                />
            <input
                id="groupDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Group Description"
            />
            <Button text="Criar Grupo" type='submit' onClick={() => false} />
            <GroupList groups={groups} />
        </form>
    )
}

export default GroupForm