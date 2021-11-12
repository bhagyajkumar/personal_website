import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./app.css"
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router >
      <NavBar />
      <Container className="text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
