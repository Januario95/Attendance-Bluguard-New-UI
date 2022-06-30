import React, { useState, useEffect } from 'react';


const Vitals = ({ handleLinkClick, showVitalsSection }) => {

    useEffect(() => {

    }, []);

    return (
        <div className="vitals-subsection subheader">
            <a
                href="#"
                className="vitals-link"
                onClick={(e) => handleLinkClick('vitals-link')}
            >Vital Survellance</a>
        </div>
    )
}


export default Vitals;

