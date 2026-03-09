import Navbar from "./Navbar"

function Header() {
  return (
    <header className="site-header">

      <div className="header-inner">

        <div className="brand">

          <img
            src="/images/logga1.png"
            alt="Lillmusties logotyp"
            className="logo"
          />

          <div className="brand-text">
            <h1>Lillmusties Kennel</h1>
            <span className="tagline">
              Svensk Lapphund sedan 1971
            </span>
          </div>

        </div>

      </div>

      <Navbar />

    </header>
  )
}

export default Header