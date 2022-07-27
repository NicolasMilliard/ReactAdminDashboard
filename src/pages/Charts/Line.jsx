import React from 'react'
import { Header, LineChart } from '../../components'

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#182b4b] rounded-3xl">
      <Header category="Line" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line