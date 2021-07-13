import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import { AppUrls } from "./utils/AppUrls";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={AppUrls.Home}>
          <HomePage />
        </Route>
        <Route exact path={AppUrls.Detail + "/:id"}>
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}
