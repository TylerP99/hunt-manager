function Dashboard({companies}) {
  return (
    <section className="max-w-7xl mx-auto">
      
      <h1 className="text-3xl ml-10 mb-10">
        Hello, <span className="font-bold">Tyler!</span>
      </h1>

      <section className="flex">

        <section className="border w-1/4">
          <section>
            <h2>Send message to Fred</h2>
            <p>Jan 10, 2023 - 1:00PM</p>
          </section>
          <section>
            <h2>Send message to Fred</h2>
            <p>Jan 10, 2023 - 1:00PM</p>
          </section>
          <section>
            <h2>Send message to Fred</h2>
            <p>Jan 10, 2023 - 1:00PM</p>
          </section>
        </section>

        <section className="h-96 w-3/4 overflow-scroll flex justify-evenly flex-wrap border px-10 py-5">
          {companies.map(x => <CompanyShort company={x} key={x._id} />)}
          <section className="w-2/5 h-40 mb-10 shadow-xl p-5 bg-white">
            Create New
          </section>
        </section>

      </section>

    </section>
  )
}

function CompanyShort({company}) {
  const {name, description} = company;
  return(
    <section className="w-2/5 h-40 mb-10 shadow-xl p-5 bg-white">
      <h2 className="text-lg mb-3">
        <span className="text-orange">{name} </span> 
        &ndash;
        <span> {company.positions[0].name}</span>
      </h2>
      <p className="h-20 overflow-scroll">
        {description}
      </p>
    </section>
  )
}

export default Dashboard