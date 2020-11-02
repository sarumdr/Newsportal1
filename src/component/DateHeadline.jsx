import React, { Component } from "react";
import calender from "../image/calendar1.png";
import "./style.css";
class DateHeadline extends Component {
  render() {
    let date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    let year = date.getFullYear();
    let date1 = date.getDate();

    console.log("date", date);
    return (
      <div>
        {" "}
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">
            <img src={calender} width="30px" alt='calendar'className='calender' />
            {month} {date1},{year}
          </span>
        </nav>
        <div className="name" >The Nepali Times</div>
        <hr/>
      </div>
    );
  }
}

export default DateHeadline;
