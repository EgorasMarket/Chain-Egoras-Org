import React from "react";
import "./UpdatedSuccessErrorModal.css";
import Warningloader from "../../../../LottieFiles/loadingIcon/WarningIcon.json";
import Lottie from "lottie-react";
const UpdatedWarningModal = ({ continueFunc, errorMessage, closeModal }) => {
  return (
    <div className="UpdatedSuccessModalDiv">
      <div className="UpdatedSuccessModalDiv_Cont">
        <div className="successModalDiv_cont_animation">
          <Lottie
            animationData={Warningloader}
            loop={false}
            autoPlay={true}
            className="successModalDiv_cont_animation_icon"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
        <div className="UpdatedSuccessModalDiv_Cont_title">Warning!</div>
        <div className="UpdatedSuccessModalDiv_Cont_body">{errorMessage}</div>
        <div className="UpdatedSuccessModalDiv_Cont_buttons">
          <button
            className="UpdatedSuccessModalDiv_Cont_btn_warning"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="UpdatedSuccessModalDiv_Cont_btn"
            onClick={continueFunc}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatedWarningModal;
