function Landing({companies}) {
  return (
    <section>
      <h1>Hello, Username!</h1>
      <section>
        Upcoming Stuff
      </section>

      <section>
        <CompanyShort />
      </section>
    </section>
  )
}

function CompanyShort({company}) {
  return(
    <h2>Company name</h2>
  )
}

export default Landing