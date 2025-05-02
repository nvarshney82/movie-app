import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Example route for home page */}
          <Route path="/favorites" element={<Favorites />} />
          {/* Example route for movies page */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
          {/* Catch-all route for 404 */}
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
