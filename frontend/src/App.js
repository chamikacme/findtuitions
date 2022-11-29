import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="circle" style={{ top: "-30%", right: "-8rem" }}></div>
      <div className="circle" style={{ top: "36%", left: "-8rem" }}></div>
      <Router>
        <div className="page-container">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
