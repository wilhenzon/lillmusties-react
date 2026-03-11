function Home() {
  return (
    <main>

      <h2 className="page-title">
        Välkommen till Lillmusties kennel
      </h2>

      <div className="framsida">
        <video autoPlay loop muted controls>
          <source src="../public/images/lapphund.mp4" type="video/mp4" />
        </video>
      </div>
	 <div className="start">

        <div className="intro">
          	<p>Vi är Ingrid och Gert på Lillmusties Kennel, en familjeuppfödning av svensk lapphund med rötter ända tillbaka till 1971. Våra hundar är självklara familjemedlemmar och vårt arbete med rasen präglas av engagemang, kunskap och lång erfarenhet. Sedan vår första valpkull 1994 har vi fött upp mentalt stabila, friska hundar med framgångar på utställningar i Sverige och Europa. Mentalitet, funktion och rasens framtid står alltid i centrum för vårt arbete. Vi följer Svenska Kennelklubbens regler och erbjuder trygg vägledning till våra valpköpare, från första kontakt och genom hela hundens liv. </p>


          <p>
            Är du intresserad av svensk lapphund är du varmt
            välkommen att kontakta oss.
          </p>

          <a href="/om-oss" className="btn">
            Om oss
          </a>
        </div>

        <aside className="news">
          <h3>Nyheter</h3>

          <h4>Best in Show Veteran i Sofiero</h4>

          <p>
            Lillmusties Goliat, 12,5 år, vann Best in Show
            Veteran på Svenska Kennelklubbens internationella
            utställning i Sofiero.
          </p>
        </aside>

      </div>
    </main>
  )
}

export default Home