import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Writing from "./pages/Writing";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/writing" element={<Writing/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  