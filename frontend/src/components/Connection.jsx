import React from 'react'
import { FaTrash, FaPencilAlt } from "react-icons/fa"

function Connection({connection}) {

  const {name, role} = connection;

  return (
    <section
      className='border-2 p-4'
    >
      <section
        className='flex justify-between items-center'
      >
        <h3>{name}</h3>
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
      <div>{role}</div>

    </section>
  )
}

export default Connection