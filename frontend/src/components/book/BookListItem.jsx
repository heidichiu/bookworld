import { Avatar, Box, Paper, Typography } from "@material-ui/core";
import Proptypes from "prop-types";
import makeStyles from "./BookStyles";

const propTypes = {
  book: Proptypes.shape({
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    releaseYear: Proptypes.number.isRequired,
  }).isRequired,
};

const BookListItem = ({ book }) => {
  const classes = makeStyles();
  return (
    <Box mb={2}>
      <Paper elevation={2} className={classes.bookListItemPaper}>
        <Avatar variant="square" className={classes.bookImage}>
          {book.title}
        </Avatar>
        <Box ml={1}>
          <Typography variant="h5">{book.title}</Typography>
          <Typography>{book.description}</Typography>
          <Typography>{book.releaseYear}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

BookListItem.propTypes = propTypes;

export default BookListItem;
