import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Lottie from "lottie-react";
import Submitted from "../../images/submitted.json";
import { strengthQuizQuestions, getNextPage } from "./QuizData";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  box: {
    borderStyle: "solid",
    color: "text.primary",
    borderColor: "grey.500",
    borderWidth: "1px",
    marginBottom: theme.spacing(2),
  },
}));

const Quiz = ({ strengthQuiz, uploadStrengthQuiz }) => {
  const [quizState, setQuizState] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [nextPagesInfo, setNextPagesInfo] = useState({ 1: null });
  const classes = useStyles();
  const [tempNextPages, setTempNextPages] = useState({});

  const clickedOptionHandler = (option) => {
    let updatedQuizState = [...quizState];
    const nextPage = getNextPage(option);
    let tempNextPagesCopy = { ...tempNextPages };
    if (quizState.includes(option)) {
      updatedQuizState = updatedQuizState.filter((o) => o !== option);
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

  const submitClickedHandler = () => {
    uploadStrengthQuiz(quizState);
    setIsUploaded(true);
  };

  const nextPages = Object.keys(nextPagesInfo);
  const endOfQuiz = nextPages.length === 0;

  return isUploaded ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 400,
          marginTop: 20
        }}
      >
        <Lottie animationData={Submitted} />
      </div>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Roboto",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "bold",
          lineHeight: "30px",
          marginBottom: 50,
        }}
      >
        You're set !
      </p>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Roboto",
          fontSize: "25px",
          fontStyle: "normal",
          fontWeight: "normal",
          lineHeight: "30px",
          marginBottom: 50,
        }}
      >
        Now wait for your best opportunities to apply !
      </p>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontFamily: "Roboto",
          fontSize: 40,
          fontStyle: "bold",
        }}
      >
        Skills and Interests Quiz
      </p>
      <List
        style={{
          minWidth: "50%",
        }}
      >
        {endOfQuiz ? (
          <p
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "normal",
              lineHeight: "30px",
              marginBottom: 50,
            }}
          >
            Successfully completed!
          </p>
        ) : (
          nextPages.map((nextPage) => (
            <div key={nextPage}>
              {nextPagesInfo[nextPage] != null ? (
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 30,
                    fontStyle: "bold",
                  }}
                >
                  Because you chose: {nextPagesInfo[nextPage]}
                </p>
              ) : null}
              <Box
                key={nextPage}
                style={{
                  margin: 20,
                  backgroundColor: "#EFEFEF",
                  borderRadius: 15,
                  padding: 20,
                  paddingBottom: 10,
                }}
              >
                <div>
                  {strengthQuizQuestions[nextPage].map((option) => (
                    <ListItem
                      key={option}
                      button
                      style={{
                        marginBottom: 10,
                      }}
                      selected={quizState.includes(option)}
                      onClick={() => clickedOptionHandler(option)}
                    >
                      <ListItemText
                        primary={option}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </ListItem>
                  ))}
                </div>
              </Box>
            </div>
          ))
        )}
      </List>
      <ButtonBase
        focusRipple
        style={{
          marginTop: 30,
          borderRadius: 10,
          backgroundColor: "black",
          paddingTop: 20,
          paddingBottom: 20,
          color: "white",
          paddingLeft: 50,
          paddingRight: 50,
          fontSize: 20,
        }}
        onClick={() =>
          endOfQuiz ? submitClickedHandler() : nextClickedHandler()
        }
      >
        {endOfQuiz ? "Submit" : "Next"}
      </ButtonBase>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    strengthQuiz: state.volunteer.strengthQuiz,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadStrengthQuiz: (quizData) =>
      dispatch({ type: "UPLOAD_STRENGTH_QUIZ", quizData: quizData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
