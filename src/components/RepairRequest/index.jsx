import React from 'react'
import RequestBar from './RequestBar'
import repairRequestsData from './repair-req-data'

const RepairRequest = ({className}) => {

  console.log(repairRequestsData)

  return (
    <div className={`grow font-arimo p-6 rounded-2xl color-card border border-borderColor ${className} `}>
      <h3 className="font-inter font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer">
        Top Repair Requests
      </h3>
        <div className='mt-4 space-y-3'>
          {repairRequestsData.map((item, index) => (
            <RequestBar
              key={index} 
              name={item.name} 
              value={item.value} 
              requestNum={item.requestNum} 
            />
          ))}
        </div>
    </div>
  )
}

export default RepairRequest