import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(() =>
  createStyles({
    flex: {
      display: "flex",
    },

    leftCorner: {
      flex: 2,
    },
    rightContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    welcomeMsg: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginRight: "10px",
    },
    headerTitle: {
      textDecoration: "none",
      color: "inherit",
    },
  })
);
