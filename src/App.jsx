import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Learning from "./pages/Learning"; // ✅ Capitalized
import Blog from "./pages/Blog";
import WealthWaveLanding from "./pages/WealthWaveLanding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WealthWaveLanding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Learning" element={<Learning />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;

