

import React , { useState } from 'react'
import styles from './Settings.module.css'
import { FaUser, FaCamera } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { LuSave } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { FaDownload, FaUpload, FaCreditCard } from 'react-icons/fa';



  const statusDetails = [
    { label: "Account Type", value: "Premium", badge: "premium" },
    { label: "Status", value: "Active", badge: "active" },
    { label: "Member Since", value: "Jan 2023" },
  ];



  


const Settings = () => {



   const [preferences, setPreferences] = useState({
    email: true,
    push: true,
    projectUpdates: true,
    invoiceReminders: true,
    marketing: false,
  });

  const handleToggle = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    console.log("Saved preferences:", preferences);
    alert("Preferences saved successfully!");
  };




  return (
    <div className={styles.settingsgen}>
      
<div>
  <h2 className={styles.settings}>Settings</h2>
  <p className={styles.manage}>Manage your account settings and preferences</p>
</div>





 <div className={styles.profileCard}>
      {/* Header */}
      <div className={styles.profileHeader}>
        <FaUser className={styles.profileIcon} />
        <div className={styles.profileHeaderText}>
          <h2>Profile Information</h2>
          <p>Update your personal information and profile details</p>
        </div>
      </div>

      {/* Avatar */}
      <div className={styles.avatarSection}>
        <div className={styles.avatarPlaceholder}>JD</div>
        <div className={styles.avatarUpload}>
          <button className={styles.changePhotoButton}>
            <FaCamera /> Change Photo
          </button>
          <span className={styles.fileInfo}>
            JPG, PNG or GIF. Max size 2MB.
          </span>
        </div>
      </div>

      {/* Form */}
      <form className={styles.profileForm}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" defaultValue="John" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" defaultValue="Doe" />
          </div>

          <div className={`${styles.formGroup} ${styles.formFullWidth}`}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue="john.doe@company.com"
            />
          </div>

          <div className={`${styles.formGroup} ${styles.formFullWidth}`}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" defaultValue="+1 (555) 123-4567" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" defaultValue="TechCorp Inc." />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id="jobTitle" defaultValue="Product Manager" />
          </div>

          <div className={`${styles.formGroup} ${styles.formFullWidth}`}>
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              defaultValue="Experienced product manager with a passion for building great user experiences."
            />
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Update Profile
        </button>
      </form>
    </div>





{/* NOTIFICATION PART */}

<div className={styles.leftnd3}>
  
  
   <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <LuBell className={styles.icon}/>
        <div>
          <h2>Notification Preferences</h2>
          <p>Choose how you want to be notified about important updates</p>
        </div>
      </div>

      {/* Settings List */}
      <div className={styles.settingsList}>
        <div className={styles.settingItem}>
          <div className={styles.settingItemText}>
            <h3>Email Notifications</h3>
            <p>Receive notifications via email</p>
          </div>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={preferences.email}
              onChange={() => handleToggle("email")}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.settingItem}>
          <div className={styles.settingItemText}>
            <h3>Push Notifications</h3>
            <p>Receive push notifications in your browser</p>
          </div>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={preferences.push}
              onChange={() => handleToggle("push")}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.settingItem}>
          <div className={styles.settingItemText}>
            <h3>Project Updates</h3>
            <p>Get notified when projects are updated</p>
          </div>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={preferences.projectUpdates}
              onChange={() => handleToggle("projectUpdates")}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.settingItem}>
          <div className={styles.settingItemText}>
            <h3>Invoice Reminders</h3>
            <p>Reminders for upcoming invoice due dates</p>
          </div>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={preferences.invoiceReminders}
              onChange={() => handleToggle("invoiceReminders")}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.settingItem}>
          <div className={styles.settingItemText}>
            <h3>Marketing Emails</h3>
            <p>Product updates and company news</p>
          </div>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={() => handleToggle("marketing")}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <button className={styles.saveButton} onClick={handleSave}>
        <LuSave  className={styles.iconsave} /> Save Preferences
      </button>
    </div>











<div className={styles.the3}>





{/* ACCOUNT STATUS */}

    <div className={styles.accountStatusCard}>
      <div className={styles.accountStatusHeader}>
        <span className={styles.accountStatusIcon}><AiOutlineSafety /></span>
        <h2 className={styles.accountStatusTitle}>Account Status</h2>
      </div>

      <div className={styles.accountStatusDetails}>
        {statusDetails.map((item, index) => (
          <div key={index} className={styles.accountStatusItem}>
            <div className={styles.accountStatusLabel}>{item.label}</div>
            <div className={styles.accountStatusValue}>
              {item.badge ? (
                <span className={`${styles.statusBadge} ${styles[item.badge]}`}>
                  {item.value}
                </span>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>





 <div className={styles.quickActionsCard}>
      <div className={styles.quickActionsHeader}>
        <h2 className={styles.quickActionsTitle}>Quick Actions</h2>
      </div>
      <div className={styles.actionList}>
        <div className={styles.actionItem}>
          <FaDownload className={styles.actionIcon} />
          <span className={styles.actionText}>Export Data</span>
        </div>
        <div className={styles.actionItem}>
          <FaUpload className={styles.actionIcon} />
          <span className={styles.actionText}>Import Data</span>
        </div>
        <div className={styles.actionItem}>
          <FaCreditCard className={styles.actionIcon} />
          <span className={styles.actionText}>Billing Settings</span>
        </div>
      </div>
    </div>

</div>



{/* STORAGE */}

</div>


    </div>
  )
}

export default Settings