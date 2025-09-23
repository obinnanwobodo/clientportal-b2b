import React, { useState,  useEffect, useRef} from 'react'
import styles from './Projects.module.css'
import { IoIosAdd } from "react-icons/io";
import { CgSearch } from "react-icons/cg";

import { CiCalendar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";




const projects = [
  {
    title: "Website Redesign",
    company: "TechCorp Inc.",
    description: "Complete overhaul of the company website with modern design",
    status: "in-progress",
    priority: "high",
    progress: 75,
    due: "Dec 15, 2024",
    members: 5,
    budget: "$25,000",
  },
  {
    title: "Mobile App Development",
    company: "StartupXYZ",
    description: "Native iOS and Android app for customer engagement",
    status: "planning",
    priority: "high",
    progress: 25,
    due: "Jan 30, 2025",
    members: 8,
    budget: "$50,000",
  },
  {
    title: "Brand Identity",
    company: "Fashion Forward",
    description: "Logo, brand guidelines, and marketing materials",
    status: "completed",
    priority: "medium",
    progress: 100,
    due: "Nov 20, 2024",
    members: 3,
    budget: "$15,000",
  },
  {
    title: "E-commerce Platform",
    company: "RetailMax",
    description: "Full-featured online store with payment integration",
    status: "in-progress",
    priority: "high",
    progress: 60,
    due: "Feb 15, 2025",
    members: 12,
    budget: "$75,000",
  },
  {
    title: "Data Analytics Dashboard",
    company: "DataViz Co.",
    description: "Business intelligence dashboard for sales metrics",
    status: "planning",
    priority: "low",
    progress: 10,
    due: "Mar 30, 2025",
    members: 4,
    budget: "$30,000",
  },
  {
    title: "Marketing Campaign",
    company: "InnovateTech",
    description: "Digital marketing campaign for product launch",
    status: "planning",
    priority: "medium",
    progress: 35,
    due: "Jan 10, 2025",
    members: 6,
    budget: "$20,000",
  },
];





const Projects = () => {

  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRefs = useRef([]); // store refs for dropdowns

  const toggleMenu = (index) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null); // close if same card clicked
    } else {
      setOpenMenuIndex(index);
    }
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openMenuIndex !== null &&
        menuRefs.current[openMenuIndex] &&
        !menuRefs.current[openMenuIndex].contains(event.target)
      ) {
        setOpenMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenuIndex]);




  return (
    <div className={`${styles.genprojects}`}>


      <div className={`${styles.projndbtn}`}>

        <div className={`${styles.pm}`}>
          <h2 className={`${styles.projects}`}>Projects</h2>
          <p className={`${styles.manage}`}>Manage and track all your active projects</p>
        </div>

        <button className={`${styles.icnndproj}`}>
          <div className={`${styles.projicn}`}><IoIosAdd /></div>
          <p className={`${styles.np}`}>New Project</p>

        </button>

      </div>


      <div className={`${styles.searchgen}`}>
        <div className={`${styles.searchicn}`}><CgSearch /></div>
        <input type="text" placeholder='Search projects...' />
      </div>







      {/* ,MAPPING */}



      <div className={styles.dashboardGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
           <div className={styles.cardHeader} ref={(el) => (menuRefs.current[index] = el)}>
              <div className={styles.cardTitleGroup}>
                <div className={styles.cardTitle}>{project.title}</div>
                <div className={styles.cardSubtitle}>{project.company}</div>
              </div>
              <div className={styles.cardMenu} onClick={() => toggleMenu(index)}>
                ...
              </div>

              {/* Dropdown Menu */}
              {openMenuIndex === index && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownItem}>Edit Page</div>
                  <div className={styles.dropdownItem}>View Details</div>
                  <div className={styles.dropdownItem}>Archive</div>
                  <div className={styles.dropdownItemDelete}>Delete</div>
                </div>
              )}
            </div>

            <div className={styles.cardDescription}>{project.description}</div>

            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles[`status${project.status.replace(" ", "-")}`]}`}>
                {project.status}
              </span>
              <span className={`${styles.tag} ${styles[`priority${project.priority}`]}`}>
                {project.priority}
              </span>
            </div>

            <div className={styles.progressSection}>
              <div className={styles.progressLabel}>Progress</div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className={styles.progressText}>{project.progress}%</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.footerItemname}>
                <div><CiCalendar /></div>
                Due {project.due}</div>
              <div className={styles.footerItemnamee} style={{ textAlign: "right" }}>
                <div><FiUsers /></div>
                {project.members} members
              </div>
              <div className={styles.footerItemname}>Budget</div>
              <div className={styles.footerItem} style={{ textAlign: "right" }}>
                {project.budget}
              </div>
            </div>
          </div>
        ))}
      </div>





    </div>
  )
}

export default Projects