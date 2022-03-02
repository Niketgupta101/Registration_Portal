import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./styles.css";
import { getAllInf, getAllJobs } from "../../../api/index";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  useEffect(async () => {
    setIsLoading(true);
    const response = await getAllJobs();
    console.log(response);
    setIsLoading(false);

    setJobs(response.data.jobs);
  }, []);
  console.log(jobs);

  return (
    <>
      <div className="admin_company">
        <div className="admin_company_header">
          <h1>Jobs</h1>
        </div>
        <div className="job_items">
          {jobs && jobs.map((job) => (
              <div className="job_card" key={job._id} style={{ display: "inline-block" }}>
                <div className="badge" style={{ background: "red" }}>
                  <h6>Job</h6>
                </div>
                <div className="card_content">
                  <div className="content_heading">
                    <h4>Software Developer</h4>
                  </div>
                  <div className="content_text">
                  <h5>
                        <span>Company</span>:{" "}
                        {job?.Company_Overview?.Name_Of_The_Company}
                      </h5>
                      <h5>
                        <span>Mode</span>:{" "}
                        {job?.Intern_Profile?.Mode_Of_Internship}
                      </h5>
                      <h5>
                        <span>Stipend</span>:{" "}
                        {job.Salary_Details.Salary_Per_Month}
                      </h5>
                      <h5>
                        <span>Provision for PPO</span>:{" "}
                        {job.Salary_Details.PPO_provision_on_performance_basis}
                      </h5>
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
                  </div>
                </div>
              </div>
          ))}
        </div>
        <Stack spacing={1}>
          <Pagination
            count={20}
            color="primary"
            style={{ margin: "3rem auto" }}
          />
        </Stack>
      </div>
    </>
  );
};

export default Jobs;
