import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import './Response.css'
import ExpectedDeliverables from './ExpectedDeliverables';

const ResponseBody = () => {
  return (
    <div className='ResponseBody'>
        
        <div className="respo">
            <div className='resTitle'>
                <h3>Response</h3>
            </div>
        </div>
        <ExpectedDeliverables/>
        <div className="acknowledgement">
            <h3>NDA Acknowledgement</h3>
            <div className='Disclosure'>
                <div className="disclosureTitle">
                    <h3>Non - Disclosure Agreement</h3>
                    <BsThreeDotsVertical/>
                </div>
                <div className="versionHistory">
                    <div>
                        <button id='fbtn'>V_</button>
                        <button id='sbtn'>Accepted</button>
                    </div>
                    <div>
                        <div className='Version'>
                            <span>View Version History</span>
                        </div>
                    </div>
                </div>
                <div className='secondBoxdata'>
                    <span>Mon DD, YYYY, HH:MM Hrs by xxxx</span>
                    <div className='Generic'>
                        <label htmlFor="">Type of NDA:</label>
                        <input type="text" placeholder='(Generic / Program Specific)'/>
                    </div>
                    <div className='aknowbtn'>
                        <button>Acknowledgement</button>
                        <IoMdDownload className='downbtn'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="deliverables">

        </div>
    </div>
  )
}

export default ResponseBody