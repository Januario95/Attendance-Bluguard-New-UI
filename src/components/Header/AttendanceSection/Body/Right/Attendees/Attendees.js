import React, { useState, useEffect } from 'react';
import AttendeeTable from './AttendeeTable';
import AttendeesList from './AttendeesList';
import {GetToken} from '../../../../../TestToken';


let token = GetToken()
const UrlToken = token;



const AttendeesDisplay = () => {
    const [gateways, setGateways] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isEventAttendees, setIsEventAttendees] = useState(false);
    const [eventAttendees, setEventAttendees] = useState([]);
    const [activeAttendee, setActiveAttendee] = useState('');

    const fetchGateways = () => {
        fetch(`${UrlToken.URL}/attendee/`, {
            headers: {
                'Authorization': `Token ${UrlToken.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setGateways(data);
                if (data.length > 0) {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                }
            })
            .catch(err => console.log(err));
    }

    const handleShowEvents = (attendee_id, attendee_name) => {
        fetch(`${UrlToken.URL}/get_event_by_attendee_id/${attendee_id}/`, {
            headers: {
                'Authorization': `Token ${UrlToken.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data); // .events);
                setIsEventAttendees(true);
                setEventAttendees(data.events);
                setActiveAttendee(attendee_name);
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        let setInterval1 = setInterval(fetchGateways, 2000);
        fetchGateways();
    }, []);


    return (
        <div className="gateways-section">
            <h3>Attendees</h3>
            <div className="table-div surveillance-table">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Attendee</th>
                            <th>Tag ID</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty ? (
                            gateways.map((attendee, index) => (
                                <AttendeeTable
                                    key={index}
                                    attendee={attendee}
                                    attendee_name={attendee.event}
                                    handleShowEvents={handleShowEvents}
                                />
                            ))
                            ) : (
                                <tr className="no-data">
                                    <td colSpan="6">No data available</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {isEventAttendees ? (
                <div className="attendees-div">
                    <h5>Events for {activeAttendee}</h5>
                    <table className="styled-table" id="table-events">
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Location</th>
                                <th>Sub Location</th>
                            </tr>
                        </thead>
                        <tbody>
                                {eventAttendees.length > 0 ? (
                                    eventAttendees.map((event, index) => (
                                        <AttendeesList
                                            key={event.id}
                                            event={event}
                                        />
                                    ))
                                ) : (
                                    <tr className="no-data">
                                        <td colSpan="6">No Events scheduled</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            ) : ''}
        </div>
    )
}

export default AttendeesDisplay;
