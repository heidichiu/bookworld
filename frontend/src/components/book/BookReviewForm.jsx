import { Box, Button, createStyles, InputLabel, Link, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { getBookSelector, postBookReviewPromiseSelector } from "../../module/book/bookSelector";
import { postBookReviewAction } from "../../module/book/bookAction";
import { useEffect } from "react";

const styles = makeStyles(() =>
  createStyles({
    wrapper: {
      margin: "80px 200px 50px 200px",
    },
    paper: {
      padding: "30px",
    },
    marginTop: {
      marginTop: "10px",
    },
  })
);

const validationSchema = yup.object({
  title: yup.string("Enter review title").required("Title is required"),
  content: yup
    .string("Enter your review")
    .min(30, "Review should have at least 30 characters")
    .required("Review content is required"),
  score: yup.number("Overall Rating"),
});

const BookReviewForm = () => {
  const classes = styles();

  const book = useSelector(getBookSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const postBookReviewPromise = useSelector(postBookReviewPromiseSelector);

  const { enqueueSnackbar } = useSnackbar();

  const handleReturnLink = () => {
    history.push(`/books/${book.id}`);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      score: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(postBookReviewAction(book?.id, values));
    },
  });

  const handleRatingChange = (e, newValue) => {
    formik.setFieldValue("score", newValue);
  };

  useEffect(() => {
    if (postBookReviewPromise.isErrorOccured) {
      enqueueSnackbar("Something went wrong... Please try again", {
        variant: "error",
      });
    } else if (postBookReviewPromise.isFulfilled) {
      enqueueSnackbar("Successfully submitted review", {
        variant: "success",
      });
      history.push(`/books/${book.id}`);
    }
  }, [postBookReviewPromise, enqueueSnackbar, history, book]);

  return (
    <Box>
      {!book && <Box>You can only access this page from a book.</Box>}
      {book && (
        <Box className={classes.wrapper}>
          <Box mb={3}>
            <Link onClick={handleReturnLink} variant="body2">
              Return to {book.title}
            </Link>
          </Box>
          <Paper className={classes.paper}>
            <Typography className={classes.marginTop} variant="h4">
              Review
            </Typography>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Box mt={3} mb={2}>
                <InputLabel> Overall Rating:</InputLabel>
                <Rating
                  size="large"
                  className={classes.marginTop}
                  name="score"
                  id="score"
                  defaultValue={0}
                  max={10}
                  value={formik.values.score}
                  onChange={handleRatingChange}
                />
              </Box>
              <Box width="100%">
                <TextField
                  fullWidth
                  className={classes.marginTop}
                  name="title"
                  id="title"
                  data-testid="title-testid"
                  label="Enter review title"
                  variant="outlined"
                  placeholder="Enter review title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  helperText={formik.touched.title && formik.errors.title}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                />
              </Box>
              <Box mt={3}>
                <TextField
                  className={classes.topMargin}
                  fullWidth
                  name="content"
                  id="content"
                  data-testid="content-testid"
                  label="Enter your review"
                  variant="outlined"
                  placeholder="Enter your review"
                  multiline
                  minRows={20}
                  maxRows={20}
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  helperText={formik.touched.content && formik.errors.content}
                  error={formik.touched.content && Boolean(formik.errors.content)}
                />
              </Box>
              <Button
                className={classes.marginTop}
                disabled={postBookReviewPromise.isPending}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default BookReviewForm;
