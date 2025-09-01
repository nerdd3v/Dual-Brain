import React from 'react'

function Card({title, description, tags, link}:{
    title: string,
    description: string,
    tags: string[];
    link: string
}) {
    let now = new Date().toISOString().slice(0,10)
  return (
    <div className='h-1/3 w-80 bg-slate-400 border-slate-200 gap-5 rounded-md'>
      <h1>{title}</h1>
      <p>{description}</p>
    {tags.map((tag)=>{
        return(
            
                <span className='mr-1 bg-purple-400 rounded-md'>#{tag}</span>
            
        )
    })}
    <br />
      <a href={link}>{link}</a>

      <p>Added on {now}</p>
    </div>
  )
}

export default Card
