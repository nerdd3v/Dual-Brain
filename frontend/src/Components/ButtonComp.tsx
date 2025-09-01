import React from 'react'

function ButtonComp({title, icon}:{
  title: string,
  icon: string
}) {
    const styleClass:{
      share: string
    } = {
        share: 'h-10 w-32 rounded-md bg-purple-200 text-purple-900'
    }
  return (
    <div>
      
      <button className={styleClass[title]}>{title}</button>
    </div>
  )
}

export default ButtonComp;
