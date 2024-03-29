import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./dashBoard.module.css";
import { CarouselCard } from "../carouselCard";
import { AnalogClock } from "../analogClock";
import DailyData from "./dailyData";
import BMSData from "./bmsData";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from "react-redux";
import ClaimModal from "./modals/ClaimModal";
import TransactionStateModal from "../TransactionModal/TransactionStateModal";
import { useGetAssetAddress } from "../../utils/hooks/useGetAssetAddress";
import { FACTORYADDRESS } from "../../utils/constants";
import { useLoneContract } from "../../utils/hooks/useContract";
import factoryabi from "../../utils/abis/factory.json";
import { updateDayCount } from "../../state/app/action";
import Sprint from "./sprint69";

export default function Dashboard() {
  const claimStatus = useSelector((state) => {
    return state.claim.open;
  });
  console.log("claim", claimStatus);

  const [coins, setCoins] = useState([]);
  const [dailyCountNumber, setDailyCount] = useState(0);
  const [bmsCount, setBmsCount] = useState(0);
  const [dailyClicked, setDailyClicked] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cone%2Cmatic-network%2Cchainlink%2Cterra-luna%2Ccardano%2Cavalanche-2&vs_currencies=usd"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const { Contract } = useLoneContract(factoryabi, FACTORYADDRESS);
  const dispatch = useDispatch();

  // useGetAssetAddress("");

  return (
    <main className={styles.main}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            {/* Display Clock */}
            <div className={styles.clock}>
              <AnalogClock />
            </div>
          </div>
          <div className='col-md-7'>
            {/* Display Token Price  */}

            <div className={styles.carousel}>
              <CarouselCard indicators={false} navButtonsAlwaysVisible={true}>
                {Object.entries(coins).map(
                  (item, id) => (
                    console.log("cont", item),
                    (
                      <Grid
                        key={id}
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                      >
                        <div className={styles.carouselText1}>{item[0]}</div>
                        <div className={styles.carouselText2}>
                          ${item[1].usd}
                        </div>
                      </Grid>
                    )
                  )
                )}
              </CarouselCard>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 mb-5 pb-5'>
            {/* BMS rocket */}

            <Sprint />
          </div>
          <div className='col-12 mb-5 pb-5'>
            {/* Daily rocket */}
            <DailyData
              dailyClicked={dailyClicked}
              setDailyClicked={setDailyClicked}
              dailyCountNumber={dailyCountNumber}
              setDailyCount={setDailyCount}
              Contract={Contract}
            />
          </div>

          <div className='col-12'>
            {/* BMS rocket */}

            <BMSData
              bmsCount={bmsCount}
              setBmsCount={setBmsCount}
              Contract={Contract}
            />
          </div>
        </div>
        <ClaimModal open={claimStatus} />
        <TransactionStateModal />
      </div>
    </main>
  );
}
