import React from "react";
import Typical from "react-typical";
import "./Home.css";
import CV from "../../Assets/Kiprotich_davis_cyber.pdf"


/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function () {
  return (
    <section id="home">
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="cols">
              <div className="cols-icon">
                <a href="https://www.facebook.com/">
                  <i className="fa fa-facebook square"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fa fa-instagram square"></i>
                </a>
                <a href="https://x.com/werigan_non/">
                <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/davis-kiprotich-652b49243/">
                  <i className="fa fa-linkedin-square "></i>
                </a>
                <a href="https://www.github.com/DavisKiprotich/">
                  <i className="fa fa-github square"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text highlighted-text">
                {" "}
                Kiprotich Davis
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Front End Developer",
                      1000,
                      "Networking Engineer",
                      1000,
                      "Electrical Engineer",
                      1000,
                      "Cloud Engineering Enthusiast",
                      1000,
                      "Ethical Hacking Enthusiast",
                      1000,
                    ]}
                  />
                </h1>
              </span>
              <span className="profile-details-tagline">
                <h2>Feel the Fear and Do it anyway</h2>
              </span>
              <span className="profile-options">
                <button className="btn primary-btn">
                  {" "}
                  <a href="#contact">Hire Me </a>
                </button>
                <a
                  href={CV}
                  download
                >
                  <button className="btn highlighted-btn">Download My Resume</button>
                </a>
              </span>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
