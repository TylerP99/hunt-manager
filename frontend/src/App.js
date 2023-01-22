import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const companies = [
    {
      _id: 0,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "linkedin.com/youtubejobfakelink",
        },
      ],
      connections: [
        {
          name: "Fred",
          about: "Hiring manager at youtube, likes hiking",
          role: "Hiring manager",
          email: "fred@youtube.com",
          linkedin: null,
          twitter: null,
          firstMessage: null,
        }
      ]
    },
    {
      _id: 1,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "linkedin.com/youtubejobfakelink",
        },
      ],
      connections: [
        {
          name: "Fred",
          about: "Hiring manager at youtube, likes hiking",
          role: "Hiring manager",
          email: "fred@youtube.com",
          linkedin: null,
          twitter: null,
          firstMessage: null,
        }
      ]
    },
    {
      _id: 1,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "linkedin.com/youtubejobfakelink",
        },
      ],
      connections: [
        {
          name: "Fred",
          about: "Hiring manager at youtube, likes hiking",
          role: "Hiring manager",
          email: "fred@youtube.com",
          linkedin: null,
          twitter: null,
          firstMessage: null,
        }
      ]
    },
    {
      _id: 1,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "linkedin.com/youtubejobfakelink",
        },
      ],
      connections: [
        {
          name: "Fred",
          about: "Hiring manager at youtube, likes hiking",
          role: "Hiring manager",
          email: "fred@youtube.com",
          linkedin: null,
          twitter: null,
          firstMessage: null,
        }
      ]
    },
    {
      _id: 1,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "linkedin.com/youtubejobfakelink",
        },
      ],
      connections: [
        {
          name: "Fred",
          about: "Hiring manager at youtube, likes hiking",
          role: "Hiring manager",
          email: "fred@youtube.com",
          linkedin: null,
          twitter: null,
          firstMessage: null,
        }
      ]
    },
    {
      _id: 1,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "linkedin.com/youtubejobfakelink",
        },
      ],
      connections: [
        {
          name: "Fred",
          about: "Hiring manager at youtube, likes hiking",
          role: "Hiring manager",
          email: "fred@youtube.com",
          linkedin: null,
          twitter: null,
          firstMessage: null,
        }
      ]
    },
    {
      _id: 1,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "linkedin.com/youtubejobfakelink",
        },
      ],
      connections: [
        {
          name: "Fred",
          about: "Hiring manager at youtube, likes hiking",
          role: "Hiring manager",
          email: "fred@youtube.com",
          linkedin: null,
          twitter: null,
          firstMessage: null,
        }
      ]
    },
  ];

  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/dashboard" element={<Dashboard companies = {companies} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
