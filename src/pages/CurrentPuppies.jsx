function CurrentPuppies() {
  return (
    <main>


      <h2 className="page-title">Aktuella kullar</h2>

      <div className="aktuella-image">
        <img
          src="../public/images/valp1.jpg"
          alt="Slumpad valp"
        />
      </div>

      <section className="aktuella-text">

        <p>
          Hos Lillmusties Kennel växer våra valpar upp i trygg hemmiljö där
          närhet, omsorg och daglig kontakt är en självklar del av vardagen.
          Vi lägger stor vikt vid socialisering och mental stabilitet redan
          från första dagen.
        </p>

        <p>
          Nedan presenterar vi våra senaste valpkullar hos Lillmusties
          Kennel. Här hittar du information om föräldradjur, födelsedatum
          och antal valpar samt uppdateringar kring kullarnas utveckling.
        </p>

      </section>

      <h3 className="aktuella-text">Se valparna</h3>

      <div className="valp-scroll">

        <img src="../public/images/valp1.jpg" alt="Valp 1" />
        <img src="../public/images/valp2.jpg" alt="Valp 2" />
        <img src="../public/images/valp3.jpg" alt="Valp 3" />
        <img src="../public/images/valp4.jpg" alt="Valp 4" />
        <img src="../public/images/tidigarekullar.jpg" alt="Valp 5" />

      </div>

      <div className="aktuella-text">
        <p>
          Är du intresserad av en valp eller vill veta mer om kommande kullar
          är du välkommen att kontakta oss.
        </p>
      </div>

    </main>
  )
}

export default CurrentPuppies