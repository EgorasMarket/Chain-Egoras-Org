import React, { useEffect, useState, useRef } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Blockies from "react-blockies";
// import { FETCH_LEADERBOARD_STAT } from "../../constants/api";
import { FETCH_LEADERBOARD_STAT } from "../../../constants/api";
import "./leaderBoard.css";
import Staticdata from "../Static";
const LeaderBoard = () => {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [isLoading2, setIsLoading2] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState([]);

  const containerRef = useRef(null);
  const scrollToBottom = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.scrollBehavior = "smooth"; // Enable smooth scrolling
      container.scrollTop = container.scrollHeight;
      // Disable smooth scrolling after the animation is complete
      container.addEventListener("scroll", () => {
        container.style.scrollBehavior = "auto";
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [itemsToShow]);

  const displayNextItems = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setItemsToShow(itemsToShow + 10);
      setIsLoading2(false);
    }, 2000); // Adjust the delay duration as needed (e.g., 1000 milliseconds or 1 second)
  };

  const fetchEventStat = async () => {
    const res = await FETCH_LEADERBOARD_STAT();
    console.log(res, "agba");
    console.log(res.data.allEvents, "maggi");
    setLeaderBoard(res.data.allEvents);
  };

  useEffect(() => {
    fetchEventStat();
  }, []);
  return (
    <div className="LeaderBoardDiv">
      <div className="LeaderBoardDiv_1">
        <div className="LeaderBoardDiv_1_title">Leaderboard</div>
        <div className="LeaderBoardDiv_1_para">
          Bridge, use Dapps, & invite friends to rank up.
        </div>
      </div>
      <div className="LeaderBoardDiv_1_body">
        <div className="LeaderBoardDiv_1_body_title">
          <div className="LeaderBoardDiv_1_body_title_cont_first">Rank</div>
          <div className="LeaderBoardDiv_1_body_title_cont">Name</div>
          <div className="LeaderBoardDiv_1_body_title_cont">Volume</div>
          <div className="LeaderBoardDiv_1_body_title_cont_second_last">
            Points
          </div>
        </div>
        <div className="LeaderBoardDiv_1_body_cont_body">
          {leaderBoard
            .slice(0, itemsToShow)
            .sort((a, b) => b.points - a.points)
            .map((data, index) => (
              <div className="LeaderBoardDiv_1_body_cont_body_div" id={data.id}>
                <div className="LeaderBoardDiv_1_body_cont_body_div_cont_first">
                  {index == 0 ? (
                    <MilitaryTechIcon
                      style={{ color: "#e0ac01" }}
                      className="rewardTable_body_row_data_first_icon"
                    />
                  ) : index == 1 ? (
                    <MilitaryTechIcon
                      style={{ color: "#C0C0C0" }}
                      className="rewardTable_body_row_data_first_icon"
                    />
                  ) : index == 2 ? (
                    <MilitaryTechIcon
                      style={{ color: "#CD7F32" }}
                      className="rewardTable_body_row_data_first_icon"
                    />
                  ) : (
                    <MilitaryTechIcon
                      style={{ color: "#c2f4e0bf" }}
                      className="rewardTable_body_row_data_first_icon"
                    />
                  )}
                  {index + 1}
                </div>
                <div className="LeaderBoardDiv_1_body_cont_body_div_cont">
                  <Blockies
                    seed={data.address}
                    size={8}
                    scale={4}
                    className="blockies_icon"
                  />{" "}
                  {`${data.address.slice(0, 4)}...${data.address.slice(
                    38,
                    42
                  )}`}
                </div>
                <div className="LeaderBoardDiv_1_body_cont_body_div_cont">
                  {parseFloat(data.volume).toFixed(2)} usd
                </div>
                <div className="LeaderBoardDiv_1_body_cont_body_div_last">
                  <img
                    src="/img/point_gif_coin.gif"
                    alt=""
                    className="event_sideBar_div_area_last_div_cont1_title_gif"
                  />{" "}
                  {data.points}{" "}
                  <span className="LeaderBoardDiv_1_body_cont_body_div_last_span">
                    xp
                  </span>
                </div>
              </div>
            ))}
        </div>
        {itemsToShow < leaderBoard.length && (
          <button
            onClick={displayNextItems}
            className="dashBoard_ref_area2_cont1_body_cont_btn"
            disabled={isLoading2}
          >
            {isLoading2 ? (
              <ScaleLoader color="#366e51" height={15} />
            ) : (
              "  Load More"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
