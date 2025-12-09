import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Lessons from "./pages/Lessons.jsx";
import Flashcards from "./pages/Flashcards.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Admin from "./pages/Admin.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
