import React from 'react';
import ButtonComp from './ButtonComp';

function NavBar() {
  return (
    <>
      <div className='h-20 w-full flex justify-between items-center'>
        <div className='ml-5 text-2xl font-bold'>All Notes</div>
        <div className='mr-5 flex gap-2'>
          <ButtonComp title='share' icon='op'/>
          <ButtonComp title='share' icon='op'/>
        </div>
      </div>
    </>
  )
}

export default NavBar
