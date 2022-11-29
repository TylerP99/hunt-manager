import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"

import {Link} from "react-router-dom";

const linkStyles = "flex items-center space-x-2 p-1 hover:text-gray-500";

function Header() {
  return (
    <header className="flex justify-around text-2xl">
      <div>
        <Link className={linkStyles} to="/">Hunt Manager</Link>
      </div>
      <ul className="flex justify-evenly space-x-10">
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
      </ul>
    </header>
  )
}

export default Header;