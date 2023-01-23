import React from 'react'

import { FaTrash, FaPencilAlt } from "react-icons/fa"

function Position({position}) {

  const {name, source, url, description} = position;

  return (
    <section
      className='border-2 p-4'
    >
      <section
        className="flex justify-between items-center"
      >
        <h3
          className='text-xl'
        >{name}</h3>
        <div
          className='flex items-center gap-3'
        >
          <FaPencilAlt
            className='cursor-pointer'
          />
          <FaTrash
            className='cursor-pointer'
          />
        </div>
      </section>
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