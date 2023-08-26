// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Epik from "./pages/Epik";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
// Styles
import { StyledApp } from "./styles";

function App() {
  return (
    <StyledApp>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/epik" element={<Epik />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<ErrorPage />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
