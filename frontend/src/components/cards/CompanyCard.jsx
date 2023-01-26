import React from 'react'


import {Link} from "react-router-dom";

function CompanyCard({elem}) {
  const company = elem;
  console.log("Company", company)
  const {name, description} = company;
  let positionCount = company.positions.length-1;

  return(
    <section className="w-full h-40 mb-5 shadow-xl p-5 bg-white">
      <h2 className="text-lg mb-3">
        <Link
          to={`/companies/${company._id}`}
          className="cursor-pointer"
        >
          <span className="text-orange">{name} </span> 
          &ndash;
          <span> {company.positions[0].name}</span>
          { (positionCount-1 > 0) && <span>+{positionCount}</span> }
        </Link>
      </h2>
      <p className="h-[60px] p-1 overflow-scroll">
        {description}
      </p>
    </section>
  )
}

export default CompanyCard