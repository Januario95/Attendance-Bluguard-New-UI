import React from 'react';
import Attendance from './Attendance';
import Attendees from './Attendees';
import Events from './Events';
import Subtitle from './Subtitle';



const TopMenu = () => {

    return (
        <div className="topmenu">
            <Subtitle />
            <Events />
            <Attendees />
            <Attendance />
        </div>
    )
}


export default TopMenu;

