import React, { useState, useEffect } from 'react';
import AttendeeTable from './AttendeeTable';
import {GetToken} from '../../../../../TestToken';


let token = GetToken()
const UrlToken = token;


const AttendeesDisplay = () => {
    const [gateways, setGateways] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


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


    useEffect(() => {
        // let setInterval1 = setInterval(fetchGateways, 2000);
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

export default AttendeesDisplay;
