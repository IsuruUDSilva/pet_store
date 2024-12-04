import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Home from "./pages/Home";
import ShoppingCart from "./pages/cart";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/home" element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
