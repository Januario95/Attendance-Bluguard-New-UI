import React, { useState, useEffect } from 'react';
import Body from './Body/Body';
import {
    SubtitleTop, Events, Attendees, Attendance,
    Subtitle, Gateways, Weareables, Beacons
} from './Body/Left';
import {
    EventPage, AttendeesDisplay, GatewaysDisplay,
    AttendancesDisplay, BeaconsDisplay,
    WearablePage, // AllWearablePage
} from './Body/Right';
import AllWearablePage from './Body/Right/AllWearables/Wearables';

const VitalsPage = () => {
    const [showEventsSection, setShowEventsSection] = useState(false);
    const [showAttendeesSection, setShowAttendeesSection] = useState(false);
    const [showAttendanceSection, setShowAttendanceSection] = useState(false);
    const [showGatewaysSection, setShowGatewaysSection] = useState(false);
    const [showWearablesSection, setShowWearablesSection] = useState(true);
    const [showBeaconsSection, setShowBeaconsSection] = useState(false);
    const [showAllWearables, setShowAllWearables] = useState(false);


    function runSetBackgroundColor(target, first, second, third, fourth, fifth, sixth) {
        let child = target.children[0]
        child.addEventListener('click', e => {
            target.classList.add('active-subheader');
            first.classList.remove('active-subheader');
            second.classList.remove('active-subheader');
            third.classList.remove('active-subheader');
            fourth.classList.remove('active-subheader');
            fifth.classList.remove('active-subheader');
            sixth.classList.remove('active-subheader');
        });
    }

    const handleLinkClick = (target) => {
        let events = document.querySelector('.events');
        let attendees = document.querySelector('.attendees');
        let attendances = document.querySelector('.attendances');
        let gateways = document.querySelector('.gateways');
        let weareables = document.querySelector('.all-wearables');
        let beacons = document.querySelector('.beacons');
        let all_wearables = document.querySelector('.all-wearables');

        runSetBackgroundColor(events, attendees, attendances, gateways, weareables, beacons, all_wearables);
        runSetBackgroundColor(attendees, attendances, gateways, weareables, beacons, all_wearables, events);
        runSetBackgroundColor(attendances, gateways, weareables, beacons, all_wearables, events, attendees);
        runSetBackgroundColor(gateways, weareables, beacons, all_wearables, events, attendees, attendances);
        runSetBackgroundColor(weareables, beacons, all_wearables, events, attendees, attendances, gateways);
        runSetBackgroundColor(beacons, all_wearables, events, attendees, attendances, gateways, weareables);
        runSetBackgroundColor(all_wearables, events, attendees, attendances, gateways, weareables, beacons);


        showPage(target);
    }

    const showPage = (target) => {
        if (target === 'events') {
            setShowEventsSection(true);
            setShowAttendeesSection(false);
            setShowAttendanceSection(false);
            setShowGatewaysSection(false);
            setShowWearablesSection(false);
            setShowBeaconsSection(false);
            setShowAllWearables(false);
        }

        if (target === 'attendees') {
            setShowEventsSection(false);
            setShowAttendeesSection(true);
            setShowAttendanceSection(false);
            setShowGatewaysSection(false);
            setShowWearablesSection(false);
            setShowBeaconsSection(false);
            setShowAllWearables(false);
        }

        if (target === 'attendances') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(true);
            setShowGatewaysSection(false);
            setShowWearablesSection(false);
            setShowBeaconsSection(false);
            setShowAllWearables(false);
        }

        if (target === 'gateways') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(false);
            setShowGatewaysSection(true);
            setShowWearablesSection(false);
            setShowBeaconsSection(false);
            setShowAllWearables(false);
        }

        if (target === 'weareables') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(false);
            setShowGatewaysSection(false);
            setShowWearablesSection(true);
            setShowBeaconsSection(false);
            setShowAllWearables(false);
        }

        if (target === 'beacons') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(false);
            setShowGatewaysSection(false);
            setShowWearablesSection(false);
            setShowBeaconsSection(true);
            setShowAllWearables(false);
        }

        if (target === 'all-wearables') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(false);
            setShowGatewaysSection(false);
            setShowWearablesSection(false);
            setShowBeaconsSection(false);
            setShowAllWearables(true);
        }
    }

    useEffect(() => {

    }, []);

    return (
        <div className="attendancepage-subsection subpage">
            {/* <Body /> */}
            <div className="body-section">
                <div className="leftbody body-part">
                    <div className="topmenu">
                        <div className="subtitle menu-option">
                            <a href="#">Vital Survellance</a>
                        </div>
                        <div className="events menu-option">
                            <a
                                href="#"
                                className="events-sublink"
                                onClick={(e) => handleLinkClick('events')}
                            >Alerts</a>
                        </div>
                        <div className="attendees menu-option">
                            <a
                                href="#"
                                className="attendees-sublink"
                                onClick={(e) => handleLinkClick('weareables')}
                            >Vitals</a>
                        </div>
                        <div className="attendances menu-option">
                            <a
                                href="#"
                                className="attendances-sublink"
                                onClick={(e) => handleLinkClick('attendances')}
                            ></a>
                        </div>
                    </div>

                    <div className="bottommenu">
                        <div className="subtitle menu-option">
                            <a href="#">IoT Devices</a>
                        </div>
                        <div className="gateways equipment-option">
                            <a
                                href="#"
                                className="gateways-sublink"
                                onClick={(e) => handleLinkClick('gateways')}
                            >Gateways</a>
                        </div>
                        <div className="all-wearables equipment-option">
                            <a
                                href="#"
                                className="weareables-sublink"
                                onClick={(e) => handleLinkClick('all-wearables')}
                            >Wearables</a>
                        </div>
                        <div className="beacons equipment-option">
                            <a
                                href="#"
                                className="beacons-sublink"
                                onClick={(e) => handleLinkClick('beacons')}
                            >Beacons</a>
                        </div>
                    </div>
                </div>

                <div className="rightbody body-part">
                    {showEventsSection ? (
                        <EventPage />
                    ) : ''}
                    {showAttendeesSection ? (
                        <AttendeesDisplay />
                    ) : ''}
                    {showAttendanceSection ? (
                        <AttendancesDisplay />
                    ) : ''}
                    {showGatewaysSection ? (
                        <GatewaysDisplay />
                    ) : ''}
                    {showBeaconsSection ? (
                        <BeaconsDisplay />
                    ) : ''}
                    {showWearablesSection ? (
                        <WearablePage />
                    ) : ''}
                    {showAllWearables ? (
                        <AllWearablePage />
                    ) : ''}
                </div>
            </div>
        </div>
    )
}


export default VitalsPage;

