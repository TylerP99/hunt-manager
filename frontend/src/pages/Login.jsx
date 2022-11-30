import {useState} from "react";

function Login() {

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  // Form state destructured for better readablilty and less repeating
  const {email, password} = formData;

  // Change function for managing form state as controlled elements
  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  }

  // Submit function for form
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  }

  return (
    <>
    <div>Login</div>
    <form onSubmit={onSubmit}>
      <section>
        <label htmlFor="email">Email:</label>
          <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={onChange}
          />
      </section>
      <section>
        <label htmlFor="password">Password:</label>
        <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={onChange}
        />
      </section>
      <button type="submit">Log In</button>
    </form>
    </>
  )
}

export default Login