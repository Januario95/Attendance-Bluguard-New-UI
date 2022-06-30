import React from 'react';
import Beacons from './Beacons';
import Gateways from './Gateways';
import Weareables from './Weareables';
import Subtitle from './Subtitle';


const BottomMenu = () => {

    return (
        <div className="bottommenu">
            <Subtitle />
            <Gateways />
            <Weareables />
            <Beacons />
        </div>
    )
}


export default BottomMenu;

