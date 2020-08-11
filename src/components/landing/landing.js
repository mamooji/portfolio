import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import dp from "../../images/profileLOGO.png";
const useStyles = makeStyles((theme) => ({
  gridMain: {
    background: "#EF3B36",
    background: "-webkit-linear-gradient(to left, #FFFFFF, #EF3B36)",
    background: "linear-gradient(to left, #FFFFFF, #EF3B36)",
    textAlign: "center",
    margin: "auto",
    height: "100%",
    minHeight: "100%",
    flexGrow: 1,
    flex: 1,
  },
  grid: {
    textAlign: "center",
  },
  dp: {
    height: "250px",
    paddingTop: "5em",
  },
  bannerText: {
    backgroundColor: "black",
    opacity: ".8",
    margin: "3em",
    textAlign: "center",
    borderRadius: "10px",
    "& h1": {
      fontSize: "60px",
      fontWeight: "bold",
      color: "white",
    },
    "& p": {
      color: "white",
      fontSize: "20px",
      padding: "8px",
    },
  },
  social: {
    justifyContent: "space-between",
    width: "50%",
    textAlign: "center",
    margin: "auto",
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
    <Grid container direction="column" className={classes.gridMain}>
      <Grid item container className={classes.grid}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <img src={dp} alt="avatar" className={classes.dp} />
          <div className={classes.bannerText}>
            <h1>Full Stack Web Developer</h1>
            <p> HTML/CSS | JavaScript | React | NodeJS | ASP.NET | Java | C </p>
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
    </Grid>
  );
};

export default Landing;
