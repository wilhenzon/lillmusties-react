import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
   const [valpOpen, setValpOpen] = useState(false)

 

  return (
    <nav id="menu" className="side-menu">

      <a href="#" className="close-btn">→</a>

      <ul className="menu-list">

        <li>
          <Link to="/">Start</Link>
        </li>

        <li>
          <Link to="/om-oss">Om oss</Link>
        </li>

        <li>
          <Link to="/våra-hundar">Våra hundar</Link>
        </li>

        <li className="submenu-container">
          <div className="menu-row">
            <Link to="/valpar" className="menu-link-with-sub">Valpar</Link>
            <span className="plus-icon" onClick={() => setValpOpen(!valpOpen)}>+</span>
          </div>
          {valpOpen && (
            <ul className="submenu">
              <li><Link to="/aktuella-kullar">Aktuella kullar</Link></li>
              <li><Link to="/planerade-kullar">Planerade kullar</Link></li>
              <li><Link to="/tidigare-kullar">Tidigare kullar</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar