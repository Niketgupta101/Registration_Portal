import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import {
  createJnf,
  fetchAllJnfForUser,
  removeJnf,
  createInf,
  fetchAllInfForUser,
  removeInf,
  getAllJobsForUser,
  getAllPendingJobsForUser,
} from "../../api";
import Loading from "../Loading/Loading";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "animate.css";

import "./styles.css";
import { Pagination } from "@mui/material";

const MyJobs = () => {
  const [IsLoading, setIsLoading] = useState(false);

  const [Filter, setFilter] = useState("All Forms");
  const Navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [Jobs, setJobs] = useState([]);

  const [jobCount, setJobCount] = useState(0);

  const [reload, setReload] = useState(0);

  const [pageNo, setPageNo] = useState("1");

  const company = JSON.parse(localStorage.getItem("company"));

  useEffect(() => {
    if (
      !user ||
      user.isemailVerified === false ||
      !company ||
      company.length === 0
    ) {
      Navigate("/auth");
    }
  }, [Navigate, user, company]);
  const handlePageChange = (event, value) => {
    setPageNo(value);
  };
  const fetchJobs = async (Filter) => {
    setIsLoading(true);
    try {
      if (Filter === "All Forms") {
        let response = await getAllJobsForUser(12, pageNo);

        setJobs(response.data.jobs);
        setJobCount(response?.data?.count);
      } else if (Filter === "Internships") {
        let response = await fetchAllInfForUser(12, pageNo);
        setJobs(response.data.jobs);
        setJobCount(response?.data?.count);
      } else if (Filter === "Jobs") {
        let response = await fetchAllJnfForUser(12, pageNo);
        setJobs(response.data.jobs);
        setJobCount(response?.data?.count);
      } else if (Filter === "Pending Forms") {
        let response = await getAllPendingJobsForUser(12, pageNo);
        setJobs(response.data.jobs);
        setJobCount(response?.data?.count);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Navigate("/badgateway");
    }
  };
  let companyData, primaryHrData;
  if (company && company.length !== 0) {
    companyData = {
      CO_Name_Of_The_Company: company[0]?.name,
      CO_Category: company[0]?.categoryData,
      CO_Sector: company[0]?.sectorData,
      CO_About: company[0]?.about,
      CO_Website: company[0]?.website,
    };
    primaryHrData = {
      PH_Name: company[0]?.primary_hr?.name,
      PH_Email: company[0]?.primary_hr?.emailId,
      PH_Mobile: company[0]?.primary_hr?.contactNo,
    };
  }
  const handleFillInf = async () => {
    try {
      const response = await createInf({
        Company_Overview: { ...companyData },
        Primary_Hr: { ...primaryHrData },
      });

      Navigate(`/create/inf/${response.data.jobId}`);
    } catch (error) {
      Navigate("/badgateway");
    }
  };

  const handleFillJnf = async () => {
    try {
      const response = await createJnf({
        Company_Overview: { ...companyData },
        Primary_Hr: { ...primaryHrData },
      });
      Navigate(`/create/jnf/${response.data.jobId}`);
    } catch (error) {
      Navigate("/badgateway");
    }
  };

  const handleEditJob = async (id, isIntern) => {
    if (isIntern) Navigate(`/create/inf/${id}`);
    else Navigate(`/create/jnf/${id}`);
  };

  const handleDelete = async (deleteId) => {
    try {
      setIsLoading(true);
      if (deleteId[1]) {
        try {
          await removeInf(deleteId[0]);
        } catch (error) {
          setIsLoading(false);
          Navigate("/badgateway");
        }
      } else {
        try {
          await removeJnf(deleteId[0]);
        } catch (error) {
          setIsLoading(false);
          Navigate("/badgateway");
        }
      }

      setReload((prevData) => prevData + 1);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Navigate("/badgateway");
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) fetchJobs(Filter);
    async function filterJobs() {
      try {
        for (let i in Jobs) {
          if (Jobs[i].Company_Overview === undefined) {
            if (Jobs[i].isIntern) {
              await removeInf(Jobs[i]._id);
            } else {
              await removeJnf(Jobs[i]._id);
            }
          }
        }
      } catch (error) {
        Navigate("/badgateway");
      }
    }
    filterJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Filter, pageNo, reload]);

  return (
    <>
      <div className="company-dashboard-container">
        <div className="jumbotron jumbotron-fluid p-2">
          <div
            className="m-2 hero-content-container mx-auto"
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
                Institute of Technology. <br /> Click the suitable option below
                to fill the Notification Form.
              </p>
              <Stack spacing={2} className="pt-5 " direction="column">
                <div className="bt animate__animated animate__fadeInLeft my-1">
                  <Button
                    variant="outlined"
                    style={{
                      maxWidth: "320px",
                      minWidth: "320px",
                      backgroundColor: "white",
                    }}
                    onClick={handleFillInf}
                  >
                    <div className="courses-button">FILL INTERNSHIP FORM</div>
                  </Button>
                </div>
                <div className="bt animate__animated animate__fadeInRight my-2">
                  <Button
                    variant="outlined"
                    style={{
                      maxWidth: "320px",
                      minWidth: "320px",
                      backgroundColor: "white",
                    }}
                    onClick={handleFillJnf}
                  >
                    <div className="courses-button">FILL JOB FORM</div>
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

              <div className="jobFilter my-0 d-flex align-items-end justify-content-end">
                <span style={{ color: "grey" }} className="px-2 mt-1">
                  <FaFilter size={28} />
                </span>
                <select
                  name="Job Filter"
                  id=""
                  className="filter_select"
                  onChange={(e) => setFilter(e.target.value)}
                  style={{ height: "35px" }}
                >
                  <option value="All Forms">All Forms</option>
                  <option value="Internships">Internships</option>
                  <option value="Jobs">Jobs</option>
                  <option value="Pending Forms">Pending Forms</option>
                </select>
              </div>
            </div>

            <div className="jobs_content">
              {Jobs &&
                Jobs.map((job) => (
                  <div className="job_card" key={job._id}>
                    <div
                      className="badge"
                      style={{ backgroundColor: !job?.isIntern && "red" }}
                    >
                      <h6>{job?.isIntern ? "Intern" : "JOB"}</h6>
                    </div>

                    <div className="card_content">
                      <div className="content_heading">
                        <h4>{job?.Company_Overview?.CO_Name_Of_The_Company}</h4>
                      </div>
                      <div
                        className="content_text"
                        style={{ fontWeight: "500" }}
                      >
                        {job.isIntern && (
                          <h5>
                            <span>Duration: </span>
                            {job?.Intern_Profile?.IP_Internship_Duration}
                          </h5>
                        )}
                        {!job.isIntern && (
                          <h5>
                            <span>Designation: </span>
                            {job?.Job_Details?.JD_Job_Designation}
                          </h5>
                        )}
                        <h5>
                          {job.isIntern ? (
                            <>
                              <span>Mode</span>:{" "}
                              {job?.Intern_Profile?.IP_Mode_Of_Internship}
                            </>
                          ) : (
                            <>
                              <span>Place of posting</span>:{" "}
                              {job?.Job_Details?.JD_Place_Of_Posting}
                            </>
                          )}
                        </h5>
                        <h5>
                          {job.isIntern ? (
                            <>
                              <span>Stipend</span>:{" "}
                              {job?.Stipend_Details?.SD_Salary_Per_Month}
                            </>
                          ) : (
                            <>
                              <span>CTC</span>:{" "}
                              {job?.Salary_Details?.SD_CTC_In_LPA}
                            </>
                          )}
                        </h5>

                        {job.status === "incomplete" ? (
                          <h5>
                            <span>Form Status:</span>: Incomplete
                          </h5>
                        ) : (
                          <h5>
                            <span>Submitted On:</span>:{" "}
                            {job.updatedAt.slice(8, 10) +
                              "/" +
                              job.updatedAt.slice(5, 7) +
                              "/" +
                              job.updatedAt.slice(0, 4)}
                          </h5>
                        )}
                        {job.status === "incomplete" ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              className="secondary_btn"
                              onClick={() =>
                                handleEditJob(job._id, job.isIntern)
                              }
                            >
                              Continue
                            </button>
                            <button
                              className="secondary_btn secondary_btn_delete"
                              onClick={() =>
                                handleDelete([job._id, job.isIntern])
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button className="secondary_btn">
                              <a
                                href={job.adminPreviewLink}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                View Job
                              </a>
                            </button>
                            <button className="secondary_btn">
                              <a
                                href={job.adminDownloadLink}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                Download
                              </a>
                            </button>
                            {/* {job.progress === "incomplete" && (
                            <div className="delete-job">
                              <button onClick={handleDeleteJnf(job._id)}>
                                delete
                              </button>
                            </div>
                          )} */}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Stack spacing={1}>
          <Pagination
            count={parseInt((jobCount + 12) / 12)}
            color="primary"
            style={{ margin: "3rem auto" }}
            onChange={handlePageChange}
          />
        </Stack>
      </div>

      {IsLoading && <Loading />}
    </>
  );
};

export default MyJobs;
