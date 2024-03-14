import React from 'react'
import NavBar from '../../NavBar/NavBar'
import './RFx.css'
import SupplyRequest from '../SupplyRequest/SupplyRequest'
import HomeSideBar from '../../HomeSideBar/HomeSideBar'


const RFx = () => {
  return (
    <div className='RFx'>
        <NavBar/>
        <div className="bodyblock">
            <HomeSideBar/>
            <SupplyRequest/>
        </div>
    </div>
  )
}

export default RFx