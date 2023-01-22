import React from 'react'

import { useParams } from "react-router-dom";

import Connection from '../components/Connection';


function Company({companies}) {

  const params = useParams();

  const company = companies.reduce((obj, x) => (x._id == params.id) ? obj = x : obj = obj , {});


  return (
    <section>
        <h1>{company.name}</h1>
        <section>
          <h2>Positions</h2>
        </section>
        <section>
          <h2>Connections</h2>
          <div>
            {
              company.connections.map(x => <Connection id={x.name} connection={x} />)
            }
          </div>
        </section>
        <p>Descriptive info</p>
    </section>
  )
}

export default Company