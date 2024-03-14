import React from 'react'
import './Overview.css'
import NavBar from '../NavBar/NavBar'
import SuplierSideBar from '../SuplierSideBar/SuplierSideBar'
import OverviewBody from './OverviewBody'

const Overview = () => {
  return (
    <div>
        <NavBar/>
        <div className="bodyblock">
            <SuplierSideBar/>
            <OverviewBody/>
        </div>
    </div>
  )
}

export default Overview