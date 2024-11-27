import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Pages/home";
import About from "./Pages/about";
import ByType from "./Pages/byType";
import ByRestaurant from "./Pages/byRestaurant";
import NearYou from "./Pages/nearYou";
import SignUp from "./Pages/signup";
import Login from "./Pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/by-type" element={<ByType />} />
        <Route path="/by-restaurant" element={<ByRestaurant />} />
        <Route path="/near-you" element={<NearYou />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </Router>
  );
};


export default App;
