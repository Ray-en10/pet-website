import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Body.css";
import nems from "../assets/nems.png";

function Body() {
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace("#", "");
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div className="body">
      <div className="page" id="page">
        <div className="sec1img">
          <div className="dark-overlay">
            <h1 className="text">Donate & Adopt a New Freind</h1>
            <p className="text2">Cute Animal</p>
          </div>
          <img
            className="imgpage"
            src="https://images.saymedia-content.com/.image/t_share/MTc0NDkxODAzMDMzMDE5NzUy/220-cute-white-dog-names-with-meanings-for-your-puppy.jpg"
            alt="Main"
          />
        </div>

        <div className="part1">
          <div className="sec2_img">
            <img className="imgpage2" src={nems} alt="imgpage2" />
          </div>
          <div className="text-container">
            <h1 className="about1">ABOUT</h1><br/>
            <div className="line"></div><br/>
            <p className="undertitle">
              Our website connects animals with loving homes and donors who
              support animal shelters and rescues. <br />
              Browse adoptable animals from various organizations and make
              donations to support their care.
              <br />
              Our goal is to make it easy for more animals to find their forever
              homes and receive the care they need.
              <br />
              Join us in improving the lives of animals in need!
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
