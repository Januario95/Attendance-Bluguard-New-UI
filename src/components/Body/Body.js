import React from 'react';
import '../../Styles/Body/body.css';
import RightBody from './Right/RightBody';
import LeftBody from './Left/LeftBody';



const Body = () => {

    return (
        <div className="body-section">
            <LeftBody />
            <RightBody />
        </div>
    )
}


export default Body;
