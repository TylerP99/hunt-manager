import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Company from "./pages/Company";

import Header from "./components/Header";
import Footer from "./components/Footer";

import RequireAuth from "./features/auth/RequireAuth";

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
          url: "https://linkedin.com/youtubejobfakelink",
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
          url: "https://linkedin.com/youtubejobfakelink",
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
      _id: 2,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "https://linkedin.com/youtubejobfakelink",
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
      _id: 3,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "https://linkedin.com/youtubejobfakelink",
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
      _id: 4,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "https://linkedin.com/youtubejobfakelink",
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
      _id: 5,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "https://linkedin.com/youtubejobfakelink",
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
      _id: 6,
      name: "Youtube",
      description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      websiteURL: "www.youtube.com",
      positions: [
        {
          name: "Software Engineer",
          description: "MERN stack backend focused developer",
          source: "indeed",
          url: "https://linkedin.com/youtubejobfakelink",
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
          <main 
            className="max-w-7xl mx-auto w-[95%]"
          >
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} /> 
              <Route element={<RequireAuth/>} >
                <Route path="/dashboard" element={<Dashboard companies = {companies} />} />
                <Route path="/companies/:id" element={<Company companies = {companies} />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;