import React from 'react';
import '../../../Styles/Header/header.css';
// import EventPage from './Events';
import EventPage from './Events/Events';
import Gateways from './Gateways/Gateways';


const RightBody = () => {

    return (
        <div className="rightbody body-part">
            <EventPage />
            {/* <Gateways /> */}
        </div>
    )
}


export default RightBody;

