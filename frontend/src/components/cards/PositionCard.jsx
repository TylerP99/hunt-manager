import React from 'react'

import { FaTrash, FaPencilAlt } from "react-icons/fa";

import EditPositionForm from "../forms/EditPositionForm";
import DeletePositionForm from "../forms/DeletePositionForm";
import OptionButton from "../OptionButton";

function Position({elem}) {
  const position = elem;
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
          <OptionButton 
            Icon={FaPencilAlt}
            OptionContent={EditPositionForm}
          />
          <OptionButton 
            Icon={FaTrash}
            OptionContent={DeletePositionForm}
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