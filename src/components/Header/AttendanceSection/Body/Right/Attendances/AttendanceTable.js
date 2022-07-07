import React from 'react';
import {GetToken} from '../../../../../TestToken';


let token = GetToken()
const UrlToken = token;


const AttendanceTable = ({ attendee, fetchGateways }) => {
    // console.log(attendee);
    let attendee_name = attendee.attendee; // .attendee_name;
    let event_name = attendee.event_name;

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

    const deleteAttendance = e => {
        fetch(`${UrlToken.URL}/attendance/${e}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${UrlToken.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.text())
            .then(data => {
                fetchGateways();
                //console.log(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <tr>
            <td>{attendee_name}</td>
            <td>{event_name}</td>
            <td>{formatDate(attendee.check_in_date)}</td>
            <td>{formatTime(attendee.check_in_time)}</td>
            <td>{formatDate(attendee.check_out_date)}</td>
            <td>{formatTime(attendee.check_out_time)}</td>
            <td>
                <a
                    href="#"
                    onClick={(e) => deleteAttendance(attendee.id)}
                >Delete</a>
            </td>
        </tr>
    );
}


export default AttendanceTable;
