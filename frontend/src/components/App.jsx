import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookContainer from "./book/BookContainer";
import Layout from "./layout/Layout";
import Login from "./user/Login";
import { SnackbarProvider } from "notistack";
import Auth from "./Auth";
import Register from "./user/Register";
import SingleBook from "./book/SingleBook";
import BookReviewForm from "./book/BookReviewForm";

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/books/:bookId">
              <SingleBook />
            </Route>
            <Route exact path="/reviews">
              <BookReviewForm />
            </Route>
            <Route exact path="/">
              <Auth>
                <BookContainer />
              </Auth>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
