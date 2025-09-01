import React from 'react'
import Brain from '../Icons/Brain'
import SideBarElements from './SideBarElements'

function SideBarMain() {
  return (
    <div className='border-r-2 w-1/5'>
        <div className='h-screen pl-2  pt-5 '>
            <div className='flex justify-center gap-5 items-center mb-10'>
                <Brain/>
                <h1 className='text-2xl'>Dual Brain</h1>
            </div>
            <SideBarElements />
        </div>
    </div>
  )
}

export default SideBarMain
