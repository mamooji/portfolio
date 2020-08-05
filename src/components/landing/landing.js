import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import dp from "../../images/profileLOGO.png";
const useStyles = makeStyles((theme) => ({
  div: {
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  grid: {
    background: "#EF3B36",
    background: "-webkit-linear-gradient(to left, #FFFFFF, #EF3B36)",
    background: "linear-gradient(to left, #FFFFFF, #EF3B36)",
    position: "static",
    margin: "auto",
    height: "100%",
    textAlign: "center",
  },
  dp: {
    height: "250px",
    paddingTop: "5em",
  },
  bannerText: {
    backgroundColor: "black",
    opacity: ".8",
    width: "75%",
    margin: "auto",
    borderRadius: "10px",
    "& h1": {
      fontSize: "66px",
      fontWeight: "bold",
      color: "white",
    },
    "& hr": {
      borderTop: "5px dotted white",
      width: "50%",
      margin: "auto",
    },
    "& p": {
      color: "white",
      fontSize: "20px",
      padding: "1em",
    },
  },
  social: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    margin: "auto",
    marginBottom: "7em",
    "& i": {
      color: "white",
      fontSize: "5em",
      padding: "8px",
    },
  },
}));
const Landing = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} style={{ marginBottom: "5em" }}>
          <img src={dp} alt="avatar" className={classes.dp} />
          <div className={classes.bannerText}>
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p> HTML/CSS | JavaScript | React | NodeJS | ASP.NET | Android </p>
            <div className={classes.social}>
              {/* linked in */}
              <a
                href="https://linkedin.com/in/mamooji/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              {/* Github */}
              <a
                href="https://github.com/mamooji"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
              {/*code camp  */}
              <a
                href="https://www.freecodecamp.org/kream"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-free-code-camp" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </div>
  );
};

export default Landing;
