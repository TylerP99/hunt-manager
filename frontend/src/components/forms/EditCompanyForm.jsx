import {useState} from 'react'

function EditCompanyForm({data}) {

  const company = data;

  const fieldgroupStyle = "flex flex-col mb-3";
  const labelStyle = "mb-0.5";
  const inputStyle = "text-lg border-2 border-blue rounded-md p-1";

  const [formData, setFormData] = useState({
    name: company?.name || "",
    description: company?.description || "",
    websiteURL: company?.url || "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <div
      className='py-4 px-10 w-[95%] mx-auto'
    >
      <h3
        className='border-b-2 mb-4 text-2xl'
      >Edit Company</h3>
      <form
        onSubmit={handleSubmit}
      >

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='name'
          >Name of Company</label>
          <input
            className={inputStyle}
            id='name'
            name='name'
            type='text'
            placeholder='Name of Company'
            value={formData.name}
            onChange={handleChange}
          />
        </section>

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='description'
          >Description</label>
          <textarea
            className={inputStyle + " " + "  resize-none overflow-y-scroll" }
            id='description'
            name='description'
            placeholder='Brief Description of Company'
            rows="3"
            onChange={handleChange}
            value={formData.description}
          />
        </section>

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='websiteURL'
          >URL of Company Website</label>
          <input
            className={inputStyle}
            id='websiteURL'
            name='websiteURL'
            type='url'
            placeholder='URL of Company Website'
            value={formData.websiteURL}
            onChange={handleChange}
          />
        </section>

        <button 
        className="mt-8 block mx-auto w-3/4 border-2 mb-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
        type='submit'
        >Edit Company</button>

      </form>
    </div>
  )
}

export default EditCompanyForm