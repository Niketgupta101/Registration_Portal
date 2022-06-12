import React from "react";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebAssetTwoToneIcon from "@mui/icons-material/WebAssetTwoTone";
import ArticleIcon from "@mui/icons-material/Article";
import BookIcon from "@mui/icons-material/Book";
import { Email, HomeOutlined } from "@material-ui/icons";
import "./styles.css";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="footer_intro">
          <h2>IIT (ISM) Dhanbad</h2>
          <h5>Legacy that inspires the Future</h5>
        </div>
        <div className="footer_menu">
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <h5>
              <HomeOutlined className="me-1" />
              <span className="mt-3">Home Page</span>
            </h5>
          </a>
          <a href="/courses" style={{ textDecoration: "none", color: "white" }}>
            <h5>
              <BookIcon className="me-1" />
              <span className="mt-3">Courses</span>
            </h5>
          </a>
        </div>
        <div className="footer_admin">
          <a
            href="https://www.linkedin.com/in/cdc-scpt/?originalSubdomain=in"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>
              <LinkedInIcon sx={{ mx: 1 }} />
              LinkedIn
            </h5>
          </a>
          <a
            href="https://cdc.iitism.ac.in/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>
              <WebAssetTwoToneIcon sx={{ mx: 1 }} />
              CDC Website
            </h5>
          </a>
          <a
            href="https://cdc.iitism.ac.in/files/IIT(ISM)_Placement_Brochure.pdf"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>
              <ArticleIcon sx={{ mx: 1 }} />
              Placement Brochure
            </h5>
          </a>
        </div>

        <div className="footer_contact_us" style={{ color: "white" }}>
          <a
            href="/contactus"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>
              <Email className="me-1" />
              Contact Us
            </h5>
          </a>
          <h6>+91-9771490999</h6>
          <h6>cdc@iitism.ac.in</h6>
          <h6>Dhanbad, Jharkhand</h6>
        </div>
      </div>
      <div className="copyright">&copy; REGISTRATION PORTAL</div>
    </>
  );
};

export default Footer;
