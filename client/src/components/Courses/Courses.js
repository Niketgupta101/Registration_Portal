import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "animate.css";
import Loading from "../Loading/Loading";
import "./styles.css";
import { CourseTable, CourseTable2 } from "./CourseTable";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import {
  getAllCourseData,
  getInternshipData,
  getPlacementData,
} from "../../api/index.js";

const courseName_Placement = [
  "Bachelor of Technology",
  "Dual Degree",
  "Integrated Master of Technology",
  "Master of Business Administration",
  "Master of Business Administration(BA)",
  "Master of Science",
  "Master of Science and Technology",
  "Master of Technology",
];
const courseName_Internship = [
  "Bachelor of Technology",
  "Integrated Master of Technology",
  "Master of Business Administration",
  "Master of Business Administration(BA)",
  "Master of Science",
  "Master of Science and Technology",
  "Master of Technology",
];
const courseName2_Internship = ["Dual Degree", "Double Major"];

const Courses = () => {
  const [coursesPlacement, setCoursesPlacement] = useState([]);
  const [btechPlacement, setBtechPlacement] = useState([]);
  const [minrosPlacement, setMinrosPlacement] = useState([]);
  const [fiveyearPlacement, setFiveyearPlacement] = useState([]);
  const [doublemajorPlacement, setDoublemajorPlacement] = useState([]);
  const [dualdegreePlacement, setDualdegreePlacement] = useState([]);
  const [threeyearmscPlacement, setThreeyearmscPlacement] = useState([]);
  const [twoyearmbaPlacement, setTwoyearmbaPlacement] = useState([]);
  const [twoyearmbabaPlacement, setTwoyearmbabaPlacement] = useState([]);
  const [twoyearmscPlacement, setTwoyearmscPlacement] = useState([]);
  const [twoyearmtechPlacement, setTwoyearmtechPlacement] = useState([]);
  const [allDataPlacement, setAllDataPlacement] = useState([]);
  const [dataInternship, setDataInternship] = useState([]);
  const [leftDataInternship, setLeftDataInternship] = useState([]);

  const Navigate = useNavigate();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || user.isemailVerified === false) {
      Navigate("/auth");
    }
  }, [Navigate, user]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(async () => {
    setIsLoading(true);
    try {
      setIsLoading(() => true);
      // const response = await getAllCourseData();
      const placementData = await getPlacementData();
      const internshipData = await getInternshipData();

      let temp1 = placementData.data.data;
      let temp2 = internshipData.data.data;

      setBtechPlacement(() => temp1.slice(4, 17));
      setDualdegreePlacement(() => temp1.slice(22, 24));
      setFiveyearPlacement(() => temp1.slice(29, 33));
      setTwoyearmbaPlacement(() => temp1.slice(38, 40));
      setTwoyearmbabaPlacement(() => temp1.slice(45, 47));
      setTwoyearmscPlacement(() => temp1.slice(52, 56));
      setThreeyearmscPlacement(() => temp1.slice(61, 63));
      setTwoyearmtechPlacement(() => temp1.slice(69, 89));

      setAllDataPlacement(() => [
        temp1.slice(4, 17),
        temp1.slice(22, 24),
        temp1.slice(29, 33),
        temp1.slice(38, 40),
        temp1.slice(45, 47),
        temp1.slice(52, 56),
        temp1.slice(61, 63),
        temp1.slice(69, 89),
      ]);
      setDataInternship(() => [
        temp2.slice(4, 18),
        temp2.slice(23, 27),
        temp2.slice(32, 34),
        temp2.slice(39, 41),
        temp2.slice(46, 50),
        temp2.slice(54, 58),
        temp2.slice(64, 84),
      ]);
      setLeftDataInternship(() => [temp2.slice(89, 94), temp2.slice(100, 106)]);
      setIsLoading(() => false);
    } catch (error) {
      setIsLoading(false);
      // Navigate('/badgateway')
    }

    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="company-dashboard-container">
        <div className="course-page">
          <div class="ug-pg d-flex m-0 justify-content-start bg-transparent">
            <div>
              <h1 className="ug-pg-h1 prog-hover">
                COURSES
                <span className="ug-pg-span">
                  <b>
                    List of programs and courses offered by IIT(ISM) Dhanbad
                  </b>
                </span>
              </h1>
            </div>
          </div>

          <Box
            sx={{ width: "100%", typography: "body1" }}
            className="box-container"
          >
            <TabContext value={value}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className="box-head"
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="INTERNSHIP" value="1" />
                  <Tab label="PLACEMENT" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="internship">
                  {dataInternship.map((item, i) => {
                    return (
                      <CourseTable
                        key={i}
                        data={dataInternship[i]}
                        title={courseName_Internship[i]}
                        className="course-table"
                      />
                    );
                  })}
                  {leftDataInternship.map((item, i) => {
                    return (
                      <CourseTable2
                        key={i}
                        data={leftDataInternship[i]}
                        title={courseName2_Internship[i]}
                        className="course-table"
                      />
                    );
                  })}
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="placement">
                  {allDataPlacement.map((item, i) => {
                    return (
                      <CourseTable
                        key={i}
                        data={allDataPlacement[i]}
                        title={courseName_Placement[i]}
                        className="course-table"
                      />
                    );
                  })}
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Courses;
