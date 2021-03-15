import React, { useState } from "react";
import { connect } from "react-redux";
import { Grid, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import { strengthQuizQuestions } from "../Quiz/QuizData";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Lottie from "lottie-react";
import FormAnim from "../../images/form.json";
import Done from "../../images/done.json";
import { TextField } from "@material-ui/core";
import "./Org.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    maxWidth: 500,
    padding: 20
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    zIndex: 10
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
};

const Organiser = ({ uploadVolunteerActivity }) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const classes = useStyles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  const [formState, setFormState] = useState({
    Title: null,
    Description: null
  });
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const handleChange = event => {
    const str = event.target.value;
    setSelectedStrengths(str);
  };
  const allStrengths = [];
  Object.keys(strengthQuizQuestions).forEach(key =>
    strengthQuizQuestions[key].forEach(str => allStrengths.push(str))
  );

  const updateFormStateHandler = (field, event) => {
    const updatedFormState = { [field]: event.target.value };
    setFormState({ ...formState, ...updatedFormState });
  };

  const uploadHandler = () => {
    const volunteerActivity = { ...formState, strengths: selectedStrengths };
    uploadVolunteerActivity(volunteerActivity);
    setIsUploaded(true);
  };

  return isUploaded ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: 400
        }}
      >
        <Lottie animationData={Done} />
      </div>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Roboto",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "bold",
          lineHeight: "30px",
          marginBottom: 50
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
          marginBottom: 50
        }}
      >
        Now wait for your best candidates to apply !
      </p>
    </div>
  ) : (
    <div>
      <Grid container style={{
        width: "100%",
        height: "100vh",
        flexGrow: 1
      }}>
        <Grid item xs={6}>
          <Lottie animationData={FormAnim} />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <form
            style={{
              backgroundColor: "white",
              width: "70%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: "bold",
                lineHeight: "30px",
                marginBottom: 50
              }}
            >
              Find your best volunteers now !
            </p>
            <TextField
              name='Title'
              label='Title'
              variant='outlined'
              onChange={event => updateFormStateHandler("Title", event)}
              style={{
                width: "70%",
                marginBottom: 30,
                borderRadius: 10
              }}
            />
            <TextField
              name='Description'
              label='Description'
              variant='outlined'
              onChange={event => updateFormStateHandler("Description", event)}
              style={{
                width: "70%",

                borderRadius: 10,
                marginBottom: 20
              }}
            />
            <FormControl
              className={[classes.formControl].join(" ")}
              style={{
                borderRadius: 5
              }}
            >
              <InputLabel
                id='demo-mutiple-chip-label'
                style={{
                  padding: 10,
                  margin: 10
                }}
              >
                Strengths
              </InputLabel>
              <Select
                labelId='demo-mutiple-chip-label'
                id='demo-mutiple-chip'
                multiple
                value={selectedStrengths}
                onChange={handleChange}
                input={<Input id='select-multiple-chip' />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {allStrengths.map(str => (
                  <MenuItem key={str} value={str}>
                    {str}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <ButtonBase
              focusRipple
              className='hvr-rotate'
              style={{
                marginTop: 30,
                borderRadius: 10,
                backgroundColor: "black",
                paddingTop: 20,
                paddingBottom: 20,
                color: "white",
                paddingLeft: 50,
                paddingRight: 50,
                fontSize: 20
              }}
              onClick={() => uploadHandler()}
            >
              Upload
            </ButtonBase>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    uploadVolunteerActivity: activity =>
      dispatch({
        type: "UPLOAD_VOLUNTEER_ACTIVITY",
        volunteerActivity: activity
      })
  };
};

export default connect(null, mapDispatchToProps)(Organiser);
