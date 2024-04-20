import React, { useEffect, useState } from "react";
import { Home01Icon } from "hugeicons-react";
import { Home06Icon } from "hugeicons-react";
import { RankingIcon } from "hugeicons-react";
import { Link01Icon } from "hugeicons-react";
import { AddTeamIcon } from "hugeicons-react";
import { CoinsSwapIcon } from "hugeicons-react";
import Blockies from "react-blockies";
import { Link } from "react-router-dom";
import { FETCH_EVENT_STAT } from "../../constants/api";

const EventSideBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [userInfo, setUserInfo] = useState(null);
  const fetchEventStat = async () => {
    const res = await FETCH_EVENT_STAT(localStorage.getItem("wallet"));
    console.log(res, "agba");
    console.log(res.data.allEvents, "maggi");
    setUserInfo(res.data.allEvents);
  };

  useEffect(() => {
    fetchEventStat();
  }, [localStorage.getItem("wallet")]);
  const ToggleActiveTab = (e) => {
    setActiveTab(e.currentTarget.id);
  };
  const currentPage = window.location.pathname;
  useEffect(() => {
    if (currentPage === "/event") {
      setActiveTab("home");
      return;
    }
    if (currentPage === "/event/leaderboard") {
      setActiveTab("rank");
      return;
    }
    if (currentPage === "/event/referral") {
      setActiveTab("ref");
      return;
    }
  }, [currentPage]);

  return (
    <div className="event_sideBar_div">
      <div className="event_sideBar_div_area">
        <div className="event_sideBar_div_area_1">
          <div className="event_sideBar_div_area_1_area">
            <img
              src="/img/egax_logo.png"
              alt=""
              className="event_sideBar_div_area_1_logo"
            />
            Egochain
          </div>
        </div>
        <div className="event_sideBar_div_area_body">
          <Link to="/event" className="event_sideBar_div_area_body_cont1">
            <div
              id="home"
              onClick={ToggleActiveTab}
              className={
                activeTab === "home"
                  ? "event_sideBar_div_area_body_cont1_area_active"
                  : "event_sideBar_div_area_body_cont1_area"
              }
            >
              <Home06Icon
                size={32}
                className="event_sideBar_div_area_body_cont1_icon"
              />
              <div className="event_sideBar_div_area_body_cont1_txt">Home</div>
            </div>
          </Link>
          <Link
            to="/event/leaderboard"
            className="event_sideBar_div_area_body_cont1"
          >
            <div
              id="rank"
              onClick={ToggleActiveTab}
              className={
                activeTab === "rank"
                  ? "event_sideBar_div_area_body_cont1_area_active"
                  : "event_sideBar_div_area_body_cont1_area"
              }
            >
              <RankingIcon
                size={32}
                className="event_sideBar_div_area_body_cont1_icon"
              />
              <div className="event_sideBar_div_area_body_cont1_txt">
                Leaderboard
              </div>
            </div>
          </Link>
          {/*         <div className="event_sideBar_div_area_body_cont1">
            <div
              id="bridge"
              onClick={ToggleActiveTab}
              className={
                activeTab === "bridge"
                  ? "event_sideBar_div_area_body_cont1_area_active"
                  : "event_sideBar_div_area_body_cont1_area"
              }
            >
              <Link01Icon
                size={32}
                className="event_sideBar_div_area_body_cont1_icon"
              />
              <div className="event_sideBar_div_area_body_cont1_txt">
                Bridge
              </div>
            </div>
          </div> */}
          {/*         <div className="event_sideBar_div_area_body_cont1">
            <div
              id="dex"
              onClick={ToggleActiveTab}
              className={
                activeTab === "dex"
                  ? "event_sideBar_div_area_body_cont1_area_active"
                  : "event_sideBar_div_area_body_cont1_area"
              }
            >
              <CoinsSwapIcon
                size={32}
                className="event_sideBar_div_area_body_cont1_icon"
              />
              <div className="event_sideBar_div_area_body_cont1_txt">Dex</div>
            </div>
          </div> */}
          <Link
            to="/event/referral"
            className="event_sideBar_div_area_body_cont1"
          >
            <div
              id="ref"
              onClick={ToggleActiveTab}
              className={
                activeTab === "ref"
                  ? "event_sideBar_div_area_body_cont1_area_active"
                  : "event_sideBar_div_area_body_cont1_area"
              }
            >
              <AddTeamIcon
                size={32}
                className="event_sideBar_div_area_body_cont1_icon"
              />
              <div className="event_sideBar_div_area_body_cont1_txt">
                Referral
              </div>
            </div>
          </Link>
        </div>
        <div className="event_sideBar_div_area_last_div">
          {/* <div className="event_sideBar_div_area_last_div_cont1"> */}
          <div className="event_sideBar_div_area_last_div_cont1_title">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="event_sideBar_div_area_last_div_cont1_title_gif"
            />{" "}
            {userInfo === null ? 0 : userInfo.points}
            <span className="event_sideBar_div_area_last_div_cont1_title_span">
              xp
            </span>
          </div>
          {/* </div> */}
          <div className="event_sideBar_div_area_last_div_cont1_address">
            <Blockies
              seed={localStorage.getItem("wallet")}
              size={8}
              scale={4}
              className="blockies_icon"
            />{" "}
            {`${localStorage.getItem("wallet").slice(0, 4)}...${localStorage
              .getItem("wallet")
              .slice(38, 42)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSideBar;
