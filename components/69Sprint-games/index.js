import styles from "./index.module.css";
import { Assets } from "./assets";
import logo from "../../public/images/69print.png";
import Image from "next/image";
import SPRINT69TOKENABI from "../../utils/abis/69sprinttoken.json";
import SPRINT69ABI from "../../utils/abis/69sprint.json";
import { SPRINT69, SPRINTTOKEN } from "../../utils/constants";
import { useLoneContract } from "../../utils/hooks/useContract";
import { useSprintAssets } from "../../utils/hooks/useSprintAssets";
import { useState } from "react";
import { useTokenAllowance } from "../../utils/hooks/useAllowance";
import { ethers } from "ethers";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";
import TransactionStateModal from "../TransactionModal/TransactionStateModal";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
// import { Contract } from "ethers";
export function Print69() {
  const { assets, loading } = useSprintAssets();
  const [selectOptions, setSelectedOptions] = useState({});
  const [reload, setReload] = useState(false);
  const { enoughAllowance } = useTokenAllowance(
    SPRINTTOKEN,
    SPRINT69TOKENABI,
    SPRINT69,
    reload,
    setReload
  );
  const { Contract } = useLoneContract(SPRINT69TOKENABI, SPRINTTOKEN);
  const { walletAddress } = useMoralisDapp();
  const { Moralis } = useMoralis();
  const router = useRouter();

  console.log(selectOptions);

  const approveTransactions = async () => {
    console.log("got in");
    try {
      if (Contract) {
        const amount = ethers.utils.parseEther("100");
        const tx = await Contract.methods
          .approve(SPRINT69, amount.toString())
          .send({
            from: walletAddress,
          });
        setReload(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  function countProperties(obj) {
    return Object.keys(obj).length;
  }

  console.log(countProperties(selectOptions));

  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }

  const placeOrder = async () => {
    const AssetsArray = [
      selectOptions.index0,
      selectOptions.index1,
      selectOptions.index2,
      selectOptions.index3,
      selectOptions.index4,
    ];
    try {
      if (AssetsArray.includes("Select crypto")) {
        toast.warning("Fill up the fields");
      } else {
        if (countProperties(selectOptions) === 5) {
          if (hasDuplicates(AssetsArray) === false) {
            console.log(hasDuplicates(AssetsArray));

            const web3 = await Moralis.enableWeb3();
            const balance = await Contract.methods
              .balanceOf(walletAddress)
              .call();
            console.log(balance);
            const formattedBalance = ethers.utils.formatEther(
              balance.toString()
            );
            const contract = new web3.eth.Contract(SPRINT69ABI, SPRINT69);
            if (parseFloat(formattedBalance) >= 10) {
              const tx = await contract.methods
                .selectAssets([
                  selectOptions.index0,
                  selectOptions.index1,
                  selectOptions.index2,
                  selectOptions.index3,
                  selectOptions.index4,
                ])
                .send({
                  from: walletAddress,
                });

              toast.success(
                "Transaction successful, you will be redirected to the dashboard shortly"
              );
              router.push("/app/dash-board");
            } else {
              toast.warning(
                "Insufficient Sprint token to complete transaction"
              );
            }
          } else {
            toast.warning("Fix Duplicate Values");
          }
        } else {
          toast.warning("Select up to 5 Cryptocurrencies");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(selectOptions);

  return (
    <div className={styles.main}>
      <div className='container'>
        <div className='row'>
          <div className='text-center'>
            <div className={styles.header}>
              <h1>69 Sprint</h1>
              <Image alt='logo' src={logo} />
              <h5>
                Put your predictive market prognostication skills to the test
                with Benevolent Moon’s newest charity generating fun game.{" "}
              </h5>
              <h6>
                {" "}
                Correctly predict the order of tokens in the 4-9 slots of the
                CoinMarketCap top 10 rankings and win.
              </h6>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div>
              <select
                onChange={(e) =>
                  setSelectedOptions(
                    e.target.value !== "Select crypto"
                      ? {
                          ...selectOptions,
                          index0: e.target.value,
                        }
                      : {
                          ...selectOptions,
                        }
                  )
                }
                className={styles.select}
              >
                <option>{loading ? "Loading..." : "Select crypto"}</option>
                {assets?.map((asset) => (
                  <>
                    <option key={asset.assetNumber} value={asset.assetNumber}>
                      {asset.asset}
                    </option>
                  </>
                ))}
              </select>
            </div>

            <div>
              <select
                onChange={(e) =>
                  setSelectedOptions({
                    ...selectOptions,
                    index1: e.target.value,
                  })
                }
                className={styles.select}
              >
                <option>{loading ? "Loading..." : "Select crypto"}</option>
                {assets?.map((asset) => (
                  <option key={asset.assetNumber} value={asset.assetNumber}>
                    {asset.asset}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                onChange={(e) =>
                  setSelectedOptions({
                    ...selectOptions,
                    index2: e.target.value,
                  })
                }
                className={styles.select}
              >
                <option>{loading ? "Loading..." : "Select crypto"}</option>
                {assets?.map((asset) => (
                  <option key={asset.assetNumber} value={asset.assetNumber}>
                    {asset.asset}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                onChange={(e) =>
                  setSelectedOptions({
                    ...selectOptions,
                    index3: e.target.value,
                  })
                }
                className={styles.select}
              >
                <option>{loading ? "Loading..." : "Select crypto"}</option>
                {assets?.map((asset) => (
                  <option key={asset.assetNumber} value={asset.assetNumber}>
                    {asset.asset}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                onChange={(e) =>
                  setSelectedOptions({
                    ...selectOptions,
                    index4: e.target.value,
                  })
                }
                className={styles.select}
              >
                <option>{loading ? "Loading..." : "Select crypto"}</option>
                {assets?.map((asset) => (
                  <option key={asset.assetNumber} value={asset.assetNumber}>
                    {asset.asset}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <Button
            onClick={
              enoughAllowance ? () => placeOrder() : () => approveTransactions()
            }
            variant='contained'
            color='primary'
            style={{
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            {enoughAllowance ? "Place Order" : "Approve Transaction"}
          </Button>
        </div>
      </div>
    </div>
  );
}
