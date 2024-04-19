import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Index";
import { Route, Routes, Navigate } from "react-router-dom";
import Egc from "./Components/Home/Egc";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import RoadMapPage from "./Components/Home/RoadMapPage";
import Egax from "./Components/Home/Egax";
import Privacy from "./Components/PrivacyPolicy/Privacy";
import TermsAndConditions from "./Components/PrivacyPolicy/TermsAndConditions";
import WhitePaper from "./Components/Home/WhitePaper/WhitePaper";
import Faucet from "./Components/Faucet/Faucet";
import Wallet from "./Components/Wallet/Wallet";
import Egostation from "./Components/Home/EgoStation/Egostation";
import Event from "./Components/EventComp/Event";
import EventLandingPage from "./Components/EventComp/EventLandingPage";

function App() {
  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");
  if (window.location.host.split(".")[0] === "faucet") {
    return (
      <>
        <Header />
        <Faucet />
        <Footer />
      </>
    );
  }
  // if (window.location.host.split(".")[0] === "event") {
  //   return (
  //     <div className="App  dark">

  //       <Footer />
  //     </div>
  //   );
  // }
  return (
    <div className="App  dark">
      {myArr[1] === "event" ? null : <Header />}
      {myArr[1] === "event" ? (
        <Event />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/join/event" element={<EventLandingPage />} />
          <Route path="/station" element={<Egostation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/whitepaper" element={<WhitePaper />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/egc/coin/info" element={<Egc />} />
          <Route path="/egax/coin/info" element={<Egax />} />
          <Route path="/about" element={<RoadMapPage />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
