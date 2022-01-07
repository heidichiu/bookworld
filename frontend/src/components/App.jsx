import axios from "axios";
import baseUrl from "../config";
import BookContainer from "./book/BookContainer";
import Layout from "./layout/Layout";

const App = () => {
  axios(`${baseUrl}/api/v1/books`).then((books) => console.log(books));
  return (
    <Layout>
      <BookContainer />
    </Layout>
  );
};

export default App;
