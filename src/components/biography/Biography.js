import React, { useState } from 'react';

import './biography.css';


const Biography = ({ person , id}) => {

    // Toggle value for read more mode
    const [readMore, setReadMore] = useState(false);

    // Methods for toggling and closing read more mode
    const handleReadMore = () => setReadMore(!readMore);


    return (
        <div className="biography">
            <div className={readMore ? "biography_container_readmode" : "biography_container"}>
                {/* Columns are alternated for every second component rendered */}
                <div className={id % 2 === 0 ? "biography_row_image_last" : "biography_row_image_first"}>

                    {/* Column containing important info and the first paragraph when not in read more mode */}
                    <div className="biography_info_col">
                        <div className="biography_info_section">
                            <div className="biography_info_name">{person.name}</div>
                            <div className="biography_info_dates">{person.dates}</div>
                            <div 
                                className={readMore ? "biography_info_intro_hidden" : "biography_info_intro"}>{person.info[0]
                            }...</div>

                            {/* Read more mode toggle button */}
                            <button className="biography_button" onClick={handleReadMore}>
                                {readMore ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    </div>

                    {/* Column containing the legends photo */}
                    <div className="biography_image_col">
                        <div className="biography_image_container">
                            <img src={person.image} alt="Image of Legend" className='biography_image' />
                        </div>
                    </div>
                </div>

                {/* Paragraphs Section - not rendered unless in read more mode */}
                <div className="biography_read_section" >
                    {readMore && (person.info.map((paragraph) => (
                        <div className="biography_paragraph">{paragraph}</div>
                    )))}    
                </div>
                
            </div>
        </div>
    );
};

export default Biography;

