import React from 'react';


const AttendeeTable = ({ attendee }) => {

    const formatDate = datetime => {
        if (datetime === null || datetime === undefined) {
            return ''
        } else {
            let [year, month, date_] = datetime.split('-');
            let date = date_ + '-' + month + '-' + year
            return date;
        }
    }

    const formatTime = datetime => {
        if (datetime === null || datetime === undefined) {
            return ''
        } else {
            let time = datetime.split('.')[0];
            return time;
        }
    }

    return (
        <tr>
            <td>{attendee.attendee_name}</td>
            <td>{attendee.tag_id}</td>
            <td>{attendee.event.event_name}</td>
        </tr>
    );
}


export default AttendeeTable;
