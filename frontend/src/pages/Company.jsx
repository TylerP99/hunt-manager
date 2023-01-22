import React from 'react'

import { useParams } from "react-router-dom";

import Connection from '../components/Connection';
import Position from '../components/Position';


function Company({companies}) {

  const params = useParams();

  const company = companies.reduce((obj, x) => (x._id == params.id) ? obj = x : obj = obj , {});


  return (
    <section
      className="w-[95%] mx-auto"
    >
        <section
          className="mb-6"
        >
          <h1
            className="text-3xl text-blue border-b-2 border-blue mb-2"
          >{company.name}</h1>
          <p>A large scale video sharing company, owned by Google</p>
        </section>
        <section
          className="mb-6"
        >
          <h2
            className="text-2xl mb-2 border-b border-blue"
          >Positions</h2>
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
          <h2>Connections</h2>
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