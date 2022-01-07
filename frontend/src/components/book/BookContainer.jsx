import { Box } from "@material-ui/core";
import BookFilter from "./BookFilter";
import styles from "./BookStyles";

const BookContainer = () => {
  const classes = styles();
  return (
    <Box className={classes.bookContainer}>
      <BookFilter />
      <Box className={classes.bookList}></Box>
    </Box>
  );
};

export default BookContainer;
