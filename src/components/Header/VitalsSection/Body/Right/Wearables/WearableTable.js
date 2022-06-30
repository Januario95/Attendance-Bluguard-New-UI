import React from 'react';

const WearableTable = ({
    deviceStatus, temp, oxygen, batLevel,
    heartRate, quality, lastReadDate,
    lastReadtime, deviceTag, deviceMac,
    deviceAssign
}) => {
    lastReadtime = lastReadtime.split('.')[0];
    let color;
    if (deviceStatus === 'ONLINE') {
        color = "green";
    } else {
        color = "red";
    }

    return (
        <tr>
            <td style={{
                color: `${color}`
            }}>{deviceStatus}</td>
            <td>{temp}</td>
            <td>{oxygen}</td>
            <td>{batLevel}</td>
            <td>{heartRate}</td>
            <td>{quality}</td>
            <td>{lastReadDate}</td>
            <td>{lastReadtime}</td>
            <td>{deviceTag}</td>
            <td>{deviceMac}</td>
            <td>{deviceAssign}</td>
        </tr>
    )
}

export default WearableTable;
