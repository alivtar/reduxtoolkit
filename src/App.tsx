import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/contact"}>Contact</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
