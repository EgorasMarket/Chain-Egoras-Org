import React, { useState, useEffect, useRef, useContext } from "react";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import "./UpdatedAppPagesStyles/StakingUpdate.css";
import Lottie from "lottie-react";
import Blockies from "react-blockies";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Nodata from "../nodataComponent/Nodata";
import ScaleLoader from "react-spinners/ScaleLoader";
import UpdatedErrorModal from "./UpdatedSuccessErrorModals/UpdatedErrorModal";
import UpdatedWarningModal from "./UpdatedSuccessErrorModals/UpdatedWarningModal";
import UpdatedSuccessModal from "./UpdatedSuccessErrorModals/UpdatedSuccessModal";
import rewardIcon from "../../../LottieFiles/loadingIcon/FillupJar.json";
import { numberWithCommas } from "../../../../assets/numberWithCommas";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useFetchFarmerInfo, useFarm } from "../Contracts/Contracts";
import { useWriteContract, useBalance, useAccount } from "wagmi";
import contractAddress from "../Contracts/abi/contractAddress.json";
import farmStakeAbi from "../Contracts/abi/stake.json";
import { formatEther, parseEther } from "ethers";
import { formattedError } from "../Contracts/FormattedError";
import Timer from "./Timer";
import { FETCH_USER_FARM_TRANSACTIONS } from "../../../../constants/api";

// import { testFunc } from "../Contracts/Contracts";

// import { ViewFarmerInfo } from "../Contracts/Contracts";
// import Timer from "./Timer";
// import Web3 from "web3";

// =====
// =====
// =====
// =====

export const DurationDiv = ({
  addMonthly,
  addYearly,
  add2months,
  add6months,
  SelectedDuration,
}) => {
  return (
    <div className="duration_dropDown_div">
      <div
        className={
          SelectedDuration === "monthly"
            ? "duration_dropDown_div_cont1_selected"
            : "duration_dropDown_div_cont1"
        }
        onClick={addMonthly}
      >
        1 Month (30 days)
      </div>
      <div
        className={
          SelectedDuration === "dualmonth"
            ? "duration_dropDown_div_cont1_selected"
            : "duration_dropDown_div_cont1"
        }
        onClick={add2months}
      >
        2 Months (60 days)
      </div>

      <div
        className={
          SelectedDuration === "semi"
            ? "duration_dropDown_div_cont1_selected"
            : "duration_dropDown_div_cont1"
        }
        onClick={add6months}
      >
        6 Months (180 days)
      </div>
      <div
        className={
          SelectedDuration === "yearly"
            ? "duration_dropDown_div_cont1_selected"
            : "duration_dropDown_div_cont1"
        }
        onClick={addYearly}
      >
        1 Year (360 days)
      </div>
    </div>
  );
};

