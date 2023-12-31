import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CelebritiesPage from "./page/CelebritiesPage";
import CelebrityDetailPage from "./page/CelebrityDetailPage";
import RandomCelebrityPage from "./page/RandomCelebrityPage";
import TvSpeakersPage from "./page/TvSpeakersPage";
import CopyrightPage from "./page/CopyrightPage";
import FormMessagePage from "./page/FormMessagePage";
import LikesPage from "./page/LikesPage";
import CocktailsPage from "./page/CocktailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celebrities" element={<CelebritiesPage />} />
        <Route path="/celebrity/:id" element={<CelebrityDetailPage />} />
        <Route path="/celebrities/random" element={<RandomCelebrityPage />} />
        <Route path="/speakers" element={<TvSpeakersPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="/message" element={<FormMessagePage />} />
        <Route path="/likes" element={<LikesPage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
