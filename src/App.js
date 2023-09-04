import Intro from "./component/Navbar/intro/Intro";
import NavBar from "./component/Navbar/NavBar";
import Skill from "./component/Navbar/Skills/Skill";
import Works from "./component/Works/Works";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./component/contact/Contact";
import Footer from "./component/Footer/Footer";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<Skill />} />
            <Route path="/portfolio" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
