import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  media: {
    height: 140,
  },
}));

const GenericCard = (props) => {
  const classes = useStyles();
  const { title, description, image, repo, demo, gitHubLink, demoLink } = props;
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
      </CardActions>
    </Card>
  );
};

export default GenericCard;
