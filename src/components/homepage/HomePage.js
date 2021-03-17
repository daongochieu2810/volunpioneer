import { useCallback } from "react";
import { Grid, ButtonBase } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CategoryCard from "../homepage/CategoryCard";
import House from "@material-ui/icons/HomeWorkRounded";
import Child from "@material-ui/icons/ChildFriendlyRounded";
import Pets from "@material-ui/icons/Pets";
import Nature from "@material-ui/icons/Nature";
import School from "@material-ui/icons/SchoolRounded";
import InNeed from "@material-ui/icons/LocalPharmacyRounded";
import Lottie from "lottie-react";
import { makeStyles } from "@material-ui/core/styles";
import main_bg from "../../images/main_bg.json";
import "./HomePage.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "25px",
    marginTop: 100,
    marginLeft: 20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const categories = [
  {
    icon: <House style={{ width: 60, height: 60 }} />,
    name: "Elderly Home",
    desc: "Lorem Ig industry. Lorem Ipsum has been the industry"
  },
  {
    icon: <Child style={{ width: 60, height: 60 }} />,
    name: "Orphanage",
    desc: "Lorem Ig industry. Lorem Ipsum has been the industry"
  },
  {
    icon: <InNeed style={{ width: 60, height: 60 }} />,
    name: "Helping People In Need",
    desc: "Lorem Ig industry. Lorem Ipsum has been the industry"
  },
  {
    icon: <School style={{ width: 60, height: 60 }} />,
    name: "Teaching",
    desc: "Lorem Ig industry. Lorem Ipsum has been the industry"
  },
  {
    icon: <Nature style={{ width: 60, height: 60 }} />,
    name: "Environmental Cleaning",
    desc: "Lorem Ig industry. Lorem Ipsum has been the industry"
  },
  {
    icon: <Pets style={{ width: 60, height: 60 }} />,
    name: "Animal Caring",
    desc: "Lorem Ig industry. Lorem Ipsum has been the industry"
  }
];

function HomePage() {
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/prequiz"), [history]);

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={5}>
          <div>
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "bold",
                lineHeight: "47px",
                color: "black"
              }}
            >
              Find The Best Volunteer Opportunities Near Singapore
            </p>
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "30px",
                color: "black"
              }}
            >
              VolunPioneer is the most effective way to recruit highly qualified
              volunteers for your nonprofit. We match you with people who are
              passionate about and committed to your cause, and who can help
              when and where you need them. And because volunteers are often
              donors as well, we make it easy for them to contribute their time
              and money.
            </p>
            <ButtonBase
              focusRipple
              className='hvr-pulse-grow'
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
              onClick={handleOnClick}
            >
              Volunteer
            </ButtonBase>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Lottie animationData={main_bg} />
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          marginBottom: 100
        }}
      >
        <Grid container justify='center' spacing={4} style={{ marginTop: 30 }}>
          {categories.map(value => (
            <Grid key={value.name} item>
              <CategoryCard card={value} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default HomePage;
