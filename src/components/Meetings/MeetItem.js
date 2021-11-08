import React from "react";
import "./MeetItem.css";

const MeetItem = (props) => {
  let { meet, idx } = props;
  console.log(props);
  console.log(idx);
  console.log(meet);
  return (
    <div className="meetItem">
      <div className="titleCard">
        <div className="title">lorem</div>
        <div className="time">69:42</div>
      </div>
      <div className="participants">
        <div className="organizer">Login</div>
        <div className="participants">list of participants</div>
      </div>
    </div>
  );
};

export default MeetItem;
