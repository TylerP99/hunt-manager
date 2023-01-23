import { useState } from 'react'

function SettingsMenu() {
  return (
    <div
      className="p-4"
    >
        <h3
          className="border-b-2 text-2xl mb-4"
        >Options</h3>
        <section
          className="flex flex-col hidden"
        >
            <button
              className="border-2 mb-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
            >Edit Company</button>
            <button
              className="border-2 mb-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
            >Delete Company</button>
        </section>
        <section>
            <p
              className="cursor-pointer w-fit"
            >&lt; Back</p>
            <form>
                <p>Are you sure you want to delete this company, along with all positions, all connections, and all tasks associated with it? (This cannot be undone)</p>
                <section>
                    <input name="confirm" type="checkbox" required/>
                    <label htmlFor="confirm">Check to confirm</label>
                </section>
                <button type="submit">Delete Company</button>
            </form>
        </section>
    </div>
  )
}

export default SettingsMenu