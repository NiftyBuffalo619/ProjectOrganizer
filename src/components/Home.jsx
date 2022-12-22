import React from 'react'
import ShowPanel from './ShowPanel';
import WhatDayIsToday from './WhatDayIsToday';

export default function Home() {
  return (
    <>
    <div className='flex flex-center'>
       <ShowPanel />
       <div className="bg-[url('./bg.jpg')] w-full">
        <WhatDayIsToday />
       </div>
    </div>
    </>
  )
}
