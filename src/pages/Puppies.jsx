function Puppies() {
  return (
    <main>

      <h2 className="rubrik-omoss">Valpar</h2>

      <div className="valp-navigation">

       <Link to="/aktuella-kullar" className="valp-card">
			<img src="/images/aktuellakullar.jpg" alt="Aktuella kullar" />
			<span>Aktuella kullar</span>
		</Link>

		<Link to="/planerade-kullar" className="valp-card">
			<img src="/images/Planeradekullar.jpg" alt="Planerade kullar" />
			<span>Planerade kullar</span>
		</Link>

		<Link to="/tidigare-kullar" className="valp-card">
			<img src="/images/tidigarekullar.jpg" alt="Tidigare kullar" />
			<span>Tidigare kullar</span>
		</Link>
      </div>

      <div className="puppy">

        <h3>Är ni intresserade av att köpa en svensk lapphund?</h3>

        <p>
          Då är ni varmt välkomna till Lillmusties Kennel.
          Våra valpar levereras tidigast vid åtta veckors ålder
          och är då registrerade i Svenska Kennelklubben.
        </p>

      </div>

    </main>
  )
}

export default Puppies