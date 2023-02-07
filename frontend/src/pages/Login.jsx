import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  const errorRef = useRef();

  const inputStyles = "py-2 px-3 border focus:border-lightBlue border-2";
  const labelStyles = "mb-1";
  const formGroupStyles = "flex flex-col mb-5";
  const buttonStyles = "block w-2/3 mx-auto text-white bg-auto bg-lightBlue px-5 py-2 border rounded-lg hover:underline hover:bg-lighterBlue";

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errorMessage, setErrorMessage] = useState("");

  const [login, {isLoading}] = useLoginMutation();

  // Form state destructured for better readablilty and less repeating
  const {email, password} = formData;


  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);



  // Change function for managing form state as controlled elements
  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  }

  // Submit function for form
  const onSubmit = async (e) => {
    e.preventDefault();

    try{
      const userData = await login(formData).unwrap();
      console.log(userData);
      dispatch(setCredentials({...userData, email}));
      setFormData({email: "", password: ""});
      navigate("/dashboard");
    }
    catch(err) {
      if(!err?.originalStatus) {
        setErrorMessage("No server response");
      }
      else if(err.originalStatus === 400) {
        setErrorMessage("Incorrect email or password");
      }
      else if(err.originalStatus === 401) {
        setErrorMessage("Unauthorized");
      }
      else {
        setErrorMessage("Login failed");
      }
      errorRef.current.focus();
    }
  }

  return (
    <>
    <section className="text-xl max-w-7xl mx-auto">
      <p 
      ref={errorRef}
      className={"" + " " + (errorMessage || "hidden")}
      >
        {errorMessage}
      </p>
      <form 
      className="max-w-4xl mx-auto p-10 pt-7 border-4 border-blue rounded-xl"
      onSubmit={onSubmit}>

          <h1 className="text-4xl border-b-2 border-blue text-center w-3/4 font-bold mx-auto mb-5">
            Login
          </h1>

        <section className={formGroupStyles}>
          <label className={labelStyles} htmlFor="email">Email:</label>
            <input
              ref={userRef}
              className={inputStyles}
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={onChange}
            />
        </section>
        <section className={formGroupStyles}>
          <label className={labelStyles} htmlFor="password">Password:</label>
          <input
              className={inputStyles}
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={onChange}
          />
        </section>
        <button className={buttonStyles} type="submit">Log In</button>
      </form>
      </section>
    </>
  )
}

export default Login