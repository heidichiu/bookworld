import { Box, Paper } from "@material-ui/core";
import styles from "./BookStyles";

const BookFilter = () => {
  const classes = styles();
  return (
    <Box className={classes.bookFilter}>
      <Paper className={classes.bookFilterPaper}>Book Filter</Paper>
    </Box>
  );
};

export default BookFilter;
