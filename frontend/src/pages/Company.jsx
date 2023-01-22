import React from 'react'

import { useParams } from "react-router-dom";


function Company({companies}) {

  const params = useParams();

  const company = companies.reduce((obj, x) => (x._id == params.id) ? obj = x : obj = obj , {});


  return (
    <section>
        <h1>{company.name}</h1>
        <ul>
            <li><a>Position Links</a></li>
            <li><a>Position Links</a></li>
        </ul>
        <ul>
            <li>Initial contact</li>
            <li>Follow up</li>
            <li>Interview</li>
        </ul>
        <ul>
            <li>Melissa A. (Hiring Manager)</li>
        </ul>
        <p>Descriptive info</p>
    </section>
  )
}

export default Company