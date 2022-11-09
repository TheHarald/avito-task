import { Route, Router, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
