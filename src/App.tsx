import "./App.css";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import SectorDetails from "./components/SectorDetails";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/sector/:id" element={<SectorDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
