import React from 'react';


const GatewayTable = ({ gateway }) => {
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
            <td>{gateway.gateway_status}</td>
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
