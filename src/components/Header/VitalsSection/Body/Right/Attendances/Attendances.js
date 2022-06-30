import React, { useState, useEffect } from 'react';
import AttendanceTable from './AttendanceTable';
import {GetToken} from '../../../../../TestToken';


let token = GetToken()
const UrlToken = token;


const AttendancesDisplay = () => {
    const [gateways, setGateways] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


    const fetchGateways = () => {
        fetch(`${UrlToken.URL}/attendance/`, {
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


    useEffect(() => {
        // let setInterval1 = setInterval(fetchGateways, 2000);
        fetchGateways();
    }, []);


    return (
        <div className="gateways-section">
            <h3>Attendance</h3>
            <div className="table-div surveillance-table">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Attendee</th>
                            <th>Event Name</th>
                            <th>Check-In Date</th>
                            <th>Check-In Time</th>
                            <th>Check-Out Date</th>
                            <th>Check-Out Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty ? (
                            gateways.map((attendee, index) => (
                                <AttendanceTable
                                    key={index}
                                    attendee={attendee}
                                    attendee_name={attendee.event}
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
        </div>
    )
}

export default AttendancesDisplay;
