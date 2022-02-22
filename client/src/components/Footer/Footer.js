import React from "react";

import "./styles.css";

const Footer = () => {
  return (
    <><div className="footer">
    <div className="footer_intro">
      <h2>IIT (ISM) Dhanbad</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
        possimus iusto rem doloremque qui hic ut neque cupiditate. Labore
        facere dignissimos eius est nemo accusamus nesciunt vitae dolor
        repudiandae esse!
      </p>
    </div>
    <div className="footer_menu">
        <h5>HOME PAGE</h5>
        <h5>MY JOBS</h5>
        <h5>COURSES</h5>
        <h5>CONTACT US</h5>
    </div>
    <div className="footer_admin">
      <h5>ADMIN LOGIN</h5>
      <h5>RULES & REGULATIONS</h5>
    </div>
    <div className="footer_contact_us">
        <h5>CONTACT US</h5>
        <h6>+91-1234567890</h6>
        <h6>registration@gmail.com</h6>
        <h6>Dhanbad, Jharkhand</h6>
    </div>
  </div>
  <div className="copyright">&copy; REGISTRATION PORTAL</div>
  </>
  );
};

export default Footer;
