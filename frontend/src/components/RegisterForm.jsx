import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {register, reset} from "../features/auth/authSlice";

function RegisterForm() {

    // Form state
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    // Form state destructured for better readablilty and less repeating
    const {username, email, password, password2} = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);

    useEffect(() => {
        if(isError) {
            toast.error(message);
        }
        if(isSuccess || user) {
            navigate("/");
        }

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
        <form onSubmit={onSubmit}>

            <section>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={onChange}
                />
            </section>

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

            <section>
                <label htmlFor="password2">Confirm Password:</label>
                <input
                    id="password2"
                    name="password2"
                    type="password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={onChange}
                />
            </section>

            <button type="submit">Register</button>

        </form>
    )
}

export default RegisterForm