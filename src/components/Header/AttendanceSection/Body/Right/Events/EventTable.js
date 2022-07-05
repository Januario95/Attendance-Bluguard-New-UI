import React, { useState, useEffect } from 'react';
import {GetToken} from '../../../../../TestToken';

let token = GetToken()
const UrlToken = token;


const EventTable = ({
    fetchEventsData, event_id, active_event, event_name,
    start_datetime, end_datetime, event_location, event_sublocation,
    showAtendees, popupLoginToggle
}) => {
    const [startStopText, setStartStopText] = useState('');
    const [textColor, setTextColor] = useState('green');
    const [isActiveTitle, setIsActiveTitle] = useState('');

    const setActiveEvent = () => {
        if (active_event === true) {
            setStartStopText('Start');
            setTextColor('green');
            setIsActiveTitle('true');
        } else {
            setStartStopText('Stop');
            setTextColor('red');
            setIsActiveTitle('false');
        }
    }

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
    const deleteEvent = event_id => {
        let confirm_ = window.confirm(`Are you sure want to delete attendances for the Event "${event_name}"?`, false);
        if (confirm_) {
            fetch(`${UrlToken.URL}/delete_all_attendance_by_event/${event_id}/`, {
                headers: {
                    'Authorization': `Token ${UrlToken.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // fetchEventsData();
                    // alert(`${event_name} was deleted successfully!`)
                })
                .catch(err => console.log(err));



            // fetch(`${UrlToken.URL}/delete_event/${event_id}/`, {
            //     headers: {
            //         'Authorization': `Token ${UrlToken.token}`
            //     }
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         fetchEventsData();
            //         alert(`${event_name} was deleted successfully!`)
            //     })
            //     .catch(err => console.log(err));
        } else {
            //
        }
    }

    const editEvent = (e) => {
        e.preventDefault();
        // popupLoginToggle(event_id);
    }

    const handleStartStop = text => {
        if (text === 'Start') {
            setStartStopText('Stop');
            setTextColor('red');
        } else {
            setStartStopText('Start');
            setTextColor('green');
        }

        fetch(`${UrlToken.URL}/set_event_active_inactive/${event_id}/${event_name}/`, {
                headers: {
                    'Authorization': `Token ${UrlToken.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(err => console.log(err));
    }


    useEffect(() => {
        setActiveEvent();
        // onClick={(e) => editEvent(e)}
        // onClick={(e) => deleteEvent(event_id)}
    }, []);


    return (
        <tr>
            <td>{event_name}</td>
            <td>{formatDateTime(start_datetime)}</td>
            <td>{formatDateTime(end_datetime)}</td>
            <td>{event_location}</td>
            <td>{event_sublocation}</td>
            <td className="attendees-detail" style={{
                width: "260px"
            }}>
                <a href="#">Edit</a>
                <a
                    href="#"
                    onClick={(e) => deleteEvent(event_id)}
                >Clear attendance</a>
                <a
                    href="#"
                    onClick={(e) => {handleStartStop(startStopText)}}
                    style={{
                        color: `${textColor}`
                    }}
                    title={isActiveTitle}
                >{startStopText}</a>
                <a
                    href="#"
                    id={event_name}
                    onClick={(e) => showAtendees(event_id)}
                >View List</a>
            </td>
        </tr>
    )
}

export default EventTable;
