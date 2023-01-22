import React from 'react'

function Position({position}) {

  const {name, source, url, description} = position;

  return (
    <section
      className='border-2 p-4'
    >
      <h3
        className='text-xl'
      >{name}</h3>
      <a 
        className='text-lg capitalize text-orange cursor-pointer hover:text-blue'
        href={url} 
        target="_blank" 
      >{source}</a>
      <p>{description}</p>
    </section>
  )
}

export default Position