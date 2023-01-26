import {MdWavingHand} from "react-icons/md";
import {FaPlus} from "react-icons/fa";

import CompanyList from "../components/lists/CompanyList";
import TaskList from "../components/lists/TaskList";
import List from "../components/lists/List";
import OptionButton from "../components/OptionButton";
import CompanyCard from "../components/cards/CompanyCard";
import CreateCompanyForm from "../components/forms/CreateCompanyForm";

function Dashboard({companies}) {

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
        <TaskList tasks={tasks} />

        <CompanyList companies={companies} />

        <List
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