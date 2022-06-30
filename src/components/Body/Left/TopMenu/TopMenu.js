import React from 'react';
import '../../../../Styles/Header/header.css';
import Attendance from './Attendance';
import Attendees from './Attendees';
import Events from './Events';



const TopMenu = () => {

    return (
        <div className="topmenu">
            <Events />
            <Attendees />
            <Attendance />
        </div>
    )
}


export default TopMenu;

