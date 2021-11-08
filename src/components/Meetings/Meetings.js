import React, { Component } from "react";
import "./Meeting.css";
import MeetItem from "./MeetItem";
import { meetItems } from "./meets";

export default class Meetings extends Component {
  render() {
    return (
      <div className="wrapper">
        {meetItems.map((item, index) => {
          return <MeetItem meet={item} idx={index}></MeetItem>;
        })}
      </div>
    );
  }
}
