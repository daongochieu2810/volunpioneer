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
  const [nextPagesInfo, setNextPagesInfo] = useState({ 1: null });
  const classes = useStyles();
  const [tempNextPages, setTempNextPages] = useState({});

  const clickedOptionHandler = option => {
    let updatedQuizState = [...quizState];
    const nextPage = getNextPage(option);
    let tempNextPagesCopy = { ...tempNextPages };
    if (quizState.includes(option)) {
      updatedQuizState = updatedQuizState.filter(o => o !== option);
      if (nextPage !== 0) {
        delete tempNextPagesCopy[nextPage];
      }
    } else {
      updatedQuizState.push(option);
      if (nextPage !== 0) {
        console.log(nextPage);
        tempNextPagesCopy[nextPage] = option;
      }
    }
    setQuizState(updatedQuizState);
    setTempNextPages(tempNextPagesCopy);
  };

  const nextClickedHandler = () => {
    console.log(tempNextPages);
    setNextPagesInfo(tempNextPages);
    setTempNextPages([]);
  };

  const nextPages = Object.keys(nextPagesInfo);
  const endOfQuiz = nextPages.length === 0;

  return (
    <Paper className={classes.Paper} variant='outlined'>
      <p>Skills and Interests Quiz</p>
      <List component='nav' aria-label='secondary mailbox folder'>
        {endOfQuiz ? (
          <p>Successfully completed!</p>
        ) : (
          nextPages.map(nextPage => (
            <Box className={classes.box} key={nextPage}>
              <div>
                {nextPagesInfo[nextPage] != null ? (
                  <p>Because you chose: {nextPagesInfo[nextPage]}</p>
                ) : null}
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
          ))
        )}
      </List>
      {/* <Button
        variant='outlined'
        color='primary'
        className={classes.button}
        // endIcon={<Icon>send</Icon>}
      >
        Previous
      </Button> */}
      {endOfQuiz ? (
        <Button
          variant='outlined'
          color='primary'
          className={classes.button}
          onClick={() => nextClickedHandler()}
          // endIcon={<Icon>send</Icon>}
        >
          Submit
        </Button>
      ) : (
        <Button
          variant='outlined'
          color='primary'
          className={classes.button}
          onClick={() => nextClickedHandler()}
          // endIcon={<Icon>send</Icon>}
        >
          Next
        </Button>
      )}
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    strengthQuiz: state.volunteer.strengthQuiz
  };
};

export default connect(mapStateToProps)(Quiz);
