import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import "./NewHome.css";
import Marquee from "react-fast-marquee";
import { TelegramIcon } from "hugeicons-react";

const NewHome = () => {
  return (
    <div className="newHome_div">
      <section className="newHome_div_section1">
        <div className="container">
          <div className="newHome_div_section1_area">
            <div className="newHome_div_section1_area_div1">
              <div className="newHome_div_section1_area_div1_title">
                Tokenize Anything...
              </div>
              <div className="newHome_div_section1_area_div1_para">
                Egochain is an Ethereum-compatible blockchain on the Cosmos SDK,
                powering Egomart to enhance commercial experiences and enable
                secondary liquidity for real-world assets.
              </div>
              <div className="newHome_div_section1_area_div1_btns">
                <a
                  href="https://docs.egochain.org/"
                  target="_blank"
                  className="newHome_div_section1_area_div1_btns_link"
                >
                  <button className="newHome_div_section1_area_div1_btns_btn1">
                    Get started
                  </button>
                </a>
                <a
                  href="https://t.me/egochainHQ"
                  target="_blank"
                  className="newHome_div_section1_area_div1_btns_link"
                >
                  <button className="newHome_div_section1_area_div1_btns_btn2">
                    Join telegram{" "}
                    <TelegramIcon
                      size={20}
                      className="newHome_div_section1_area_div1_btns_btn2_icon"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="newHome_div_section1_area_div2">
              <div className="newHome_div_section1_area_div2_title">
                Scalable blockchain
              </div>
              <div className="newHome_div_section1_area_div2_area">
                <div className="newHome_div_section1_area_div2_area_1">
                  <div className="newHome_div_section1_area_div2_area_1_title">
                    AVERAGE BLOCK TIME
                  </div>
                  <div className="newHome_div_section1_area_div2_area_1_cont">
                    5 sec
                  </div>
                </div>
                <div className="newHome_div_section1_area_div2_area_1">
                  <div className="newHome_div_section1_area_div2_area_1_title">
                    TRANSACTION FINALITY
                  </div>
                  <div className="newHome_div_section1_area_div2_area_1_cont">
                    2 sec
                  </div>
                </div>
                <div className="newHome_div_section1_area_div2_area_1">
                  <div className="newHome_div_section1_area_div2_area_1_title">
                    TRANSACTION COST
                  </div>
                  <div className="newHome_div_section1_area_div2_area_1_cont">
                    $0.02
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/new_home_hero_bg.svg"
          alt=""
          className="newHome_div_section1_img"
        />
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="newHome_div_section2">
        <div className="container">
          <div className="newHome_div_section2_area">
            <div className="newHome_div_section2_area_1">
              <div className="newHome_div_section2_area_1_title">
                We aim to build the future of tokenization
              </div>
              <div className="newHome_div_section2_area_1_para">
                With egomart, we’re creating a platform to tokenize real-world
                properties into NFTs, allowing true and fractional ownership,
                easy transfers, and adoption incentives.
              </div>

              <a
                href="https://t.me/egomartbot"
                target="_blank"
                style={{ width: "max-content", margin: "auto" }}
              >
                <button className="newHome_div_section2_area_1_btn">
                  Launch Egomart
                </button>
              </a>
              <div className="newHome_div_section2_area_1_body">
                <div className="newHome_div_section2_area_1_body_cont1">
                  <img
                    src="/img/new_img_gallery_img1.jpeg"
                    alt=""
                    className="newHome_div_section2_area_1_body_cont1_img"
                  />
                </div>
                <div className="newHome_div_section2_area_1_body_cont1">
                  <img
                    src="/img/new_img_gallery_img2.jpeg"
                    alt=""
                    className="newHome_div_section2_area_1_body_cont1_img"
                  />
                </div>
                <div className="newHome_div_section2_area_1_body_cont1">
                  <img
                    src="/img/new_img_gallery_img3.jpeg"
                    alt=""
                    className="newHome_div_section2_area_1_body_cont1_img"
                  />
                </div>
              </div>
            </div>
            <div className="newHome_div_section2_area_2">
              <div className="newHome_div_section2_area_2_tag">
                WHAT MAKES US UNIQUE?
              </div>
              <div className="newHome_div_section2_area_2_title">
                Egomart Features
              </div>
              <div className="newHome_div_section2_area_2_para">
                Discover the unique features that make Egomart your go-to
                destination for all your shopping needs. Our platform is
                designed to provide a seamless, enjoyable, and efficient
                shopping experience, tailored just for you.
              </div>
              <div className="newHome_div_section2_area_2_body">
                <div className="newHome_div_section2_area_2_body_div1">
                  <img
                    src="/img/newHomeToken.svg"
                    alt=""
                    className="newHome_div_section2_area_2_body_div1_img"
                  />
                  <div className="newHome_div_section2_area_2_body_div1_title">
                    Border-less and inclusive platform
                  </div>
                  <div className="newHome_div_section2_area_2_body_div1_para">
                    Participate in the market from anywhere in the world.
                    Whether you’re buying any of our carbon-free product,
                    investing in fractional ownership, or exploring the market.
                  </div>
                </div>
                <div className="newHome_div_section2_area_2_body_div1">
                  <img
                    src="/img/newHomeToken.svg"
                    alt=""
                    className="newHome_div_section2_area_2_body_div1_img"
                  />
                  <div className="newHome_div_section2_area_2_body_div1_title">
                    Border-less and inclusive platform
                  </div>
                  <div className="newHome_div_section2_area_2_body_div1_para">
                    Participate in the market from anywhere in the world.
                    Whether you’re buying any of our carbon-free product,
                    investing in fractional ownership, or exploring the market.
                  </div>
                </div>
                <div className="newHome_div_section2_area_2_body_div1">
                  <img
                    src="/img/newHomeToken.svg"
                    alt=""
                    className="newHome_div_section2_area_2_body_div1_img"
                  />
                  <div className="newHome_div_section2_area_2_body_div1_title">
                    Border-less and inclusive platform
                  </div>
                  <div className="newHome_div_section2_area_2_body_div1_para">
                    Participate in the market from anywhere in the world.
                    Whether you’re buying any of our carbon-free product,
                    investing in fractional ownership, or exploring the market.
                  </div>
                </div>
                <div className="newHome_div_section2_area_2_body_div1">
                  <img
                    src="/img/newHomeToken.svg"
                    alt=""
                    className="newHome_div_section2_area_2_body_div1_img"
                  />
                  <div className="newHome_div_section2_area_2_body_div1_title">
                    Border-less and inclusive platform
                  </div>
                  <div className="newHome_div_section2_area_2_body_div1_para">
                    Participate in the market from anywhere in the world.
                    Whether you’re buying any of our carbon-free product,
                    investing in fractional ownership, or exploring the market.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/new_home_grains.png"
          alt=""
          className="newHome_div_section2_bg"
        />
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="newHome_div_section3">
        <div className="container">
          <div className="newHome_div_section3_area">
            <div className="newHome_div_section3_area_tag">FEATURES</div>
            <div className="newHome_div_section3_area_title">
              Discover what makes Egochain unique
            </div>
            <div className="newHome_div_section3_area_para">
              Egochain excels in blockchain with innovative tech, user-centric
              focus, and transparency, featuring unique attributes such as:
            </div>
            <div className="newHome_div_section3_area_body">
              <Swiper
                // loop={true}
                slidesPerView={"auto"}
                // centeredSlides={true}
                // slidesPerView={3}
                spaceBetween={0}
                navigation={true}
                pagination={{
                  clickable: true,
                  // dynamicBullets: true,
                }}
                modules={[Navigation, Pagination]}
                className="newHome_div_section3_area_body_swiper"
              >
                <SwiperSlide className="newHome_div_section3_area_body_swiper_slide">
                  {" "}
                  <div className="newHome_div_section3_area_body_cont1">
                    <div className="newHome_div_section3_area_body_cont1_title">
                      RWA tokenization & Marketplace
                    </div>
                    <div className="newHome_div_section3_area_body_cont1_div">
                      Egomart allows for creation of RWA in an customization way
                      that is seamless and transparent.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="newHome_div_section3_area_body_swiper_slide">
                  {" "}
                  <div className="newHome_div_section3_area_body_cont1">
                    <div className="newHome_div_section3_area_body_cont1_title">
                      EVM compatibility
                    </div>
                    <div className="newHome_div_section3_area_body_cont1_div">
                      The Egochain network is a built on a multi chain (EVM and
                      Cosmos SDK) infrastructure.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="newHome_div_section3_area_body_swiper_slide">
                  {" "}
                  <div className="newHome_div_section3_area_body_cont1">
                    <div className="newHome_div_section3_area_body_cont1_title">
                      Anyone can become a validator
                    </div>
                    <div className="newHome_div_section3_area_body_cont1_div">
                      Egochain uses a Proof of Stake (PoS) mechanism to secure
                      the network.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="newHome_div_section3_area_body_swiper_slide">
                  {" "}
                  <div className="newHome_div_section3_area_body_cont1">
                    <div className="newHome_div_section3_area_body_cont1_title">
                      Governance
                    </div>
                    <div className="newHome_div_section3_area_body_cont1_div">
                      Egochain allows participation in voting process and
                      network using $EGAX.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="newHome_div_section3_area_body_swiper_slide">
                  <div className="newHome_div_section3_area_body_cont1">
                    <div className="newHome_div_section3_area_body_cont1_title">
                      Dual-currency model
                    </div>
                    <div className="newHome_div_section3_area_body_cont1_div">
                      Egochain uses 2 tokens ($EGAX & egoUSD) to balance
                      interest, stimulate demand and reward participation.
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >

              </Swiper> */}
            </div>
          </div>
        </div>
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="newHome_div_section4">
        <div className="container">
          <div className="newHome_div_section4_area">
            <div className="newHome_div_section4_area_tag">
              SIMPLE - FAST - AFFORDABLE
            </div>
            <div className="newHome_div_section4_area_title">
              Did you want to build or tokenize anything? Jump right in
            </div>
            <div className="newHome_div_section4_area_para">
              Egochain offers Ethereum-like speed and scalability, needing only
              an RPC endpoint change for Ethereum developers to start.
            </div>
            <div className="newHome_div_section4_area_body">
              <img
                src="/img/token_big_glow.svg"
                alt=""
                className="newHome_div_section4_area_body_img"
              />
              <div className="newHome_div_section4_area_body_txt">
                Now is the time to start using our products or building on
                Egochain, whether you're an individual or a developer.
              </div>
              <a
                href="https://docs.egochain.org/building-on-egochain/introduction-to-egochain-development"
                target="_blank"
                style={{ width: "max-content", margin: "auto" }}
              >
                <button className="newHome_div_section4_area_body_btn">
                  Check out our dev tools
                </button>
              </a>
            </div>
          </div>
        </div>
        <img
          src="/img/new_home_grains2.png"
          alt=""
          className="newHome_div_section4_img"
        />
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="newHome_div_section5">
        <div className="container">
          <div className="newHome_div_section5_area">
            <div className="newHome_div_section5_area_title">
              STRATEGIC SUPPORTERS
            </div>
            <div className="newHome_div_section5_area_body">
              <Marquee>
                <div className="newHome_div_section5_area_body_cont1">
                  <img
                    src="/img/egoras-logo.png"
                    alt=""
                    className="newHome_div_section5_area_body_cont1_img"
                  />
                </div>
                <div className="newHome_div_section5_area_body_cont1">
                  <img
                    src="/img/tekedia_logo_light.svg"
                    alt=""
                    className="newHome_div_section5_area_body_cont1_img"
                  />
                </div>
                <div className="newHome_div_section5_area_body_cont1">
                  <img
                    src="/img/icg_logo.svg"
                    alt=""
                    className="newHome_div_section5_area_body_cont1_img"
                  />
                </div>
                <div className="newHome_div_section5_area_body_cont1">
                  <img
                    src="/img/bitmart_logo.png"
                    alt=""
                    className="newHome_div_section5_area_body_cont1_img"
                  />
                </div>
                <div className="newHome_div_section5_area_body_cont1">
                  <img
                    src="/img/mexc_logo.png"
                    alt=""
                    className="newHome_div_section5_area_body_cont1_img"
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="newHome_div_section6">
        <div className="container">
          <div className="newHome_div_section6_area">
            <div className="newHome_div_section6_area_tag">POSSIBILITIES</div>
            <div className="newHome_div_section6_area_title">
              Discover the possibilities within our ecosystem
            </div>
            <div className="newHome_div_section6_area_para">
              Discover endless opportunities to innovate, collaborate, and grow
              within our ecosystem, tailored for developers, entrepreneurs, and
              enthusiasts alike.
            </div>
            <div className="newHome_div_section6_body">
              <div className="newHome_div_section6_body_cont1">
                <img
                  src="/img/token_single.svg"
                  alt=""
                  className="newHome_div_section6_body_cont1_img"
                />
                <div className="newHome_div_section6_body_cont1_title">
                  Dapps
                </div>
                <div className="newHome_div_section6_body_cont1_para">
                  Browse dApps that have already launched on Egochain.
                </div>
                <a
                  href="https://docs.egochain.org/egochain-overview/getting-started/explore-ecosystem"
                  target="_blank"
                >
                  <button className="newHome_div_section6_body_cont1_button">
                    Explore Egochain Ecosystem
                  </button>
                </a>
              </div>
              <div className="newHome_div_section6_body_cont1">
                <img
                  src="/img/token_single.svg"
                  alt=""
                  className="newHome_div_section6_body_cont1_img"
                />
                <div className="newHome_div_section6_body_cont1_title">
                  Products
                </div>
                <div className="newHome_div_section6_body_cont1_para">
                  Learn more about our products and latest development
                </div>
                <a href="https://egoras.medium.com/" target="_blank">
                  <button className="newHome_div_section6_body_cont1_button">
                    Visit Egochain Blog
                  </button>
                </a>
              </div>
              <div className="newHome_div_section6_body_cont1">
                <img
                  src="/img/token_single.svg"
                  alt=""
                  className="newHome_div_section6_body_cont1_img"
                />
                <div className="newHome_div_section6_body_cont1_title">
                  Community
                </div>
                <div className="newHome_div_section6_body_cont1_para">
                  Chat with the Egochain team and get involved.{" "}
                </div>
                <a href="https://t.me/egochainHQ" target="_blank">
                  <button className="newHome_div_section6_body_cont1_button">
                    Join Our Telegram
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="newHome_div_section7" id="faq">
        <div className="container">
          <div className="newHome_div_section7_area">
            <div className="newHome_div_section7_area_title">
              Frequently asked questions
            </div>
            <div className="newHome_div_section7_area_para">
              Everything you need to know about the Egochain
            </div>
            <div className="newHome_div_section7_area_body">
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What is tokenization?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Tokenization is the process of converting rights to an asset
                    into a digital token on a blockchain. This allows for the
                    secure, transparent, and decentralized ownership and
                    transfer of assets.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">What is EGAX?</summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    $EGAX Coin is the native utility token of the Egochain
                    blockchain, serving a crucial role within the Egochain
                    ecosystem. Holders of $EGAX can utilize the token to access
                    the Egochain suite, settle transactions on the network, and
                    participate in governance through voting. Additionally, on
                    the Egochain, $EGAX can be used to mint EgoUSD. This enables
                    users to acquire Egoras physical products and gain
                    fractional ownership of tokenized assets. Alternatively,
                    users may stake their $EGAX with validators to help secure
                    the Egochain network.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">What is EgoUSD?</summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    EgoUSD is Egoras’s premier stablecoin, built on the
                    Egochain. It is the second most significant product in the
                    Egochain ecosystem and is crucial to the success of the
                    Egomart platform. In essence, EgoUSD will serve as the
                    backbone of the Egomart ecosystem. All EgoUSD tokens will be
                    distributed to bonders for their necessary needs and
                    actions.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What is the total Supply of $EGAX?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    The total supply of Egochain Coin is fixed at 10,000,000
                    $EGAX (ten million) to ensure scarcity. The tokens will be
                    released in vested phases and will be fully vested over a
                    period of 20 years.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What Tokenized Assets Can Be Traded on Egomart?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    On Egomart, tokenized assets represent ownership of
                    real-world assets (RWAs) such as real estate, physical
                    properties, artwork, collectibles, and other valuable items.
                    Through our Egochain blockchain, Egomart offers a unique and
                    tamper-proof method of verifying ownership of these assets,
                    facilitating easier, decentralized, and transparent buying,
                    selling, and trading.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Who Built Egochain?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Egochain was developed by Egoras, a clean-tech pioneer with
                    over 400 employees. Founded in 2018, Egoras aims to drive a
                    large-scale shift towards sustainable energy in emerging
                    markets.
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="newHome_div_section8">
        <div className="container">
          <div className="newHome_div_section8_area">
            <div className="newHome_div_section8_area_imgs">
              <img
                src="/img/avatar_group.png"
                alt=""
                className="newHome_div_section8_area_imgs_img"
              />
            </div>
            <div className="newHome_div_section8_area_title">
              Still have questions?
            </div>
            <div className="newHome_div_section8_area_para">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </div>
            <a
              href="mailto:support@egoras.com"
              // className="footerDiv1_area2_title_subLinks_div_link1"
              target="_blank"
            >
              <button className="newHome_div_section8_area_btn">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHome;
