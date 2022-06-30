import React from 'react';
import '../../../../Styles/Header/header.css';
import Beacons from './Beacons';
import Gateways from './Gateways';
import Weareables from './Weareables';


const BottomMenu = () => {

    return (
        <div className="bottommenu">
            <Gateways />
            <Weareables />
            <Beacons />
        </div>
    )
}


export default BottomMenu;

