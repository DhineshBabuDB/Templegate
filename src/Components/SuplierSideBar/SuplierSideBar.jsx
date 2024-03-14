import React from 'react'
import './SuplierSideBar.css'
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { BsGlobe2 } from "react-icons/bs";
import { IoIosFlower } from "react-icons/io";

const SuplierSideBar = () => {
  return (
    <div className='HomeSideBar'>
        <div className="sideIcons">
            <IoIosFlower className="custom-icon"/>
        </div>
        <div className="sideIcons">
           <BsGlobe2 className="custom-icon"/>
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

export default SuplierSideBar