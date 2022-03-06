import React from 'react';

import './biography.css';


const Biography = ({ person }) => {


    return (
        <div className="biography">
            <img className='bioImage' src={person.image} alt="" />
            <h2>{person.name}</h2>
            <h3>{person.dates}</h3>
            {person.info.map(paragraph => (
                <p>{paragraph}</p>
            ))}
        </div>
    );
};

export default Biography;

