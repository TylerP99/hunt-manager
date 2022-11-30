import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"

import {Link} from "react-router-dom";

const linkStyles = "flex items-center space-x-2 p-1 hover:text-lightBlue";

function Header() {
  const signedIn = false;
  return (
    <header className="text-lg border-b-4 max-w-full py-2">
      <nav className="flex justify-between max-w-7xl mx-auto">
        <div>
          <Link className={linkStyles} to="/">Hunt Manager</Link>
        </div>
        <ul className="flex justify-evenly space-x-10">
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