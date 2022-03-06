import React, { useState } from 'react';

import './App.css';
import Biography from './components/biography/Biography';
import Navbar from './components/navbar/Navbar';
import { famousPeopleDB } from './db';



function App() {

    // Store filtered DB in state
    const [filteredPeople, setFilteredPeople] = useState([]);

    // Store name being seached for in state
    const [name, setName] = useState("");


    // Show all people in database
    const handleViewAll = () => {
        // Store entire database in state
        setFilteredPeople(famousPeopleDB);
    };


    // Show random person in database
    const handleRandomPerson = () => {
        // Create a random number
        const randomNumber = Math.floor((Math.random() * famousPeopleDB.length));
        // Filter array to find person at index matching random number
        const filteredArray = famousPeopleDB.filter((person, index) => index === randomNumber);
        // Store random person in state
        setFilteredPeople(filteredArray);
    };


    // Show all men or women in database
    const handleFilterBySex = (sex) => {
        // Filter array to find all people matching selected sex
        const filteredArray = famousPeopleDB.filter(person => person.sex === sex);
        // Store all men or women in state
        setFilteredPeople(filteredArray);
    };



    // Show people with searched for name
    const handleFilterByName = (nameToSearch) => {
        // Filter array to find all people with matching names
        const filteredArray = famousPeopleDB.filter(person => person.name.toLowerCase().includes(nameToSearch.toLowerCase()));
        // Store all people with matching names in state
        setFilteredPeople(filteredArray);
    };





    return (
        <div className="app">
            <Navbar 
                handleViewAll={handleViewAll} handleRandomPerson={handleRandomPerson} handleFilterBySex={handleFilterBySex}
                name={name} setName={setName} handleFilterByName={handleFilterByName}
            />

            {filteredPeople.map((person) => (
                <Biography person={person} />
            ))}
        </div>
    );
};



export default App;
