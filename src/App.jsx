import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Outlet } from "react-router";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router> 
    </>
  )
}

export default App
