import { Navbar } from "./companents/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./companents/Home";
import { Contact } from "./companents/Contact";
import { About } from "./companents/About";
import { Errorpage } from "./companents/Errorpage";
import { Register } from "./companents/Registration";
import { Login } from "./companents/Login";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
