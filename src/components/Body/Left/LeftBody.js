import React from 'react';
import '../../../Styles/Header/header.css';
import BottomMenu from './BottomMenu/BottomMenu';
import TopMenu from './TopMenu/TopMenu';


const LeftBody = () => {

    return (
        <div className="leftbody body-part">
            <TopMenu />
            <BottomMenu />
        </div>
    )
}


export default LeftBody;

