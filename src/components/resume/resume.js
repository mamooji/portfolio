import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class Resume extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8} style={{ marginBottom: "5em" }}></Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    );
  }
}

export default Resume;
