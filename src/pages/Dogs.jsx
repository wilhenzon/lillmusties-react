function Dogs() {
  return (
    <main>

      <h2 className="rubrik-omoss">Våra hundar</h2>

      <p className="intro-text">
        Här presenterar vi våra tikar, hanar och de hundar som
        för alltid finns kvar i våra hjärtan.
      </p>

      <h3 className="section-title">Tikar</h3>

      <div className="hund-grid">

        <div className="hund-card">
          <img src="/images/prisma.jpg" alt="Prisma" />
          <div className="hund-info">
            <h4>Prisma</h4>
            <p>2009-10-23</p>
          </div>
        </div>

        <div className="hund-card">
          <img src="/images/Ofta.jpg" alt="Ofta" />
          <div className="hund-info">
            <h4>Online “Ofta”</h4>
            <p>2009-04-06</p>
          </div>
        </div>

        <div className="hund-card">
          <img src="/images/lucia.jpg" alt="Lucia" />
          <div className="hund-info">
            <h4>Lucia</h4>
            <p>2006-10-26</p>
          </div>
        </div>

      </div>

      <h3 className="section-title">Hanar</h3>

      <div className="hund-grid">

        <div className="hund-card">
          <img src="/images/pascal.jpg" alt="Pascal" />
          <div className="hund-info">
            <h4>Pascal</h4>
            <p>2009-10-23</p>
          </div>
        </div>

        <div className="hund-card">
          <img src="/images/loffe.jpg" alt="Loffe" />
          <div className="hund-info">
            <h4>Loffe</h4>
            <p>2006-10-26</p>
          </div>
        </div>

        <div className="hund-card">
          <img src="/images/Goliat.jpg" alt="Goliat" />
          <div className="hund-info">
            <h4>Goliat</h4>
            <p>2000-05-03</p>
          </div>
        </div>

      </div>

	  <p className="memory-text">
        Hundar som betytt mycket för oss och som alltid finns kvar i våra hjärtan.
      </p>

      <section className="hund-grid">

        <div className="hund-card">
          <img src="/images/mustie.jpg" alt="Mustie" />
          <div className="hund-info">
            <h4>Mustie</h4>
            <p>Ingen anged födelsedag</p>
          </div>
        </div>

        <div className="hund-card">
          <img src="/images/e-mina.jpg" alt="E-Mina" />
          <div className="hund-info">
            <h4>E-Mina</h4>
            <p>2000-04-30</p>
          </div>
        </div>

        <div className="hund-card">
          <img src="/images/Ronja.jpg" alt="Ronja" />
          <div className="hund-info">
            <h4>Ronja</h4>
            <p>1996-10-26</p>
          </div>
        </div>

        <div className="hund-card">
          <img src="/images/ella.jpg" alt="Nilla Ella" />
          <div className="hund-info">
            <h4>Nilla “Ella”</h4>
            <p>1992-??-??</p>
          </div>
        </div>

        <div className="hund-card">
          <img src="/images/Vanja.jpg" alt="Vanja" />
          <div className="hund-info">
            <h4>Vanja</h4>
            <p>1987-??-??</p>
          </div>
        </div>

      </section>

    </main>
  )
}

export default Dogs