import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import selfie from "../../images/selfie.jpg";

import Typography from "@material-ui/core/Typography";
class About extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8} style={{ marginBottom: "5em" }}>
            <div>
              <img style={{ width: "100%", margin: "1em" }} src={selfie} />
              <br />
              <Typography variant="subtitle1" style={{ margin: "1em" }}>
                Beautiful morning hike at Runyon Canyon in Los Angeles,
                California.
                <br />
                <br />
              </Typography>
              <Typography style={{ margin: "1em" }}>
                Currently a Second year software engineering student attending
                Conestoga College, seeking an internship/co-op position for the
                upcoming spring of 2020. I’m an aspiring software engineer who
                is very interested in front-end and back-end development. I am
                always seeking for new insights or experiences whether it would
                come from reading about new upcoming technologies or travelling
                to new places to meet and expand my connections. I’ve had web
                development experience since 2017 as I have created websites for
                local businesses within the city, I reside in. These early
                experiences of developing websites without any formal education
                in web development, have forced me into learning both HTML and
                JavaScript in my own time. Through my time at Conestoga, my web
                development skills have drastically improved and my capability
                to learn new technologies on my own have been very prevalent. I
                am currently enrolled in an advanced Ruby on Rails and
                JavaScript course with the education I am already pursuing at
                Conestoga. I will continue to work hard and diligently in this
                field of study in order to achienve the goals I have set for
                myself.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    );
  }
}

export default About;
