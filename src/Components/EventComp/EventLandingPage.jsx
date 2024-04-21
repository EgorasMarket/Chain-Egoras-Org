import React, { useState, useEffect } from "react";
import "./eventlanding.css";
import Grid from "../Home/Grid";
import Spline from "@splinetool/react-spline";
import { CasinoSharp } from "@mui/icons-material";
import ScaleLoader from "react-spinners/ScaleLoader";
import CloseIcon from "@mui/icons-material/Close";
import { ENROLL_EVENT, FETCH_ALL_EVENT_STAT } from "../../constants/api";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
const EventLandingPage = () => {
  const navigate = useNavigate();
  const [eventModal, setEventModal] = useState(false);
  const [wallet, setWallet] = useState("");
  const [isLoading, setIsloading] = useState("");
  const [refCode, setRefCode] = useState("");
  const [stats, setStats] = useState(null);
  const ToggleEventModal = () => {
    setEventModal(!eventModal);
  };

  const enrollInEvent = async () => {
    setIsloading(true);
    if (wallet === "") {
      return;
    }
    const res = await ENROLL_EVENT({ address: wallet, refCode: refCode });

    // localStorage.setItem("refCode", refCode);

    console.log(res, "maggi");
    if (res.code === 200) {
      setIsloading(false);
      localStorage.setItem("wallet", wallet);

      window.location.href = "/event";
      localStorage.setItem("refCode", res.data.userInfo.referralId);
      return;
    }
    if (res.code !== 200) {
      setIsloading(false);

      return;
    }
  };

  const deadline = new Date();
  deadline.setHours(15); // 2 PM
  deadline.setMinutes(0); // 30 minutes
  const fetchEventStat = async () => {
    const res = await FETCH_ALL_EVENT_STAT();
    console.log(res, "agba");
    console.log(res.data.stats, "agba");
    setStats(res.data.stats[0]);
  };

  useEffect(() => {
    if (stats === null) {
      fetchEventStat();
      return;
    }
  }, [stats]);
  return (
    <div className="EventLandingPage_div">
      <section className="EventLandingPage_div_section">
        <div className="container">
          <div className="EventLandingPage_div_cont">
            <div className="EventLandingPage_div_area">
              <div className="EventLandingPage_div_area_1">
                <div className="EventLandingPage_div_area_1_title">
                  Egochain Mainnet Airdrop is Live!
                </div>
                <div className="EventLandingPage_div_area_1_para">
                  Bridge to egochain, trade on egochain dapps & refer to earn
                  points and rank up the leaderboard.
                </div>
                {/* {deadline < new Date() ? null : (
                  <div className="timer_div">
                    <div className="timer_div_txt">Countdown to event</div>
                    <Timer deadline={deadline} />
                  </div>
                )} */}

                <div className="EventLandingPage_div_area_1_title_btns_div">
                  <button
                    className="home_div_section1_area_1_div2_btn"
                    onClick={ToggleEventModal}
                  >
                    Join Event
                  </button>
                </div>

                <div className="backed_by_div">
                  BACKED BY{" "}
                  <img
                    src="/img/tekedia_logo.svg"
                    alt=""
                    className="backed_by_div_img"
                  />
                </div>
              </div>
              <div className="EventLandingPage_div_area_2">
                <img
                  src="/img/egochain_airdrop_img.png"
                  alt=""
                  className="EventLandingPage_div_area_2_icon"
                />
              </div>
            </div>
            <div className="EventLandingPage_div_cont_stats_div">
              {/* <div className="EventLandingPage_div_cont_stats_div_1">
                <div className="EventLandingPage_div_cont_stats_div_1_title">
                  Total Transactions
                </div>
                <div className="EventLandingPage_div_cont_stats_div_1_txt">
                  100,000
                </div>
              </div> */}
              <div className="EventLandingPage_div_cont_stats_div_1">
                <div className="EventLandingPage_div_cont_stats_div_1_title">
                  Total Volume
                </div>
                <div className="EventLandingPage_div_cont_stats_div_1_txt">
                  $
                  {stats === null
                    ? 0
                    : parseFloat(stats.total_volume).toFixed(2)}
                </div>
              </div>
              <div className="EventLandingPage_div_cont_stats_div_1">
                <div className="EventLandingPage_div_cont_stats_div_1_title">
                  Total Users
                </div>
                <div className="EventLandingPage_div_cont_stats_div_1_txt">
                  {stats === null ? 0 : stats.total_records}
                </div>
              </div>
              <div className="EventLandingPage_div_cont_stats_div_1">
                <div className="EventLandingPage_div_cont_stats_div_1_title">
                  Total Points
                </div>
                <div className="EventLandingPage_div_cont_stats_div_1_txt">
                  <img
                    src="/img/point_gif_coin.gif"
                    alt=""
                    className="event_sideBar_div_area_last_div_cont1_title_gif"
                  />{" "}
                  {stats === null ? 0 : stats.total_points}xp
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light"
        />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />

        <Grid />
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {eventModal ? (
        <div className="eventModal">
          <CloseIcon
            className="eventModal_close_icon"
            onClick={ToggleEventModal}
          />
          <div className="eventModal_cont">
            <div className="eventModal_cont_title">
              EGOCHAIN MAINNET AIRDROP
            </div>
            <div className="eventModal_cont_para">
              Enter your egochain wallet address
            </div>
            <div className="eventModal_cont_input_div">
              <div className="eventModal_cont_input_div_span">
                Wallet address*
              </div>
              <input
                type="text"
                placeholder="Wallet address"
                className="eventModal_cont_input"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
            </div>
            <div className="eventModal_cont_input_div">
              <div className="eventModal_cont_input_div_span">
                Referral code (optional)
              </div>
              <input
                type="text"
                placeholder="Referral code"
                className="eventModal_cont_input"
                value={refCode}
                onChange={(e) => setRefCode(e.target.value)}
              />
            </div>
            {wallet == "" ? (
              <button className="eventModal_cont_btn" disabled={true}>
                Input address
              </button>
            ) : (
              <button
                onClick={enrollInEvent}
                className="eventModal_cont_btn"
                disabled={wallet.length < 42 ? true : false}
              >
                {isLoading ? (
                  <ScaleLoader color="#366e51" height={15} />
                ) : (
                  <>
                    {" "}
                    {wallet.length < 42
                      ? "Invalid address"
                      : wallet == ""
                      ? "input address"
                      : "Enter"}
                  </>
                )}
              </button>
            )}

            <div className="eventModal_cont_last_para">
              Enter your egochain wallet address to view your points based off
              of volume of transactions your wallet has done on the egochain
              blockchain.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EventLandingPage;
