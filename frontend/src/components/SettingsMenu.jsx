import { useState } from 'react'

function SettingsMenu() {

    const [deleteOpen, setDeleteOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);

    const toggleDeleteOpen = () => setDeleteOpen(!deleteOpen);
    const toggleUpdateOpen = () => setUpdateOpen(!updateOpen);

  return (
    <div
      className="p-4"
    >
        <h3
          className="border-b-2 text-2xl mb-2"
        >Options</h3>
        {
        (deleteOpen || updateOpen) ||
        <section
          className="flex flex-col"
        >
            <button
              className="border-2 mb-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
              onClick={toggleUpdateOpen}
            >Edit Company</button>
            <button
              className="border-2 mb-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
              onClick={toggleDeleteOpen}
            >Delete Company</button>
        </section>
        }
        <div>
            {
            deleteOpen &&
            <section>
                <p
                className="cursor-pointer w-fit mb-2"
                onClick={toggleDeleteOpen}
                >&lt; Back</p>
                <form
                className=""
                >
                    <p
                    className="mb-2"
                    >Are you sure you want to delete this company, along with all positions, all connections, and all tasks associated with it? (This cannot be undone)</p>
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
                    >Delete Company</button>
                </form>
            </section>
            }
            {
            updateOpen &&
            <section>
                <p
                className="cursor-pointer w-fit mb-2"
                onClick={toggleUpdateOpen}
                >&lt; Back</p>
                <form>BAB</form>
            </section>
            }
        </div>
    </div>
  )
}

export default SettingsMenu