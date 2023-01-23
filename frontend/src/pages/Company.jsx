import React from 'react'

import { useParams } from "react-router-dom";

import {Link} from "react-router-dom";
import { FaCog, FaPlus, FaLessThan } from "react-icons/fa";

import Connection from '../components/Connection';
import Position from '../components/Position';
import OptionButton from '../components/OptionButton';
import SettingsMenu from '../components/SettingsMenu';


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
          <section
            className="flex justify-between items-center mb-2 border-b border-black"
          >
            <h2
              className="text-2xl"
            >Positions</h2>
            <FaPlus
              className='cursor-pointer'
            />
          </section>
          <div 
            className="max-h-[600px] overflow-y-scroll"
          >
            {
              company.positions.map(x => <Position id={x.name} position={x} />)
            }
          </div>
        </section>
        <section
          className="mb-6"
        >
          <section
            className="flex justify-between items-center mb-2 border-b border-black"
          >
            <h2
              className="text-2xl"
            >Connections</h2>
            <FaPlus
              className='cursor-pointer'
            />
          </section>
          <div>
            {
              company.connections.map(x => <Connection id={x.name} connection={x} />)
            }
          </div>
        </section>
    </section>
  )
}

export default Company