import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../../module/book/bookAction";
import { getBooksSelector, getBookListPromiseSelector } from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import BookList from "./BookList";
import styles from "./BookStyles";

const BookContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  const books = useSelector(getBooksSelector);
  const bookPromise = useSelector(getBookListPromiseSelector);

  const classes = styles();

  return (
    <Box className={classes.bookContainer}>
      <BookFilter />
      <Box className={classes.bookList}>
        {bookPromise.isPending && (
          <Box ml={5}>
            <Skeleton data-testid="book-loader" variant="rect" animation="pulse" width="80%" height={200} />
          </Box>
        )}
        {bookPromise.isErrorOccured && <div data-testid="book-error-message">Error message...</div>}
        {bookPromise.isFulfilled && <BookList books={books} />}
      </Box>
    </Box>
  );
};

export default BookContainer;
