import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { CarouselCard } from "../carouselCard";
import { AnalogClock } from "../analogClock";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useAccountHistoryForDaily,useAccountHistoryForBMS,useAccountTransaction } from "../../utils/hooks/useAccountHistory";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  },
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255 , 0.8)",
  },
  fixedHeight: {
    height: 240,
  },
  carousel: {
    marginTop: 0,
    width: 250,
    height: 40,
    backgroudColor: 'black',
  },
}));

const tokenData = [
  {
    label: 'ETH',
    currentPrice: 4200,
  },
  {
    label: 'BTC',
    currentPrice: 65551,
  },
  {
    label: 'ONE',
    currentPrice: 2500,
  }
]
export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const {dailydata} = useAccountHistoryForDaily()
  const {bmsdata} = useAccountHistoryForBMS()

  console.log('dailydata -',dailydata)
  console.log('bmsdata -',bmsdata)
 

  return (
    <div className={classes.root}>

      <main className={classes.content}>
      
        <Container maxWidth="lg" className={classes.container}>

          {/* Container grid */}
          <Grid container spacing={3}>

            {/* Recent Orders */}
            <Grid item xs={12} md={9} lg={9}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>

            {/* First Row, right column */}
            <Grid item xs={12} md={3} lg={3}
              justifyContent="center"
              alignItems="center"
            >
              
              {/* Display Clock */}
              <Grid item xs={12}>
                <AnalogClock />
              </Grid>

              {/* Display Token Price  */}
              <Grid item>
                <Paper className={classes.paper}>
                  <CarouselCard 
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                    className={classes.carousel}>
                    {tokenData.map((item, idx) => (
                      <Grid 
                        key={idx}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <div>{item.label}</div>
                        <div>{item.currentPrice}</div>
                      </Grid>
                    ))}              
                  </CarouselCard>
                </Paper>
              </Grid>
            </Grid>

            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid> */}

            {/* Recent Deposits */}
            <Grid container item xs={12} md={4} lg={3} justifyContent="center" alignItems="center">

            </Grid>
          </Grid>
          
        </Container>
      </main>
    </div>
  );
}
