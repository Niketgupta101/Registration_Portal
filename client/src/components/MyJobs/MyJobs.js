import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { getAllInfForUser } from "../../api";

import "./styles.css";

const MyJobs = () => {
  const [isPopUp, setIsPopUp] = useState(false);

  const Navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem('user'));

  const [Jobs, setJobs] = useState();

  useEffect(async () => {
    if(!user)
    Navigate('/auth');
    let response = await getAllInfForUser(user._id);
    console.log(response);
    setJobs(response.data.infList);
  }, [])
  

  return (
    <>
      <div className="myJobs_container">
        <div className="job_container">
          <div className="job_header">
            <h1>All Jobs</h1>
            <button className="addJob_btn" onClick={() => setIsPopUp(!isPopUp)}>
              <Add style={{ color: "white" }} />
              <h3>Create Job</h3>
            </button>
            {isPopUp && (
              <>
                <div className="job_pop_up">
                  <button onClick={() => Navigate("/create/inf")}>
                    2M/6M Internship
                  </button>
                  <button onClick={() => Navigate("/create/jnf")}>
                    Jobs Vacancy
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="jobFilter">
            <select name="Job Filter" id="">
              <option value="All Jobs">All Jobs</option>
              <option value="Submitted Jobs">Pending Job forms</option>
              <option value="Pending Jobs">Finished Job forms</option>
            </select>
          </div>
          <div className="jobs_content">
            { Jobs.map(job => (<>
              <div className="job_card">
              <div className="badge">
                <h6>Intern</h6>
              </div>
              <div className="card_content">
                <div className="content_heading">
                  <h4>Software Developer</h4>
                </div>
                <div className="content_text">
                  <h5><span>Duration</span>: {job.Intern_Profile.Intern_Duration}</h5>
                  <h5><span>Mode</span>: {job.Intern_Profile.Place_Of_Posting}</h5>
                  <h5><span>Stipend</span>: {job.Salary_Details.Stipend_Per_Month}</h5>
                  <h5><span>Provision for PPO</span>: {job.Salary_Details.PPO_provision_on_performance_basis}</h5>
                  <div style={{ display: 'flex', justifyContent: 'center'}}>
                  <button className="secondary_btn"> <a href={job.previewLink} style={{ textDecoration: "none", color: "inherit" }}> View Job</a> </button>
                  <button className="secondary_btn"> <a href={job.downloadLink} style={{ textDecoration: "none", color: "inherit" }}> Download</a> </button>
                  </div>
                </div>
              </div>
            </div>
            </>)) }
          </div>
        </div>
      </div>
    </>
  );
};

export default MyJobs;
