import { Link } from "react-router-dom"

function PreviousPuppies() {
  return (
    <main>

      <div className="sub-nav">
        <Link to="/">Start</Link>
        <span>/</span>
        <Link to="/puppies">Valpar</Link>
        <span>/</span>
        <span className="current">Tidigare kullar</span>
      </div>

      <h2 className="rubrik-omoss">Tidigare kullar</h2>

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h3>Sidan är under konstruktion</h3>
        <p>
          Den här sidan håller just nu på att byggas.
          Titta gärna tillbaka senare.
        </p>
      </section>

    </main>
  )
}

export default PreviousPuppies