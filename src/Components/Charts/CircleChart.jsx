import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const CircleChart = () => {
    const [chart, setChart] = useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      })
  return (
    <div>
        <Chart options={chart.options} series={chart.series} type="donut" width="250" />
    </div>
  )
}

export default CircleChart