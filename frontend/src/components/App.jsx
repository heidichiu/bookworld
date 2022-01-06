import axios from "axios";
import baseUrl from "../config";
import Layout from "./layout/Layout";

const App = () => {
  axios(`${baseUrl}/api/v1/books`).then((books) => console.log(books));
  return (
    <Layout>
      {" "}
      <div>First App component</div>
    </Layout>
  );
};

export default App;
