import React, { useState } from "react";
import { connect } from "react-redux";
import ButtonBase from "@material-ui/core/ButtonBase";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import { strengthQuizQuestions } from "../Quiz/QuizData";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";

import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
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
  col: {
    display: "block"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    zIndex: 10
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
  const [isUploading, setIsUploading] = useState(false);
  const classes = useStyles();
  const modalStyle = getModalStyle();
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
  console.log(allStrengths);

  const updateFormStateHandler = (field, event) => {
    const updatedFormState = { [field]: event.target.value };
    setFormState({ ...formState, ...updatedFormState });
  };

  const uploadHandler = () => {
    const volunteerActivity = { ...formState, strengths: selectedStrengths };
    uploadVolunteerActivity(volunteerActivity);
  };

  return (
    <div>
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
          fontSize: 20
        }}
        onClick={() => setIsUploading(true)}
      >
        Upload Volunteer Activity!
      </ButtonBase>
      <div hidden={!isUploading}>
        <form>
          <TextField
            className={classes.col}
            name='Title'
            label='Title'
            variant='outlined'
            onChange={event => updateFormStateHandler("Title", event)}
            style={{ width: "32%" }}
          />
          <TextField
            className={classes.col}
            name='Description'
            label='Description'
            variant='outlined'
            onChange={event => updateFormStateHandler("Description", event)}
            style={{ width: "32%" }}
          />
          <FormControl className={[classes.formControl, classes.col].join(" ")}>
            <InputLabel id='demo-mutiple-chip-label'>Strengths</InputLabel>
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
                    <Chip key={value} label={value} className={classes.chip} />
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
      </div>
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
