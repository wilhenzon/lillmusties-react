import Navbar from "./Navbar"
import { useLocation, Link } from "react-router-dom"

const routeNames = {
  "/": "Start",
  "/om-oss": "Om oss",
  "/våra-hundar": "Våra hundar",
  "/valpar": "Valpar",
  "/aktuella-kullar": "Aktuella kullar",
  "/planerade-kullar": "Planerade kullar",
  "/tidigare-kullar": "Tidigare kullar",
  "/kontakt": "Kontakt",
}

const parentRoutes = {
  "/aktuella-kullar": "/valpar",
  "/planerade-kullar": "/valpar",
  "/tidigare-kullar": "/valpar",
}

function Header() {
  const location = useLocation()
  const pageName = routeNames[location.pathname] || "Start"
  const parentPath = parentRoutes[location.pathname]
  const parentName = parentPath ? routeNames[parentPath] : null
  const isHome = location.pathname === "/"

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <img src="../public/images/logga1.png" alt="Lillmusties logotyp" className="logo" />
          <div className="brand-text">
            <h1>Lillmusties Kennel</h1>
            <span className="tagline">Svensk Lapphund sedan 1971</span>
          </div>
        </div>
        <a href="#menu" className="menu-button">
          <span className="icon">☰</span>
          <span className="text">Meny</span>
        </a>
      </div>

      <div className="sub-nav">
        {isHome ? (
          <span className="current">Start</span>
        ) : (
          <>
            <Link to="/">Start</Link>
            {parentName && parentPath && (
              <>
                <span className="breadcrumb-sep"> / </span>
                <Link to={parentPath}>{parentName}</Link>
              </>
            )}
            <span className="breadcrumb-sep"> / </span>
            <span className="current">{pageName}</span>
          </>
        )}
      </div>


<Navbar closeOnNavigate={true} />    
</header>
  )
}

export default Header