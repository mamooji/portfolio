import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import resume from "../../resumePDF/resumeLatex.pdf";

const Resume = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <iframe
            style={{
              width: "100%",
              height: "1000px",
              border: "none",
              padding: "1em",
              margin: 0,
              flexGrow: 1,
            }}
            src={resume}
          ></iframe>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default Resume;
