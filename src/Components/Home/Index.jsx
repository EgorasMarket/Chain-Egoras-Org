import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "./Home.css";
import { Parallax } from "react-scroll-parallax";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "./Grid";
import Icon from "./Icon";
import SendIcon from "@mui/icons-material/Send";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Typewriter from "typewriter-effect";

export const fadeIn = (direction) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -85 : 85,
    },
    visible: { opacity: 1, y: 0 },
  };
};
export const opacity = () => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };
};
export const fadeHorizontal = (direction) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -85 : 85,
    },
    visible: { opacity: 1, y: 0 },
  };
};

export const reveal = () => {
  return {
    hidden: {
      left: 0,
    },
    visible: { left: "100%" },
  };
};

export const scale = () => {
  return {
    hidden: {
      scale: 1.5,
      opacity: 0.2,
    },
    visible: { scale: 1.2, opacity: 0.8 },
  };
};

export const transition = () => {
  return {
    duration: 0.75,
    delay: 0.3,
    ease: "easeIn",
  };
};
export const transition2 = () => {
  return {
    duration: 1.5,
    delay: 0.3,
    ease: "easeIn",
  };
};

const Home = () => {
  const [videoDiv, setVideoDiv] = useState(false);

  // console.log('====================================');
  // console.log("jfjf");
  // console.log('====================================');
  const wallets = [
    {
      id: "1",
      title: "Coinbase",
      img: "/img/walletsImg/coinbase_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Coinbase is a global digital wallet functioning as a web browser
            extension. With Coinbase, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "2",
      title: "Metamask",
      img: "/img/walletsImg/metamask_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Metamask is a global digital wallet functioning as a web browser
            extension. With Metamask, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "3",
      title: "Trust Wallet",
      img: "/img/walletsImg/trust_wallet_icon.jpeg",
      body: (
        <div className="wallets_body">
          <span>
            Trust Wallet is a global digital wallet functioning as a web browser
            extension. With Trust Wallet, you can safely and seamlessly manage
            the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "4",
      title: "Kaikas",
      img: "/img/walletsImg/kaikas_wallet_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Kaikas is a global digital wallet functioning as a web browser
            extension. With Kaikas, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "5",
      title: "SafePal",
      img: "/img/walletsImg/safepal_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            SafePal is a global digital wallet functioning as a web browser
            extension. With SafePal, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "6",
      title: "Coin98",
      img: "/img/walletsImg/coin98_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Coin98 is a global digital wallet functioning as a web browser
            extension. With Coin98, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "7",
      title: "Huobi Wallet",
      img: "/img/walletsImg/huobi_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Huobi Wallet is a global digital wallet functioning as a web browser
            extension. With Huobi Wallet, you can safely and seamlessly manage
            the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "8",
      title: "D'Cent",
      img: "/img/walletsImg/dcent_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            D'Cent is a global digital wallet functioning as a web browser
            extension. With D'Cent, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "9",
      title: "Exodus Wallet",
      img: "/img/walletsImg/exodus_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Exodus Wallet is a global digital wallet functioning as a web
            browser extension. With Exodus Wallet, you can safely and seamlessly
            manage the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
  ];
  // const item = { hidden: { x: -10, opacity: 0 } };
  const ToggleVideoDiv = () => {
    setVideoDiv(!videoDiv);
  };
  return (
    <div className="Home_div">
      <section className="home_div_section1">
        <div className="container">
          <div className="home_div_section1_area">
            <motion.div
              variants={opacity()}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="home_div_section1_area_1"
            >
              <div className="home_div_section1_area_1_div1">
                <div className="home_div_section1_area_1_div1_txt1">
                  <span className="home_div_section1_area_1_div1_txt1_span">
                    Tokenize
                    <br />
                  </span>
                  <Typewriter
                    options={{
                      strings: [
                        "Anything",
                        "Electric Vehicles",
                        "Charging Stations",
                        "Private Equity",
                        "Commodities",
                        "Electronics",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  <span className="home_div_section1_area_1_div1_txt1_span">
                    On Egochain.
                  </span>
                </div>
                <div className="home_div_section1_area_1_div1_txt2">
                  Egochain is a public, permissionless Layer 1 blockchain
                  designed to bridge the gap between Cosmos's high-throughput,
                  interoperable network and Ethereum's robust developer
                  ecosystem. This fosters a scalable and user-friendly
                  environment for onboarding the next billion users onto the
                  blockchain.
                </div>
              </div>
              <div className="home_div_section1_area_1_div2">
                {/* <a href="https://testnet.egoscan.io/" target="_blank"> */}
                <button
                  className="home_div_section1_area_1_div2_btn"
                  onClick={ToggleVideoDiv}
                >
                  <PlayArrowIcon className="home_div_section1_area_1_div2_btn_icon" />{" "}
                  Play Video
                </button>
                {/* </a> */}
                <a href="https://egoswap.io" target="_blank">
                  <button className="home_div_section1_area_1_div2_btn2">
                    Get EGAX
                  </button>
                </a>
                {/* <a
                  href="https://play.google.com/store/apps/details?id=io.egox.dex&hl=be&gl=US"
                  target="_blank"
                >
                  <button className="header_div_area_2_btn">
                    Get App{" "}
                    <img
                      src="/img/play_store_icon.png"
                      alt=""
                      className="header_div_area_2_btn_img"
                    />
                  </button>
                </a> */}
                {/* <button className="header_div_area_2_btn2">
                  <div className="header_div_area_2_btn2_div">
                    Get App <span>coming soon</span>
                  </div>
                  <img
                    src="/img/apple_store_icon.webp"
                    alt=""
                    className="header_div_area_2_btn2_img"
                  />
                </button> */}
              </div>
              <div className="backed_by_div">
                BACKED BY{" "}
                <img
                  src="/img/tekedia_logo.svg"
                  alt=""
                  className="backed_by_div_img"
                />
              </div>
            </motion.div>{" "}
            <motion.div
              variants={scale()}
              transition={transition2()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="home_div_section1_area_2"
            >
              <Spline
                scene="https://prod.spline.design/TVLoAomGQBQWA2NS/scene.splinecode"
                className="home_div_section1_area_2_spline_scene"
              />
            </motion.div>
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
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}

      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section4">
        <div className="container">
          <div className="home_div_section4_area">
            <div className="home_div_section4_area_tile">Why Egochain</div>
            <div className="home_div_section4_area_body">
              {/* =========== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section4_area_body_cont"
              >
                <div className="home_div_section4_area_body_cont1_img_div">
                  <Icon />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Tokenization of Physical Assets with ERC-404
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    ERC-404 facilitates the tokenization of physical assets.
                    These tokens can then be traded on exchanges like ERC-20
                    tokens, while also retaining the functionality of NFTs
                    (Non-Fungible Tokens) for trading on platforms like OpenSea.
                    This provides greater flexibility in how investors can
                    participate.
                  </div>
                </div>
              </motion.div>

              {/* ========== */}
              {/* ========== */}
              {/* ========== */}
              {/* ========== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section4_area_body_cont2a"
              >
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Fractional Ownership of Real-World Assets
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    ERC-404 enables the fractionalization of physical assets,
                    allowing them to be traded in smaller portions on exchanges.
                    This significantly increases liquidity for these assets,
                    making them more accessible to a wider range of investors.
                  </div>
                </div>
                <div className="home_div_section4_area_body_cont1_img_div2">
                  <Icon />
                </div>
              </motion.div>

              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section4_area_body_cont3"
              >
                <div className="home_div_section4_area_body_cont1_img_div">
                  <Icon />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Enhanced Supply Chain Management
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    By storing inventory data on the blockchain in real-time,
                    ERC-404 offers a comprehensive and up-to-date view of
                    product stock levels. This transparency helps prevent costly
                    overstocking and optimizes inventory management.
                  </div>
                </div>
              </motion.div>
              {/* ================= */}
              {/* ================= */}
              {/* ================= */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section4_area_body_cont2a"
              >
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Streamlined Automated Payments
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    The decentralized nature of ERC-404 allows for the
                    automation of payments, reducing errors and improving
                    efficiency. For instance, maintenance providers can receive
                    automatic payments from a designated treasury upon
                    completing work on factory equipment.
                  </div>
                </div>
                <div className="home_div_section4_area_body_cont1_img_div2">
                  <Icon />
                </div>
              </motion.div>
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
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section2">
        <div className="container">
          <div className="home_div_section3_area">
            <div className="home_div_section3_area_title">
              Challenges in Integrating Real-World Assets
              {/* <div className="home_div_section3_area_para">
                The decentralized nature of ERC-404 allows for the automation of
                payments, reducing errors and improving efficiency. For
                instance, maintenance providers can receive automatic payments
                from a designated treasury upon completing work on factory
                equipment.
              </div> */}
            </div>

            <div className="home_div_section3_area_body">
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Liquidity
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Limited Liquidity of Physical Assets
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    This emphasizes the difficulty of quickly converting
                    physical assets into cash.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <svg
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="4.08823"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="27.9115"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="16.0003"
                      cy="4.97105"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M14.0242 8.49609L5.62305 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M17.9756 8.49609L26.3767 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M8.05859 27.0273H23.9409"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
              </motion.div>

              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                {" "}
                <div className="home_div_section3_area_body_cont1_title">
                  Vulnerability
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Vulnerability to Intellectual Property Infringement
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    This refers to the risk of unauthorized copying of assets
                    like designs, patents, or trademarks.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <svg
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="4.08823"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="27.9115"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="16.0003"
                      cy="4.97105"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M14.0242 8.49609L5.62305 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M17.9756 8.49609L26.3767 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M8.05859 27.0273H23.9409"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
              </motion.div>

              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Supply Chain
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Supply Chain Disruption Risks
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    This highlights the potential for fraud or other issues to
                    interrupt the flow of goods and materials.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <svg
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="4.08823"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="27.9115"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="16.0003"
                      cy="4.97105"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M14.0242 8.49609L5.62305 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M17.9756 8.49609L26.3767 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M8.05859 27.0273H23.9409"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
              </motion.div>

              {/* ======== */}
              {/* ======== */}
              {/* ======== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Security
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Financial Reporting Integrity Concerns
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    This expresses the worry about the accuracy of financial
                    records.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <svg
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="4.08823"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="27.9115"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="16.0003"
                      cy="4.97105"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M14.0242 8.49609L5.62305 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M17.9756 8.49609L26.3767 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M8.05859 27.0273H23.9409"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light3.svg"
          alt=""
          className="home_div_section1_bg_light3"
        />
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section2">
        <div className="container">
          <div className="erc404_section_area">
            <div className="erc404_section_area1">
              ERC-404: Fractionalized Asset Ownership
            </div>
            <div className="erc404_section_area2">
              The ERC-404 token standard is an innovative approach that merges
              the fungibility of ERC-20 tokens with the unique properties of
              ERC-721 NFTs. This empowers businesses to create and distribute
              fractionalized ownership of real-world or digital assets. These
              fractions can be freely traded on cryptocurrency exchanges as
              ERC-20 tokens, while the underlying asset remains represented as a
              whole on NFT marketplaces using ERC-721.
            </div>
            <img
              src="/img/diagram.png"
              alt=""
              className="erc404_section_area_img"
            />
          </div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light3.svg"
          alt=""
          className="home_div_section1_bg_light3"
        />
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}

      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section2">
        <div className="container">
          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="ego_chain_stat_section_area"
          >
            <div className="home_div_section3_area_title">
              The Blockchain Built for Real-World Assets
            </div>
            <div className="ego_chain_stat_section_body">
              <div className="ego_chain_stat_section_body_1">
                <div className="ego_chain_stat_section_body_1_cont1">
                  Egochain is more than just a blockchain platform;
                  <br />
                  <br />
                  It is a powerful framework designed to empower real-world
                  businesses to streamline operations, optimize transactions,
                  and unlock new levels of value.
                </div>
                <div className="ego_chain_stat_section_body_1_cont2">
                  <div className="ego_chain_stat_section_body_1_cont2_title">
                    PROOF-OF-STAKE
                  </div>

                  <div className="ego_chain_stat_section_body_1_cont2_div2">
                    <div className="ego_chain_stat_section_body_1_cont2_div2_cont1">
                      <CountUp
                        start={0}
                        end={99}
                        duration={2.75}
                        scrollSpyDelay={10}
                        enableScrollSpy={true}
                        scrollSpyOnce={false}
                      />
                      %
                    </div>
                    <div className="ego_chain_stat_section_body_1_cont2_div2_cont2">
                      lower <br />
                      carbon <br />
                      footprint
                    </div>
                  </div>
                  <div className="ego_chain_stat_section_body_1_cont2_last_text">
                    Blockchain tech that truly scales.
                  </div>
                </div>
              </div>
              <div className="ego_chain_stat_section_body_2">
                <div className="ego_chain_stat_section_body_1_cont2">
                  <div className="ego_chain_stat_section_body_1_cont2_title">
                    LOW FEES
                  </div>

                  <div className="ego_chain_stat_section_body_1_cont2_txt">
                    $0.0001
                  </div>
                  <div className="ego_chain_stat_section_body_1_cont2_last_text">
                    Enjoy the lowest fees – almost zero.
                  </div>
                </div>
                <div className="ego_chain_stat_section_body_1_cont2">
                  <div className="ego_chain_stat_section_body_1_cont2_title">
                    FAST TRANSACTIONS
                  </div>

                  <div className="ego_chain_stat_section_body_1_cont2_txt">
                    7 sec
                  </div>
                  <div className="ego_chain_stat_section_body_1_cont2_last_text">
                    Transactions confirmed in seconds.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light5"
        />
      </section>
      {/* <section className="home_div_section2">
        <div className="container">
          <div className="home_div_section2_area">
            <div className="home_div_section2_area_1">
              The largest and most thriving ecosystem
            </div>
            <div className="home_div_section2_area_2">
              <div className="home_div_section2_area_2_area1">
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
              </div>
              <div className="home_div_section2_area_2_area2">
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
              </div>
              <div className="home_div_section2_area_2_area1">
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light5"
        />
      </section> */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section5">
        <div className="container">
          <div className="home_div_section5_area">
            <div className="home_div_section5_area_title">Wallets</div>
            <div className="home_div_section5_area_body_cont">
              {wallets.map((data) => (
                <motion.div
                  id={data.id}
                  variants={fadeIn("Up")}
                  transition={transition()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="home_div_section5_area_body_cont_div1"
                >
                  <div className="home_div_section5_area_body_cont_div1_img_div">
                    <img
                      src={data.img}
                      alt=""
                      className="home_div_section5_area_body_cont_div1_img_div_img"
                    />
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_title">
                    {data.title}
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_title_para">
                    {data.body}
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_last_txt">
                    WALLETS
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />
      </section>
      {/* <section className="home_div_section5">
        <div className="container">
          <div className="home_div_section5_area">
            <div className="home_div_section5_area_title">
              Choose the freedom you need.
            </div>
            <div className="home_div_section5_area_body">
              <div className="home_div_section5_area_body_title_divs">
                <div className="home_div_section5_area_body_title_div1"></div>
                <div className="home_div_section5_area_body_title_div2">
                  Other Chains
                </div>
                <div className="home_div_section5_area_body_title_div3">
                  Ego Chain
                </div>
              </div>
              <div className="home_div_section5_area_body_area">
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />
      </section> */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section6">
        <div className="container">
          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="home_div_section6_area_community"
          >
            <div className="home_div_section6_area_community_2">
              <div className="home_div_section6_area_community_2_title">
                Join the Egochain community
                <div className="home_div_section6_area_community_2_title_para">
                  Take part in the conversation! Stay in the know & be the first
                  to hear about any new updates
                </div>
              </div>
              <div className="home_div_section6_area_community_2_links">
                <a
                  target="_blank"
                  href="https://twitter.com/egochainHQ"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <XIcon
                    className="home_div_section6_area_community_2_links_cont1_icon"
                    style={{ background: "#000" }}
                  />
                  e
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      X
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Read the latest
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://t.me/egochainHQ"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <TelegramIcon className="home_div_section6_area_community_2_links_cont1_icon" />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Telegram
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Join Discussion
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@EgochainHQ"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <YouTubeIcon
                    className="home_div_section6_area_community_2_links_cont1_icon"
                    style={{ background: "red" }}
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Youtube
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Watch the latest
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/EgorasMarket"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <GitHubIcon
                    className="home_div_section6_area_community_2_links_cont1_icon"
                    style={{ background: "#fff", color: "#000" }}
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Github
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Build with us
                    </div>
                  </div>
                </a>
                <div className="home_div_section6_area_community_2_links_cont1">
                  <RedditIcon
                    className="home_div_section6_area_community_2_links_cont1_icon"
                    style={{ background: "#ff4500" }}
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Reddit
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Get Involved
                    </div>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://egoras.medium.com/"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <img
                    src="/img/medium_icon.jpeg"
                    alt=""
                    className="home_div_section6_area_community_2_links_cont1_img"
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Medium
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Read the latest
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="home_div_section6_area"
          >
            {" "}
            <div className="home_div_section6_area_1">
              <div className="home_div_section6_area_1_title">
                Stay up to date
              </div>
              <div className="home_div_section6_area_1_text">
                Be the first to know about the latest updates and launches.
                {/* <div className="home_div_section6_area_1_text_div">
                  {" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=io.egox.dex&hl=be&gl=US"
                    target="_blank"
                  >
                    <button className="header_div_area_2_btn">
                      Get App{" "}
                      <img
                        src="/img/play_store_icon.png"
                        alt=""
                        className="header_div_area_2_btn_img"
                      />
                    </button>
                  </a>
                  <button className="header_div_area_2_btn2">
                    <div className="header_div_area_2_btn2_div">
                      Get App <span>coming soon</span>
                    </div>
                    <img
                      src="/img/apple_store_icon.webp"
                      alt=""
                      className="header_div_area_2_btn2_img"
                    />
                  </button>
                </div> */}
              </div>

              <div className="home_div_section6_area_1_input_div">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="home_div_section6_area_1_input_div_input"
                />
                <button className="home_div_section6_area_1_input_div_btn">
                  <SendIcon />
                </button>
              </div>
            </div>
            <div className="home_div_section6_area_2">
              {" "}
              <Spline
                scene="https://prod.spline.design/TVLoAomGQBQWA2NS/scene.splinecode"
                className="home_div_section1_area_2_spline_scene2"
              />
            </div>
          </motion.div>
        </div>

        <img
          src="/img/test_hero_light3.svg"
          alt=""
          className="home_div_section1_bg_light3"
        />
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
        <Grid />
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      {videoDiv ? (
        <div className="YtVideoDiv">
          <CloseIcon
            className="YtVideoDiv_closeIcon"
            onClick={ToggleVideoDiv}
          />
          <div className="YtVideoDiv_close_div"></div>

          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/ue8Ly6ri-OM"
            title="What is Egochain?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
