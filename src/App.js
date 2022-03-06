import React, { useState, useEffect } from 'react'; 

import './App.css';

import { famousPeopleDB } from './db';
import Navbar from './components/navbar/Navbar';
import Biography from './components/biography/Biography';



function App() {

    // Mock Database of Historical Figures
    const [db, setDb] = useState([]);
    // People to be displayed
    const [people, setPeople] = useState([]);
    // Name being searched for
    const [name, setName] = useState("");


    // Show all people in database
    const showAll = () => {
        // Store entire database in state
        setPeople(db);
    };


    // Show random person in database
    const showRandom = () => {
        // Check if there is only one person being displayed
        if (people.length === 1) {
            // Remove that person from Array
            const removedArray = db.filter(person => person.name !== people[0].name);
            // Create a random number
            const randomNumber = Math.floor((Math.random() * (db.length - 1)));
            // Filter array to find person at index matching random number
            const filteredArray = removedArray.filter((person, index) => index === randomNumber);
            // Store random person in state
            setPeople(filteredArray);

        } else {
            // Create a random number
            const randomNumber = Math.floor((Math.random() * db.length));
            // Filter array to find person at index matching random number
            const filteredArray = db.filter((person, index) => index === randomNumber);
            // Store random person in state
            setPeople(filteredArray);
        }
    };


    // Show all men or women in database
    const showGender = (gender) => {
        // Filter array to find all people matching selected sex
        const filteredArray = db.filter(person => person.gender === gender);
        // Store all men or women in state
        setPeople(filteredArray);
    };



    // Show people with searched for name
    const showName = (name) => {
        // Filter array to find all people with matching names
        const filteredArray = db.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));
        // Store all people with matching names in state
        setPeople(filteredArray);
    };


    // Mock API call to store Mock Database in state when app is first rendered
    useEffect(() => {
        setDb(famousPeopleDB);
    }, []);

    
    
    return (
        <div className="app">
            {/* Navbar */}
            <Navbar
                handleAll={showAll} handleRandom={showRandom} handleGender={showGender}
                name={name} setName={setName} handleSearch={showName}
            />

            {/* Map through array of people to display their biographies */}
            {people.map((person, index) => (
                    <Biography person={person} id={index + 1} />
            ))}
        </div>
    );
};



export default App;
