import {MdWavingHand} from "react-icons/md";

function Dashboard({companies}) {

  const taskCardStyle = "border-4 rounded-md px-4 py-2 mb-2";

  return (
    <section className="max-w-7xl mx-auto">
      
      <h1 className="text-3xl ml-10 mb-6 flex items-center">
        <MdWavingHand className="mr-4" />
        Hello, <span className="font-bold ml-2">Tyler!</span>
      </h1>

      <section className="w-[95%] flex flex-col mx-auto">
        <section
        className="w-full h-[300px] mb-10 py-2"
        >
          <h2
          className="text-xl mb-2 border-b-2 w-[90%] mx-auto"
          >Upcoming tasks</h2>
          <section className="overflow-scroll h-[90%] px-5">
            <section
            className={taskCardStyle}
            >
              <h2>Send message to Fred</h2>
              <p>Jan 10, 2023 - 1:00PM</p>
            </section>
            <section
            className={taskCardStyle}
            >
              <h2>Send message to Fred</h2>
              <p>Jan 10, 2023 - 1:00PM</p>
            </section>
            <section
            className={taskCardStyle}
            >
              <h2>Send message to Fred</h2>
              <p>Jan 10, 2023 - 1:00PM</p>
            </section>
            <section
            className={taskCardStyle}
            >
              <h2>Send message to Fred</h2>
              <p>Jan 10, 2023 - 1:00PM</p>
            </section>
            <section
            className={taskCardStyle}
            >
              <h2>Send message to Fred</h2>
              <p>Jan 10, 2023 - 1:00PM</p>
            </section>
          </section>
        </section>

        <section
        className="w-full h-[300px] mb-10 py-2"
        >
          <h2
          className="text-xl mb-2 border-b-2 w-[90%] mx-auto"
          >Companies</h2>
          <section className="h-[500px] w-full overflow-scroll flex flex-col px-5">
            {companies.map(x => <CompanyShort company={x} key={x._id} />)}
          </section>
        </section>

      </section>

    </section>
  )
}

function CompanyShort({company}) {
  const {name, description} = company;
  return(
    <section className="w-full h-40 mb-5 shadow-xl p-5 bg-white">
      <h2 className="text-lg mb-3">
        <span className="text-orange">{name} </span> 
        &ndash;
        <span> {company.positions[0].name}</span>
      </h2>
      <p className="h-20 p-1 overflow-scroll">
        {description}
      </p>
    </section>
  )
}

export default Dashboard