import React from 'react'
import { ImUpload2 } from "react-icons/im";
import { IoNewspaperOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import './Response.css'

const ExpectedDeliverables = () => {
  return (
    <div className='Expected'>
        <h3 className='expectedh3'>Expected Deliverables</h3>
        <div className='Pricing'>
            <div className='upload'>
                <h3>1. Pricing Template</h3>
                <button>Upload New Template</button>
            </div>
            <div className='detailNotes'>
                <span>Detailed pricing as per the template.</span>
            </div>
            <div className="filesTemplates">
                <button><ImUpload2 className='btnicons'/><span>Add File</span></button>
                <button><IoNewspaperOutline className='btnicons'/><span>Template</span></button>
            </div>
        </div>

        <div className='Pricing'>
            <div className='upload'>
                <h3>2. Incoterms</h3>
            </div>
            <div className='detailNotes'>
                <span>Please select the feasible incoterm for the quotation.</span>
            </div>
            <div className="filesTemplates">
                <button><span>Template</span><TiArrowSortedDown className='btnicons2'/></button>
            </div>
        </div>

        <div className='Pricing'>
            <div className='upload'>
                <h3>3. Payment Terms</h3>
            </div>
            <div className='detailNotes'>
                <span>Please select the feasible payment term.</span>
            </div>
            <div className="filesTemplates">
                <button>Enter Text</button>
            </div>
        </div>

        <div className='Pricing'>
            <div className='upload'>
                <h3>4. Terms & Conditions</h3>
            </div>
            <div className='detailNotes'>
                <span>Please mention the terms and conditions.</span>
            </div>
            <div className="filesTemplates">
                <button>Enter Text</button>
            </div>
        </div>
        
    </div>
  )
}

export default ExpectedDeliverables