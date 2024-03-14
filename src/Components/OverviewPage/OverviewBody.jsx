import React, { useState } from 'react'
import './Overview.css'
import BarChart from '../Charts/BarChart'
import CircleChart from '../Charts/CircleChart'
import LineGraph from '../Charts/lineGraph'

const OverviewBody = () => {

    const[id, setId] = useState("01158963")
    const[country, setCountry] = useState("USA")
    const[business, setBusiness] = useState("Limited Liability Proprietorship")
    const[supply, setSupply] = useState("Gold")
    const[spend, setSpend] = useState("758,433,987")
    const[risk, setRisk] = useState("Low")
    const[performance,setPerformance] =useState("Good")


  return (
    <div className='OverviewBody'>
        <div className='secondBar'>
            <button className='supplyColor'>Supplier Overview</button>
            <button>General Information</button>
            <button>Certificate / Documents</button>
            <button>Capabilities</button>
            <button>Sub Tier Network</button>
        </div>
        <div className='mainContainer'>
            <div className="containerLeft">
                <h3>SPIRIT AEROSYSTEMS</h3>
                <span id='spLink'>https://www.spiritaero.com/</span>
                <div className='details'>
                    <div className='detailsList'>
                        <span className='dataTitle'>Incorporation Id: </span>
                        <span className='data'>{id}</span>
                    </div>
                    <div className='detailsList'>
                        <span className='dataTitle'>Country: </span>
                        <span className='data'>{country}</span>
                    </div>
                    <div className='detailsList'>
                        <span className='dataTitle'>Business Type: </span>
                        <span className='data'>{business}</span>
                    </div>
                    <div className='detailsList'>
                        <span className='dataTitle'>Supplier Rating: </span>
                        <span className='data'>{supply}</span>
                    </div>
                </div>
                <div className="risk">
                    <div className='revenue'>
                        <span className='money'>{spend} INR</span>
                        <span className='moneyTitle'>Total Spend Till Date</span>
                    </div>
                    <div className="riskLevel">
                        <h4>Overall Risk Level</h4>
                        <span>Last updated on 30 Nov 2023</span>
                        <p>{risk}</p>
                    </div>
                    <div className="riskLevel">
                        <h4>Overall Performance Level</h4>
                        <span>Last updated on 10 June 2023</span>
                        <p>{performance}</p>
                    </div>
                </div>
                <div className="graphs">
                    <div className='graphleft'>
                        <h6>Registration:</h6>
                        <div className="circles">
                            <div className='circleChild'>
                                <div className='numbers'>5</div>
                                <span>Open Birds</span>
                            </div>
                            <div className='circleChild'>
                                <div className='numbers'>10</div>
                                <span>No. of program awarded</span>
                            </div>
                            <div className='circleChild'>
                                <div className='numbers'>5</div>
                                <span>Purchase Order</span>
                            </div>
                            <div className='circleChild'>
                                <div className='numbers'>5</div>
                                <span>Invoices</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="linegraph">
                        <h4>Performance comparison</h4>
                        <LineGraph/>
                    </div>
                </div>
            </div>
            <div className="containerRight">
                <div className="commodity">
                    <h4>Spend by Commodity</h4>
                    <CircleChart/>
                </div>
                <div className="commodity">
                    <h4>Spend per program per commodity</h4>
                    <BarChart/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OverviewBody