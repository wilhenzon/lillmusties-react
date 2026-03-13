import PuppySpin from "../components/PuppySpin"
function CurrentPuppies() {
  return (
    <main>


      <h2 className="page-title">Aktuella kullar</h2>

      <div className="aktuella-image">
        <PuppySpin
          images={[
            "../public/images/valp1.jpg",
            "../public/images/valp2.jpg",
            "../public/images/valp3.jpg",
            "../public/images/valp4.jpg",
            "../public/images/tidigarekullar.jpg"
          ]}
        />
      </div>

      <section className="aktuella-text">

        <p>
          Hos Lillmusties Kennel växer våra valpar upp i trygg hemmiljö där närhet,
				 omsorg och daglig kontakt är en självklar del av vardagen. Vi lägger stor 
				 vikt vid socialisering och mental stabilitet redan från första dagen, för 
				 att ge valparna de bästa förutsättningarna för ett harmoniskt och tryggt liv. 
				 Varje valpkull följs noggrant från födseln och genom hela uppväxten, med 
				 regelbundna uppdateringar och bilder som visar hur valparna utvecklas vecka 
				 för vecka. Valparna får en lugn och trygg start i livet tillsammans med sin 
				 mamma och i nära kontakt med oss. Genom lek, vila och successiv miljöträning 
				 vänjer sig valparna tidigt vid olika intryck och situationer, vilket bidrar 
				 till en stabil grund inför framtiden. Vi strävar efter att varje valp ska få 
				 växa upp i en miljö som präglas av trygghet, respekt och förståelse för 
				 individens behov.
        </p>

        <p>
          Nedan presenterar vi våra senaste valpkullar hos Lillmusties Kennel. Här 
				hittar du information om föräldradjur, födelsedatum och antal valpar samt 
				uppdateringar kring kullarnas utveckling. Sidan uppdateras löpande när nya 
				kullar föds, utvecklas eller planeras. Är du intresserad av en valp eller vill 
				veta mer om kommande kullar är du varmt välkommen att kontakta oss.
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