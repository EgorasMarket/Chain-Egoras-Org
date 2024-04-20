import React, { useState, useEffect, useContext, useRef } from "react";
import "./dashBoardReferral.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import TollIcon from "@mui/icons-material/Toll";
import GroupsIcon from "@mui/icons-material/Groups";
import NodataComp from "../NodataComp";
import { numberWithCommas } from "../../../assets/numberWithCommas";
import Staticdata from "../Static";
import { ShimmerButton } from "react-shimmer-effects-18";
import DasboardMember from "./DasboardMember";
import {
  FETCH_REFERRAL_STAT,
  FETCH_Referral_LEADERBOARD_STAT,
} from "../../../constants/api";

const DashboardReferral = () => {
  const [componentLoading, setComponentLoading] = useState(true);
  const [componentLoading2, setComponentLoading2] = useState(true);
  const [componentLoading3, setComponentLoading3] = useState(true);

  const [refCode, setRefCode] = useState(localStorage.getItem("refCode"));
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [myReferrals, setMyReferrals] = useState([]);
  const [refLink, setRefLink] = useState("");
  const [Disable, setDisable] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(8);
  const [isLoading2, setIsLoading2] = useState(false);
  const [noPlan, setNoPlan] = useState(false);
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [successTxt, setSuccessTxt] = useState("");
  const [pinModalref, setPinModalref] = useState(false);
  const [pinModalsales, setPinModalsales] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  // const [refLeaderboard, setRefLeaderboard] = useState([]);
  const [contentLoadingTable, setContentLoadingTable] = useState(true);
  const [referalStat, setReferalStat] = useState({});
  let [inactiveCount, setInactiveCount] = useState(0);
  let [activeCount, setActiveCount] = useState(0);
  let [refPoint, setRefPoint] = useState(0);

  const containerRef = useRef(null);
  const copyText = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied code ";
    tooltip.style.display = "block";
  };
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
    tooltip.style.display = "none";
  }

  const scrollToBottom = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.scrollBehavior = "smooth"; // Enable smooth scrolling
      container.scrollTop = container.scrollHeight;
      // Disable smooth scrolling after the animation is complete
      container.addEventListener("scroll", () => {
        container.style.scrollBehavior = "auto";
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [itemsToShow]);

  const displayNextItems = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setItemsToShow(itemsToShow + 8);
      setIsLoading2(false);
    }, 2000); // Adjust the delay duration as needed (e.g., 1000 milliseconds or 1 second)
  };

  // let inactiveCount = 0;
  // let activeCount = 0;

  const fetchReferalStat = async () => {
    const res = await FETCH_REFERRAL_STAT(localStorage.getItem("wallet"));
    // console.log(res, "agba");
    // console.log(res.data, "maggi");
    setReferalStat(res.data.resMain);
    res.data.resMain.rows.forEach((item) => {
      if (item.state === "INACTIVE") {
        inactiveCount++;
        setInactiveCount(inactiveCount++);
      } else if (item.state === "ACTIVE") {
        activeCount++;
        setActiveCount(activeCount++);
      }
    });

    setRefPoint(activeCount * 10);
    setComponentLoading(!componentLoading);
    setComponentLoading3(!componentLoading3);
  };

  const fetchLeaderBoard = async () => {
    const res = await FETCH_Referral_LEADERBOARD_STAT();
    // console.log(res, "agba");
    console.log(res.data, "maggi");
    setLeaderBoard(res.data.leaderboard);

    setComponentLoading2(!componentLoading2);
  };

  useEffect(() => {
    fetchReferalStat();
    fetchLeaderBoard();
  }, []);

  return (
    <section className="ex_section">
      <div className="swapDivCont">
        <div className="pool_deatail_area_member_div">
          <DasboardMember
            refCode={refCode}
            componentLoading={componentLoading}
            refAmount={refPoint}
          />
        </div>
        <div className="dashBoard_ref_area1">
          <div className="dashBoard_ref_area1_cont1">
            <div className="dashBoard_ref_area1_cont1__cont1_div1">
              <div className="dashBoard_ref_area1_cont1_cont1">
                {" "}
                <div className="dashBoard_ref_area1_cont1_icon_div">
                  <GroupAddIcon className="stackedCoin_icon" />
                </div>
                <div className="dashBoard_ref_area1_cont1_div1 dashBoard_ref_area1_cont1_div1_b">
                  <div className="dashBoard_ref_area1_cont1_div1_1">
                    <div className="dashBoard_ref_area1_cont1_div1_cont1">
                      Active Referral(s)
                    </div>
                    <div className="dashBoard_ref_area1_cont1_div1_cont2">
                      {componentLoading ? (
                        <ShimmerButton size="sm" className="custom_shimmer" />
                      ) : (
                        <>
                          {activeCount}
                          {"   "}
                          <span className="dashBoard_ref_area1_cont1_div1_cont2_span">
                            {" "}
                            ref(s){" "}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashBoard_ref_area1_cont1_cont1">
                <div className="dashBoard_ref_area1_cont1_icon_div">
                  <GroupAddIcon className="stackedCoin_icon" />
                </div>
                <div className="dashBoard_ref_area1_cont1_div1">
                  <div className="dashBoard_ref_area1_cont1_div1_1">
                    <div className="dashBoard_ref_area1_cont1_div1_cont1">
                      Inactive Referral(s)
                    </div>
                    <div className="dashBoard_ref_area1_cont1_div1_cont2">
                      {componentLoading ? (
                        <ShimmerButton size="sm" className="custom_shimmer" />
                      ) : (
                        <>
                          {inactiveCount}{" "}
                          <span className="dashBoard_ref_area1_cont1_div1_cont2_span">
                            {" "}
                            ref(s){" "}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashBoard_ref_area1_cont2">
            <div className="dashBoard_ref_area1_cont1_icon_div">
              <GroupAddIcon className="stackedCoin_icon" />
            </div>
            <div className="dashBoard_ref_area1_cont1_div1">
              <div className="dashBoard_ref_area1_cont1_div1_1">
                <div className="dashBoard_ref_area1_cont1_div1_cont1">
                  Total Referrals
                </div>
                <div className="dashBoard_ref_area1_cont1_div1_cont2">
                  {componentLoading ? (
                    <ShimmerButton size="sm" className="custom_shimmer" />
                  ) : (
                    <>
                      {referalStat.count}{" "}
                      <span className="dashBoard_ref_area1_cont1_div1_cont2_span">
                        {" "}
                        ref(s){" "}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashBoard_ref_area2">
          <div className="dashBoard_ref_area2_cont1">
            <div className="dashBoard_ref_area2_cont1_head">
              <span className="leaderBoard_icon_div">
                <MilitaryTechIcon className="leaderBoard_icon" />
              </span>
              Leader board
            </div>
            <span className="table_hr"></span>
            {componentLoading2 ? (
              <div className="dashBoard_ref_area2_cont1_body">
                <div className="dashBoard_ref_area2_cont1_body_div_head">
                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 dashBoard_ref_area2_cont1_body_div_head_cont1_first">
                    Rank
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 ">
                    Username
                  </div>

                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                    Total Referrals
                  </div>
                </div>
                <div
                  className="dashBoard_ref_area2_cont1_body_cont"
                  ref={containerRef}
                >
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>

                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>

                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>

                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>

                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dashBoard_ref_area2_cont1_body">
                <div className="dashBoard_ref_area2_cont1_body_div_head">
                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 dashBoard_ref_area2_cont1_body_div_head_cont1_first">
                    Rank
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 ">
                    Username
                  </div>

                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                    Total Referrals
                  </div>
                </div>
                <div
                  className="dashBoard_ref_area2_cont1_body_cont"
                  ref={containerRef}
                >
                  {leaderBoard.length <= 0 ? (
                    <div className="no_loans_div">
                      <div className="no_loans_div_cont">
                        <NodataComp />
                      </div>{" "}
                    </div>
                  ) : (
                    leaderBoard
                      .slice(0, itemsToShow)
                      .sort((a, b) => b.refCount - a.refCount)
                      .map((data, index) => (
                        <div
                          className="dashBoard_ref_area2_cont1_body_div1"
                          // id={data.id}
                        >
                          <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                            {index == 0 ? (
                              <MilitaryTechIcon
                                style={{ color: "#e0ac01" }}
                                className="rewardTable_body_row_data_first_icon"
                              />
                            ) : index == 1 ? (
                              <MilitaryTechIcon
                                style={{ color: "#C0C0C0" }}
                                className="rewardTable_body_row_data_first_icon"
                              />
                            ) : index == 2 ? (
                              <MilitaryTechIcon
                                style={{ color: "#CD7F32" }}
                                className="rewardTable_body_row_data_first_icon"
                              />
                            ) : (
                              <MilitaryTechIcon
                                style={{ color: "#61607d" }}
                                className="rewardTable_body_row_data_first_icon"
                              />
                            )}
                            {index + 1}
                          </div>
                          <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                            @{data.address.slice(0, 4) + "..."}
                          </div>

                          <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                            {data.refCount} ref(s)
                          </div>
                        </div>
                      ))
                  )}
                </div>
                {itemsToShow < leaderBoard.length && (
                  <button
                    onClick={displayNextItems}
                    className="dashBoard_ref_area2_cont1_body_cont_btn"
                    disabled={isLoading2}
                  >
                    {isLoading2 ? (
                      <ScaleLoader color="#366e51" height={15} />
                    ) : (
                      "  Load More"
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="dashBoard_ref_area2_cont2">
            <div className="dashBoard_ref_area2_cont2_div1">
              <div className="dashBoard_ref_area2_cont1_head">
                <span className="leaderBoard_icon_div">
                  <GroupsIcon className="leaderBoard_icon" />
                </span>
                My Referrals
              </div>
              <span className="table_hr"></span>
              {componentLoading3 ? (
                <div className="dashBoard_ref_area2_cont1_body">
                  <div className="dashBoard_ref_area2_cont1_body_div_head">
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_first">
                      Address
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                      Status
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="dashBoard_ref_area2_cont1_body">
                  <div className="dashBoard_ref_area2_cont1_body_div_head">
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_first">
                      Username
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                      Status
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                      Volume
                    </div>
                  </div>
                  {referalStat.rows.length <= 0 ? (
                    <div className="no_loans_div">
                      <div className="no_loans_div_cont">
                        <NodataComp />
                      </div>{" "}
                    </div>
                  ) : (
                    referalStat.rows.slice(0, 5).map((data) => (
                      <div className="dashBoard_ref_area2_cont1_body_div1">
                        <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                          @{data.address}
                        </div>
                        <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                          {data.state}
                        </div>
                        <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                          {parseFloat(data.volume).toFixed(2)}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
            <div className="dashBoard_ref_area2_cont2_div2">
              <div className="dashBoard_ref_area2_cont2_div2_head">
                Copy your referral code and invite friends to earn more.
              </div>
              <input
                type="text"
                value={refCode}
                className="referral_default_value"
                id="myInput"
              />
              <div className="refferal_copy_btns">
                <button
                  className="ref_btn"
                  onClick={copyText}
                  onMouseOut={outFunc}
                  disabled={Disable}
                >
                  Copy referral code
                  <span className="tooltiptext" id="myTooltip"></span>
                </button>
              </div>
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
      {pinModalref ? (
        <WebPin
          // isLoading={loading}
          // btnFunc={() => WithdrawReferralEarn("REFERRAL")}
          pinTitle="Enter Pin to validate Transaction"
          pinPara="Input your pin to complete this transaction."
          btnFuncTxt="Proceed"
          handleOnComplete={(e) => {
            const a = e.join("");
            setPin(a);
            return;
          }}
          toggleWebpin={() => {
            setPinModalref(false);
          }}
        />
      ) : null}
      {pinModalsales ? (
        <WebPin
          // isLoading={loading}
          // btnFunc={() => WithdrawReferralEarn("PURCHASE")}
          pinTitle="Enter Pin to validate Transaction"
          pinPara="Input your pin to complete this transaction."
          btnFuncTxt="Proceed"
          handleOnComplete={(e) => {
            const a = e.join("");
            setPin(a);
            return;
          }}
          toggleWebpin={() => {
            setPinModalsales(false);
          }}
        />
      ) : null}
      {successModal ? (
        <SuccessModal
          SuccesTxt={successTxt}
          successFunc={() => {
            window.location.href = "/dashboard/wallet";
          }}
        />
      ) : null}
      {errorModal ? (
        <ErrorModal
          ErrorTxt={errorTxt}
          errorFunc={() => {
            setErrorModal(false);
          }}
        />
      ) : null}

      {pinModalref ? (
        <WebPin
          // isLoading={loading}
          // btnFunc={() => WithdrawReferralEarn("REFERRAL")}
          pinTitle="Enter Pin to validate Transaction"
          pinPara="Input your pin to complete this transaction."
          btnFuncTxt="Proceed"
          handleOnComplete={(e) => {
            const a = e.join("");
            setPin(a);
            return;
          }}
          toggleWebpin={() => {
            setPinModalref(false);
          }}
        />
      ) : null}
      {pinModalsales ? (
        <WebPin
          // isLoading={loading}
          // btnFunc={() => WithdrawReferralEarn("PURCHASE")}
          pinTitle="Enter Pin to validate Transaction"
          pinPara="Input your pin to complete this transaction."
          btnFuncTxt="Proceed"
          handleOnComplete={(e) => {
            const a = e.join("");
            setPin(a);
            return;
          }}
          toggleWebpin={() => {
            setPinModalsales(false);
          }}
        />
      ) : null}
      {successModal ? (
        <SuccessModal
          SuccesTxt={successTxt}
          successFunc={() => {
            window.location.href = "/dashboard/wallet";
          }}
        />
      ) : null}
      {errorModal ? (
        <ErrorModal
          ErrorTxt={errorTxt}
          errorFunc={() => {
            setErrorModal(false);
          }}
        />
      ) : null}
    </section>
  );
};

export default DashboardReferral;
