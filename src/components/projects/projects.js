import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Content from "./Content/Content";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 300,
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="React" {...a11yProps(0)} />
          <Tab label="HTML/CSS" {...a11yProps(1)} />
          <Tab label="Android" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8}>
              <Content subject="react" />
            </Grid>
            <Grid item xs={0} sm={2} />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8}>
              <Content subject="html" />
            </Grid>
            <Grid item xs={0} sm={2} />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8}>
              <Content subject="android" />
            </Grid>
            <Grid item xs={0} sm={2} />
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
};
export default Projects;
