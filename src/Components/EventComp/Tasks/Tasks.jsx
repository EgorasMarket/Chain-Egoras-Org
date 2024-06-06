import React from "react";
import { ShimmerButton } from "react-shimmer-effects-18";
import "./task.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Tasks = () => {
  const [componentLoading, setcomponentLoading] = React.useState(false);
  return (
    <div className="Task_component">
      <div className="Task_component_task_comp1">
        <div className="Task_component_task_comp1_div">
          <div className="Task_component_task_comp1_div1_area1">
            <div className="dash_member_sub_div_1_head1">Quests Point</div>
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
                    {parseFloat(0).toFixed(2)}
                    <span className="dash_member_sub_div_1_txt_conts_2_span">
                      xp
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="Task_component_task_comp1_div1_area2">
            <div className="Task_component_task_comp1_div1_area2_txt">
              Your{" "}
              <img
                src="/img/x_logo.svg"
                alt=""
                className="Task_component_task_comp1_div1_area2_img"
              />{" "}
              handle
            </div>
            <div className="Task_component_task_comp1_div1_area2_input_div">
              <input
                type="text"
                className="Task_component_task_comp1_div1_area2_input"
              />
              <button className="Task_component_task_comp1_div1_area2_input_div_btn">
                Enter{" "}
                <ArrowForwardIcon className="Task_component_task_comp1_div1_area2_input_div_btn_icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Task_component_body">
        <div className="Task_component_body_cont1">
          <div className="Task_component_body_cont1_div1">
            <img
              src="/img/x_logo.svg"
              alt=""
              className="Task_component_body_cont1_img"
            />{" "}
            Follow @Egoras_hq
          </div>
          <div className="Task_component_body_cont1_div2">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="Task_component_body_cont1_div2_gif"
            />{" "}
            {parseFloat(20).toFixed(2)}
            <span className="Task_component_body_cont1_div2_span">xp</span>
          </div>
          <div className="Task_component_body_cont1_div3">
            <button className="Task_component_body_cont1_div3_button">
              Complete{" "}
              <ArrowOutwardIcon className="Task_component_body_cont1_div3_button_icon" />
            </button>
          </div>
        </div>
        <div className="Task_component_body_cont1">
          <div className="Task_component_body_cont1_div1">
            <img
              src="/img/x_logo.svg"
              alt=""
              className="Task_component_body_cont1_img"
            />{" "}
            Follow @Egoras_hq
          </div>
          <div className="Task_component_body_cont1_div2">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="Task_component_body_cont1_div2_gif"
            />{" "}
            {parseFloat(20).toFixed(2)}
            <span className="Task_component_body_cont1_div2_span">xp</span>
          </div>
          <div className="Task_component_body_cont1_div3">
            <button className="Task_component_body_cont1_div3_button">
              Complete{" "}
              <ArrowOutwardIcon className="Task_component_body_cont1_div3_button_icon" />
            </button>
          </div>
        </div>
        <div className="Task_component_body_cont1">
          <div className="Task_component_body_cont1_div1">
            <img
              src="/img/x_logo.svg"
              alt=""
              className="Task_component_body_cont1_img"
            />{" "}
            Follow @Egoras_hq
          </div>
          <div className="Task_component_body_cont1_div2">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="Task_component_body_cont1_div2_gif"
            />{" "}
            {parseFloat(20).toFixed(2)}
            <span className="Task_component_body_cont1_div2_span">xp</span>
          </div>
          <div className="Task_component_body_cont1_div3">
            <button className="Task_component_body_cont1_div3_button">
              Complete{" "}
              <ArrowOutwardIcon className="Task_component_body_cont1_div3_button_icon" />
            </button>
          </div>
        </div>
        <div className="Task_component_body_cont1">
          <div className="Task_component_body_cont1_div1">
            <img
              src="/img/x_logo.svg"
              alt=""
              className="Task_component_body_cont1_img"
            />{" "}
            Follow @Egoras_hq
          </div>
          <div className="Task_component_body_cont1_div2">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="Task_component_body_cont1_div2_gif"
            />{" "}
            {parseFloat(20).toFixed(2)}
            <span className="Task_component_body_cont1_div2_span">xp</span>
          </div>
          <div className="Task_component_body_cont1_div3">
            <button className="Task_component_body_cont1_div3_button">
              Complete{" "}
              <ArrowOutwardIcon className="Task_component_body_cont1_div3_button_icon" />
            </button>
          </div>
        </div>
        <div className="Task_component_body_cont1">
          <div className="Task_component_body_cont1_div1">
            <img
              src="/img/telegram_logo.svg"
              alt=""
              className="Task_component_body_cont1_img"
            />{" "}
            Follow @Egoras_hq
          </div>
          <div className="Task_component_body_cont1_div2">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="Task_component_body_cont1_div2_gif"
            />{" "}
            {parseFloat(20).toFixed(2)}
            <span className="Task_component_body_cont1_div2_span">xp</span>
          </div>
          <div className="Task_component_body_cont1_div3">
            <button className="Task_component_body_cont1_div3_button">
              Complete{" "}
              <ArrowOutwardIcon className="Task_component_body_cont1_div3_button_icon" />
            </button>
          </div>
        </div>
        <div className="Task_component_body_cont1">
          <div className="Task_component_body_cont1_div1">
            <img
              src="/img/telegram_logo.svg"
              alt=""
              className="Task_component_body_cont1_img"
            />{" "}
            Follow @Egoras_hq
          </div>
          <div className="Task_component_body_cont1_div2">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="Task_component_body_cont1_div2_gif"
            />{" "}
            {parseFloat(20).toFixed(2)}
            <span className="Task_component_body_cont1_div2_span">xp</span>
          </div>
          <div className="Task_component_body_cont1_div3">
            <button className="Task_component_body_cont1_div3_button">
              Complete{" "}
              <ArrowOutwardIcon className="Task_component_body_cont1_div3_button_icon" />
            </button>
          </div>
        </div>
        <div className="Task_component_body_cont1">
          <div className="Task_component_body_cont1_div1">
            <img
              src="/img/telegram_logo.svg"
              alt=""
              className="Task_component_body_cont1_img"
            />{" "}
            Follow @Egoras_hq
          </div>
          <div className="Task_component_body_cont1_div2">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="Task_component_body_cont1_div2_gif"
            />{" "}
            {parseFloat(20).toFixed(2)}
            <span className="Task_component_body_cont1_div2_span">xp</span>
          </div>
          <div className="Task_component_body_cont1_div3">
            <button className="Task_component_body_cont1_div3_button">
              Complete{" "}
              <ArrowOutwardIcon className="Task_component_body_cont1_div3_button_icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
