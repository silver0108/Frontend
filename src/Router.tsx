import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArtPage from "./pages/ArtPage";
import CloseDistanceTeacherPage from "./pages/CloseDistanceTeacherPage";
import ExercisePage from "./pages/ExercisePage";
import Home from "./pages/Home";
import LanguagePage from "./pages/LanguagePage";
import MusicPage from "./pages/MusicPage";
import PopularTeacherPage from "./pages/PopularTeacherPage";
import Profile from "./pages/Profile";
import RecommendedTeacherPage from "./pages/RecommendedTeacherPage";
import Writing from "./pages/Writing";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/language" element={<LanguagePage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/close-distance" element={<CloseDistanceTeacherPage />} />
          <Route path="/recommended-teacher" element={<RecommendedTeacherPage />} />
          <Route path="/popular-teacher" element={<PopularTeacherPage />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/writing" element={<Writing/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/writing" element={<Writing/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  