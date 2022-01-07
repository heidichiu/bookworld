import axios from "axios";
import baseUrl from "../config";
import BookContainer from "./book/BookContainer";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <BookContainer />
    </Layout>
  );
};

export default App;
