import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

// Register user
const register = async (userData) => {
    const res = await axios.post(API_URL + "create", userData);

    if(res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
}

const authService = {
    register,
}

export default authService;