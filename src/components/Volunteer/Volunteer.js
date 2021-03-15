import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Volunteer = ({ strengthQuiz, volunteerActivities }) => {
  const classes = useStyles();
  const containsAny = (arr1, arr2) => {
    arr1.forEach(elem1 => {
      if (arr2.includes(elem1)) {
        return true;
      }
    });
    return false;
  };
  const myActivities = volunteerActivities.filter(act =>
    containsAny(act.strengths, strengthQuiz)
  );
  console.log(myActivities);
  return myActivities.map(activity => (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {activity.Title}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {activity.Description}
        </Typography>
        <Typography variant='body2' component='p'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  ));
};

const mapStateToProps = state => {
  return {
    strengthQuiz: state.volunteer.strengthQuiz,
    volunteerActivities: state.organiser.volunteerActivities
  };
};
export default connect(mapStateToProps)(Volunteer);
