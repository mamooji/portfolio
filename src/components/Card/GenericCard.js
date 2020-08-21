import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 350,
    maxHeight: 360,
    margin: "auto",
  },
  media: {
    height: 140,
  },
}));

const GenericCard = (props) => {
  const classes = useStyles();
  const { title, description, image, repo, demo, gitHubLink, demoLink } = props;
  const preventDefault = (event) => event.preventDefault();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {repo ? (
          <a
            href={gitHubLink}
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
            onClick={"return false"}
          >
            <Button size="medium" color="primary" disabled={!repo}>
              Github
            </Button>
          </a>
        ) : null}

        {demo ? (
          <a
            href={demoLink}
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button size="medium" color="primary" disabled={!demo}>
              LiveDemo
            </Button>
          </a>
        ) : null}
        {/* <a
          href={gitHubLink}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
          onClick={"return false"}
        >
          <Button size="small" color="primary" disabled={!repo}>
            Github
          </Button>
        </a>

        <a
          href={demoLink}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="small" color="primary" disabled={!demo}>
            LiveDemo
          </Button>
        </a> */}
      </CardActions>
    </Card>
  );
};

export default GenericCard;
