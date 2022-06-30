import React from 'react';


const GatewayTable = ({ attendace }) => {
    // console.log(attendace);

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
            <td>{attendace.attendee_name}</td>
            <td>{attendace.event}</td>
            <td>{formatDate(attendace.check_in_date)}</td>
            <td>{formatTime(attendace.check_in_time)}</td>
            <td>{formatDate(attendace.check_out_date)}</td>
            <td>{formatTime(attendace.check_out_time)}</td>
        </tr>
    );
}


export default GatewayTable;
