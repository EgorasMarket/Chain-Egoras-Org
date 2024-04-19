import React, { useEffect, useState } from "react";
import { Home01Icon } from "hugeicons-react";
import { Home06Icon } from "hugeicons-react";
import { RankingIcon } from "hugeicons-react";
import { Link01Icon } from "hugeicons-react";
import { AddTeamIcon } from "hugeicons-react";
import { CoinsSwapIcon } from "hugeicons-react";
import Blockies from "react-blockies";
import { Link } from "react-router-dom";

const EventSideBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const ToggleActiveTab = (e) => {
    setActiveTab(e.currentTarget.id);
  };
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
          <div className="event_sideBar_div_area_body_cont1">
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
          </div>
          <div className="event_sideBar_div_area_body_cont1">
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
          </div>
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
            100,000{" "}
            <span className="event_sideBar_div_area_last_div_cont1_title_span">
              xp
            </span>
          </div>
          {/* </div> */}
          <div className="event_sideBar_div_area_last_div_cont1_address">
            <Blockies
              seed={"0xa5ff0Fd1a84D004649E97b465779499546654feD"}
              size={8}
              scale={4}
              className="blockies_icon"
            />{" "}
            0xa5f...4feD
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSideBar;
