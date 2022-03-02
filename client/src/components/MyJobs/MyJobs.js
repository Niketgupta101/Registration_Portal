import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { getAllInfForUser, getAllJobs, getAllJnfForUser, getAllPendingJobsForUser } from "../../api";
import Loading from "../Loading/Loading";

import "./styles.css";

const MyJobs = () => {
  const [IsLoading, setIsLoading] = useState(false)
  const [isPopUp, setIsPopUp] = useState(false);

  const [Filter, setFilter] = useState("All Jobs");

  const Navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user"));

  const [Jobs, setJobs] = useState([]);

  useEffect(async () => {
    if (!user) Navigate("/auth");
    setIsLoading(true);
    if (Filter === "All Jobs") {
      let response = await getAllJobs();
      console.log(response);
      setJobs(response.data.jobs);
    } 
    else if (Filter === "Internships") {
      let response = await getAllInfForUser(user._id);
      console.log(response);
      setJobs(response.data.infList.infId);
    }
    else if (Filter === "FTE's") {
      let response = await getAllJnfForUser(user._id);
      console.log(response);
      setJobs(response.data.jnfList.jnfId);
    }
    else if (Filter === "Pending Job Forms") {
      let response = await getAllPendingJobsForUser();
      console.log(response);
      setJobs(response.data.jobs);
    }
    setIsLoading(false);
  }, [Filter]);
  console.log(Jobs);

  return (
    <>
      <div className="myJobs_container">
        <div className="job_container">
          <div className="job_header">
            <h1>{Filter}</h1>
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
            <select name="Job Filter" id="" onChange={(e) => setFilter(e.target.value)}>
              <option value="All Jobs" >
                All Jobs
              </option>
              <option
                value="Internships"
              >
                Internships
              </option>
              <option value="FTE's">
                FTE's
              </option>
              <option
                value="Pending Job Forms"
              >
                Pending Jobs Forms
              </option>
            </select>
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
                      <h4>Software Developer</h4>
                    </div>
                    <div className="content_text" style={{ fontWeight: '500'}}>
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
                      {Filter === 'Pending Job Form' ? (<div
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
                      </div>) : (<div
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
                      </div>)}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
      {IsLoading && <Loading />}
    </>
  );
};

export default MyJobs;
