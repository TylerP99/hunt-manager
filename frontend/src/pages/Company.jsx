import React from 'react'

import { useParams } from "react-router-dom";

import {Link} from "react-router-dom";
import { FaCog, FaPlus, FaLessThan } from "react-icons/fa";

import Connection from '../components/Connection';
import Position from '../components/Position';
import OptionButton from '../components/OptionButton';
import SettingsMenu from '../components/SettingsMenu';
import CreatePositionForm from '../components/forms/CreatePositionForm';
import CreateConnectionForm from '../components/forms/CreateConnectionForm';
import OptionHeader from '../components/OptionHeader';
import List from "../components/lists/List";
 

function Company({companies}) {

  const params = useParams();

  const company = companies.reduce((obj, x) => (x._id == params.id) ? obj = x : obj = obj , {});


  return (

    <section
      className="w-[95%] mx-auto"
    >
        <Link
          className="flex items-center text-sm -mt-4 mb-4 hover:text-blue"
          to="/dashboard"
        >
          <span>&lt; Back to Dashboard</span>
        </Link>

        <section
          className="mb-6"
        >
          <section
            className="flex justify-between items-center border-b-2 border-blue mb-2"
          >
            <h1
              className='text-3xl text-blue'
            >{company.name}</h1>
            <OptionButton Icon={FaCog} OptionContent={SettingsMenu} />
          </section>
          <p>A large scale video sharing company, owned by Google</p>
        </section>
        
        <List 
          elements={company.positions}
          Card={Position}
          options={[<OptionButton key="create-position" Icon={FaPlus} OptionContent={CreatePositionForm} />]}
          headerText="Positions"
          emptyText="No positions"
        />

        <List 
        elements={company.connections}
        Card={Connection}
        options={[<OptionButton key="create-connection" Icon={FaPlus} OptionContent={CreateConnectionForm} />]}
        headerText="Connections"
        emptyText="No connections"
        />
    </section>
  )
}

export default Company