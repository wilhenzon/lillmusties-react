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

    </main>
  )
}

export default Home