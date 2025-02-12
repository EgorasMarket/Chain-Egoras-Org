import React, { useEffect, useState } from "react";
import "./dashboardMember.css";

// import { Line, Circle } from "rc-progress";
import { numberWithCommas } from "../../../assets/numberWithCommas";
import { ShimmerButton } from "react-shimmer-effects-18";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const DasboardMember = ({ refCode, componentLoading, refAmount }) => {
  const copyText2 = () => {
    var copyText = document.getElementById("myInput2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copied code ";
    tooltip.style.display = "block";
  };
  function outFunc2() {
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copy to clipboard";
    tooltip.style.display = "none";
  }

  return (
    <div className="dash_member_sub_div_1">
      <div className="dash_member_sub_div_1_head1">Total Referral Earnings</div>
      <div className="dash_member_sub_div_1_txt_conts">
        <div className="dash_member_sub_div_1_txt_conts_2">
          {componentLoading ? (
            <ShimmerButton size="sm" className="custom_shimmer" />
          ) : (
            <>
              <img
                src="/img/point_gif_coin.gif"
                alt=""
                className="event_sideBar_div_area_last_div_cont1_title_gif"
              />{" "}
              {parseFloat(refAmount).toFixed(2)}
              <span className="dash_member_sub_div_1_txt_conts_2_span">xp</span>
            </>
          )}
        </div>
      </div>
      <div className="memberRefCode_div">
        <div className="memberRefCode_div_title">Referral Code</div>
        <div className="memberRefCode_div_input_div">
          <input
            type="text"
            value={refCode}
            className="memberRefCode_div_input"
            id="myInput2"
          />
          <button
            className="memberRefCode_div_input_btn"
            onClick={copyText2}
            onMouseOut={outFunc2}
          >
            <ContentCopyOutlinedIcon
              className="memberRefCode_div_input_btn_icon"
              onClick={copyText2}
              onMouseOut={outFunc2}
            />
            <span className=" tooltiptext tooltiptext2" id="myTooltip2"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DasboardMember;
