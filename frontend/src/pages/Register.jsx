import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

import {register, reset} from "../features/auth/authSlice";


function Register() {

  const inputStyles = "py-2 px-3 border focus:border-lightBlue border-2";
  const labelStyles = "underline mb-1";
  const formGroupStyles = "flex flex-col mb-5";
  const buttonStyles = "text-white bg-auto bg-lightBlue px-5 py-2 border rounded-lg hover:underline hover:bg-lighterBlue";

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  })

  // Form state destructured for better readablilty and less repeating
  const {username, email, password, password2} = formData;

  // Used for redirects
  const navigate = useNavigate();

  // Used for updating state
  const dispatch = useDispatch();

  // Get auth state
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);

  useEffect(() => {
    // If thre is an error, display a toast
    if(isError) {
        toast.error(message);
    }
    // If action is successful or there is already a user, go to dashboard
    if(isSuccess || user) {
        navigate("/");
    }

    // Reset state
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

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
    
    if(password !== password2) {
        toast.error("Passwords must match")
    }
    else {
        const userData = {
            username, 
            email, 
            password,
            password2,
        }

        dispatch(register(userData));
    }
  }

  return (
    <section className="text-xl max-w-7xl mx-auto">
      <h1 className="text-4xl w-fit font-bold mx-auto mb-5">
        Register
      </h1>
      <form className="max-w-4xl mx-auto p-10 border-4 border-blue rounded-xl" onSubmit={onSubmit}>
        <section className={formGroupStyles}>
          <label 
          className={labelStyles}
          htmlFor="username">
            Username:
          </label>
          <input
            className={inputStyles}
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={onChange}
          />
        </section>

        <section className={formGroupStyles}>
          <label 
          className={labelStyles}
          htmlFor="email">
            Email:
          </label>
          <input
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
          <label 
          className={labelStyles}
          htmlFor="password">
            Password:
          </label>
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

        <section className={formGroupStyles}>
          <label 
          className={labelStyles}
          htmlFor="password2">
            Confirm Password:
          </label>
          <input
            className={inputStyles}
            id="password2"
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={onChange}
          />
        </section>

        <button className={buttonStyles} type="submit">Register</button>

      </form>
    </section>
  )
}

export default Register