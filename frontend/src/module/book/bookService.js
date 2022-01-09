import axios from "axios";
import baseurl from "../../config";

export const getBookService = (bookId) => axios.get(`${baseurl}/api/v1/books/${bookId}`);
export const getBooksService = () => axios.get(`${baseurl}/api/v1/books`);
export const getBooksByTitleService = (title) => axios.get(`${baseurl}/api/v1/books?title=${title}`);
