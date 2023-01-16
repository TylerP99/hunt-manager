import { useState } from "react";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"

import { Link } from "react-router-dom";

const headerContainerStyles = "text-lg max-w-full p-2 mb-10 shadow-md";

const navStyles = "flex justify-between max-w-7xl mx-auto";

const logoStyles = " text-darkBlue font-bold text-2xl";

const ulStyles = "flex justify-evenly space-x-10";

const linkStyles = "flex items-center space-x-2 p-1 hover:text-lightBlue";

function Header() {

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const signedIn = false;
  return (
    <header className={headerContainerStyles}>
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
              <div className="pt-2 font-bold">
                Hunt Manager
              </div>

              <div className="hidden md:flex space-x-6">
                {signedIn ? 
                  (
                    <Link className={linkStyles} to="/logout">
                      <FaSignOutAlt className="align-baseline" /> <p>Log out</p>
                    </Link>
                  ) 
                  : 
                  (<>
                    <Link className={linkStyles} to="/login">
                      <FaSignInAlt className="align-baseline" /> <p>Login</p>
                    </Link>
                    <Link className={linkStyles} to="/register">
                      <FaUser />
                      <p>Register</p>
                    </Link>
                  </>)
                }
              </div>
          
              <button id="menu-btn" className={"block hamburger md:hidden focus:outline-none" + (navOpen ? " open" : "")} onClick={toggleNav}>
                  <div className="hamburger-top"></div>
                  <div className="hamburger-middle"></div>
                  <div className="hamburger-bottom"></div>
              </button>

          </div>

          <div className="md:hidden">
              <div id="menu" className={"absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" + (navOpen ? "" : " hidden") }>
                {signedIn ? 
                  (
                    <Link className={linkStyles} to="/logout">
                      <FaSignOutAlt className="align-baseline" /> <p>Log out</p>
                    </Link>
                  ) 
                  : 
                  (<>
                    <Link className={linkStyles} to="/login">
                      <FaSignInAlt className="align-baseline" /> <p>Login</p>
                    </Link>
                    <Link className={linkStyles} to="/register">
                      <FaUser />
                      <p>Register</p>
                    </Link>
                  </>)
                }
              </div>
          </div>

        </nav>
    </header>
  )
}

export default Header;