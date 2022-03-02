import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import "./styles.css";

const Courses = () => {
  const Navigate = useNavigate();
  return (
      <div className="user_profile">
        <div className="profile_header">
          <h2>Courses</h2>
        </div>
        <div className="buttons">
          <div className="bt" id="btnfirst">
            <Button
              variant="contained"
              onClick={() => Navigate("/courses/btech")}
            >
              Btech
            </Button>
          </div>
          <div className="bt">
            <Button
              variant="contained"
              onClick={() => Navigate("/courses/fiveyear")}
            >
              Five Year Courses
            </Button>
          </div>
          <div className="bt">
            <Button
              variant="contained"
              onClick={() => Navigate("/courses/twoyearmba")}
            >
              Two Year MBA
            </Button>
          </div>
          <div className="bt">
            <Button
              variant="contained"
              onClick={() => Navigate("/courses/twoyearmsc")}
            >
              Two Year MSC
            </Button>
          </div>
          <div className="bt">
            <Button
              variant="contained"
              onClick={() => Navigate("/courses/twoyearmtech")}
            >
              Two Year M.Tech
            </Button>
          </div>
          <div className="bt">
            <Button
              variant="contained"
              onClick={() => Navigate("/courses/threeyearmsc")}
            >
              Three Year MSC
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Courses;
