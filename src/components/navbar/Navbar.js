import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

import "./navbar.css";


const Navbar = ({ handleViewAll, handleRandomPerson, handleFilterBySex, name, setName, handleFilterByName }) => {

    // Helper function for Filtering by name
    const handleSearch = (e) => {
        e.preventDefault();
        handleFilterByName(name);
    };


    // State and methods for toggling and closing menu
    const [toggle, setToggle] = useState(false);

    const handleMenuToggle = () => setToggle(!toggle);
    const handleMenuClose = () => setToggle(false);
   

    return (
        <div className='navbar'>
            <div className="navbar_container container">

                {/* Logo Section */}
                <div className="navbar_logo" onClick={handleMenuClose}>
                    <MdFingerprint className="navbar_icon" />
                    LEGENDS
                </div>

                {/* Toggle Button */}
                <div className="navbar_toggle" onClick={handleMenuToggle}>
                    {toggle ? <FaTimes className='navbar_toggle_icon1' /> : <FaBars className='navbar_toggle_icon2' />}
                </div>

                {/** 
                
                <div className="navbar_search">
                    <form>
                        <input
                            className='navbar_input' type="text" placeholder='Search for Name' value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <button type='submit' style={{ display: "none" }} onClick={handleSearch}>Search</button>
                    </form>
                </div>
                */}
            

                {/* Filtering Options */}
                <ul className={toggle ? "navbar_options active" : "navbar_options"}>
                    <li className="navbar_option_container" onClick={handleMenuClose}>
                        <div className="navbar_option" onClick={handleViewAll}>
                            All Legends
                        </div>
                    </li>

                    <li className="navbar_option_container" onClick={handleMenuClose}>
                        <div className="navbar_option" onClick={() => handleFilterBySex("male")}>
                            Men
                        </div>
                    </li>

                    <li className="navbar_option_container" onClick={handleMenuClose}>
                        <div className="navbar_option" onClick={() => handleFilterBySex("female")}>
                           Women
                        </div>    
                    </li>

                    <li className="navbar_random_option" onClick={handleMenuClose}>
                        <div className="random_option_container">
                            <button className="random_option_button" onClick={handleRandomPerson}>
                                Random
                            </button>  
                        </div>
                    </li>
                </ul>
                       
            </div>
        </div>
    );
};

export default Navbar;