import React, { useEffect } from 'react';


const Attendance = ({ handleLinkClick, showAttendanceSection, setBackgroundColor }) => {

    useEffect(() => {
        setBackgroundColor();
    }, []);

    return (
        <div className="attendance-subsection subheader">
            <a
                href="#"
                className="attendance-link"
                onClick={(e) => handleLinkClick('attendance-link')}
            >Presence Monitoring</a>
        </div>
    )
}


export default Attendance;

