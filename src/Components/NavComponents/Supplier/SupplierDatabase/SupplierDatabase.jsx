import React from 'react'
import './SupplierDatabase.css'
// import NavBar from '../../../NavBar/NavBar'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SupplierDatabase = () => {
  return (
    <div className='SupplierDatabase '>
        <div className="SupplierTitle">
            <div className='STitle'>
                <span>Supplier Database</span>
            </div>
        </div>
        <div className="menubtns">
            <div>
                <span>Supplier Name</span>
            </div>
            <div>
                Country
            </div>
            <div>
                Capability & Manufacturing Technology
            </div>
            <div>
                Ratings
            </div>
        </div>
        <div className="search">
            <div className="searchbutton">
                <button><FaSearch/></button>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="supplyDetails">
            <div className='tableTitle'>
                <h3>Supplier Library</h3>
            </div>
        </div>
        <div className='tableDiv'>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Supplier Name</th>
                        <th>Commodity</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Rating</th>
                        <th>Company Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><Link to="/Overview">Sprit Aero Systems</Link></td>
                        <td>Aerospace Detail Parts</td>
                        <td>India</td>
                        <td>Telangana</td>
                        <td>Gold</td>
                        <td></td>
                    </tr>
                    <tr className='secondtr'>
                        <td>2</td>
                        <td><Link>The Boeing Company</Link></td>
                        <td>Aerospace Hardware's</td>
                        <td>India</td>
                        <td>Telangana</td>
                        <td>Silver</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><Link>Honeywell</Link></td>
                        <td>Aerospace Hardware's</td>
                        <td>India</td>
                        <td>Telangana</td>
                        <td>Unrated</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SupplierDatabase