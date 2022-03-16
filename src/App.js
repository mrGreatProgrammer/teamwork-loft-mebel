import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Baner from "./components/Baner/Baner";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Baner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        <Footer />
      </Router>
       
    </div>
  );
}

export default App;
