function Contact() {
  return (
    <main>

      <h2 className="rubrik-omoss">Kontakta oss</h2>

      <div className="kontakt-layout">

        <div className="kontakt-image">
          <img
            src="../public/images/framsida.jpg"
            alt="Svensk lapphund"
          />
        </div>

        <div className="kontakt-form-wrapper">

          <form className="kontakt-form">

            <div className="form-row">

              <div className="form-group">
                <label>Namn *</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>E-post *</label>
                <input type="email" required />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Telefon/SMS *</label>
                <input
                  type="tel"
                  placeholder="+46 701234567"
                  required
                />
                <small>
                  Ange internationellt format utan inledande 0.
                </small>
              </div>

              <div className="form-group">
                <label>Jag vill få hjälp med *</label>

                <select required>

                  <option>Välj ett alternativ</option>
                  <option>Aktuell kull</option>
                  <option>Planerad kull</option>
                  <option>Allmän fråga</option>

                </select>

              </div>

            </div>

            <div className="form-group">
              <label>Meddelande *</label>
              <textarea rows="6" required />
            </div>

            <button type="submit" className="btn">
              Skicka
            </button>

          </form>

        </div>

      </div>

    </main>
  )
}

export default Contact