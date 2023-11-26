import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import route from "../images/Group 2195.svg";
import heropic from "../images/main dashboard.svg";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import RequestButton from "./RequestButton";
import "./Hero.css";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Begins with E-Learning", "Is Validated with Certificates"],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 1000,
      showCursor: true,
      cursorChar: "|", 
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="hero">
        <div className="left">
          <div
            className="hero-button"
            variant="outlined"
            style={{
              backgroundColor: "#262728",
              border: "1px solid #3B3C3D",
              textTransform: "capitalize",
              color: "white",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            Launching our Private Beta <KeyboardArrowRightRoundedIcon />
          </div>
          <h1>
            Your Success Journey{" "}
            <div className="typing-div">
              <span ref={el} style={{ color: "#CED765" }}></span>
            </div>{" "}
          </h1>
          <p>
            Learning, Certifications, AI Resume Builder, Mock Interviews and
            Much More..
          </p>
          <RequestButton text={"Request Early Access"} />
        </div>

        <div className="right">
          <img src={route} alt="" />
        </div>
      </div>
      <img className="heropic animation-line" src={heropic} />
    </>
  );
}
