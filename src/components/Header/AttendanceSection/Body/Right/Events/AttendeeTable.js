import React, { useState, useEffect } from 'react';


const AttendeesTable = ({ attendee, handleShowEvents }) => {
    // console.log(attendee.event_id)
    let attendance = {};
    try {
        attendance = attendee.attendance[0];
    } catch (err) {
        // console.log(err);
    }
    // if (attendee.attendance.length > 0) {
    //     attendance = attendee.attendance[0];
    // }
    // console.log(attendance);

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


    useEffect(() => {
        //
    }, []);


    return (
        <tr>
            <td>{attendee.attendee_name}</td>
            <td>{attendee.tag_id}</td>
            <td>{formatDate(attendance.check_in_date)}</td>
            <td>{formatTime(attendance.check_in_time)}</td>
            <td>{formatDate(attendance.check_out_date)}</td>
            <td>{formatTime(attendance.check_out_time)}</td>
            <td>
                <a
                    href="#"
                    onClick={() => handleShowEvents(attendee.attendee_id)}
                >View Events</a>
            </td>
        </tr>
    )
}

export default AttendeesTable;
