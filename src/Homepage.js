import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
import Story from "./timeline/Post/Story";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Story/>
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;