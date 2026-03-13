import { useState } from "react"

function PuppySpin({ images }) {

  const [index, setIndex] = useState(0)

  function nextPuppy() {
    setIndex((index + 1) % images.length)
  }

  function prevPuppy() {
    setIndex((index - 1 + images.length) % images.length)
  }

  return (
    <div className="puppy-spin">

      <img
        src={images[index]}
        alt="Valp"
        className="puppy-image"
      />

      <div className="puppy-buttons">
        <button onClick={prevPuppy}>
          <img src="../public/images/pilvänster.png" alt="föregående valp" />
        </button>
<div className="puppy-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
        <button onClick={nextPuppy}>
          <img src="../public/images/pilhöger.png" alt="nästa valp" />
        </button>
      </div>

      

    </div>
  )
}

export default PuppySpin