import React, { useState, useEffect } from 'react';
import {GetToken} from '../../../../../TestToken';

let token = GetToken()
const UrlToken = token;


const EventTable = ({ alert }) => {
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

    const editEvent = (e) => {
        e.preventDefault();
        // popupLoginToggle(event_id);
    }


    useEffect(() => {
        // onClick={(e) => editEvent(e)}
        // onClick={(e) => deleteEvent(event_id)}
    }, []);


    return (
        <tr>
            <td>{alert.alert_reading}</td>
            <td>{formatDate(alert.alert_date)}</td>
            <td>{formatTime(alert.alert_time)}</td>
            <td>{alert.alert_code.alert_description}</td>
            <td>{alert.device_id.device_mac}</td>
        </tr>
    )
}

export default EventTable;
