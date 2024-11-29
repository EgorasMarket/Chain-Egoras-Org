import React, { useState, useEffect, useRef, useContext } from "react";
import { useWriteContract, useBalance, useAccount } from "wagmi";
import contractAddress from "./Contracts/abi/contractAddress.json";
import farmStakeAbi from "./Contracts/abi/stake.json";
import ScaleLoader from "react-spinners/ScaleLoader";
import UpdatedErrorModal from "./Staking/UpdatedSuccessErrorModals/UpdatedErrorModal";
import UpdatedSuccessModal from "./Staking/UpdatedSuccessErrorModals/UpdatedSuccessModal";
import { formatEther, parseEther } from "ethers";

const StakeConfig = () => {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const [coinBalance2, setCoinBalance2] = React.useState(0);
  const [number_of_labourers, setNumber_of_labourers] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [account, setAccount] = useState("0xXXxxxxxxxxxxxxxxxxxxxxxxxx");
  const [txHash, setTxHash] = useState("");
  console.log("====================================");
  console.log(isConnected, address, isDisconnected);

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
  const AddFunds = () => {
    writeContract({
      abi: farmStakeAbi.abi,
      address: contractAddress.address,
      functionName: "addLabourers",
      value: parseEther(number_of_labourers.toString(), "wei").toString(),
    });
  };
  console.log(number_of_labourers);
  useEffect(() => {
    if (address) {
      setAccount(address);
      return;
    }
  }, [address]);
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
        `You have successfully funded the pool with ${number_of_labourers} egax`
      );
      return;
    }
    if (farmError) {
      console.log("====================================");
      const formError = { farmError };
      console.log(formError);
      console.log(formError.farmError.cause.shortMessage);
      setErrorModal(true);
      setErrorMessage(formError.farmError.cause.shortMessage);
      return;
    }
  }, [farmLoading, farmError, farmData, farmSuccess]);

  return (
    <div className="stakeConfigDiv">
      <div className="container">
        <div className="stakeConfigDiv_area">
          <div className="stakeConfigDiv_area_title">Farm Config</div>
          <div className="stakeConfigDiv_area_body">
            <div className="stakeConfigDiv_area_body_input_div">
              <div className="stakeConfigDiv_area_body_input_div_title">
                Amount <span> {parseFloat(coinBalance2).toFixed(5)} Egax </span>
              </div>
              <input
                type="number"
                className="stakeConfigDiv_area_body_input"
                placeholder="0.00 egax"
                value={number_of_labourers}
                onChange={(e) => {
                  setNumber_of_labourers(e.target.value);
                }}
              />
            </div>
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
                    <ScaleLoader color="#65997d" size={10} height={20} />{" "}
                    Funding Contract...
                  </button>
                ) : (
                  <button
                    disabled={
                      number_of_labourers === "" ||
                      parseFloat(number_of_labourers) > parseFloat(coinBalance2)
                        ? true
                        : false
                    }
                    onClick={AddFunds}
                    className="lock_container_cont1_div1_lock_div_lock_body_input_body_btn"
                  >
                    {number_of_labourers === ""
                      ? "Input Fund Amount"
                      : parseFloat(number_of_labourers) >
                        parseFloat(coinBalance2)
                      ? "Insufficient Balance"
                      : "Fund Contract"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
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
            setSuccessModal(false);
          }}
          txnHashDiv={true}
          TxnHash={txHash}
        />
      ) : null}
    </div>
  );
};

export default StakeConfig;
