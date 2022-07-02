import React from 'react';


const GatewayTable = ({ gateway }) => {
    // let color;
    // if (gateway.gateway_status === 'ONLINE') {
    //     color = 'green';
    // } else if (gateway.gateway_status === 'OFFLINE')  {
    //     color = 'red;'
    // }
    let color;
    if (gateway.gateway_status === 'ONLINE') {
        color = "green";
    } else {
        color = "red";
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

    return (
        <tr>
            <td style={{
                color: `${color}`
            }}>{gateway.gateway_status}</td>
            <td>{gateway.gateway_location}</td>
            <td>{gateway.gateway_mac}</td>
            <td>{gateway.gateway_latitude}</td>
            <td>{gateway.gateway_longitude}</td>
            <td>{gateway.gateway_serial_no}</td>
            <td>{formatDateTime(gateway.last_updated_time)}</td>
        </tr>
    );
}


export default GatewayTable;
