import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { FaFilter } from 'react-icons/fa';

import { useNavigate } from "react-router-dom";
import {
  getAllInfForUser,
  getAllJnfForUser,
  getAllPendingJobsForUser,
  getAllJobsForUser,
} from "../../api";
import Loading from "../Loading/Loading";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "animate.css";

import "./styles.css";

const MyJobs = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);

  const [Filter, setFilter] = useState("All Jobs");

  const Navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [Jobs, setJobs] = useState([]);

  useEffect(async () => {
    if (!user) Navigate("/auth");
    else {
      setUser(JSON.parse(localStorage.getItem("user")));
      setIsLoading(true);
      if (Filter === "All Jobs") {
        let response = await getAllJobsForUser();
        setJobs(response.data.jobs);
      } else if (Filter === "Internships") {
        let response = await getAllInfForUser(user._id);
        setJobs(response.data.jobs);
      } else if (Filter === "FTE's") {
        let response = await getAllJnfForUser(user._id);
        setJobs(response.data.jobs);
      } else if (Filter === "Pending Job Forms") {
        let response = await getAllPendingJobsForUser();
        setJobs(response.data.jobs);
      }
      setIsLoading(false);
    }
  }, [Filter]);

  return (
    <>
      <div className="company-dashboard-container">
        <div className="jumbotron jumbotron-fluid p-2">
          <div
            className="pt-5 m-2 hero-content-container mx-auto"
            style={{ maxWidth: 1000 }}
          >
            <div className="p-2 pt-5 container">
              <h1
                className="display-1 fw-bold pt-5 animate__animated animate__fadeInDownBig"
                style={{ letterSpacing: -3 }}
              >
                Career Development Center
              </h1>
              <p className="main-heading-secondary animate__animated animate__fadeInUpBig">
                Welcome to the Career Development Centre Portal of Indian
                Institute of Technology. <br /> Click the suitable option below to
                fill the Notification Form.
              </p>
              <Stack
                spacing={2}
                className="pt-5 d-flex justify-content-center"
                direction="row"
              >

                <div className="bt animate__animated animate__fadeInLeft">
                  <Button
                    variant="outlined"
                    onClick={() => Navigate("/create/inf")}
                  >
                    <div className="courses-button">FILL INF</div>
                  </Button>
                </div>
                <div className="bt animate__animated animate__fadeInRight">
                  <Button
                    variant="outlined"
                    onClick={() => Navigate("/create/jnf")}
                  >
                    <div className="courses-button">FILL JNF</div>
                  </Button>
                </div>

              </Stack>
            </div>
          </div>
        </div>
        <div className="myJobs_container">
          <div className="job_container">
            <div className="job_header">
              <h1>{Filter}</h1>

              <div className="jobFilter">
                <span style={{ color: "grey" }} className="px-2 mt-1"><FaFilter size={28} /></span>
                <select
                  name="Job Filter"
                  id=""
                  className="filter_select"
                  onChange={(e) => setFilter(e.target.value)}
                >

                  <option value="All Jobs">All Jobs</option>
                  <option value="Internships">Internships</option>
                  <option value="FTE's">FTE's</option>
                  <option value="Pending Job Forms">Pending Jobs Forms</option>
                </select>
              </div>
            </div>

            <div className="jobs_content">
              {Jobs.map((job) => (
                <div className="job_card" key={job._id}>
                  <div
                    className="badge"
                    style={{ backgroundColor: !job.isIntern && "red" }}
                  >
                    <h6>{job.isIntern ? "Intern" : "FTE"}</h6>
                  </div>
                  <div className="card_content">
                    <div className="content_heading">
                      <h4>{job?.Company_Overview?.Name_Of_The_Company}</h4>
                    </div>
                    <div className="content_text" style={{ fontWeight: "500" }}>
                      <h5>
                        <span>Position</span>:{" "}
                        Software Developer

                      </h5>
                      <h5>
                        {job.isIntern ? (
                          <>
                            <span>Mode</span>:{" "}
                            {job?.Intern_Profile?.Mode_Of_Internship}
                          </>
                        ) : (
                          <>
                            <span>Place of posting</span>:{" "}
                            {job?.Job_Details?.Place_Of_Posting}
                          </>
                        )}
                      </h5>
                      <h5>
                        {job.isIntern ? (
                          <>
                            <span>Stipend</span>:{" "}
                            {job.Salary_Details.Salary_Per_Month}
                          </>
                        ) : (
                          <>
                            <span>CTC</span>: {job.Salary_Details.CTC}
                          </>
                        )}
                      </h5>
                      {job.isIntern && (
                        <h5>
                          <span>Provision for PPO</span>:{" "}
                          {job.Salary_Details.PPO_provision_on_performance_basis}
                        </h5>
                      )}
                      {Filter === "Pending Job Form" ? (
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <button className="secondary_btn">
                            {" "}
                            <a
                              href={job.previewLink}
                              style={{ textDecoration: "none", color: "inherit" }}
                            >
                              {" "}
                              Continue
                            </a>{" "}
                          </button>
                        </div>
                      ) : (
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <button className="secondary_btn">
                            {" "}
                            <a
                              href={job.previewLink}
                              style={{ textDecoration: "none", color: "inherit" }}
                            >
                              {" "}
                              View Job
                            </a>{" "}
                          </button>
                          <button className="secondary_btn">
                            {" "}
                            <a
                              href={job.downloadLink}
                              style={{ textDecoration: "none", color: "inherit" }}
                            >
                              {" "}
                              Download
                            </a>{" "}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {IsLoading && <Loading />}
    </>
  );
};

export default MyJobs;
