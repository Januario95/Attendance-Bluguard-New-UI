import React, { useState, useEffect } from 'react';


const Quanrantine = ({ handleLinkClick }) => {


    useEffect(() => {

    }, []);

    return (
        <div className="quanrantine-subsection subheader">
            <a
                href="#"
                className="quanrantine-link"
                onClick={(e) => handleLinkClick('quanrantine-link')}
            >Quanrantine Enforcement</a>
        </div>
    )
}


export default Quanrantine;

