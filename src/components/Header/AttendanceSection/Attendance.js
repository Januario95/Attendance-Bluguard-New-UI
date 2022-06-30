import React, { useState, useEffect } from 'react';
import Body from './Body/Body';
import {
    SubtitleTop, Events, Attendees, Attendance,
    Subtitle, Gateways, Weareables, Beacons
} from './Body/Left';
import {
    EventPage, AttendeesDisplay, GatewaysDisplay,
    AttendancesDisplay, BeaconsDisplay,
    WearablePage
} from './Body/Right';


const AttendancePage = () => {
    const [showEventsSection, setShowEventsSection] = useState(true);
    const [showAttendeesSection, setShowAttendeesSection] = useState(false);
    const [showAttendanceSection, setShowAttendanceSection] = useState(false);
    const [showGatewaysSection, setShowGatewaysSection] = useState(false);
    const [showWearablesSection, setShowWearablesSection] = useState(false);
    const [showBeaconsSection, setShowBeaconsSection] = useState(false);


    function runSetBackgroundColor(target, first, second, third, fourth, fifth) {
        let child = target.children[0]
        child.addEventListener('click', e => {
            target.classList.add('active-subheader');
            first.classList.remove('active-subheader');
            second.classList.remove('active-subheader');
            third.classList.remove('active-subheader');
            fourth.classList.remove('active-subheader');
            fifth.classList.remove('active-subheader');
        });
    }

    const handleLinkClick = (target) => {
        let events = document.querySelector('.events');
        let attendees = document.querySelector('.attendees');
        let attendances = document.querySelector('.attendances');
        let gateways = document.querySelector('.gateways');
        let weareables = document.querySelector('.weareables');
        let beacons = document.querySelector('.beacons');

        runSetBackgroundColor(events, attendees, attendances, gateways, weareables, beacons);
        runSetBackgroundColor(attendees, attendances, gateways, weareables, beacons, events);
        runSetBackgroundColor(attendances, gateways, weareables, beacons, events, attendees);
        runSetBackgroundColor(gateways, weareables, beacons, events, attendees, attendances);
        runSetBackgroundColor(weareables, beacons, events, attendees, attendances, gateways);
        runSetBackgroundColor(beacons, events, attendees, attendances, gateways, weareables);
        

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
        }

        if (target === 'attendees') {
            setShowEventsSection(false);
            setShowAttendeesSection(true);
            setShowAttendanceSection(false);
            setShowGatewaysSection(false);
            setShowWearablesSection(false);
            setShowBeaconsSection(false);
        }

        if (target === 'attendances') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(true);
            setShowGatewaysSection(false);
            setShowWearablesSection(false);
            setShowBeaconsSection(false);
        }

        if (target === 'gateways') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(false);
            setShowGatewaysSection(true);
            setShowWearablesSection(false);
            setShowBeaconsSection(false);
        }

        if (target === 'weareables') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(false);
            setShowGatewaysSection(false);
            setShowWearablesSection(true);
            setShowBeaconsSection(false);
        }

        if (target === 'beacons') {
            setShowEventsSection(false);
            setShowAttendeesSection(false);
            setShowAttendanceSection(false);
            setShowGatewaysSection(false);
            setShowWearablesSection(false);
            setShowBeaconsSection(true);
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
                            <a href="#">Presence Monitoring</a>
                        </div>
                        <div className="events menu-option">
                            <a
                                href="#"
                                className="events-sublink"
                                onClick={(e) => handleLinkClick('events')}
                            >Events</a>
                        </div>
                        <div className="attendees menu-option">
                            <a
                                href="#"
                                className="attendees-sublink"
                                onClick={(e) => handleLinkClick('attendees')}
                            >Attendees</a>
                        </div>
                        <div className="attendances menu-option">
                            <a
                                href="#"
                                className="attendances-sublink"
                                onClick={(e) => handleLinkClick('attendances')}
                            >Attendance</a>
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
                        <div className="weareables equipment-option">
                            <a
                                href="#"
                                className="weareables-sublink"
                                onClick={(e) => handleLinkClick('weareables')}
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
                </div>
            </div>
        </div>
    )
}


export default AttendancePage;

