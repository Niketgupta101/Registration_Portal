import React from "react";
import { useNavigate } from 'react-router-dom';

import "./styles.css";

const Footer = () => {
  const Navigate = useNavigate();
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
        <h5 onClick={() => Navigate('/')}>HOME PAGE</h5>
        <h5 onClick={() => Navigate('/myjobs')}>MY JOBS</h5>
        <h5 onClick={() => Navigate('/courses')}>COURSES</h5>
        <h5 onClick={() => Navigate('/contactus')}>CONTACT US</h5>
    </div>
    <div className="footer_admin">
      <h5 onClick={() => Navigate('/admin/signin')}>ADMIN LOGIN</h5>
      <h5 onClick={() => Navigate('/')}>RULES & REGULATIONS</h5>
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
