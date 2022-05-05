import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "animate.css";

import "./styles.css";

const Courses = () => {
  const Navigate = useNavigate();
  return (
    <div className="courses_list">
      <div class="ug-pg d-flex m-0 justify-content-center">
        <div className="flex-grow-1 ">
          <h1 className="ug-pg-h1 prog-hover">
            Programs
            <span className="ug-pg-span">
              <b>
                List of Programs offered by IIT(ISM) Dhanbad. Click for more
                details
              </b>
            </span>
          </h1>
        </div>
      </div>
      <div className="buttons">
        <div className="bt animate__animated animate__fadeInLeft" id="btnfirst">
          <Button variant="outlined" onClick={() => Navigate("/courses/btech")}>
            <div className="courses-button">B.Tech - 4 year</div>
          </Button>
        </div>
        <div className="bt animate__animated animate__fadeInRight">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/fiveyear")}
          >
            <div className="courses-button">Integrated M.Tech - 5 year</div>
          </Button>
        </div>
        <div className="bt animate__animated animate__fadeInLeft">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/twoyearmba")}
          >
            <div className="courses-button">M.B.A - 2 year</div>
          </Button>
        </div>
        <div className="bt  animate__animated animate__fadeInRight">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/twoyearmsc")}
          >
            <div className="courses-button">M.SC - 2 Year </div>
          </Button>
        </div>
        <div className="bt animate__animated animate__fadeInLeft">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/twoyearmtech")}
          >
            <div className="courses-button">M.Tech - 2 year</div>
          </Button>
        </div>
        <div className="bt  animate__animated animate__fadeInRight">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/threeyearmsc")}
          >
            <div className="courses-button">M.SC - 3 Year</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
