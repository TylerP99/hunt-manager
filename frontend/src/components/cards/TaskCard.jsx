import React from 'react'

function TaskCard({task}) {

  const {name, dateTime} = task;

  return (
    <div
      className="flex justify-between items-center border-2 rounded-sm px-4 py-2 mb-2"
    >
        <section>
            <h4>{name}</h4>
            <p>{dateTime}</p>
        </section>
        <section>
            <button
              className="border-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
            >Mark Complete</button>
        </section>
    </div>
  )
}

export default TaskCard