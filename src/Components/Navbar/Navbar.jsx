'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdTrendingUp, IoMdNotificationsOutline } from "react-icons/io";
import { BsLayoutSidebar } from "react-icons/bs";
import { FiSearch, FiUser } from "react-icons/fi";



import { MdGridView } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { LuDollarSign } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import logo from '../../../public/Gemini_Generated_Image_gd27dugd27dugd27.png'


import Overview from '../Overview/Overview';
import profile from '../../../public/Gemini_Generated_Image_j376fwj376fwj376.png'
import styles from './Navbar.module.css'
import Projects from '../Projects/Projects.jsx';
import Invoices from '../Invoices/Invoices.jsx';
import Settings from '../Settings/Settings.jsx';











const Navbar = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Changed to false by default
    const [activeMenu, setActiveMenu] = useState("Overview");
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const handleNotificationsToggle = () => {
        setIsNotificationsOpen((prev) => {
            if (!prev) setIsProfileOpen(false);
            return !prev;
        });
    };

    const handleProfileToggle = () => {
        setIsProfileOpen((prev) => {
            if (!prev) setIsNotificationsOpen(false);
            return !prev;
        });
    };

    // New handler to close sidebar on main content click
    const handleMainContentClick = () => {
        // Only close sidebar on mobile if it's open
        if (window.innerWidth <= 1200 && !isSidebarCollapsed) {
            setIsSidebarCollapsed(true);
        }
    };

    const renderContent = () => {
        switch (activeMenu) {
            case "Overview":
                return <Overview isSidebarCollapsed={isSidebarCollapsed}/>;
            case "Projects":
                return <Projects isSidebarCollapsed={isSidebarCollapsed}/>;
            case "Invoices":
                return <Invoices isSidebarCollapsed={isSidebarCollapsed}/>;
            case "Settings":
                return <Settings isSidebarCollapsed={isSidebarCollapsed}/>;
            default:
                return (
                    <div className={`${styles.genContent}`}>
                        <h2>Welcome to Cient Portal!</h2>
                    </div>
                );
        }
    }

    return (
        <div className={`${styles.navgen} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
            {/* Sidebar */}
            <div className={`${styles.menuside}`}>
                {/* Desktop Toggle Icon */}
                <div onClick={handleSidebarToggle} className={`${styles.sidebaricn} ${styles.desktopToggle}`}>
                    <BsLayoutSidebar />
                </div>
                
                <div className={`${styles.menuicnndtext}`}>
                    <div className={`${styles.trendicn}`}>
                        <Image

src={logo}
alt='navlogo'

/>
                    </div>
                    <div className={`${styles.hndp}`}>
                        <h2>ClientPortal</h2>
                        <p>Professional B2B</p>
                    </div>
                </div>

                <div className={`${styles.wholemenu}`}>
                    <h2>MAIN MENU</h2>
                    <div className={`${styles.dura}`}>
                        <div className={`${styles.theduras} ${activeMenu === "Overview" ? styles.activeMenu : ""}`} onClick={() => setActiveMenu("Overview")}>
                            <div><MdGridView /></div>
                            <p>Overview</p>
                        </div>
                        <div className={`${styles.theduras} ${activeMenu === "Projects" ? styles.activeMenu : ""}`} onClick={() => setActiveMenu("Projects")}>
                            <div><GoFileDirectory /></div>
                            <p>Projects</p>
                        </div>
                        <div className={`${styles.theduras} ${activeMenu === "Invoices" ? styles.activeMenu : ""}`} onClick={() => setActiveMenu("Invoices")}>
                            <div><LuDollarSign />
</div>
                            <p>Invoices</p>
                        </div>
                        <div className={`${styles.theduras} ${activeMenu === "Settings" ? styles.activeMenu : ""}`} onClick={() => setActiveMenu("Settings")}>
                            <div><CiSettings />
</div>
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Navigation and Main Content */}
            <div className={`${styles.topnavndcontent} ${isSidebarCollapsed ? styles.expanded : ''}`} onClick={handleMainContentClick}>
                <div className={`${styles.topnavside}`}>
                    {/* Mobile Toggle Icon */}
                    <div onClick={handleSidebarToggle} className={`${styles.sidebaricn} ${styles.mobileToggle}`}>
                        <BsLayoutSidebar />
                    </div>
                    
                    <div className={`${styles.searchgen}`}>
                        <div>
                            <FiSearch />
                            <input type="text" placeholder='Search projects, invoices...' />
                        </div>
                    </div>

                    <div className={`${styles.notifygen}`} onClick={handleNotificationsToggle}>
                        <div className={`${styles.notifyicn}`}>
                            <IoMdNotificationsOutline />
                        </div>
                        <span className="badge">3</span>
                        {isNotificationsOpen && (
                            <div className={styles.notificationDropdown}>
                                <div><h3 className={`${styles.noti}`}>🔔 Notifications</h3></div>
                                <div className={styles.grpgen}>
                                    <div className={`${styles.grp1}`}>
                                        <h3>• New user Registered</h3>
                                        <p>John Doe joined 5mins ago</p>
                                    </div>
                                    <div className={`${styles.grp2}`}>
                                        <h3>• System Maintenance</h3>
                                        <p>Scheduled for tonight at 2:00 AM</p>
                                    </div>
                                    <div className={`${styles.grp3}`}>
                                        <h3>• Report generated</h3>
                                        <p>Monthly analytics report is ready</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={`${styles.profilesection}`} onClick={handleProfileToggle}>
                        <Image
                            className={styles.prof}
                            src={profile}
                            alt='profile_pic'
                        />
                        {isProfileOpen && (
                            <div className={styles.profileDropdown}>
                                <div className={`${styles.adminpart}`}>
                                    <p>Admin User</p>
                                    <h3>admin@nimbusadmin.com</h3>
                                </div>
                                <div className={`${styles.profndset}`}>
                                    <div className={`${styles.profndicn}`}>
                                        <FiUser />
                                        <p>Profile</p>
                                    </div>
                                    <div className={`${styles.setndicn}`}>
                                        <CiSettings />
                                        <p>Settings</p>
                                    </div>
                                </div>
                                <p className={`${styles.logout}`}>Log out</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className={`${styles.mainContent} ${styles.genContent}`}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Navbar;