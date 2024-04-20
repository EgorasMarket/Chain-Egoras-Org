import React, { useEffect, useState } from "react";
import { FETCH_EVENT_STAT, FETCH_REFERRAL_STAT } from "../../constants/api";

const EventHome = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [refCount, setRefCount] = useState(0);
  const fetchEventStat = async () => {
    const res = await FETCH_EVENT_STAT(localStorage.getItem("wallet"));
    console.log(res, "agba");
    console.log(res.data.allEvents, "maggi");
    setUserInfo(res.data.allEvents);
  };
  const fetchRefStat = async () => {
    const res = await FETCH_REFERRAL_STAT(localStorage.getItem("wallet"));
    console.log(res, "agba");
    setRefCount(res.data.resMain.count);
    // console.log(res.data.allEvents, "maggi");
    // setUserInfo(res.data.allEvents);
  };

  useEffect(() => {
    fetchEventStat();
    fetchRefStat();
  }, [localStorage.getItem("wallet")]);
  return (
    <div className="eventHome_div">
      <section className="eventHome_div_section1">
        <div class="eventHome_div_section1_cont">
          <div class="eventHome_div_section1_image_txt">
            <h1 class="eventHome_div_section1_image_txt_txt">
              Egochain Mainnet Airdrop
            </h1>
            <p className="eventHome_div_section1_image_txt_para">
              Bridge to Egochain, Use Egochain dapps and earn points.
            </p>
            {/* <button className="home_div_section1_area_1_div2_btn">
              Bridge to Egochain
            </button> */}
          </div>
          <img
            src="/img/egochain_airdrop_img.png"
            alt=""
            className="eventHome_div_section1_cont_img"
          />
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="eventHome_div_section2">
        <div className="eventHome_div_section2_area">
          <div className="eventHome_div_section2_area_cont1">
            <div className="eventHome_div_section2_area_cont1_heading">
              Total Points
            </div>
            <div className="eventHome_div_section2_area_cont1_sub_div">
              <div className="eventHome_div_section2_area_cont1_sub_div_txt">
                <img
                  src="/img/point_gif_coin.gif"
                  alt=""
                  className="event_sideBar_div_area_last_div_cont1_title_gif"
                />{" "}
                {userInfo === null ? 0 : userInfo.points}
              </div>
              <span className="eventHome_div_section2_area_cont1_sub_div_span">
                xp
              </span>
            </div>
          </div>
          <div className="vertical_rule"></div>
          <div className="eventHome_div_section2_area_cont1">
            <div className="eventHome_div_section2_area_cont1_heading">
              Total Volume
            </div>
            <div className="eventHome_div_section2_area_cont1_sub_div">
              {userInfo === null ? 0 : parseFloat(userInfo.volume).toFixed(2)}
              <span className="eventHome_div_section2_area_cont1_sub_div_span">
                usd
              </span>
            </div>
          </div>
          <div className="vertical_rule"></div>
          <div className="eventHome_div_section2_area_cont1">
            <div className="eventHome_div_section2_area_cont1_heading">
              Total Referrals
            </div>
            <div className="eventHome_div_section2_area_cont1_sub_div">
              {refCount}
              <span className="eventHome_div_section2_area_cont1_sub_div_span">
                refs
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="eventHome_div_section3">
        <div className="eventHome_div_section3_area">
          <div className="eventHome_div_section3_area_cont1">
            <div className="eventHome_div_section3_area_cont1_bg"></div>
            <div className="eventHome_div_section3_area_cont1_tile">
              Bridge to Egochain
            </div>
            <div className="eventHome_div_section3_area_cont1_para">
              Bridge any token to egochain with ease on egoswap.io
            </div>
            <button className="home_div_section1_area_1_div2_btn">
              Bridge to Egochain
            </button>
            <img
              src="/img/bridge_bg.jpeg"
              alt=""
              className="eventHome_div_section3_area_cont1_img"
            />
          </div>

          <div className="eventHome_div_section3_area_cont1">
            <div className="eventHome_div_section3_area_cont1_bg"></div>

            <div className="eventHome_div_section3_area_cont1_tile">
              Buy & Sell
            </div>
            <div className="eventHome_div_section3_area_cont1_para">
              Trade tokens on pluto.ag
            </div>
            <button className="home_div_section1_area_1_div2_btn">
              Trade on Pluto
            </button>
            <img
              src="/img/bridge_bg2.jpeg"
              alt=""
              className="eventHome_div_section3_area_cont1_img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventHome;
