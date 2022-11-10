import { Route, Router, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="flex-center">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
