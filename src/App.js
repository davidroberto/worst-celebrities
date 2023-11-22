import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CelebritiesPage from "./page/CelebritiesPage";
import CelebrityDetailPage from "./page/CelebrityDetailPage";
import RandomCelebrityPage from "./page/RandomCelebrityPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celebrities" element={<CelebritiesPage />} />
        <Route path="/celebrity/:id" element={<CelebrityDetailPage />} />
        <Route path="/celebrities/random" element={<RandomCelebrityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
