import React from 'react'
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { BsGlobe2 } from "react-icons/bs";
import  './RFxSideBar.css'
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { Link } from 'react-router-dom';

const RFxSideBar = () => {
  return (
    <div className='HomeSideBar'>
        <div className="sideIcons">
            <Link to="/RFxManagement"><MdOutlineLaptopChromebook className="custom-icon"/></Link>
        </div>
        <div className="sideIcons">
            <Link to="/Response"><BsGlobe2 className="custom-icon"/></Link>
        </div>
        <div className="sideIcons">
            <IoIosGitNetwork className="custom-icon"/>
        </div>
        <div className="sideIcons">
            <SlCalender className="custom-icon"/>
        </div>
        <div className="sideIcons">
            <FaHandHoldingUsd className="custom-icon"/>
        </div>
        
    </div>
  )
}

export default RFxSideBar