import React from "react";
import "./event.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Grid from "../Home/Grid";
import EventHome from "./EventHome";
import EventSideBar from "./EventSideBar";
import DashboardReferral from "./Referral/DashboardReferral";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
const Event = () => {
  return (
    <div className="event_div">
      {" "}
      <section className="event_comp">
        <div className="event_container">
          <div className="event_div_area">
            <EventSideBar />
            <div className="event_div_area_body">
              <Routes>
                <Route path="/event" element={<EventHome />} />
                <Route path="/event/referral" element={<DashboardReferral />} />
                <Route path="/event/leaderBoard" element={<LeaderBoard />} />
              </Routes>
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

        {/* <Grid /> */}
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
    </div>
  );
};

export default Event;
