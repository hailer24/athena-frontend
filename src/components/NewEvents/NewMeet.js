import FullCalendar from "@fullcalendar/react";
import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./NewMeet.css";

export default class NewMeet extends Component {
  handleEventClick = (date) => {
    console.log(date);
  };
  render() {
    return (
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={this.handleDateSelect}
          //eventContent={renderEventContent} // custom render function
          dateClick={this.handleEventClick}
          eventsSet={this.handleEvents}
        />
      </div>
    );
  }
}
