import React from 'react'

function DeletePositionForm() {
  return (
    <div>
        <h3>Delete Position</h3>
        <form
        className=""
        >
            <p
            className="mb-2"
            >Are you sure you want to delete this position?</p>
            <section
            className="flex items-center mb-2"
            >
                <input
                className="mr-3"
                id="confirm"
                name="confirm"
                type="checkbox"
                required/>
                <label htmlFor="confirm">Check to confirm</label>
            </section>
            <button 
            className="block mx-auto w-3/4 border-2 mb-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
            type="submit"
            >Delete Position</button>
        </form>
    </div>
  )
}

export default DeletePositionForm