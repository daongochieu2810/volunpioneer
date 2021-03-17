import { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, ButtonBase } from "@material-ui/core";
import Lottie from "lottie-react";
import { useHistory } from "react-router-dom";
import quiz from "../../images/quiz.json";
import "./PreQuiz.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function PreQuiz() {
  const classes = useStyles();
  const history = useHistory("/volunpioneer");
  const handleOnClick = useCallback(() => history.push("/quiz"), [history]);

  return (
    <div className={classes.root}>
      <Grid
        container
        justify='center'
        style={{
          backgroundColor: "black",
          height: "80vh",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Roboto",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: "47px"
          }}
        >
          Preliminary Quiz
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Lottie
            animationData={quiz}
            style={{
              width: 500,
              height: 200
            }}
          />
        </div>
        <p
          style={{
            textAlign: "center",
            color: "white",
            width: "40%",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "30px"
          }}
        >
          This quiz is for us to understand you more and help you find suitable
          volunteering opportunities. The length of the quiz might vary based on
          your answers, as the set of question is not fixed. The quiz result
          will be shared with organisations to obtain the best activities for
          you!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <ButtonBase
            focusRipple
            className='hvr-pop'
            style={{
              width: 250,
              marginTop: 30,
              borderRadius: 10,
              backgroundColor: "white",
              paddingTop: 20,
              paddingBottom: 20,
              color: "black",
              paddingLeft: 50,
              paddingRight: 50,
              fontSize: 20
            }}
            onClick={handleOnClick}
          >
            Take The Quiz!
          </ButtonBase>
        </div>
      </Grid>
    </div>
  );
}

export default PreQuiz;
