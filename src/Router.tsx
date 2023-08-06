import { BrowserRouter, Route, Routes } from "react-router-dom";

import Alarm from './pages/Alarm';
import AlarmList from './pages/AlarmList';
import ArtPage from "./pages/ArtPage";
import Chatting from './pages/Chatting';
import Class from "./pages/Class";
import CloseDistanceTeacherPage from "./pages/CloseDistanceTeacherPage";
import ExercisePage from "./pages/ExercisePage";
import Home from "./pages/Home";
import LanguagePage from "./pages/LanguagePage";
import LoginPage from "./pages/LoginPage";
import MusicPage from "./pages/MusicPage";
import PopularTeacherPage from "./pages/PopularTeacherPage";
import ProfilePage from "./pages/ProfilePage";
import RecommendedTeacherPage from "./pages/RecommendedTeacherPage";
import SignupPage from "./pages/SignupPage";
import Writing from "./pages/Writing";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/alarm-list" element={<AlarmList />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/art" element={<ArtPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/language" element={<LanguagePage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/close-distance" element={<CloseDistanceTeacherPage />} />
          <Route path="/recommended-teacher" element={<RecommendedTeacherPage />} />
          <Route path="/popular-teacher" element={<PopularTeacherPage />} />
          <Route path="/class" element={<Class/>} />
          <Route path="/writing" element={<Writing/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/chatting" element={<Chatting />} />
        </Routes>
      </BrowserRouter>
    );
  }
  