import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ExercisePage from "./pages/ExercisePage";
import LanguagePage from "./pages/LanguagePage";
import ArtPage from "./pages/ArtPage";
import MusicPage from "./pages/MusicPage";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/language" element={<LanguagePage />} />
          <Route path="/exercise" element={<ExercisePage />} />
        </Routes>
      </BrowserRouter>
    );
  }
  