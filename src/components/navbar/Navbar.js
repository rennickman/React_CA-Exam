import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

import "./navbar.css";


const Navbar = ({ handleAll, handleRandom, handleGender, name, setName, handleSearch }) => {


    // Helper method to stop refresh from hidden submit button
    const handleButton = (e) => {
        e.preventDefault();
        handleSearch(name);
        handleClose();
    };


    // Toggle value for opening and closing menu
    const [toggle, setToggle] = useState(false);

    // Methods for toggling and closing menu
    const handleToggle = () => setToggle(!toggle);
    const handleClose = () => setToggle(false);
   

    
    return (
        <div className='navbar'>
            <div className="navbar_container container">

                {/* Logo Section */}
                <div className="navbar_logo" onClick={handleClose}>
                    <MdFingerprint className="navbar_icon" />
                    LEGENDS
                </div>

                {/* Menu Toggle Icons */}
                <div className="navbar_toggle" onClick={handleToggle}>
                    {toggle ? <FaTimes className='navbar_toggle_icon1' /> : <FaBars className='navbar_toggle_icon2' />}
                </div>

                
                <ul className={toggle ? "navbar_options active" : "navbar_options"}>
                    {/* Search Bar */}
                    <li className='navbar_search_container'>
                        <form>
                            <input
                                className='navbar_input' type="text" placeholder='Search by Name' value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <button type='submit' style={{ display: "none" }} onClick={handleButton}></button>
                        </form>
                    </li>

                    {/* Show All Option */}
                    <li className="navbar_option_container" onClick={handleClose}>
                        <div className="navbar_option" onClick={handleAll}>
                            All
                        </div>
                    </li>

                    {/* Filter for Men Option */}
                    <li className="navbar_option_container" onClick={handleClose}>
                        <div className="navbar_option" onClick={() => handleGender("male")}>
                            Men
                        </div>
                    </li>

                    {/* Filter for Women Option */}
                    <li className="navbar_option_container" onClick={handleClose}>
                        <div className="navbar_option" onClick={() => handleGender("female")}>
                           Women
                        </div>    
                    </li>

                    {/* Random Legend Button */}
                    <li className="navbar_random_option" onClick={handleClose}>
                        <div className="random_option_container">
                            <button className="random_option_button" onClick={handleRandom}>
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