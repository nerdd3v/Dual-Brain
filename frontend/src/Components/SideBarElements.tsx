import React from 'react'
import Brain from '../Icons/Brain'

function SideBarElements() {
    let arr = ['Tweets', 'Videos', 'Documents', 'Links', 'Tags']
  return (
    <div>
      {arr.map((e,index)=>{
        return(
            <div key={index} className='flex justify-start gap-5 pb-4 pl-3 items-center'>
                <Brain/>
                <h3 className='text-xl font-extralight'>{e}</h3>
            </div>
        )
      })}
    </div>
  )
}

export default SideBarElements
