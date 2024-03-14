import React from 'react'
import { MdAdd } from "react-icons/md";
import './RFxIndex.css'

const RFxIndex = () => {
  return (
    <div className='SupplierDatabase '>
        <div className="SupplierTitle">
            <div className='STitle'>
                <span>Sourcing Projects</span>
            </div>
        </div>
        <div className="contentAdd">
            <div className="contents">
                <span>Create a new sourcing project</span>
                <span><MdAdd className='RFicons'/></span>
            </div>
            <div className="contents">
                <span>Add Suppliers / Update information for existing project</span>
                <span><MdAdd className='RFicons'/></span>
            </div>
            <div className="contents">
                <span>View Sourcing Projects</span>
                <span><MdAdd className='RFicons'/></span>
            </div>
            <div className="contents">
                <span>Search within Database</span>
                <span><MdAdd className='RFicons'/></span>
            </div>
        </div>
    </div>
  )
}

export default RFxIndex