import { Box } from "@material-ui/core";
import Proptypes from "prop-types";
import makeStyles from "./BookStyles";

const propTypes = {
  books: Proptypes.arrayOf({
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    releaseYear: Proptypes.number.isRequired,
  }).isRequired,
};

const BookList = ({ books }) => {
  const classes = makeStyles();
  return (
    <Box className={classes.bookList}>
      {books.map((book) => (
        <div key={book.id}>{book.id}</div>
      ))}
    </Box>
  );
};

BookList.propTypes = propTypes;

export default BookList;
