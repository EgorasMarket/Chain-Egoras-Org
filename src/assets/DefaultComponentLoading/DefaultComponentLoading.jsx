import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import "./defaultCompLoader.css";
const DefaultComponentLoading = () => {
  return (
    <div className="loading_div_area">
      <div className="loading_div_area_cont">
        <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon"
          size={80}
          speedMultiplier={0.5}
        />
        <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={80}
          speedMultiplier={0.5}
        />
        <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={80}
          speedMultiplier={0.5}
        />
        {/* <PuffLoader
          color="#26bf73"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon"
          size={200}
          speedMultiplier={1}
        /> */}
        {/* <PuffLoader
          color="#26bf73"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={100}
          speedMultiplier={1}
        />
        <PuffLoader
          color="#26bf73"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={100}
          speedMultiplier={1}
        />
        <PuffLoader
          color="#26bf73"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={80}
          speedMultiplier={1}
        /> */}
        {/* <PuffLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={150}
          speedMultiplier={1}
        />
        <PuffLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={100}
          speedMultiplier={1}
        />
        <PuffLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={150}
          speedMultiplier={1}
        /> */}
        {/* <BounceLoader
          color="#26bf73"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={100}
          speedMultiplier={0.5}
        /> */}
        {/* <HashLoader
          color="#26bf73"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={80}
          margin={20}
          speedMultiplier={0.5}
        /> */}
        <img
          src="/img/egoras_logo_icon.svg"
          alt=""
          className="loading_div_area_img"
        />
      </div>
    </div>
  );
};

export default DefaultComponentLoading;
