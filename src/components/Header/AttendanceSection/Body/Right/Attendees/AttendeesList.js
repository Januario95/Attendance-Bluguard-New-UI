import React, { useState, useEffect } from 'react';


const AttendeesList = ({ event }) => {
    console.log(event);
    const formatDateTime = datetime => {
        if (datetime === null || datetime === undefined) {
            return ''
        } else {
            datetime = datetime.split('T');
            let [year, month, date_] = datetime[0].split('-');
            let date = date_ + '-' + month + '-' + year
            let time = datetime[1].split('.')[0];
            return date + ' ' + time;
        }
    }


    useEffect(() => {
        //
    }, []);


    return (
        <tr>
            <td>{event.event_name}</td>
            <td>{formatDateTime(event.start_datetime)}</td>
            <td>{formatDateTime(event.end_datetime)}</td>
            <td>{event.event_location}</td>
            <td>{event.event_sublocation}</td>
        </tr>
    )
}

export default AttendeesList;
