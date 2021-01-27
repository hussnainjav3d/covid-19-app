import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";
import CountUp from "react-countup";
import "../main.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1300,
    margin: "0 auto",
    marginTop: "2rem",
    flexBasis: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "250px",
    margin: 7,
  },
  headings: {
    fontSize: "1.5rem",
    color: "black",
    marginBottom: "0.5rem",
  },
  typo: {
    fontSize: "2rem",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
}));

export default function Cards({
  globalData: { confirmed, recovered, deaths, lastUpdate },
}) {
  const classes = useStyles();
  if (!confirmed) return "Loading...";
  return (
    <div className={classes.root}>
      <Grid className="grid-list" container spacing={2} justify="center">
        <Grid item lg={3} md={6} xs={12}>
          <Paper elevation={3} className={`${classes.paper} infected`}>
            <Typography className={classes.headings}>Confirmed</Typography>
            <CountUp
              className={classes.typo}
              start={0}
              end={confirmed}
              duration={2.5}
              separator=","
            />
            <Typography>{`Updated On: ${new Date(lastUpdate).getDate()} / ${
              new Date(lastUpdate).getMonth() + 1
            } / ${new Date(lastUpdate).getFullYear()}`}</Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper elevation={3} className={`${classes.paper} active`}>
            <Typography className={classes.headings}>Active</Typography>
            <CountUp
              start={0}
              end={confirmed - (recovered + deaths)}
              duration={2.5}
              separator=","
              className={classes.typo}
            />
            <Typography>{`Updated On: ${new Date(lastUpdate).getDate()} / ${
              new Date(lastUpdate).getMonth() + 1
            } / ${new Date(lastUpdate).getFullYear()} `}</Typography>
            <Typography>{}</Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper elevation={3} className={`${classes.paper} recover`}>
            <Typography className={classes.headings}>Recovered</Typography>
            <CountUp
              className={classes.typo}
              start={0}
              end={recovered}
              duration={2.5}
              separator=","
            />
            <Typography>{`Updated On: ${new Date(lastUpdate).getDate()} / ${
              new Date(lastUpdate).getMonth() + 1
            } / ${new Date(lastUpdate).getFullYear()} `}</Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper elevation={3} className={`${classes.paper} death`}>
            <Typography className={classes.headings}>Deaths</Typography>
            <CountUp
              className={classes.typo}
              start={0}
              end={deaths}
              duration={2.5}
              separator=","
            />
            <Typography>{`Updated On: ${new Date(lastUpdate).getDate()} / ${
              new Date(lastUpdate).getMonth() + 1
            } / ${new Date(lastUpdate).getFullYear()}`}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
