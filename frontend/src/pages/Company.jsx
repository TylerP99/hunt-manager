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
        <section
          className="mb-6"
        >
          <OptionHeader 
            text="Positions"
            options={[<OptionButton key="create-position" Icon={FaPlus} OptionContent={CreatePositionForm} />]}
          />
          <div 
            className="max-h-[600px] overflow-y-scroll"
          >
            {
              (company.positions.length) ?
              company.positions.map(x => <Position id={x.name} position={x} />)
              :
              <p
              className="w-fit mx-auto text-gray-500 text-xl"
            >No companies</p>
            }
          </div>
        </section>
        <section
          className="mb-6"
        >
          <OptionHeader 
            text="Connections"
            options={[<OptionButton key="create-connection" Icon={FaPlus} OptionContent={CreateConnectionForm} />]}
          />
          <div>
            {
              (company.connections.length) ?
              company.connections.map(x => <Connection id={x.name} connection={x} />)
              :
              <p
              className="w-fit mx-auto text-gray-500 text-xl"
            >No companies</p>
            }
          </div>
        </section>
    </section>
  )
}

export default Company