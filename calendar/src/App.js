import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
import "./App.css";
import "./index.css";

function getFormattedDate(date) {
  return moment(date).format("YYYY-MM-DD");
}

function App() {
  return (
    <div>
      <div
        style={{ textAlign: "center", fontSize: "20px", padding: "15px 10px" }}
      >
        <a href="/client">Client</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/calendar">Calendar</a>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "Event 1", date: getFormattedDate(new Date()) },
          { title: "Event 2", date: getFormattedDate(moment().add(1, "days")) },
        ]}
      />
    </div>
  );
}

export default App;
