import React from 'react'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const data = {
  datasets: [
    {
      data: [45, 20, 35],
      backgroundColor: ['rgba(3, 34, 130, 1)', 'rgba(237, 225, 255, 1)', 'rgba(244, 190, 56, 1)'],
      borderRadius: 4,
      spacing: 5,
      borderJoinStyle: 'round',
      rotation: 210,
      borderWidth: 0,
    }
  ]
}

const options = {
  cutout: '72%',
}


const DoughnutChart = () => {
  return (
    <Doughnut data={data} options={options} className='p-2'/>
  )
}

export default DoughnutChart