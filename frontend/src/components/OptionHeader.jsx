import React from 'react'

function OptionHeader({text, options}) {
  return (
    <div
    className="mb-2 border-b-2 mx-auto flex justify-between items-center"
    >
        <h2
        className="text-xl"
        >{text}</h2>
        <div
          className='flex items-center gap-3'
        >
            {options && options.map(x => x)}
        </div>
    </div>
  )
}

export default OptionHeader