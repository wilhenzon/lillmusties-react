import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Dogs from "./pages/Dogs"
import Puppies from "./pages/Puppies"
import Contact from "./pages/Contact"
import About from "./pages/About"
import CurrentPuppies from "./pages/CurrentPuppies"
import PlannedPuppies from "./pages/PlannedPuppies"
import PreviousPuppies from "./pages/PreviousPuppies"


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/våra-hundar" element={<Dogs />} />
        <Route path="/valpar" element={<Puppies />} />
        <Route path="/aktuella-kullar" element={<CurrentPuppies />} />
        <Route path="/planerade-kullar" element={<PlannedPuppies />} />
        <Route path="/tidigare-kullar" element={<PreviousPuppies />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/om-oss" element={<About />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App