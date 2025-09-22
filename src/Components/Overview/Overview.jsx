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





const Overview = () => {
  return (
    <div className={`${styles.genoverview}`}>

<h2 className={`${styles.wbo}`}>Welcome back, Obinna!</h2>
<p className={`${styles.here}`}>Here's what's happening with your projects today.</p>





{/* MAPPING1 */}


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


    </div>
  )
}

export default Overview