import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBooksByTitleAction } from "../../module/book/bookAction";
import styles from "./BookStyles";

const BookFilter = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => setSearchText(e.target.value);
  const handleSearchClick = () => dispatch(getBooksByTitleAction(searchText));
  return (
    <Box className={classes.bookFilter}>
      <Paper className={classes.bookFilterPaper}>
        <Box padding={3}>
          <Typography align="center" variant="h6">
            Search Book Filter
          </Typography>
          <Box paddingTop={3} marginBottom={2}>
            <TextField
              placeholder="Enter book title"
              id="book-search"
              data-testid="book-title-input"
              label="Enter book title"
              variant="outlined"
              value={searchText}
              onChange={handleSearchChange}
            />
          </Box>
          <Grid container justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleSearchClick}>
              Search
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default BookFilter;
