import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    ampm: "AM",
  });

  useEffect(() => {
    const updateClock = () => {
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
      let am = h >= 12 ? "PM" : "AM";

      if (h > 12) h -= 12;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      setTime({ hours: h, minutes: m, seconds: s, ampm: am });

      // Update progress indicators
      document.getElementById("hh").style.strokeDashoffset =
        440 - (440 * h) / 12;
      document.getElementById("mm").style.strokeDashoffset =
        440 - (440 * m) / 60;
      document.getElementById("ss").style.strokeDashoffset =
        440 - (440 * s) / 60;

      document.querySelector(".hr_dot").style.transform = `rotate(${
        h * 30
      }deg)`;
      document.querySelector(".min_dot").style.transform = `rotate(${
        m * 6
      }deg)`;
      document.querySelector(".sec_dot").style.transform = `rotate(${
        s * 6
      }deg)`;
    };

    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      {" "}
      {/* Container with multicolor border */}
      <h2 className="clock-title rainbow-text">Digital Clock</h2>
      <div id="time">
        <div className="circle" style={{ "--clr": "#FF0000" }}>
          <div className="dots hr_dot"></div>
          <svg>
            <circle cx="75" cy="75" r="70"></circle>
            <circle cx="75" cy="75" r="70" id="hh"></circle>
          </svg>
          <div id="hours">
            {time.hours}
            <br />
            <span>Hours</span>
          </div>
        </div>
        <div className="circle" style={{ "--clr": "#FFA500" }}>
          <div className="dots min_dot"></div>
          <svg>
            <circle cx="75" cy="75" r="70"></circle>
            <circle cx="75" cy="75" r="70" id="mm"></circle>
          </svg>
          <div id="minutes">
            {time.minutes}
            <br />
            <span>Minutes</span>
          </div>
        </div>
        <div className="circle" style={{ "--clr": "#04fc43" }}>
          <div className="dots sec_dot"></div>
          <svg>
            <circle cx="75" cy="75" r="70"></circle>
            <circle cx="75" cy="75" r="70" id="ss"></circle>
          </svg>
          <div id="seconds">
            {time.seconds}
            <br />
            <span>Seconds</span>
          </div>
        </div>
        <div className="ap">
          <div id="ampm">{time.ampm}</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
