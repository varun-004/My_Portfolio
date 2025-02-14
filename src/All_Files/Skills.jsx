import React from 'react'

export default function Skills() {
  return (
    <div className='w-[100%] h-[100%] bg-orange-400 mt-0 mb-0' id="skills">
      <div className='w-[100%] h-[8%] bg-indigo-500 text-center text-4xl'>Programming Skills</div>
      <div className='w-[100%] h-[100%] bg-yellow-100 flex flex-row'>        
        <div className='w-[33%] h-[100%] bg-purple-300'>
          <div className='w-[100%] h-[8%] bg-yellow-200 text-5xl text-center'>Frontend </div>

        </div>
        <div className='w-[33%] h-[100%] bg-blue-300'>
          <div className='w-[100%] h-[8%] bg-yellow-200 text-5xl text-center'>Backend</div>


        </div>
        <div className='w-[34%] h-[100%] bg-lime-300'>
          <div className='w-[100%] h-[8%] bg-yellow-200 text-5xl text-center'>Database</div>


        </div>







      </div>

    </div>
  )
}
