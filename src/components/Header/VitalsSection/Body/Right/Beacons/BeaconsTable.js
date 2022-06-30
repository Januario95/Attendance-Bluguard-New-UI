import React from 'react';


const AttendanceTable = ({ beacon }) => {
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
            <td>{beacon.type}</td>
            <td>{beacon.serial_number}</td>
            <td>{beacon.placement_location}</td>
            <td>{beacon.key}</td>
            <td>
                <ol>
                    {beacon.event.map((event, index) => {
                        return (
                            <li key={index}>{event.event_name}</li>
                        )
                    })}
                </ol>
            </td>
            <td>{beacon.last_battery_date}</td>
        </tr>
    );
}


export default AttendanceTable;
