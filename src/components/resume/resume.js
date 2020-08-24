import React from "react";
import { Grid } from "@material-ui/core";
import resume from "../../resumePDF/resumeLatex.pdf";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridMain: {
    margin: "auto",
    height: "100%",
    minHeight: "100%",
    flexGrow: 1,
    flex: 1,
  },
}));
const Resume = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.gridMain}>
      <Grid item container className={classes.gridMain}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <iframe
            style={{
              width: "100%",
              height: "100%",
              padding: "1em",
              flexGrow: 1,
              margin: "auto",
            }}
            src={resume}
            title="resume"
          ></iframe>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default Resume;
