import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="side-menu">

      <ul className="menu-list">

        <li>
          <Link to="/">Start</Link>
        </li>

        <li>
          <Link to="/om-oss">Om oss</Link>
        </li>

        <li>
          <Link to="/dogs">Våra hundar</Link>
        </li>

        <li>
          <Link to="/puppies">Valpar</Link>
        </li>

        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar