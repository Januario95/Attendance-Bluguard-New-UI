import React, { useState, useEffect } from 'react';


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


    useEffect(() => {
        //
    }, []);


    return (
        <tr>
            <td>{attendee.attendee_name}</td>
            <td>{attendee.tag_id}</td>
            {/*<td>{formatDate(attendee.check_in_date)}</td>
            <td>{formatTime(attendee.check_in_time)}</td>
            <td>{formatDate(attendee.check_out_date)}</td>
            <td>{formatTime(attendee.check_out_time)}</td>*/}
        </tr>
    )
}

export default AttendeeTable;
