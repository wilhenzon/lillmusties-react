	import { Link } from "react-router-dom"

function Puppies() {
  return (
    <main>

      <h2 className="rubrik-omoss">Valpar</h2>

      <div className="valp-navigation">

       <Link to="/aktuella-kullar" className="valp-card">
			<img src="../public/images/aktuellakullar.jpg" alt="Aktuella kullar" />
			<span>Aktuella kullar</span>
		</Link>

		<Link to="/planerade-kullar" className="valp-card">
			<img src="../public/images/Planeradekullar.jpg" alt="Planerade kullar" />
			<span>Planerade kullar</span>
		</Link>

		<Link to="/tidigare-kullar" className="valp-card">
			<img src="../public/images/tidigarekullar.jpg" alt="Tidigare kullar" />
			<span>Tidigare kullar</span>
		</Link>
      </div>

      <div className="puppy">

        <h3>Är ni intresserade av att köpa en svensk lapphund?</h3>
			<p>Då är ni varmt välkomna till Lillmusties Kennel. Våra valpar levereras tidigast vid åtta veckors ålder och är då registrerade i Svenska Kennelklubben, veterinärbesiktigade, ID-märkta och dolda fel-försäkrade i tre år. Köpeavtal medföljer alltid. Med valpen följer även personlig information, en trygghetsfilt samt ett års kostnadsfritt medlemskap i Svenska Lapphundklubben för förstgångsköpare.
			Vi vill gärna träffa våra blivande valpköpare i förväg och finns alltid till hands även efter leverans. Vi hjälper gärna till med råd kring träning, såsom lydnad, agility och utställning. Tveka inte att kontakta oss och berätta gärna lite om er själva.
			</p>
	
			<p>Alltid varmt välkomna till Lillmusties Kennel.</p>
      </div>

    </main>
  )
}

export default Puppies