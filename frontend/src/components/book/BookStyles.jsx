import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(() =>
  createStyles({
    bookContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
    },
    bookFilter: {
      marginLeft: "50px",
      height: "500px",
      flex: 2,
    },
    bookFilterPaper: {
      width: "100%",
      height: "100%",
    },
    bookList: {
      flex: 8,
    },
    bookListItemPaper: {
      padding: "10px",
      display: "flex",
      width: "80%",
    },
    bookImage: {
      width: "180px!important",
      height: "200px!important",
    },
    bookLink: {
      color: "inherit",
      textDecoration: "none",
    },
  })
);
