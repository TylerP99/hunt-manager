import React from 'react'

import OptionHeader from '../OptionHeader';
import TaskCard from '../cards/TaskCard';

function TaskList({tasks}) {
  return (
    <div
    className="mx-auto w-full h-[300px] mb-10 py-2"
    >
        <OptionHeader text="Upcoming Tasks"/>
        <section className="overflow-scroll h-[90%] px-2">
          {
          (tasks.length) ? 
          tasks.map((x,i) => <TaskCard task={x} key={i} />)
          :
          <p
            className="mx-auto text-gray-500 text-xl"
          >No upcoming tasks</p>
          }
        </section>
    </div>
  )
}

export default TaskList