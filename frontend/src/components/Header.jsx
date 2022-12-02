import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"

import {Link} from "react-router-dom";

const headerContainerStyles = "text-lg max-w-full py-2 mb-10 shadow-md";

const navStyles = "flex justify-between max-w-7xl mx-auto";

const logoStyles = " text-darkBlue font-bold text-2xl";

const ulStyles = "flex justify-evenly space-x-10";

const linkStyles = "flex items-center space-x-2 p-1 hover:text-lightBlue";

function Header() {
  const signedIn = false;
  return (
    <header className={headerContainerStyles}>
      <nav className={navStyles}>
        <div>
          <Link className={linkStyles + logoStyles} to="/">Hunt Manager</Link>
        </div>
        <ul className={ulStyles}>
          {signedIn ? 
          (<li>
            <Link className={linkStyles} to="/logout">
              <FaSignOutAlt className="align-baseline" /> <p>Log out</p>
            </Link>
          </li>) 
          : 
          (<>
          <li>
            <Link className={linkStyles} to="/login">
              <FaSignInAlt className="align-baseline" /> <p>Login</p>
            </Link>
          </li>
          <li>
            <Link className={linkStyles} to="/register">
              <FaUser />
              <p>Register</p>
            </Link>
          </li>
          </>)
          }
        </ul>
        </nav>
    </header>
  )
}

export default Header;