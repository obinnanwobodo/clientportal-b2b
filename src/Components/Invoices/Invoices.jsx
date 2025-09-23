import React, { useState, useEffect, useRef } from 'react'
import styles from './Invoices.module.css'
import { IoIosAdd } from "react-icons/io";
import { FiFilter, FiDownload, FiMoreVertical } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";




const cards = [
  {
    title: "Total Amount",
    value: "$121,250.00",
    type: "total",
    description: "Across all invoices",
  },
  {
    title: "Paid Amount",
    value: "$21,250.00",
    type: "paid",
    description: "Successfully collected",
  },
  {
    title: "Pending Amount",
    value: "$100,000.00",
    type: "pending",
    description: "Awaiting payment",
  },
];


const invoices = [
  {
    id: "INV-001",
    client: "TechCorp inc.",
    project: "Website Redesign",
    amount: "$12,500.00",
    status: "paid",
    dueDate: "Nov 15, 2024",
    issueDate: "Oct 15, 2024",
  },
  {
    id: "INV-002",
    client: "StartupXYZ",
    project: "Mobile App Development",
    amount: "$25,000.00",
    status: "pending",
    dueDate: "Dec 15, 2024",
    issueDate: "Nov 15, 2024",
  },
  {
    id: "INV-003",
    client: "Fashion Forward",
    project: "Brand Identity",
    amount: "$8,750.00",
    status: "paid",
    dueDate: "Nov 1, 2024",
    issueDate: "Oct 1, 2024",
  },
  {
    id: "INV-004",
    client: "RetailMax",
    project: "E-commerce Platform",
    amount: "$37,500.00",
    status: "overdue",
    dueDate: "Nov 30, 2024",
    issueDate: "Oct 30, 2024",
  },
  {
    id: "INV-005",
    client: "InnovateTech",
    project: "Marketing Campaign",
    amount: "$15,000.00",
    status: "draft",
    dueDate: "Jan 15, 2025",
    issueDate: "Dec 15, 2024",
  },
  {
    id: "INV-006",
    client: "DataViz Co.",
    project: "Analytics Dashboard",
    amount: "$22,500.00",
    status: "sent",
    dueDate: "Jan 10, 2025",
    issueDate: "Dec 10, 2024",
  },
];



const Invoices = () => {


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
    <div className={`${styles.geninvoices}`}>

      <div className={`${styles.firstsetgen}`}>

        <div className={`${styles.it}`}>
          <h2 className={`${styles.invoices}`}>Invoices</h2>
          <p className={`${styles.track}`}>Track and manage all your client invoices</p>
        </div>

        <button className={`${styles.icnndci}`}>
          <div className={`${styles.invicn}`}><IoIosAdd /></div>
          <p className={`${styles.ci}`}>Create Invoice</p>
        </button>


      </div>



      {/* MAPPING 1 */}


      <div className={styles.dashboardContainer}>

        <div className={styles.dashboardCards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={`${styles.cardValue} ${styles[card.type]}`}>
                {card.value}
              </div>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          ))}
        </div>
      </div>






      {/* MAPPING 2 */}



      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.searchFilter}>
          <div> <FiSearch /></div>
          <input
            type="text"
            placeholder="Search invoices..."
            className={styles.searchInput}
          />
        </div>

        <div >
          <button className={styles.filterButton}>
            <FiFilter /> Filter
          </button>
        </div>
        <button className={styles.exportButton}>
          <FiDownload /> Export
        </button>
      </div>



      <div className={styles.container}>


        {/* Table */}
        <div className={styles.tableContainer}>
          <table className={styles.invoiceTable}>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client</th>
                <th>Project</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Issue Date</th>
                <th></th>
              </tr>
             </thead>
             <tbody>
              {invoices.map((invoice, index) => (
                <tr key={index} className={styles.relative} ref={(el) => (menuRefs.current[index] = el)}>
                  <td className={styles.invoiceid}>{invoice.id}</td>
                  <td>{invoice.client}</td>
                  <td>{invoice.project}</td>
                  <td className={styles.invoiceamt}>{invoice.amount}</td>
                  <td>
                    <span
                      className={`${styles.statusTag} ${styles[invoice.status]}`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.issueDate}</td>
                  <td onClick={() => toggleMenu(index)}>
                    <FiMoreVertical className={styles.menuIcon} />
                  </td>


                  {/* Dropdown Menu */}
                  {openMenuIndex === index && (
                    <div className={styles.dropdownMenu}>
                      <div className={styles.dropdownItem}>View</div>
                      <div className={styles.dropdownItem}>Edit</div>
                      <div className={styles.dropdownItem}>Send</div>
                      <div className={styles.dropdownItemDelete}>Delete</div>
                    </div>
                  )}


                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>





    </div>
  )
}

export default Invoices