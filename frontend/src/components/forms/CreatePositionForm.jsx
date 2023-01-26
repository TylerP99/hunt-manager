import {useState} from 'react'

function CreatePositionForm() {

  const fieldgroupStyle = "flex flex-col mb-3";
  const labelStyle = "mb-0.5";
  const inputStyle = "text-lg border-2 border-blue rounded-md p-1";

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    source: "",
    url: "",
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
      >Create new Position</h3>
      <form
        onSubmit={handleSubmit}
      >

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='name'
          >Name of Position</label>
          <input
            className={inputStyle}
            id='name'
            name='name'
            type='text'
            placeholder='Name of Position'
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
            placeholder='Brief Description of Position'
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
            htmlFor='source'
          >Source of Position</label>
          <input
            className={inputStyle}
            id='source'
            name='source'
            type='text'
            placeholder='Source of Position (i.e. Indeed, Linkedin, etc)'
            value={formData.source}
            onChange={handleChange}
          />
        </section>

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='url'
          >URL to Position Post</label>
          <input
            className={inputStyle}
            id='url'
            name='url'
            type='url'
            placeholder='URL of Position Post'
            value={formData.url}
            onChange={handleChange}
          />
        </section>

        <button 
        className="mt-8 block mx-auto w-3/4 border-2 mb-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
        type='submit'
        >Create Position</button>

      </form>
    </div>
  )
}

export default CreatePositionForm