
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  return <Container>
    <Routes>
      <Route path="/home" element={  <Home />}/>
    </Routes>
</Container>
}

export default App
