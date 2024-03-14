import React from 'react'
import './Response.css'
import NavBar from '../../NavBar/NavBar'
import RFxSideBar from '../../RFxSideBar/RFxSideBar'
import ResponseBody from './ResponseBody'

const Response = () => {
  return (
    <div>
        <NavBar/>
        <div className="responseBody">
            <RFxSideBar/>
            <ResponseBody/>
        </div>
    </div>
  )
}

export default Response