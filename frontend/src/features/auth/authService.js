import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

// Register user
const register = async (userData) => {
    const res = await axios.post(API_URL + "create", userData);

    if(res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
}

// Log user in
const login = async (userData) => {
    const res = await axios.post(API_URL + "authenticate", userData);

    if(res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
}

const logout = async () => {
    const res = await axios.delete(API_URL + "logout");

    localStorage.removeItem("user");
}

const authService = {
    register,
    login,
    logout,
}

export default authService;