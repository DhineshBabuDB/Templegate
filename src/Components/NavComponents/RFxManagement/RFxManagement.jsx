import React from 'react'
import './RFxManagement.css'
import NavBar from '../../NavBar/NavBar'
import RFxIndex from '../RFx/RFxIndex/RFxIndex'
import RFxSideBar from '../../RFxSideBar/RFxSideBar'

const RFxManagement = () => {
  return (
    <div className='RFx'>
        <NavBar/>
        <div className="bodyblock">
            <RFxSideBar/>
            <RFxIndex/>
        </div>
    </div>
  )
}

export default RFxManagement