import NavBar from "./components/navbar/NavBar";
import Homepage from "./pages/homepage/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/posts" element={<Homepage />} />
            <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
            <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/write" element={currentUser ? <Write /> : <Login />} />
            <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
          </Routes>
      </Router>
  );
}

export default App;
