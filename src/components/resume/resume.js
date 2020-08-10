import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Document, Page } from "react-pdf";
import resume from "../../resumePDF/resumeLatex.pdf";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
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
