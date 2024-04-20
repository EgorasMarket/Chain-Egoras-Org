import React, { useEffect, useState } from "react";
import Blockies from "react-blockies";
import { FETCH_EVENT_STAT } from "../../constants/api";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const EventHeader = () => {
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
  const logout = () => {
    localStorage.removeItem("wallet");
    localStorage.removeItem("refCode");
    window.location.href = "/join/event";
  };
  return (
    <div className="event_header_div">
      <div className="event_header_div_1">
        <img
          src="/img/egax_logo.png"
          alt=""
          className="event_sideBar_div_area_1_logo"
        />
        Egochain
      </div>
      <div className="event_header_div_2">
        <div className="event_header_div_2_cont1">
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
        <div className="event_header_div_2_cont2">
          <Blockies
            seed={localStorage.getItem("wallet")}
            size={8}
            scale={4}
            className="blockies_icon"
          />{" "}
          {`${localStorage.getItem("wallet").slice(0, 2)}...${localStorage
            .getItem("wallet")
            .slice(40, 42)}`}
        </div>
        <PowerSettingsNewIcon
          className="header_div_area_cont3_div2_icon"
          style={{ color: "red" }}
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default EventHeader;
