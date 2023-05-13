import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Oluwatadeebenezer@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/oluwatadeebenezerayodele/" target="_blank" rel="noopener noreferrer"><Instagram color="white" size={"3rem"} /></a>
          <a href="https://web.facebook.com/ebenezer.ayodele.3956" target="_blank" rel="noopener noreferrer"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/Eben4christ" target="_blank" rel="noopener noreferrer"><Github color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/oguntade-ebenezer-458702196/" target="_blank" rel="noopener noreferrer"><Linkedin color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
