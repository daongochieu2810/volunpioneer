import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { strengthQuizQuestions, getNextPage } from "./QuizData";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  box: {
    borderStyle: "solid",
    color: "text.primary",
    borderColor: "grey.500",
    borderWidth: "1px",
    marginBottom: theme.spacing(2)
  }
}));

const Quiz = ({ strengthQuiz }) => {
  const [quizState, setQuizState] = useState([]);
  const [nextPages, setNextPages] = useState([1]);
  const classes = useStyles();
  const [tempNextPages, setTempNextPages] = useState([]);

  const clickedOptionHandler = option => {
    let updatedQuizState = [...quizState];
    const nextPage = getNextPage(option);
    let tempNextPagesCopy = [...tempNextPages];
    if (quizState.includes(option)) {
      updatedQuizState = updatedQuizState.filter(o => o !== option);
      if (nextPage !== 0) {
        tempNextPagesCopy = tempNextPagesCopy.filter(n => n !== nextPage);
      }
    } else {
      updatedQuizState.push(option);
      if (nextPage !== 0) {
        console.log(nextPage);
        tempNextPagesCopy.push(nextPage);
      }
    }
    setQuizState(updatedQuizState);
    setTempNextPages(tempNextPagesCopy);
  };

  const nextClickedHandler = () => {
    console.log(tempNextPages);
    setNextPages(tempNextPages);
    setTempNextPages([]);
  };

  return (
    <Paper className={classes.Paper} variant='outlined'>
      <p>Skills and Interests Quiz</p>
      <List component='nav' aria-label='secondary mailbox folder'>
        {nextPages.map(nextPage => (
          <Box className={classes.box} key={nextPage}>
            <div>
              <p></p>
              {strengthQuizQuestions[nextPage].map(option => (
                <ListItem
                  key={option}
                  button
                  selected={quizState.includes(option)}
                  onClick={() => clickedOptionHandler(option)}
                >
                  <ListItemText primary={option} />
                </ListItem>
              ))}
            </div>
          </Box>
        ))}
      </List>
      {/* <Button
        variant='outlined'
        color='primary'
        className={classes.button}
        // endIcon={<Icon>send</Icon>}
      >
        Previous
      </Button> */}
      <Button
        variant='outlined'
        color='primary'
        className={classes.button}
        onClick={() => nextClickedHandler()}
        // endIcon={<Icon>send</Icon>}
      >
        Next
      </Button>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    strengthQuiz: state.volunteer.strengthQuiz
  };
};

export default connect(mapStateToProps)(Quiz);
