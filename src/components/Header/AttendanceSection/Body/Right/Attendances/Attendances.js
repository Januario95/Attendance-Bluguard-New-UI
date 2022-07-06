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

            fetch(`${UrlToken.URL}/delete_all_attendance/`, {
                headers: {
                    'Authorization': `Token ${UrlToken.token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                })
                .catch(err => console.log(err));
        }, 500);

    }


    useEffect(() => {
        let setInterval1 = setInterval(fetchGateways, 2000);
        fetchGateways();
    }, []);


    return (
        <div className="gateways-section">
            <h3>Attendance</h3>
            <div className="refresh-btn">
                <button
                    style={{
                        width: "115px"
                    }}
                    className="btn-refresh"
                    onClick={(e) => refreshPage(e)}
                >Clear Attendance</button>
            </div>
            <div className="spinner"></div>
            <div className="table-div surveillance-table table-scroll">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Attendee</th>
                            <th>Event Name</th>
                            <th>Check-In Date</th>
                            <th>Check-In Time</th>
                            <th>Check-Out Date</th>
                            <th>Check-Out Time</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty ? (
                            gateways.map((attendee, index) => (
                                <AttendanceTable
                                    key={index}
                                    attendee={attendee}
                                    attendee_name={attendee.event}
                                    fetchGateways={fetchGateways}
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
