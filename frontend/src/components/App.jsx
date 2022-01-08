import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookContainer from "./book/BookContainer";
import Layout from "./layout/Layout";
import Login from "./user/Login";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <BookContainer />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
