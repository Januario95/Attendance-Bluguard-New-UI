import React, { useState, useEffect } from 'react';
import '../../../../Styles/Body/event_attendance_attendee.css';
import GatewayTable from './GatewayTable';
import {GetToken} from '../../../TestToken';


let token = GetToken()
const UrlToken = token;


const Gateways = () => {
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
        let setInterval1 = setInterval(fetchGateways, 2000);
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
                            gateways.map((attendace, index) => (
                                <GatewayTable
                                    key={index}
                                    attendace={attendace}
                                    attendee_name={attendace.event}
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


    // return (
    //     <div className="gateways-section">
    //         <h3>Gateways</h3>
    //         <div className="table-div surveillance-table">
    //             <table className="styled-table">
    //                 <thead>
    //                     <tr>
    //                         <th>Gateway Status</th>
    //                         <th>Gateway Location</th>
    //                         <th>Gateway Mac</th>
    //                         <th>Gateway Serial_No</th>
    //                         <th>Last Transmitted Time</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {isEmpty ? (
    //                         gateways.map((gateway, index) => (
    //                             <GatewayTable
    //                                 key={index}
    //                                 Gateway_Status={gateway.Gateway_Status}
    //                                 Gateway_Location={gateway.Gateway_Location}
    //                                 Gateway_Mac={gateway.Gateway_Mac}
    //                                 Gateway_Serial_No={gateway.Gateway_Serial_No}
    //                                 Last_Updated_Time={gateway.Last_Updated_Time}
    //                             />
    //                         ))
    //                         ) : (
    //                             <tr className="no-data">
    //                                 <td colSpan="6">No data available</td>
    //                             </tr>
    //                         )
    //                     }
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // )
}

export default Gateways;
