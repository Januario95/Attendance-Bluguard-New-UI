import React, { useState, useEffect } from 'react';
import GatewayTable from './GatewayTable';
import {GetToken} from '../../../../../TestToken';


let token = GetToken()
const UrlToken = token;


const GatewaysDisplay = () => {
    const [gateways, setGateways] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


    const fetchGateways = () => {
        fetch(`${UrlToken.URL}/bluguard37/gateways/`, {
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
            <h3>Gateways</h3>
            <div className="table-div surveillance-table">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Gateway Status</th>
                            <th>Gateway Location</th>
                            <th>Gateway Mac</th>
                            <th>Gateway Latitude</th>
                            <th>Gateway Longetiude</th>
                            <th>Gateway Serial_No</th>
                            <th>Last Transmitted Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty ? (
                            gateways.map((gateway, index) => (
                                <GatewayTable
                                    key={index}
                                    gateway={gateway}
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

export default GatewaysDisplay;
