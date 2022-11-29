import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
