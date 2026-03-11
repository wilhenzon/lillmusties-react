import { Link } from "react-router-dom"

function PlannedPuppies() {
  return (
    <main>


      <h2 className="rubrik-omoss">Planerade kullar</h2>

      <section className="planned-wrapper">

        <div className="planned-card">

          <div className="planned-image">
            <img
              src="../public/images/framsida.jpg"
              alt="Svensk lapphund"
            />
          </div>

          <div className="planned-content">

            <h3 className="planned-header">
              I nuläget finns det inga planerade kullar.
            </h3>

            <p className="planned-text">
              Välkommen att kontakta oss om du vill veta mer om framtida planer.
            </p>

            <Link to="/kontakt" className="planned-button">
              Kontakta oss
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default PlannedPuppies