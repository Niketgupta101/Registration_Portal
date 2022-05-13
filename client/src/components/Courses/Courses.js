import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "animate.css";
import Loading from "../Loading/Loading";
import "./styles.css";

import { getAllCourseData } from "../../api/index.js";

const Courses = () => {

  const [courses, setCourses] = useState([]);
  const [btech, setBtech] = useState([]);
  const [fiveyear, setFiveyear] = useState([]);
  const [threeyearmsc, setThreeyearmsc] = useState([]);
  const [twoyearmba, setTwoyearmba] = useState([]);
  const [twoyearmsc, setTwoyearmsc] = useState([]);
  const [twoyearmtech, setTwoyearmtech] = useState([]);
  

  const [isLoading, setIsLoading] = useState(false);
  useEffect(async () => {
    console.log("course page opened");
    setIsLoading(true);
    const response = await getAllCourseData();
    setIsLoading(false);
   
    let temp=response.data.data;

    setCourses(()=>temp);
    setBtech(()=>temp.slice(0,12));
    setFiveyear(()=>temp.slice(12,15));
    setThreeyearmsc(()=>temp.slice(15,17));
    setTwoyearmba(()=>temp.slice(17,21));
    setTwoyearmsc(()=>temp.slice(21,24));
    setTwoyearmtech(()=>temp.slice(24));
  
    // console.log("btech=",response.data.data.slice(0,12));


  }, []);

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
        {console.log(btech)}
          <Button variant="outlined" onClick={() => Navigate("/courses/btech",{state:btech})}>
            <div className="courses-button">B.Tech - 4 year</div>
          </Button>
        </div>
        <div className="bt animate__animated animate__fadeInRight">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/fiveyear",{state:fiveyear})}
          >
            <div className="courses-button">Integrated M.Tech - 5 year</div>
          </Button>
        </div>
        <div className="bt animate__animated animate__fadeInLeft">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/twoyearmba",{state:twoyearmba})}
          >
            <div className="courses-button">M.B.A - 2 year</div>
          </Button>
        </div>
        <div className="bt  animate__animated animate__fadeInRight">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/twoyearmsc",{state:twoyearmsc})}
          >
            <div className="courses-button">M.SC - 2 Year </div>
          </Button>
        </div>
        <div className="bt animate__animated animate__fadeInLeft">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/twoyearmtech",{state:twoyearmtech})}
          >
          
            <div className="courses-button">M.Tech - 2 year</div>
          </Button>
        </div>
        <div className="bt  animate__animated animate__fadeInRight">
          <Button
            variant="outlined"
            onClick={() => Navigate("/courses/threeyearmsc",{state:threeyearmsc})}
          >
            <div className="courses-button">M.SC - 3 Year</div>
          </Button>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Courses;
