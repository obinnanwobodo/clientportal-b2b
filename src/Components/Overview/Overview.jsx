import React from 'react'
import styles from './Overview.module.css'
import { FaDollarSign, FaFolderOpen, FaUsers, FaChartLine } from "react-icons/fa";






const stats = [
    {
        title: "Total Revenue",
        icon: <FaDollarSign />,
        value: "$124,560",
        growth: "↑ 12.5%",
        growthText: "From last month",
        positive: true,
    },
    {
        title: "Active Projects",
        icon: <FaFolderOpen />,
        value: "23",
        growth: "↑ +3",
        growthText: "Currently in progress",
        positive: true,
    },
    {
        title: "Team Members",
        icon: <FaUsers />,
        value: "156",
        growth: "↑ +8",
        growthText: "Total team size",
        positive: true,
    },
    {
        title: "Growth Rate",
        icon: <FaChartLine />,
        value: "18.3%",
        growth: "↓ -2.1%",
        growthText: "This quarter",
        positive: false,
    },
];








const projects = [
  {
    title: "Website Redesign",
    status: "in-progress",
    due: "Dec 15, 2024",
    progress: 75,
  },
  {
    title: "Mobile App Development",
    status: "planning",
    due: "Jan 30, 2025",
    progress: 25,
  },
  {
    title: "Brand Identity",
    status: "completed",
    due: "Nov 20, 2024",
    progress: 100,
  },
  {
    title: "E-commerce Platform",
    status: "in-progress",
    due: "Feb 15, 2025",
    progress: 60,
  },
];











const actions = [
  {
    title: "Create New Project",
    description: "Start a new project with your team",
  },
  {
    title: "Upload Documents",
    description: "Add files to existing projects",
  },
  {
    title: "Schedule Meeting",
    description: "Book time with your team",
  },
  {
    title: "View Reports",
    description: "Access detailed analytics",
  },
];




const Overview = () => {
    return (
        <div className={`${styles.genoverview}`}>

            <h2 className={`${styles.wbo}`}>Welcome back, Obinna!</h2>
            <p className={`${styles.here}`}>Here's what's happening with your projects today.</p>





            {/* MAPPING 1 */}


            <div className={styles.dashboardContainer}>
                {stats.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardTitle}>{card.title}</span>
                            <span className={styles.cardIcon}>{card.icon}</span>
                        </div>
                        <div className={styles.cardValue}>{card.value}</div>
                        <div className={styles.cardFooter}>
                            <span
                                className={
                                    card.positive ? styles.growthPositive : styles.growthNegative
                                }
                            >
                                {card.growth}
                            </span>
                            <span
                                className={
                                    card.positive
                                        ? styles.growthTextPositive
                                        : styles.growthTextNegative
                                }
                            >
                                {card.growthText}
                            </span>
                        </div>
                    </div>
                ))}
            </div>







            {/* MAPPING 2 */}
            
            <div className={styles.map2nd3}>

<div className={styles.genmap2}>

<h2 className={styles.rps}>Recent Projects</h2>
<p className={styles.yl}>Your latest project updates and progress</p>




  <div className={styles.projectListContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectItem}>
          <div className={styles.projectDetails}>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectMeta}>
              <span
                className={`${styles.statusTag} ${styles[project.status]}`}
              >
                {project.status.replace("-", " ")}
              </span>
              <span>Due {project.due}</span>
            </div>
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <span className={styles.progressText}>{project.progress}%</span>
          </div>
        </div>
      ))}
    </div>


</div>







{/* MAPPING 3 */}



  <div className={styles.container}>
      <div className={styles.header}>
        <h2>Quick Actions</h2>
        <p>Common tasks and shortcuts</p>
      </div>
      <div className={styles.actionList}>
        {actions.map((action, index) => (
          <div key={index} className={styles.actionItem}>
            <h3>{action.title}</h3>
            <p>{action.description}</p>
          </div>
        ))}
      </div>
    </div>



</div>

        </div>
    )
}

export default Overview