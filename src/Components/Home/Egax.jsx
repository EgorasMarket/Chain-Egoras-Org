import React, { useEffect } from "react";
import Icon from "./Icon";
import AmChart4Wrapper from "react-amcharts4";
import { PieChart } from "@amcharts/amcharts4/charts";
import "./egc.css";
// Configure any reguired theme
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_material from "@amcharts/amcharts4/themes/material";
am4core.useTheme(am4themes_material);
const config = {
  // Create pie series
  series: [
    {
      type: "PieSeries",
      dataFields: {
        value: "litres",
        category: "country",
      },
    },
    {
      type: "PieSeries",
      dataFields: {
        value: "percentage",
        category: "category",
      },
    },
  ],
  // Add data
  data: [
    {
      category: "Ecosystem",
      percentage: 80,
    },
    {
      category: "Public Sale",
      percentage: 0.05,
    },
    {
      category: "Private & OTC Sales",
      percentage: 9,
    },
    {
      category: "Team",
      percentage: 10,
    },
    {
      category: "Community Reward",
      percentage: 0.95,
    },
  ],
};

const Egax = () => {
  return (
    <div className="egox_token_div">
      <section className="egox_token_div_section1">
        <div className="container">
          <div className="egox_token_div_section1area">
            <div className="egox_token_div_section1area_cont1">
              <div className="egox_token_div_section1area1">
                <div className="egox_token_div_section1area1_title">
                  Egochain (EGAX) Coin
                </div>
                <div className="egox_token_div_section1area1_para">
                  Egochain's robust fee structure ensures network sustainability
                  and incentivizes participation through coin distribution.
                </div>
              </div>
              <div className="egox_token_div_section1area2">
                <img
                  src="/img/1_inch_token_image_dummy.png"
                  alt=""
                  className="egox_token_div_section1area2_img"
                />
              </div>
            </div>
            <div className="egox_token_div_section1area_cont2">
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  $12.00
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Current Price
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  28k
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Circulating Supply
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  $336,000
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Market Cap
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  50k
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Holders
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light"
        />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        /> */}
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* <div style={{ width: "80%", margin: "0 auto" }}>
        <AmChart4Wrapper
          config={config}
          id="amcharts-4"
          chartTypeClass={PieChart}
        />
      </div> */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}

      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      <section className="egox_token_div_section3b">
        <div className="container">
          <div className="egox_token_div_section3_area">
            <div className="egox_token_div_section3_area_titleb">
              Core Components of the Egochain Economy
              <div className="egox_token_div_section3_area_para">
                Five key elements underpin the Egochain economic structure
              </div>
            </div>

            <div className="distribution_div_area">
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  EGAX Coin
                </div>
                <div className="distribution_div_area_cont1_body">
                  <div className="distribution_div_area_cont1_body_para">
                    The native asset of the Egochain platform, EGAX tokens are
                    used for various purposes within the ecosystem.
                  </div>
                </div>
              </div>
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  Gas Fees
                </div>
                <div className="distribution_div_area_cont1_body">
                  <div className="distribution_div_area_cont1_body_para">
                    Network operations incur gas fees (egax coin), which are
                    used to incentivize proof-of-stake participants and mitigate
                    spam or denial-of-service attacks.
                  </div>
                </div>
              </div>
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  Storage Fund
                </div>
                <div className="distribution_div_area_cont1_body">
                  <div className="distribution_div_area_cont1_body_para">
                    This fund serves a dual purpose: distributing staking
                    rewards over time and compensating future validators for
                    storing historical on-chain data.
                  </div>
                </div>
              </div>
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  Proof-of-Stake
                </div>
                <div className="distribution_div_area_cont1_body">
                  <div className="distribution_div_area_cont1_body_para">
                    Egochain utilizes a delegated proof-of-stake mechanism to
                    select validators, reward their contributions, and encourage
                    honest behavior within the network.
                  </div>
                </div>
              </div>
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">Voting</div>
                <div className="distribution_div_area_cont1_body">
                  <div className="distribution_div_area_cont1_body_para">
                    On-chain voting empowers Egochain coin holders to
                    participate in platform governance and protocol upgrades.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />

        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />
      </section>
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      <section className="home_div_section4">
        <div className="container">
          <div className="home_div_section4_area">
            <div className="home_div_section4_area_tile">
              Participants in the Egochain Economy
              <div className="home_div_section4_area_tile_para">
                The Egochain ecosystem comprises three primary participant
                groups
              </div>
            </div>

            <div className="home_div_section4_area_body">
              <div className="home_div_section4_area_body_cont">
                <div className="home_div_section4_area_body_cont1_img_div">
                  <Icon />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Users
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    These individuals interact with the Egochain platform by
                    submitting transactions to create, modify, and transfer
                    digital assets. They can also leverage smart contracts,
                    interoperability, and composability features to engage with
                    more complex applications.
                  </div>
                  {/* <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div> */}
                </div>
              </div>
              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              <div className="home_div_section4_area_body_cont2a">
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Egochain Coin Holders
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    Coin holders have the ability to stake their EGAX tokens
                    with validators and contribute to the network's
                    proof-of-stake consensus mechanism. Additionally, they hold
                    voting rights within the Egochain governance system.
                  </div>
                  {/* <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div> */}
                </div>
                <div className="home_div_section4_area_body_cont1_img_div2">
                  <Icon />
                </div>
              </div>
              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              <div className="home_div_section4_area_body_cont">
                <div className="home_div_section4_area_body_cont1_img_div">
                  <Icon />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Validators
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    Validators are responsible for processing and executing
                    transactions on the Egochain platform. They are selected and
                    rewarded for their contributions through the proof-of-stake
                    mechanism.
                  </div>
                  {/* <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div> */}
                </div>
              </div>

              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light4.svg"
          alt=""
          className="home_div_section1_bg_light4"
        />
        <img
          src="/img/test_hero_light3.svg"
          alt=""
          className="home_div_section1_bg_light3"
        />
      </section>
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
    </div>
  );
};

export default Egax;
