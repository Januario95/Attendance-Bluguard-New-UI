import React, { useState, useEffect } from 'react';
import AttendancePage from './AttendanceSection/Attendance';
import QuarantinePage from './QuarantineSection/Quarantine';
import VitalsPage from './VitalsSection/Vitals';
import Attendance from './Attendance';
import Quarantine from './Quarantine';
import Vitals from './Vitals';


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [showVitalsSection, setShowVitalsSection] = useState(false);
    const [showAttendanceSection, setShowAttendanceSection] = useState(true);
    const [showQuarantineSection, setShowQuarantineSection] = useState(false);

    const setBackgroundColor = () => {
        let attendance = document.querySelector('.attendance-subsection');
        attendance.classList.add('active-header');
    }


    function runSetBackgroundColor(target, first, second) {
        let child = target.children[0];
        child.addEventListener('click', e => {
            target.classList.add('active-header');
            first.classList.remove('active-header');
            second.classList.remove('active-header');
        });
    }

    const handleLinkClick = (target) => {
        let vitals = document.querySelector('.vitals-subsection');
        let attendance = document.querySelector('.attendance-subsection');
        let quarantine = document.querySelector('.quanrantine-subsection');

        runSetBackgroundColor(vitals, attendance, quarantine);
        runSetBackgroundColor(attendance, quarantine, vitals);
        runSetBackgroundColor(quarantine, vitals, attendance);


        showPage(target);
    }

    const showPage = (target) => {
        if (target === 'vitals-link') {
            setShowVitalsSection(true);
            setShowAttendanceSection(false);
            setShowQuarantineSection(false);
        }

        if (target === 'attendance-link') {
            setShowVitalsSection(false);
            setShowAttendanceSection(true);
            setShowQuarantineSection(false);
        }

        if (target === 'quanrantine-link') {
            setShowVitalsSection(false);
            setShowAttendanceSection(false);
            setShowQuarantineSection(true);
        }
    }


    useEffect(() => {
        //
    })

    return (
        <div className="header-section">
            <div className="header-list">
                <Vitals
                    handleLinkClick={handleLinkClick}
                    showVitalsSection={showVitalsSection}
                />
                <Attendance
                    handleLinkClick={handleLinkClick}
                    showAttendanceSection={showAttendanceSection}
                    setBackgroundColor={setBackgroundColor}
                />
                <Quarantine
                    handleLinkClick={handleLinkClick}
                    showQuarantineSection={showQuarantineSection}
                />
            </div>
            <div className="show-page">
                {showVitalsSection ? (
                    <VitalsPage />
                    ) : ''
                }
                {showAttendanceSection ? (
                    <AttendancePage />
                    ) : ''
                }
                {showQuarantineSection ? (
                    <QuarantinePage />
                    ) : ''
                }
            </div>
        </div>
    )
}


export default Header;

