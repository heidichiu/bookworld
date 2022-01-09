import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getUser } from "../../module/user/userSelector";
import styles from "./HeaderStyle";

const Header = () => {
  const classes = styles();
  const user = useSelector(getUser);
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense" className={classes.flex}>
        <Typography variant="h6" color="inherit" className={classes.leftCorner}>
          Book World
        </Typography>
        {user && (
          <div className={classes.rightContainer}>
            <Typography className={classes.welcomeMsg}>Welcome, {user.name}</Typography>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
