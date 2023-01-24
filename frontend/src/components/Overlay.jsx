import {useState} from 'react'

import {FaTimes} from "react-icons/fa";

function Overlay({
  Content = () => <p>No content to display</p>,
  open,
  toggleOverlay
}) {

  return (
    <div
      id="overlay-container"
      className={"absolute top-0 left-0 z-50 h-screen w-screen bg-slate-100/90" + " " + (open ? "" : "hidden") }
    >
        <div
          className='min-w-1/2 max-w-[800px] w-auto mx-auto mt-20'
        >
            <div 
            id='close-btn'
            className='mb-0.5' 
            onClick={toggleOverlay}
            ><FaTimes className='cursor-pointer' /></div>
            <div
                id="content-container"
                className='bg-white'
            >
                <Content/>
            </div>
        </div>
    </div>
  )
}

export default Overlay