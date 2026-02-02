import { Routes, Route } from "react-router-dom";
import "./App.css";
//import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout />}>
            {/* Home är startsidan inuti Layout,default‑sidan för parent‑routen "/". */}
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
