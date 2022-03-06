import React, { useState } from 'react'; 

import './App.css';

import { famousPeopleDB } from './db';
import Navbar from './components/navbar/Navbar';
import Biography from './components/biography/Biography';



function App() {

    // People to be displayed
    const [people, setPeople] = useState([]);

    // Name being searched for
    const [name, setName] = useState("");


    // Show all people in database
    const showAll = () => {
        // Store entire database in state
        setPeople(famousPeopleDB);
    };


    // Show random person in database
    const showRandom = () => {
        // Create a random number
        const randomNumber = Math.floor((Math.random() * famousPeopleDB.length));
        // Filter array to find person at index matching random number
        const filteredArray = famousPeopleDB.filter((person, index) => index === randomNumber);
        // Store random person in state
        setPeople(filteredArray);
    };


    // Show all men or women in database
    const showGender = (gender) => {
        // Filter array to find all people matching selected sex
        const filteredArray = famousPeopleDB.filter(person => person.gender === gender);
        // Store all men or women in state
        setPeople(filteredArray);
    };



    // Show people with searched for name
    const showName = (name) => {
        // Filter array to find all people with matching names
        const filteredArray = famousPeopleDB.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));
        // Store all people with matching names in state
        setPeople(filteredArray);
    };


    
    return (
        <div className="app">
            <Navbar
                handleAll={showAll} handleRandom={showRandom} handleGender={showGender}
                name={name} setName={setName} handleSearch={showName}
            />

            {people.map((person, index) => (
                <Biography person={person} id={index + 1} />
            ))}
        </div>
    );
};



export default App;
