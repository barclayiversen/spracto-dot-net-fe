import React from "react";
import bgVideo from "../assets/newbgvideo.mp4";
import logo from "../assets/logo-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "../index.css";
const Index = () => {
  return (
    <>
      <div className="w-full h-screen">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover brightness-75"
        />
        <img
          src={logo}
          alt="Logo"
          className="absolute inset-0 m-auto w-auto h-40 z-0 animate-fade animate-duration-[2000ms]"
        />
      </div>
      <FontAwesomeIcon
        icon={faChevronDown}
        style={{ color: "#ffffff" }}
        className="absolute left-1/2 bottom-20 animate-bounce"
      />

      <div className="w-full h-96 bg-black text-white p-5">
        Spracto is rootin' tootin' troubleshootin' kinda guy who enjoys doing
        things on his 'pooter!
      </div>
    </>
  );
};

export default Index;
