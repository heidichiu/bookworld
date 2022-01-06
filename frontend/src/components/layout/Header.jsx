import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Book World
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
