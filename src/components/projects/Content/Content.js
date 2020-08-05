import React from "react";
import GenericCard from "../../Card/GenericCard";
import { Grid } from "@material-ui/core";
import ReactConstant from "../../Card/ReactConstant";
import HTMLConstant from "../../Card/HTMLConstant";
import AndroidConstant from "../../Card/AndroidConstant";

const Content = (props) => {
  let subject = props.subject;
  if (subject === "react") {
    subject = ReactConstant;
  } else if (subject === "html") {
    subject = HTMLConstant;
  } else {
    subject = AndroidConstant;
  }
  const getCard = (cardObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <GenericCard {...cardObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2} justify="center" direction="row">
      {subject.map((cardObj) => getCard(cardObj))}
    </Grid>
  );
};
export default Content;
