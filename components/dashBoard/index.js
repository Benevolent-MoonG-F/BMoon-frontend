import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from './dashBoard.module.css';
import { CarouselCard } from "../carouselCard";
import { AnalogClock } from "../analogClock";
import DailyData from "./dailyData";
import BMSData from "./bmsData";
import {useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

// import {
//   useHistoryForBMS,
//   useHistoryForDaily,
// } from "../../utils/hooks/useHistory";
// import {
//   useAccountHistoryForBMS,
//   useAccountHistoryForDaily,
// } from "../../utils/hooks/useAccountHistory";
// import { useDailyTransactions } from "../../utils/hooks/useGetTransactions";
const useStyles = makeStyles((theme) => ({
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
    label: 'ethereum',
    currentPrice: 4200,
  },
  {
    label: 'bitcoin',
    currentPrice: 65551,
  },
  {
    label: 'One',
    currentPrice: 51,
  }
]



export default function Dashboard() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cone%2Cmatic-network%2Cchainlink%2Cterra-luna%2Ccardano%2Cavalanche-2&vs_currencies=usd').then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error));
  },[])


  return (
      <main className={styles.main}>
        <div className="container">
          <div className="row">
              <div className="col-md-5">
                    {/* Display Clock */}
                    <div className={styles.clock}>
                    <AnalogClock />
                    </div>
                  
              </div>
              <div className="col-md-7">
                  {/* Display Token Price  */}
           
               <div className={styles.carousel}>
               <CarouselCard 
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                     >
                   
                    {Object.entries(coins).map((item, id) => (
                      console.log('cont', item),
                      
                    
                      <Grid 
                        key={id}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        
                        <div className={styles.carouselText1}>{item[0]}</div>
                        <div className={styles.carouselText2}>${item[1].usd}</div>
                      </Grid>
                    ))}              
                  </CarouselCard>
               </div>
                  
               
              </div>
          </div>
            <div className="row">
              <div className="col-12 mb-5 pb-5">
                    {/* Daily rocket */}
                <DailyData />
              </div>

              <div className="col-12">
                  {/* BMS rocket */}
            
                <BMSData />
              </div>
            </div>

        </div>
        
      </main>
    
  );
}