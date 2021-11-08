import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import axios from 'axios'

const CreateEvents = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [Title, setTitle] = useState("Default");
  const [participants, setParticipants] = useState("");
  const [req, setReq] = useState({})
  const submitHandler = () => {
    console.log(startDate);
    let participantsArray = participants
      .slice(0, participants.length)
      .split(",");
    // const requ = {
    //   title: Title,
    //   date: startDate,
    //   participants: participantsArray,
    //   owner: props.email
    // };
    setReq({
      title: Title,
      date: startDate,
      participants: participantsArray,
      owner: props.email
    });
    axios.post("http://localhost:3000/api/createmeet", req).then((res) => {
      console.log(res.data);
    })
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
      <button className="btn submit" onClick={() => submitHandler()}>
        Submit
      </button>
    </div>
  );
};
 
const mapStateToProps = (state) => {
  return {
    email: state.email
  }
}

export default connect(mapStateToProps, undefined)(CreateEvents);
