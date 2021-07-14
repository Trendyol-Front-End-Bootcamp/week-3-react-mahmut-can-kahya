import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { theme } from "./core/theme";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import { AppUrls } from "./utils/AppUrls";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar title="Rick & Morty Characters" />
        <Switch>
          <Route exact path={AppUrls.Home}>
            <HomePage />
          </Route>
          <Route exact path={AppUrls.Detail + "/:id"}>
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
