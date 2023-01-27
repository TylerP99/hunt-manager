import {MdWavingHand} from "react-icons/md";
import {FaPlus} from "react-icons/fa";

import List from "../components/List";
import OptionButton from "../components/OptionButton";
import CompanyCard from "../components/cards/CompanyCard";
import CreateCompanyForm from "../components/forms/CreateCompanyForm";
import TaskCard from "../components/cards/TaskCard";

function Dashboard({companies}) {

  const tasks = [
    {
      _id: 1,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 2,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 3,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 4,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 5,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 6,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 7,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 8,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 9,
      name: "Send message to Fred",
      dateTime: "Jan 10, 2023 - 1:00PM"
    },
    {
      _id: 10,
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

      <section className="w-[95%] flex flex-col justify-between mx-auto md:flex-row">
        <List
        className="md:w-[45%]"
        elements={tasks}
        Card={TaskCard}
        headerText="Upcoming Tasks"
        emptyText="No upcoming tasks"
        />

        <List
        className="md:w-[45%]"
        elements={companies}
        Card={CompanyCard}
        options={[<OptionButton key="add-company" Icon={FaPlus} OptionContent={CreateCompanyForm} />]}
        headerText="Companies"
        emptyText="No companies"
        />

      </section>

    </section>
  )
}

export default Dashboard