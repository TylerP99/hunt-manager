import React from 'react'
import { FaTrash, FaPencilAlt } from "react-icons/fa";

import EditConnectionForm from "../forms/EditConnectionForm";
import DeleteConnectionForm from "../forms/DeleteConnectionForm";
import OptionButton from '../OptionButton';

function Connection({elem}) {
  const connection = elem
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
          <OptionButton 
            Icon={FaPencilAlt}
            OptionContent={EditConnectionForm}
          />
          <OptionButton 
            Icon={FaTrash}
            OptionContent={DeleteConnectionForm}
          />
        </div>
      </section>
      <div>{role}</div>

    </section>
  )
}

export default Connection