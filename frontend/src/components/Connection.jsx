import React from 'react'

function Connection({connection}) {

  const {name, role} = connection;

  return (
    <section>
      <div>{name}</div>
      <div>{role}</div>

    </section>
  )
}

export default Connection