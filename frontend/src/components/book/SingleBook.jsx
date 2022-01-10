import { Box, createStyles, makeStyles, Paper, Typography, CircularProgress, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getBookAction } from "../../module/book/bookAction";
import { getBookSelector, getSingleBookPromiseSelector } from "../../module/book/bookSelector";
import BookReview from "./BookReview";

const styles = makeStyles(() =>
  createStyles({
    wrapper: {
      margin: "80px 200px 50px 200px",
    },
    loader: {
      display: "flex",
      justifyContent: "center",
      marginTop: "200px",
    },
    paper: {
      padding: "20px",
    },
    marginTop: {
      marginTop: "10px",
    },
  })
);

const SingleBook = () => {
  const classes = styles();

  const { bookId } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(getBookSelector);
  const bookPromise = useSelector(getSingleBookPromiseSelector);
  const history = useHistory();

  useEffect(() => {
    dispatch(getBookAction(bookId));
  }, [dispatch, bookId]);

  const handleClick = (e) => {
    history.push(`/reviews`);
  };

  return (
    <div>
      {bookPromise.isPending && (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
      {bookPromise.isFulfilled && (
        <Box className={classes.wrapper}>
          <Paper className={classes.paper}>
            <Typography variant="h3">{book.title}</Typography>
            <Typography className={classes.marginTop}>Publish year: {book.releaseYear}</Typography>
            <Typography className={classes.marginTop}>Description: {book.description}</Typography>
          </Paper>
          <Box mt={4}>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Write a Review
            </Button>
          </Box>
          <Box mt={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Reviews</Typography>
              {book.bookReviews.length === 0 && (
                <Typography variant="body2" className={classes.marginTop}>
                  No review yet. Be the first one to post a review!
                </Typography>
              )}
              {book?.bookReviews.map((r) => (
                <BookReview review={r} key={r.id} />
              ))}
            </Paper>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default SingleBook;
