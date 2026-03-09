import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Dogs from "./pages/Dogs"
import Puppies from "./pages/Puppies"
import Contact from "./pages/Contact"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/om-oss" element={<About />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App