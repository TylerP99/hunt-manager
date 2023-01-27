import { useState } from 'react'

import EditCompanyForm from './forms/EditCompanyForm';
import DeleteCompanyForm from './forms/DeleteCompanyForm';

function SettingsMenu() {

    const [deleteOpen, setDeleteOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);

    const toggleDeleteOpen = () => setDeleteOpen(!deleteOpen);
    const toggleUpdateOpen = () => setUpdateOpen(!updateOpen);

  return (
    <div
      className="p-4 min-h-[300px]"
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
                <DeleteCompanyForm />
            </section>
            }
            {
            updateOpen &&
            <section>
                <p
                className="cursor-pointer w-fit mb-2"
                onClick={toggleUpdateOpen}
                >&lt; Back</p>
                <EditCompanyForm />
            </section>
            }
        </div>
    </div>
  )
}

export default SettingsMenu