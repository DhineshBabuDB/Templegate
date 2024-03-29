import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const LineGraph = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      }
    )
  return (
    <div>
        <Chart
    options={state.options}
    series={state.series}
    type="line"
    width="350"
  />
    </div>
  )
}

export default LineGraph