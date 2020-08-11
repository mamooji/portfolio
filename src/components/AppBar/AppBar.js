import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
  HeaderColor: {
    background: "#e52d27" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #b31217, #e52d27)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #b31217, #e52d27)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    width: "100%",
  },
  dp: {
    height: "50px",
    padding: "auto",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

const ButtonAppBar = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Resume", "About", "Projects"].map((text, index) => (
          <ListItem button component={RouterLink} to={"/" + text} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.HeaderColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={RouterLink}
            to="/portfolio"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Muhammad Mamooji
          </Typography>
          {isMobile ? (
            <React.Fragment key="right">
              <MenuIcon onClick={toggleDrawer("right", true)} />
              <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </React.Fragment>
          ) : (
            <>
              <Button
                className={classes.menuButton}
                component={RouterLink}
                to="/resume"
              >
                Resume
              </Button>
              <Button
                className={classes.menuButton}
                component={RouterLink}
                to="/projects"
              >
                Projects
              </Button>
              <Button
                className={classes.menuButton}
                component={RouterLink}
                to="/about"
              >
                About
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default ButtonAppBar;
