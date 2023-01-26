import React from 'react'

import {FaPlus} from "react-icons/fa";


import CreateCompanyForm from '../forms/CreateCompanyForm';
import OptionHeader from "../OptionHeader";
import CompanyCard from "../cards/CompanyCard";
import OptionButton from '../OptionButton';

function CompanyList({companies}) {
  return (
    <div
      className="w-full h-[300px] mb-10 py-2"
    >
        <OptionHeader 
            text="Companies" 
            options={[<OptionButton key="add-company" Icon={FaPlus} OptionContent={CreateCompanyForm} />]}
        />
        <section
          className="w-full h-[90%] overflow-scroll px-2"
        >
            {(companies.length) ?
            companies.map(x => <CompanyCard elem={x} key={x._id} />)
            :
            <p
              className="mx-auto text-gray-500 text-xl"
            >No companies</p>
            }
        </section>
    </div>
  )
}

export default CompanyList