import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { Outlet } from "react-router";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router> 
    </>
  )
}

export default App
