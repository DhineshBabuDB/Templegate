import React from 'react'
import { FaHouse } from "react-icons/fa6";
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='Navbar'>
        <ul>
            <li className='homeIcon'><Link to="/" className='linktexts '><FaHouse/>&nbsp; Home</Link></li>
            <li><Link to="/home"><span className='linktexts'>Supplier Management</span></Link></li>
            <li><Link to="/RFxManagement"><span className='linktexts'>RFx Management</span></Link></li>
            <li>Order Management</li>
            <li>Material Management</li>
            <li>NC&SCAR</li>
            <li>Logistics</li>
            <li>Payments</li>
            <li>Supplier Performance</li>
        </ul>
    </div>
  )
}

export default NavBar