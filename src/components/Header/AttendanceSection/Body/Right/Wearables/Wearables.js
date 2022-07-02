import React, { useState, useEffect } from 'react';
import WearableTable from './WearableTable';
import {GetToken} from '../../../../../TestToken';

let token = GetToken()
const UrlToken = token;


const WearablePage = () => {
    const [deviceData, setDeviceData] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


    const fetchDeviceDate = () => {
        fetch(`${UrlToken.URL}/bluguard37/alldevices/`, {
            headers: {
                'Authorization': `Token ${UrlToken.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setDeviceData(data);
                if (data.length > 0) {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                }
            })
            .catch(err => console.log(err));
    }

    const TimeFormating = time => {
        if (time === null || time === undefined) {
            return '';
        } else {
            let t = time.replace("P0DT", "");
            t = t.replace("H", ":");
            t = t.replace("M", ":");
            t = t.replace("S", "");
            return t;
        }
    }

    const deviceStatusFunc = (deviceStatus, incorrectDataFlag, temp) => {
        if (deviceStatus === 'OFFLINE') {
            return 'NA';
        }
        if (incorrectDataFlag === 1) {
            // console.log(temp);
            return "Good";
        } else if (incorrectDataFlag === 0) { // && temp !== 0) {
            return "Bad";
        }
    }

    useEffect(() => {
        fetchDeviceDate();
        let setInterval1 = setInterval(fetchDeviceDate, 1000);
    }, []);

    return (
        <div className="vital-page">
            <h3>Wearables</h3>
            <div className="table-div table-scroll">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Device_Status</th>
                            <th>Temp</th>
                            <th>O2</th>
                            <th>Bat</th>
                            <th>HR</th>
                            <th>Quality</th>
                            <th>Last Read Date</th>
                            <th>Last Read Time</th>
                            <th>Device_Tag</th>
                            <th>Device_Mac</th>
                            <th>Device Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty ?
                            deviceData.map((device, index) => (
                                <WearableTable
                                    key={index}
                                    deviceStatus={device.device_status}
                                    temp={device.device_temp}
                                    oxygen={device.device_o2}
                                    batLevel={device.device_bat}
                                    heartRate={device.device_hr}
                                    quality={deviceStatusFunc(device.device_status, device.incorrect_data_flag, device.device_temp)}
                                    lastReadDate={device.last_read_date}
                                    lastReadtime={device.last_read_time}
                                    deviceTag={device.device_tag}
                                    deviceMac={device.device_mac}
                                    deviceAssign={device.device_assignment}
                                />
                            )) : <tr className="no-data">
                                    <td colSpan="11">No data available</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WearablePage;
