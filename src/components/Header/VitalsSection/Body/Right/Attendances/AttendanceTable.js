import React from 'react';


const AttendanceTable = ({ attendee }) => {
    let attendee_name = attendee.attendee.attendee_name;
    let event_name = attendee.attendee.event.event_name;

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
            <td>{attendee_name}</td>
            <td>{event_name}</td>
            <td>{formatDate(attendee.check_in_date)}</td>
            <td>{formatTime(attendee.check_in_time)}</td>
            <td>{formatDate(attendee.check_out_date)}</td>
            <td>{formatTime(attendee.check_out_time)}</td>
        </tr>
    );
}


export default AttendanceTable;
