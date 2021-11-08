import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEvents = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [participants, setParticipants] = useState("");
  let submitHandler = () => {
    console.log(startDate);
    console.log(typeof participants);
    let participantsArray = participants
      .slice(0, participants.length)
      .split(",");
    const req = {
      Date: startDate,
      Participants: participantsArray,
    };
    console.log(req);
  };

  return (
    <div className="wrapper">
      <div className="dateRangerSelector">
        <p className="label">Select time for the meet</p>
        <ReactDatePicker
          selected={startDate}
          dateFormat="d MMMM, yyyy h:mm aa"
          onChange={(date) => {
            setStartDate(date);
          }}
          showTimeSelect
        ></ReactDatePicker>
      </div>
      <div className="duration">
        <p className="label"></p>
      </div>
      <div className="participants">
        <p className="label">Add The mails of participants</p>
        <textarea
          onChange={(e) => setParticipants(e.target.value)}
          value={participants}
        ></textarea>
      </div>
      <div className="btn submit" onClick={(e) => submitHandler()}>
        Submit
      </div>
    </div>
  );
};

export default CreateEvents;
