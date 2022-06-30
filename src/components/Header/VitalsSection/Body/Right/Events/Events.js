import React, { useState, useEffect } from 'react';
import EventTable from './EventTable';
import AttendeeTable from './AttendeeTable';
import {GetToken} from '../../../../../TestToken';
import close_image from '../../../../../../Static/close_red.png';

let token = GetToken()
const UrlToken = token;

const EventPage = () => {
    const [eventData, setEventData] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [attendees, setAttendees] = useState([]);
    const [attendeeIsEmpty, setAttendeeIsEmpty] = useState(false);
    const [eventName, setEventName] = useState('No Event Selected');
    const [eventId, setEventId] = useState(null);

    const [eventNameUpdate, setEventNameUpdate] = useState('');
    const [eventStartUpdate, setEventStartUpdate] = useState('');
    const [eventEndUpdate, setEventEndUpdate] = useState('');
    const [eventLocationUpdate, setEventLocationUpdate] = useState('');
    const [eventSubLocationUpdate, setEventSubLocationUpdate] = useState('');

    const fetchEventsData = () => {
        fetch(`${UrlToken.URL}/events/`, {
            headers: {
                'Authorization': `Token ${UrlToken.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setEventData(data);
                if (data.length > 0) {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                }
            })
            .catch(err => console.log(err));
    }

    const TimeFormating = time => {
        if (time === null) {
            return '';
        } else {
            let t = time.replace("P0DT", "");
            t = t.replace("H", ":");
            t = t.replace("M", ":");
            t = t.replace("S", "");
            return t;
        }
    }

    const deviceStatusFunc = (deviceStatus, incorrectDataFlag) => {
        if (deviceStatus === 'OFFLINE') {
            return 'NA';
        }
        if (incorrectDataFlag === 1) {
            return "Bad";
        } else if (incorrectDataFlag === 0) {
            return "Good";
        }
    }

    const fetchEventName = event_id => {
        fetch(`${UrlToken.URL}/events/${event_id}/`, {
            headers: {
                'Authorization': `Token ${UrlToken.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setEventName(data.event_name + ' - Attendees');
            })
            .catch(err => console.log(err));
    }

    const consoleEventId = () => {
        // console.log(eventId);
        showAtendees(2);
    }

    const showAtendees = event_id => {
        // let links = document.querySelectorAll('.active-link');
        // link.classList.add('active-event');

        setEventId(event_id);
        // console.log(event_id);

        if (event_id === null) {

        } else {
            fetch(`${UrlToken.URL}/get_event_attendee/${event_id}/`, {
                headers: {
                    'Authorization': `Token ${UrlToken.token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data.attendees[0].event);
                    setAttendeeIsEmpty(true);
                    setAttendees(data.attendees);
                    fetchEventName(data.attendees[0].event);
                })
                .catch(err => console.log(err));
        }
    }

    const refreshPage = e => {
        let btn = document.querySelector('.btn-refresh');
        let spinner = document.querySelector('.spinner');

        btn.classList.add('hide-tag');
        spinner.classList.add('loading');
        spinner.classList.add('show-tag');

        setTimeout(() => {
            btn.classList.remove('hide-tag');
            spinner.classList.remove('loading');
            spinner.classList.remove('show-tag');

            showAtendees(eventId);
        }, 500);

    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleUpdateEvent = (e) => {
        let data = {
            'event_name': eventNameUpdate,
            'event_datetime': eventStartUpdate,
            'end_datetime': eventEndUpdate,
            'event_location': eventLocationUpdate,
            'event_sublocation': eventSubLocationUpdate
        }
        console.log(data);
    }

    const closeModel = () => {
        const popup = document.querySelector('.form-create-tank');
        popup.classList.toggle('active');
    }

    const fetchEventById = event_id => {
        fetch(`${UrlToken.URL}/events/${event_id}/`, {
            headers: {
                'Authorization': `Token ${UrlToken.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setEventNameUpdate(data.event_name);
                setEventStartUpdate(data.start_datetime);
                setEventEndUpdate(data.end_datetime);
                setEventLocationUpdate(data.event_location);
                setEventSubLocationUpdate(data.event_sublocation);
            })
            .catch(err => console.log(err));
    }

    const popupLoginToggle = (id, allowPopup) => {
        const popup = document.querySelector('.form-create-tank');
        popup.classList.toggle('active');
        fetchEventById(id);
    }

    useEffect(() => {
        fetchEventsData();
        let eventsubheader = document.querySelector('.events');
        eventsubheader.classList.add('active-subheader');
        let setInterval1 = setInterval(fetchEventsData, 1000);
    }, []);

    return (
        <div className="vital-page">
            <h3>Events</h3>
            <div className="table-div events-table">
                <div className="refresh-btn">
                    <button
                        className="btn-refresh"
                        onClick={(e) => refreshPage(e)}
                    >Refresh</button>
                </div>

                <form
                    className="form-create-tank"
                    onSubmit={handleSubmit}
                >
                    <a className="close-form" onClick={closeModel}>
                        <img src={close_image} />
                    </a>
                    <div className="event-update-fields">
                        <input
                            type="text"
                            value={eventNameUpdate}
                            placeholder="Event name"
                        />
                        <input
                            type="text"
                            value={eventStartUpdate}
                            placeholder="Event start datetime"
                        />
                        <input
                            type="text"
                            value={eventEndUpdate}
                            placeholder="Event end datetime"
                        />
                        <input
                            type="text"
                            value={eventLocationUpdate}
                            placeholder="Event location"
                        />
                        <input
                            type="text"
                            value={eventSubLocationUpdate}
                            placeholder="Event sublocation"
                        />
                    </div>
                    <button
                        className="add-subproject"
                        onClick={(e) => handleUpdateEvent(e)}
                    >Add SubProject</button>
                </form>

                <div className="spinner"></div>
                <table className="styled-table" id="table-events">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Location</th>
                            <th>Sub Location</th>
                            <th>Attendees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty ?
                            eventData.map((event, index) => (
                                <EventTable
                                    key={event.id}
                                    fetchEventsData={fetchEventsData}
                                    event_id={event.id}
                                    event_name={event.event_name}
                                    start_datetime={event.start_datetime}
                                    end_datetime={event.end_datetime}
                                    event_location={event.event_location}
                                    event_sublocation={event.event_sublocation}
                                    showAtendees={showAtendees}
                                    popupLoginToggle={popupLoginToggle}
                                />
                            )) : <tr className="no-data">
                                    <td colSpan="11">No data available</td>
                                </tr>
                        }
                    </tbody>
                </table>

                <div className="attendees-div">
                    <h3>{eventName}</h3>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Attendee Name</th>
                                <th>Tag ID</th>
                                <th>Check-In Date</th>
                                <th>Check-In Time</th>
                                <th>Check-Out Date</th>
                                <th>Check-Out Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendeeIsEmpty ?
                                attendees.map((attendee, index) => (
                                    <AttendeeTable
                                        key={attendee.id}
                                        attendee={attendee}
                                    />
                                )) : <tr className="no-data">
                                        <td colSpan="11">No data available</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EventPage;