const Stake = () => {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  console.log("====================================");
  console.log(isConnected, address, isDisconnected);
  console.log("====================================");
  // const account = address;
  const [durationDrop, setDurationDrop] = useState(false);
  const [Duration, setDuration] = useState(null);
  const [SelectedDuration, setSelectedDuration] = useState("");
  const [estimatedRewardDiv, setEstimatedRewardDiv] = useState(false);
  const [farmerInvestment, setFarmerInvestment] = useState("0");
  const [account, setAccount] = useState("0xXXxxxxxxxxxxxxxxxxxxxxxxxx");

  const [baseBalance, setBaseBalance] = useState(0.0);
  const [coinBalance2, setCoinBalance2] = React.useState(0.0);
  const [base, setBase] = useState("");
  const [asset, setAsset] = useState("");
  const [lockAmount, setLockAmount] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lockDate, setLockDate] = useState(null);
  const [activeTab, setActiveTab] = useState("lock");
  const [estimatedRewardAmnt, setEstimatedRewardAmnt] = useState(0);
  const [tokenBal, setTokenBal] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [Disable, setDisable] = useState(false);
  const [ClaimDisable, setClaimDisable] = useState(true);
  const [lockDisable, setLockDisable] = useState(false);
  const [LockedTransactions, setLockedTransactions] = useState([]);
  const [UniqueLockedTransactions, setUniqueLockedTransactions] = useState([]);
  const [egcUsdVal, setEgcUsdVal] = useState(0);
  const [graphData2, setGraphData2] = useState([]);
  const [availableClaimReward, setAvailableClaimReward] = useState("0");
  const [nextRewardTakeTime, setNextRewardTakeTime] = useState("");
  const [unlockStakeTime, setUnlockStakeTime] = useState("");
  const [unlockStakeDuration, setUnlockStakeDuration] = useState("");
  const [TotalClaimedReward, setTotalClaimedReward] = useState("0");
  const [dailyReward, setDailyReward] = useState("0");
  const [rewardCountDown, setRewardCountDown] = useState(false);
  const [notDueButton, setNotDueButton] = useState(false);
  const [notDueDiv, setNotDueDiv] = useState(false);
  const [stakeData, setStakeData] = useState([]);

  const [myAssetInfo, setMyAssetInfo] = useState({});
  const [totalAssetInfo, setTotalAssetInfo] = useState({
    amount: 0,
    dailyRoyalty: 0,
  });
  const [txHash, setTxHash] = useState("");
  const [unlockBtn, setUnlockBtn] = useState(true);
  const [unLockCheckStatus, setUnLockCheckStatus] = useState(false);
  const toggleDurationDrop = () => {
    setDurationDrop(!durationDrop);
  };

  const addMonthly = () => {
    const currentDate = new Date();
    // get current date
    currentDate.setMonth(currentDate.getMonth() + 1); // add one month
    const month = currentDate.getMonth() + 1; // get the month (0-based index)
    const day = currentDate.getDate(); // get the day of the month
    const year = currentDate.getFullYear().toString().slice(-2); // get the year (last two digits)

    // pad month and day with a leading zero if necessary
    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");

    // create the formatted date string
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    // setLockDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    const dateString = currentDate;
    const date = new Date(dateString);

    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDateString = date.toLocaleDateString("en-US", options);
    setLockDate(formattedDateString);
    console.log(formattedDate); // Output: Mon Mar 20 2023
    console.log(formattedDateString); // output: e.g. "03/20/23" for current date of Feb 20, 2023
    console.log(currentDate); // output: e.g. "03/20/23" for current date of Feb 20, 2023
    setDuration(formattedDate);
    setDurationDrop(!durationDrop);
    setSelectedDuration("monthly");
  };
  const add2months = () => {
    const currentDate = new Date();
    // get current date
    currentDate.setMonth(currentDate.getMonth() + 2); // add one month
    const month = currentDate.getMonth() + 1; // get the month (0-based index)
    const day = currentDate.getDate(); // get the day of the month
    const year = currentDate.getFullYear().toString().slice(-2); // get the year (last two digits)

    // pad month and day with a leading zero if necessary
    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");

    // create the formatted date string
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    // setLockDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    const dateString = currentDate;
    const date = new Date(dateString);

    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDateString = date.toLocaleDateString("en-US", options);
    setLockDate(formattedDateString);
    console.log(formattedDate); // Output: Mon Mar 20 2023
    console.log(formattedDateString); // output: e.g. "03/20/23" for current date of Feb 20, 2023
    console.log(currentDate); // output: e.g. "03/20/23" for current date of Feb 20, 2023
    setDuration(formattedDate);
    setDurationDrop(!durationDrop);
    setSelectedDuration("dualmonth");
  };
  const add6months = () => {
    const currentDate = new Date();
    // get current date
    currentDate.setMonth(currentDate.getMonth() + 6); // add one month
    const month = currentDate.getMonth() + 1; // get the month (0-based index)
    const day = currentDate.getDate(); // get the day of the month
    const year = currentDate.getFullYear().toString().slice(-2); // get the year (last two digits)

    // pad month and day with a leading zero if necessary
    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");

    // create the formatted date string
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    // setLockDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    const dateString = currentDate;
    const date = new Date(dateString);

    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDateString = date.toLocaleDateString("en-US", options);
    setLockDate(formattedDateString);
    console.log(formattedDate); // Output: Mon Mar 20 2023
    console.log(formattedDateString); // output: e.g. "03/20/23" for current date of Feb 20, 2023
    console.log(currentDate); // output: e.g. "03/20/23" for current date of Feb 20, 2023
    setDuration(formattedDate);
    setDurationDrop(!durationDrop);
    setSelectedDuration("semi");
  };

  const addYearly = () => {
    const currentDate = new Date(); // get current date
    currentDate.setFullYear(currentDate.getFullYear() + 1); // add one year
    const month = currentDate.getMonth() + 1; // get the month (0-based index)
    const day = currentDate.getDate(); // get the day of the month
    const year = currentDate.getFullYear().toString().slice(-2); // get the year (last two digits)

    // pad month and day with a leading zero if necessary
    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");

    // create the formatted date string
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    // setLockDate(
    //   new Date(currentDate.setFullYear(currentDate.getFullYear() + 1))
    // );
    const dateString = currentDate;
    const date = new Date(dateString);

    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDateString = date.toLocaleDateString("en-US", options);
    setLockDate(formattedDateString);
    console.log(formattedDate);
    setDuration(formattedDate);
    setDurationDrop(!durationDrop);
    setSelectedDuration("yearly");
  };

  const AmountChange = (e) => {
    setLockAmount(e.target.value);
    console.log(e.target.value);
    if (e.target.value < 1) {
      setEstimatedRewardDiv(false);
    } else {
      setEstimatedRewardDiv(true);
    }
    setEstimatedRewardAmnt(e.target.value * 0.0012);
  };

  const toggleLockTabs = (e) => {
    let target = e.currentTarget.id;
    setActiveTab(target);
  };

  const CloseSuccessModal = () => {
    setSuccessModal(false);
  };

  const CloseErrorModal = () => {
    setErrorModal(false);
  };

  const maxAmount = () => {
    setLockAmount(coinBalance2);
    // setEstimatedRewardAmnt(coinBalance2 * 0.0012);
    // setEstimatedRewardDiv(true);
  };

  const toggleNotDueDiv = () => {
    setNotDueDiv(!notDueDiv);
  };

  useEffect(() => {
    if (address) {
      setAccount(address);
      return;
    }
  }, [address]);

  const { open, close } = useWeb3Modal();

  const { data, error, isPending } = useFetchFarmerInfo(address);

  useEffect(() => {
    if (isConnected) {
      if (isPending) {
        console.log("Loading farmer information...");
      } else if (error) {
        console.error("Error fetching farmer information:", error);
      } else {
        console.log("Farmer information:", data);
        console.log("Farmer information data:", formatEther(data[0]));
        console.log("Farmer information data:", formatEther(data[1]));
        console.log("Farmer information data:", formatEther(data[2]));
        console.log("Farmer information data:", formatEther(data[3]));
        console.log("Farmer information data:", formatEther(data[4]));
        setTotalClaimedReward(formatEther(data[4]));
        setFarmerInvestment(formatEther(data[1]));
        setDailyReward(formatEther(data[0]));
        let formatted = data[3].toString();
        let formatted2 = data[2].toString();
        // let formatted = res.message._nextRoyaltyTakePeriod.toString();
        const endDate = formatted;
        const endDate2 = formatted2;
        const newRewardDate = new Date(endDate * 1000);
        const newRewardDate2 = new Date(endDate2 * 1000);
        console.log(newRewardDate);
        console.log(newRewardDate2);
        const date = newRewardDate;
        const date2 = newRewardDate2;
        const day = date.getUTCDate().toString().padStart(2, "0");
        const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
        const year = date.getUTCFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        const day2 = date2.getUTCDate().toString().padStart(2, "0");
        const month2 = (date2.getUTCMonth() + 1).toString().padStart(2, "0");
        const year2 = date2.getUTCFullYear();
        const formattedDate2 = `${day2}/${month2}/${year2}`;
        console.log(formattedDate);
        console.log(formattedDate2);
        setNextRewardTakeTime(newRewardDate);
        setUnlockStakeTime(newRewardDate2);
        if (newRewardDate <= new Date() && farmerInvestment !== "0.0") {
          setClaimDisable(false);
          setRewardCountDown(false);
        } else {
          setClaimDisable(true);
          setRewardCountDown(true);
        }
      }
      return;
    }
  }, [isPending, error, data, isConnected]);

  const {
    data: farmData,
    isPending: farmLoading,
    error: farmError,
    isSuccess: farmSuccess,
    writeContract,
  } = useWriteContract();

  const {
    data: balanceData,
    isPending: balancePending,
    error: balanceError,
    isSuccess: balanceSuccess,
  } = useBalance({
    address: account,
  });

  useEffect(() => {
    if (isConnected) {
      if (balancePending) {
        console.log("fetching balance...");
      } else if (balanceError) {
        console.error("Error fetching balance:", balanceError);
      } else if (balanceData) {
        console.log("Fetching bal successful:", balanceData);
        setCoinBalance2(balanceData.formatted);
      }
    }
  }, [balancePending, balanceError, balanceData, isConnected]);

  console.log("====================================");
  console.log(balanceData);
  console.log("====================================");

  useEffect(() => {
    console.log("====================================");

    console.log("====================================");
    console.log("farmResponses:", { farmError, farmData, farmSuccess });
    console.log("====================================");
    if (farmLoading) {
      console.log("Transaction is pending...");
    } else {
      console.log("====================================");
      console.log(farmData, farmError, farmSuccess);
      console.log("====================================");
    }
    const farmSuccesss = { farmSuccess };
    console.log("====================================");
    console.log(farmSuccesss);
    console.log("====================================");
    if (farmSuccesss.farmSuccess === true) {
      setSuccessModal(true);
      setTxHash(farmData);
      setSuccessMessage(
        activeTab === "lock"
          ? `You have successfully Created a farmland with ${lockAmount} egax`
          : activeTab === "claim"
          ? `You have successfully Harvested your daily crops`
          : activeTab === "unlock"
          ? `You have successfully cleared your farmland`
          : "success"
      );
      return;
    }
    if (farmError !== null) {
      console.log("====================================");
      const formError = { farmError };
      console.log(formError);
      console.log(formError.farmError.cause.reason);
      const splitError =
        formError.farmError.cause.reason === undefined &&
        formError.farmError.cause.details.split("=");
      console.log(splitError[2]);
      console.log("====================================");
      setErrorModal(true);
      setErrorMessage(
        formError.farmError.cause.reason === undefined
          ? splitError[2]
          : formError.farmError.cause.reason
      );
      return;
    }
  }, [farmLoading, farmError, farmData, farmSuccess]);

  const farmingPeriod =
    SelectedDuration === "monthly"
      ? 0
      : SelectedDuration === "dualmonth"
      ? 1
      : SelectedDuration === "semi"
      ? 2
      : SelectedDuration === "yearly"
      ? 3
      : 0;

  const farm = () => {
    writeContract({
      abi: farmStakeAbi.abi,
      address: contractAddress.address,
      functionName: "farm",
      args: [farmingPeriod],
      value: parseEther(lockAmount.toString(), "wei").toString(),
    });
  };
  const AddFunds = () => {
    writeContract({
      abi: farmStakeAbi.abi,
      address: contractAddress.address,
      functionName: "addLabourers",
      args: [number_of_labourers],
    });
  };
  const clearFarm = () => {
    writeContract({
      abi: farmStakeAbi.abi,
      address: contractAddress.address,
      functionName: "clearFarm",
    });
  };

  const claimFarmReward = () => {
    writeContract({
      abi: farmStakeAbi.abi,
      address: contractAddress.address,
      functionName: "harvestMaturedCrops",
    });
  };
  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);
  const fetchUserTransactions = async () => {
    const res = await FETCH_USER_FARM_TRANSACTIONS(address);
    console.log(res, "agba");
    console.log(res.data.userTransactions, "agba");
    setStakeData(res.data.userTransactions);
    console.log(address, "agba");
  };
  useEffect(() => {
    if (isConnected) {
      fetchUserTransactions();
    }
  }, [isConnected]);

  return (
    <div className="earn_div">
      {/* get started section start */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* Tokens Section Start */}
      <section className="earn_section">
        <div className="earn_section_1">
          <div className="container">
            <div className="earn_section_1_area">
              <div className="earn_section_1_area_1">
                <div className="earn_section_1_area_1_cont1">
                  <img
                    src="/egax_logo.png"
                    alt=""
                    className="earn_section_1_area_1_cont-img"
                  />
                  Egax Farming
                </div>
                <div className="earn_section_1_area_1_cont2">
                  Egax holders have the ability to seamlessly lock and unlock
                  their tokens within the smart contract at any time. Once
                  locked, Egax automatically accrues value based on the global
                  system variable known as the ESR (Egax Stable Rate). This
                  dynamic reward system incentivizes long-term Egax holdings and
                  contributes to the overall stability of the ecosystem.
                </div>
              </div>
              <div className="earn_section_1_area_2">
                <div className="earn_section_1_area_2_div1">
                  <div className="earn_section_1_area_2_div1_title">
                    Farmer's Investment
                  </div>
                  <div className="earn_section_1_area_2_div1_content">
                    {parseFloat(farmerInvestment).toFixed(4)} Egax
                  </div>
                </div>
                <div className="earn_section_1_area_2_div1">
                  <div className="earn_section_1_area_2_div1_title">
                    Total Harvested Crops
                  </div>
                  <div className="earn_section_1_area_2_div1_content">
                    {parseFloat(TotalClaimedReward).toFixed(4)}Egax
                  </div>
                </div>
                <div className="earn_section_1_area_2_div1">
                  <div className="earn_section_1_area_2_div1_title">
                    Avg APY
                  </div>
                  <div className="earn_section_1_area_2_div1_content">45%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="earn_section_2">
          <div className="container">
            <div className="earn_section_2_area1">
              <div className="earn_section_2_area1_cont1">
                <div className="earn_section_2_area1_cont1_title">
                  Your Info
                </div>
                <div className="earn_section_2_area1_cont1_asset_cont">
                  <div className="earn_section_2_area1_cont1_asset_cont_1_lottie_div">
                    <Lottie
                      animationData={rewardIcon}
                      loop={true}
                      autoPlay={true}
                      className="earn_section_2_area1_cont1_asset_cont_1_lottie_div_icon"
                      preserveAspectRatio="xMidYMid meet"
                    />
                    <div className="earn_section_2_area1_cont1_asset_cont_1_lottie_div_txt">
                      <div className="earn_section_2_area1_cont1_asset_cont_1_lottie_div_txt_title">
                        Total Harvested Crops
                      </div>
                      <div className="earn_section_2_area1_cont1_asset_cont_1_lottie_div_txt_content">
                        {parseFloat(TotalClaimedReward).toFixed(4)} Egax
                      </div>
                    </div>
                  </div>

                  <div className="earn_section_2_area1_cont1_asset_cont_1">
                    <div className="earn_section_2_area1_cont1_asset_cont_1_div">
                      <div className="earn_section_2_area1_cont1_asset_cont_1_title">
                        Farmer's Investment
                      </div>
                      <div className="earn_section_2_area1_cont1_asset_cont_1_token">
                        {parseFloat(farmerInvestment).toFixed(4)} Egax
                      </div>
                    </div>
                    <div className="earn_section_2_area1_cont1_asset_cont_1_div">
                      <div className="earn_section_2_area1_cont1_asset_cont_1_title">
                        Your Wallet Balance
                      </div>
                      <div className="earn_section_2_area1_cont1_asset_cont_1_token">
                        {parseFloat(coinBalance2).toFixed(5)} Egax
                      </div>
                    </div>
                  </div>
                  <div className="earn_section_2_area1_cont1_asset_cont_1b">
                    <div className="earn_section_2_area1_cont1_asset_cont_1_div">
                      <div className="earn_section_2_area1_cont1_asset_cont_1_title">
                        Daily Crops To Harvest
                      </div>
                      <div className="earn_section_2_area1_cont1_asset_cont_1_token">
                        {parseFloat(dailyReward).toFixed(8)} Egax
                      </div>
                    </div>
                    {/* <div className="earn_section_2_area1_cont1_asset_cont_1_div">
                        <div className="earn_section_2_area1_cont1_asset_cont_1_title">
                          APY
                        </div>
                        <div className="earn_section_2_area1_cont1_asset_cont_1_token">
                          45%
                        </div>
                      </div> */}
                  </div>
                </div>
              </div>
              <div className="earn_section_2_area1_cont2">
                <div className="lock_container_cont1_div1_lock_div">
                  <div className="lock_container_cont1_div1_lock_div_tabs">
                    <div
                      id="lock"
                      className={
                        activeTab === "lock"
                          ? "lock_container_cont1_div1_lock_div_tab1_active"
                          : "lock_container_cont1_div1_lock_div_tab1"
                      }
                      onClick={toggleLockTabs}
                    >
                      Farm
                    </div>
                    <div
                      id="claim"
                      className={
                        activeTab === "claim"
                          ? "lock_container_cont1_div1_lock_div_tab1_active"
                          : "lock_container_cont1_div1_lock_div_tab1"
                      }
                      onClick={toggleLockTabs}
                    >
                      Harvest
                    </div>
                    <div
                      id="unlock"
                      className={
                        activeTab === "unlock"
                          ? "lock_container_cont1_div1_lock_div_tab1_active"
                          : "lock_container_cont1_div1_lock_div_tab1"
                      }
                      onClick={toggleLockTabs}
                    >
                      Clear Farm
                    </div>
                  </div>
                </div>
                <div className="earn_section_2_area1_cont2_body">
                  {activeTab === "lock" ? (
                    <div className="lock_container_cont1_div1_lock_div_lock_body">
                      <div className="lock_container_cont1_div1_lock_div_lock_body_input_body">
                        <div className="lock_container_cont1_div1_lock_div_lock_body_input_body_head">
                          <span className="lock_container_cont1_div1_lock_div_lock_body_input_body_head_span1">
                            Amount of Crops:
                          </span>
                          <span className="lock_container_cont1_div1_lock_div_lock_body_input_body_head_span1">
                            Balance: {parseFloat(coinBalance2).toFixed(4)}
                          </span>
                        </div>
                        <div className="lock_container_cont1_div1_lock_div_lock_body_input_body_cont">
                          <input
                            type="number"
                            value={lockAmount}
                            placeholder="Min amount 50 egax"
                            onChange={AmountChange}
                            className="lock_container_cont1_div1_lock_div_lock_body_input_body_input"
                          />
                          <div className="lock_container_cont1_div1_lock_div_lock_body_input_body_cont_amount_div">
                            <button
                              className="lock_container_cont1_div1_lock_div_lock_body_input_body_cont_amount_div1_btn"
                              onClick={maxAmount}
                            >
                              MAX
                            </button>
                            {/* <div className="lock_container_cont1_div1_lock_div_lock_body_input_body_cont_amount_div2">
                                egc
                              </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="lock_container_cont1_div1_lock_div_lock_body_input_body">
                        <div className="lock_container_cont1_div1_lock_div_lock_body_input_body_head">
                          <span className="lock_container_cont1_div1_lock_div_lock_body_input_body_head_span1">
                            Farm Period:{" "}
                            {SelectedDuration === "monthly" ? (
                              <> 1 month</>
                            ) : SelectedDuration === "dualmonth" ? (
                              <> 2 months</>
                            ) : SelectedDuration === "semi" ? (
                              <> 6 months</>
                            ) : SelectedDuration === "yearly" ? (
                              <> 1 year</>
                            ) : null}
                          </span>
                          <span className="lock_container_cont1_div1_lock_div_lock_body_input_body_head_span2">
                            Expires: {lockDate}
                          </span>
                        </div>
                        <div className="lock_container_cont1_div1_lock_div_lock_body_input_body_cont">
                          <input
                            type="text"
                            value={Duration}
                            onClick={toggleDurationDrop}
                            placeholder="MM/DD/YY"
                            className="lock_container_cont1_div1_lock_div_lock_body_input_body_input"
                          />
                          <EventOutlinedIcon
                            onClick={toggleDurationDrop}
                            className="lock_container_cont1_div1_lock_div_lock_body_input_body_cont_icon"
                          />
                          {durationDrop ? (
                            <DurationDiv
                              addMonthly={addMonthly}
                              add2months={add2months}
                              add6months={add6months}
                              // addSemiMonthly={addSemiMonthly}
                              addYearly={addYearly}
                              SelectedDuration={SelectedDuration}
                            />
                          ) : null}
                        </div>
                      </div>
                      {estimatedRewardDiv ? (
                        <div className="estRewardDiv">
                          Estimated Daily Reward:{" "}
                          <span className="estRewardDiv_span">{2} Egax</span>
                        </div>
                      ) : null}

                      {!account ? (
                        <>
                          {" "}
                          <button
                            disabled={true}
                            className="lock_container_cont1_div1_lock_div_lock_body_input_body_btn"
                          >
                            Connect wallet
                          </button>
                        </>
                      ) : (
                        <>
                          {farmLoading ? (
                            <button
                              disabled={farmLoading}
                              className="lock_container_cont1_div1_lock_div_lock_body_input_body_btn"
                            >
                              <ScaleLoader
                                color="#65997d"
                                size={10}
                                height={20}
                              />{" "}
                              Farming...
                            </button>
                          ) : (
                            <button
                              disabled={
                                lockAmount === "" ||
                                SelectedDuration === "" ||
                                lockAmount < 50
                                  ? true
                                  : false
                              }
                              onClick={farm}
                              className="lock_container_cont1_div1_lock_div_lock_body_input_body_btn"
                            >
                              {lockAmount === ""
                                ? "Input Amount of Crops"
                                : SelectedDuration === ""
                                ? "Input farm period"
                                : lockAmount < 50
                                ? "Minimum amount 50 egax"
                                : "Start Farming"}
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  ) : activeTab === "claim" ? (
                    <div className="lock_container_cont1_div1_lock_div_lock_body">
                      <div className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1">
                        <div className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_head">
                          Daily Crops
                        </div>
                        <div className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_amount">
                          {parseFloat(dailyReward).toFixed(8)} Egax
                          {rewardCountDown === true ? (
                            <div className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_amount_dollar_equiv">
                              Harvest In the next:
                              <Timer deadline={nextRewardTakeTime} />
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {farmLoading ? (
                        <button
                          disabled={farmLoading}
                          className="lock_container_cont1_div1_lock_div_lock_body_input_body_btn"
                        >
                          <ScaleLoader color="#65997d" size={10} height={20} />{" "}
                          Harvesting...
                        </button>
                      ) : (
                        <button
                          disabled={
                            nextRewardTakeTime > new Date() ||
                            dailyReward == "0"
                              ? true
                              : false
                          }
                          onClick={claimFarmReward}
                          className="lock_container_cont1_div1_lock_div_lock_body_input_body_btn"
                        >
                          {nextRewardTakeTime > new Date() || dailyReward == "0"
                            ? "Crops not due for harvest"
                            : "Harvest Crops"}
                        </button>
                      )}
                    </div>
                  ) : activeTab === "unlock" ? (
                    <div className="lock_container_cont1_div1_lock_div_lock_body">
                      <div className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1">
                        <div className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_head">
                          Farmer's Investment
                        </div>
                        <div className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_amount">
                          <span className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_amount_span">
                            <span className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_amount_span_span1">
                              {parseFloat(farmerInvestment).toFixed(4)} Egax
                            </span>
                            {/* <span className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_amount_span_span2">
                              Duration:
                              <span className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_amount_span_span2_span">
                                {/* ({unlockStakeDuration}) */}
                            {/* 1year
                              </span> */}
                            {/* </span>  */}
                          </span>
                          {rewardCountDown === true ? (
                            <div className="lock_container_cont1_div1_lock_div_lock_body_claim_Div1_amount_dollar_equiv">
                              Clear Farm In the next:
                              <Timer deadline={unlockStakeTime} />
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {farmLoading ? (
                        <button
                          disabled={farmLoading}
                          className="lock_container_cont1_div1_lock_div_lock_body_input_body_btn"
                        >
                          <ScaleLoader color="#65997d" size={10} height={20} />{" "}
                          Clearing...
                        </button>
                      ) : (
                        <button
                          disabled={
                            unlockStakeTime > new Date() ||
                            farmerInvestment == "0"
                              ? true
                              : false
                          }
                          onClick={clearFarm}
                          className="lock_container_cont1_div1_lock_div_lock_body_input_body_btn"
                        >
                          {unlockStakeTime > new Date() ||
                          farmerInvestment == "0"
                            ? "Farm not available to clear"
                            : "Clear Farm"}
                        </button>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="earn_section_3_area">
              <div className="earn_section_3_area_title">Transactions</div>
              <div className="earn_section_3_area_body">
                {stakeData.length <= 0 ? (
                  <div className="no_loans_div">
                    <div className="no_loans_div_cont">
                      <Nodata />
                      No Transaction Yet.
                    </div>{" "}
                  </div>
                ) : (
                  <table className="stakingTable_table">
                    <thead className="stakingTable_titles">
                      <tr className="stakingTable_title_div">
                        <th className="stakingTable_heading_titles stakingTable_heading_titles_first">
                          Action
                        </th>
                        <th className="stakingTable_heading_titles">Amount</th>
                        <th className="stakingTable_heading_titles">
                          Farm Period
                        </th>
                        <th className="stakingTable_heading_titles">Address</th>

                        <th className="stakingTable_heading_titles stakingTable_heading_titles_last">
                          Txn Hash
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="stakingTable_body"
                      id="popular-categories"
                    >
                      {/* =============== */}
                      {/* =============== */}
                      {/* =============== */}
                      {stakeData.reverse().map((data) => {
                        const date = new Date(data.time);
                        const day = date
                          .getUTCDate()
                          .toString()
                          .padStart(2, "0");
                        const month = (date.getUTCMonth() + 1)
                          .toString()
                          .padStart(2, "0");
                        const year = date.getUTCFullYear();
                        const formattedDate = `${day}/${month}/${year}`;
                        console.log(formattedDate);
                        return (
                          <tr className="stakingTable_body_row ">
                            <td className="stakingTable_body_row_data stakingTable_body_row_data_first  ">
                              <div className="value_dolls_div">
                                Farm
                                <div className="value_dolls_div_val">
                                  {formattedDate}
                                </div>
                              </div>
                            </td>
                            <td className="stakingTable_body_row_data">
                              <div className="value_dolls_div2">
                                <span style={{ display: "flex" }}>
                                  {parseFloat(data.amount).toFixed(2)} Egax
                                </span>
                              </div>
                            </td>
                            <td className="stakingTable_body_row_data">
                              {data.farmingPeriod === 0
                                ? "1 month"
                                : data.farmingPeriod === 1
                                ? "2 months"
                                : data.farmingPeriod === 2
                                ? "6 months"
                                : data.farmingPeriod === 3
                                ? "1 year"
                                : ""}
                            </td>
                            <td className="stakingTable_body_row_data">
                              <div className="stakingTable_body_row_data_blockies_">
                                <Blockies
                                  seed={data.ser}
                                  size={8}
                                  scale={4}
                                  className="blockies_icon"
                                />
                                {`${data.user.slice(0, 6)}...${data.user.slice(
                                  39,
                                  42
                                )}`}
                              </div>
                            </td>
                            <td className="stakingTable_body_row_data stakingTable_body_row_data_last">
                              <a
                                href={`https://egoscan.io/tx/${data.transactionHash}`}
                                target="_blank"
                              >
                                {" "}
                                {`${data.transactionHash.slice(
                                  0,
                                  6
                                )}...${data.transactionHash.slice(63, 66)}`}
                                <OpenInNewIcon className="tx_hash_link_icon" />
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                      {/* =================== */}
                      {/* =================== */}
                      {/* =================== */}
                      {/* =================== */}
                      {/* =================== */}
                      {/* =================== */}
                      {/* =================== */}
                      {/* =================== */}
                      {/* =================== */}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class="background_gradient-parent">
          <div class="background_gradient"></div>
        </div>
        <img
          src="/img/dark_home_sec_bg.svg"
          alt=""
          className="home_div_section1_bg"
        />
        <img src="/img/farm_bg.png" alt="" className="earn_section_img" />
      </section>
      {/* {errorModal ? (
        <UpdatedErrorModal
          errorMessage={errorMessage}
          closeModal={CloseErrorModal}
        />
      ) : null} */}
      {notDueDiv ? (
        <UpdatedWarningModal
          errorMessage={
            <div>
              An early withdrawal prior to the expiration of the stake period
              will result in a penalty fee of{" "}
              <span style={{ color: "#fff", fontWeight: "700" }}> 10%.</span>
            </div>
          }
          continueFunc={UnlockStake}
          closeModal={toggleNotDueDiv}
        />
      ) : null}
      {/* {successModal ? (
        <UpdatedSuccessModal
          btnRoute={true}
          successMessage={successMessage}
          route="/stake"
          txnHashDiv={true}
          TxnHash={txHash}
        />
      ) : null} */}
      {errorModal ? (
        <UpdatedErrorModal
          errorMessage={errorMessage}
          closeModal={() => {
            setErrorModal(false);
          }}
        />
      ) : null}
      {successModal ? (
        <UpdatedSuccessModal
          successMessage={successMessage}
          btnClose={true}
          closeModal={() => {
            window.location.href = "/farm";
          }}
          txnHashDiv={true}
          TxnHash={txHash}
        />
      ) : null}
    </div>
  );
};

export default Stake;
