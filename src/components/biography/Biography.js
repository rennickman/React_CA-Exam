import React from 'react';

import './biography.css';


const Biography = ({ person , id}) => {



    return (
        <div className="biography">
            <div className="biography_container">
                <div className={id % 2 === 0 ? "biography_row_image_last" : "biography_row_image_first"}>
                    <div className="biography_info_col">
                        <div className="biography_info_section">
                            <div className="biography_info_name">{person.name}</div>
                            <div className="biography_info_dates">{person.dates}</div>
                            <div className="biography_info_intro">{person.info[0]}...</div>
                            <button className="biography_button">Read More</button>
                        </div>
                    </div>

                    <div className="biography_image_col">
                        <div className="biography_image_container">
                            <img src={person.image} alt="Image of Legend" className='biography_image' />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Biography;

