import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Homepage.css'
import Supplier from '../NavComponents/Supplier'
import HomeSideBar from '../HomeSideBar/HomeSideBar'

const Homepage = () => {
  return (
    <div className='HomePage'>
        <NavBar/>
        <div className='arrangements'>
          <HomeSideBar/>
          <Supplier/>
        </div>
    </div>
  )
}

export default Homepage