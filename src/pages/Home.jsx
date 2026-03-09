function Home() {
  return (
    <main>

      <h2 className="page-title">
        Välkommen till Lillmusties kennel
      </h2>

      <div className="framsida">
        <video autoPlay loop muted controls>
          <source src="/images/lapphund.mp4" type="video/mp4" />
        </video>
      </div>
	 <div className="start">

        <div className="intro">
          <p>
            Vi är Ingrid och Gert på Lillmusties Kennel, en
            familjeuppfödning av svensk lapphund med rötter
            ända tillbaka till 1971.
          </p>

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