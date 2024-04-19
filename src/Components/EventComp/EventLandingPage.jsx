import React, { useState, useEffect } from "react";
import "./eventlanding.css";
import Grid from "../Home/Grid";
import Spline from "@splinetool/react-spline";
import { CasinoSharp } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { ENROLL_EVENT } from "../../constants/api";
import { useNavigate } from "react-router-dom";

const EventLandingPage = () => {
  const navigate = useNavigate();
  const [eventModal, setEventModal] = useState(false);
  const [wallet, setWallet] = useState("");
  const ToggleEventModal = () => {
    setEventModal(!eventModal);
  };

  const enrollInEvent = async () => {
    if (wallet === "") {
      return;
    }
    const res = await ENROLL_EVENT({ address: wallet });
    localStorage.setItem("wallet", wallet);
    window.location.href = "http://event.localhost:5173/event";
    console.log(res, "maggi");
  };

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
                <Spline
                  scene="https://prod.spline.design/jt3OnSPHsTgtwQKh/scene.splinecode"
                  className="EventLandingPage_div_area_2_scene"
                />
              </div>
            </div>
            <div className="EventLandingPage_div_cont_stats_div">
              <div className="EventLandingPage_div_cont_stats_div_1">
                <div className="EventLandingPage_div_cont_stats_div_1_title">
                  Total Transactions
                </div>
                <div className="EventLandingPage_div_cont_stats_div_1_txt">
                  100,000
                </div>
              </div>
              <div className="EventLandingPage_div_cont_stats_div_1">
                <div className="EventLandingPage_div_cont_stats_div_1_title">
                  Total Volume
                </div>
                <div className="EventLandingPage_div_cont_stats_div_1_txt">
                  $1,000,000
                </div>
              </div>
              <div className="EventLandingPage_div_cont_stats_div_1">
                <div className="EventLandingPage_div_cont_stats_div_1_title">
                  Total Users
                </div>
                <div className="EventLandingPage_div_cont_stats_div_1_txt">
                  200,000
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
                  100,000,000 xp
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
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
            </div>
            <button onClick={enrollInEvent} className="eventModal_cont_btn">
              Enter
            </button>
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
