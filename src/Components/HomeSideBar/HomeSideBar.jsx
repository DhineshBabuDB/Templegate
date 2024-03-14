import React from 'react'
import { GrNotes } from "react-icons/gr";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { BsGlobe2 } from "react-icons/bs";
import  './HomeSideBar.css'
import { Link } from 'react-router-dom';

const HomeSideBar = () => {
  return (
    <div className='HomeSideBar'>
        <div className="sideIcons">
            <Link to="/home"><GrNotes className="custom-icon"/></Link>
        </div>
        <div className="sideIcons">
            <Link to="/RFx"><FaHandHoldingUsd className="custom-icon"/></Link>
        </div>
        <div className="sideIcons">
            <IoIosGitNetwork className="custom-icon"/>
        </div>
        <div className="sideIcons">
            <SlCalender className="custom-icon"/>
        </div>
        <div className="sideIcons">
            <BsGlobe2 className="custom-icon"/>
        </div>
    </div>
  )
}

export default HomeSideBar