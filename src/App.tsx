import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="flex-center">
      <Switch>
        <Route path="/news/:id">
          <NewsPage />
        </Route>
        <Route path="/" >
          <MainPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
