import React, { useState, useEffect } from 'react';


const EventTable = ({
    event_id, event_name, start_datetime,
    end_datetime, event_location, event_sublocation,
    showAtendees
}) => {
    const formatDateTime = datetime => {
        if (datetime === null || datetime === undefined) {
            return ''
        } else {
            datetime = datetime.split('T');
            // let date = datetime[0];
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
            <td>{event_name}</td>
            <td>{formatDateTime(start_datetime)}</td>
            <td>{formatDateTime(end_datetime)}</td>
            <td>{event_location}</td>
            <td>{event_sublocation}</td>
            <td>
                <button
                    className="active-link"
                    id={event_name}
                    onClick={(e) => showAtendees(event_id)}
                >View List</button>
            </td>
        </tr>
    )
}

export default EventTable;
