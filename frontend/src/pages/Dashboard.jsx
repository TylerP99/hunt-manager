import {MdWavingHand} from "react-icons/md";
import {FaPlus} from "react-icons/fa";
import {Link} from "react-router-dom";

import TaskCard from "../components/TaskCard";
import OptionButton from "../components/OptionButton";
import CreateCompanyForm from "../components/forms/CreateCompanyForm";
import OptionHeader from "../components/OptionHeader";

function Dashboard({companies}) {

  const taskCardStyle = "border-4 rounded-md px-4 py-2 mb-2";

  const tasks = [
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    }
  ];

  return (
    <section className="">
      
      <h1 className="text-3xl ml-10 mb-6 flex items-center">
        <MdWavingHand className="mr-4 text-blue" />
        Hello, <span className="font-bold ml-1.5 text-orange">Tyler</span>!
      </h1>

      <section className="w-[95%] flex flex-col mx-auto">
        <section
        className="w-full h-[300px] mb-10 py-2"
        >
          <OptionHeader text="Upcoming Tasks"/>
          <section className="overflow-scroll h-[90%] px-2">
            {
            (tasks.length) ? 
            tasks.map((x,i) => <TaskCard task={x} id={i} />)
            :
            <p
              className="mx-auto text-gray-500 text-xl"
            >No upcoming tasks</p>
            }
          </section>
        </section>

        <section
        className="w-full h-[300px] mb-10 py-2"
        >
          <OptionHeader 
            text="Companies" 
            options={[<OptionButton key="add-company" Icon={FaPlus} OptionContent={CreateCompanyForm} />]}
          />
          <section className="w-full h-[90%] overflow-scroll flex flex-col px-2">
            {
            (companies.length) ? 
            companies.map(x => <CompanyShort company={x} key={x._id} />)
            :
            <p
              className="mx-auto text-gray-500 text-xl"
            >No companies</p>
            }
          </section>
        </section>

      </section>

    </section>
  )
}

function CompanyShort({company}) {
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

export default Dashboard