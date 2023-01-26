import {useState} from 'react'

function CreateConnectionForm() {

  const fieldgroupStyle = "flex flex-col mb-3";
  const labelStyle = "mb-0.5";
  const inputStyle = "text-lg border-2 border-blue rounded-md p-1";

  const [formData, setFormData] = useState({
    name: "",
    about: "",
    role: "",
    email: "",
    twitter: "",
    linkedin: "",
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
      >Create new Connection</h3>
      <form
        onSubmit={handleSubmit}
      >

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='name'
          >Name of Connection</label>
          <input
            className={inputStyle}
            id='name'
            name='name'
            type='text'
            placeholder='Name of Connection'
            value={formData.name}
            onChange={handleChange}
          />
        </section>

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='about'
          >About</label>
          <textarea
            className={inputStyle + " " + "  resize-none overflow-y-scroll" }
            id='about'
            name='about'
            placeholder='Brief about of Connection'
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
            htmlFor='role'
          >Role of Connection</label>
          <input
            className={inputStyle}
            id='role'
            name='role'
            type='text'
            placeholder='Role of Connection (i.e. Indeed, Linkedin, etc)'
            value={formData.role}
            onChange={handleChange}
          />
        </section>

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='email'
          >Email of Connection</label>
          <input
            className={inputStyle}
            id='email'
            name='email'
            type='email'
            placeholder='Email of Connection Post'
            value={formData.email}
            onChange={handleChange}
          />
        </section>

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='twitter'
          >Twitter of Connection</label>
          <input
            className={inputStyle}
            id='twitter'
            name='twitter'
            type='text'
            placeholder='Twitter of Connection Post'
            value={formData.twitter}
            onChange={handleChange}
          />
        </section>

        <section
          className={fieldgroupStyle}
        >
          <label
            className={labelStyle}
            htmlFor='linkedin'
          >Linkedin of Connection</label>
          <input
            className={inputStyle}
            id='linkedin'
            name='linkedin'
            type='text'
            placeholder='Linkedin of Connection Post'
            value={formData.linkedin}
            onChange={handleChange}
          />
        </section>

        <button 
        className="mt-8 block mx-auto w-3/4 border-2 mb-2 p-1 rounded-md border-blue text-blue cursor-pointer hover:border-orange hover:text-orange hover:bg-slate-100/90"
        type='submit'
        >Create Connection</button>

      </form>
    </div>
  )
}

export default CreateConnectionForm