import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBooksAction from "../../module/book/bookAction";
import { getBooksSelector } from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import styles from "./BookStyles";

const BookContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  const books = useSelector(getBooksSelector);
  const classes = styles();

  return (
    <Box className={classes.bookContainer}>
      <BookFilter />
      <Box className={classes.bookList}>Display all books</Box>
    </Box>
  );
};

export default BookContainer;
