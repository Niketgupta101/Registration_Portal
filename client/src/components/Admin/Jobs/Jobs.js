import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./styles.css";
import { getAllInf, getAllJobs } from "../../../api/index";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const Navigate = useNavigate();

  useEffect(async () => {
    const response = await getAllJobs();
    console.log(response);
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
                      <span>Duration</span>: 2-3 months
                    </h5>
                    <h5>
                      <span>Mode</span>: Virtual
                    </h5>
                    <h5>
                      <span>Stipend</span>: 10-20k
                    </h5>
                    <h5>
                      <span>Provision for PPO</span>: Yes
                    </h5>
                    <button className="secondary_btn" onClick={() =>  (console.log('yes'),Navigate(`/admin/jobs/job/${job.infId._id}`))}>View more</button>
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
