import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookContainer from "./book/BookContainer";
import Layout from "./layout/Layout";
import Login from "./user/Login";

const App = () => {
  return (
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
  );
};

export default App;
