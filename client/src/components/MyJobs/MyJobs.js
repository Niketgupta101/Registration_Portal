import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import {
  getAllInfForUser,
  getAllJnfForUser,
  getAllPendingJobsForUser,
  getAllJobsForUser,
  createNewInf,
  createNewJnf,
  deleteInfById,
  deleteJnfById,
} from '../../api';
import Loading from '../Loading/Loading';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import 'animate.css';

import './styles.css';
import { Pagination } from '@mui/material';

const MyJobs = () => {
  const [IsLoading, setIsLoading] = useState(false);

  const [Filter, setFilter] = useState('All Forms');
  const Navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const [Jobs, setJobs] = useState([]);

  const [reload, setReload] = useState(0);

  const [pageNo, setPageNo] = useState('1');

  const company = JSON.parse(localStorage.getItem('company'));

  useEffect(() => {
    if (
      !user ||
      user.isemailVerified === false ||
      !company ||
      company.length === 0
    ) {
      Navigate('/auth');
    }
  }, [Navigate, user, company]);
  console.log(company);
  const handlePageChange = (event, value) => {
    setPageNo(value);
  };
  const [toReload, setToReload] = useState(true);
  const fetchJobs = async (Filter) => {
    setIsLoading(true);
    try {
      if (Filter === 'All Forms') {
        let response = await getAllJobsForUser(pageNo);
        setJobs(response.data.jobs);
      } else if (Filter === 'Internships') {
        let response = await getAllInfForUser(user._id, pageNo);
        setJobs(response.data.jobs);
      } else if (Filter === 'Jobs') {
        let response = await getAllJnfForUser(user._id, pageNo);
        setJobs(response.data.jobs);
      } else if (Filter === 'Pending Forms') {
        let response = await getAllPendingJobsForUser(pageNo);
        setJobs(response.data.jobs);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (toReload) {
        console.log('reload');
        setToReload((prevState) => !prevState);
      } else {
        console.log(error);
      }
    }
  };

  let companyData;
  if (company && company.length !== 0) {
    companyData = {
      Name_Of_The_Company: company[0]?.name,
      Category_Or_Sector: '',
      Category: company[0]?.categoryData,
      Sector: company[0]?.sectorData,
      About: company[0]?.about,
      Website: company[0]?.website,
    };
  }
  const handleFillInf = async () => {
    const response = await createNewInf({
      Company_Overview: { ...companyData },
    });

    Navigate(`/create/inf/${response.data.newInf._id}`);
  };

  const handleFillJnf = async () => {
    const response = await createNewJnf({
      Company_Overview: { ...companyData },
    });

    Navigate(`/create/jnf/${response.data.newJnf._id}`);
  };

  const handleEditJob = async (id, isIntern) => {
    if (isIntern) Navigate(`/create/inf/${id}`);
    else Navigate(`/create/jnf/${id}`);
  };

  const handleDelete = async (deleteId) => {
    console.log(deleteId);
    try {
      setIsLoading(true);
      if (deleteId[1]) {
        await deleteInfById(deleteId[0]);
      } else {
        await deleteJnfById(deleteId[0]);
      }
      // let newJobList = Jobs.filter((job) => job._id !== deleteId[0]);

      setReload((prevData) => prevData + 1);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('token'))) fetchJobs(Filter);
    async function filterJobs() {
      for (let i in Jobs) {
        if (Jobs[i].data.Company_Overview === undefined) {
          console.log(i);
          if (Jobs[i].data.isIntern) {
            await deleteInfById(Jobs[i].data._id);
          } else {
            await deleteJnfById(Jobs[i].data._id);
          }
        }
      }
    }
    filterJobs();
  }, [Filter, pageNo, reload]);

  console.log({ Jobs });

  return (
    <>
      <div className='company-dashboard-container'>
        <div className='jumbotron jumbotron-fluid p-2'>
          <div
            className='m-2 hero-content-container mx-auto'
            style={{ maxWidth: 1000 }}
          >
            <div className='p-2 pt-5 container'>
              <h1
                className='display-1 fw-bold pt-5 animate__animated animate__fadeInDownBig'
                style={{ letterSpacing: -3 }}
              >
                Career Development Center
              </h1>
              <p className='main-heading-secondary animate__animated animate__fadeInUpBig'>
                Welcome to the Career Development Centre Portal of Indian
                Institute of Technology. <br /> Click the suitable option below
                to fill the Notification Form.
              </p>
              <Stack spacing={2} className='pt-5 ' direction='column'>
                <div className='bt animate__animated animate__fadeInLeft my-1'>
                  <Button
                    variant='outlined'
                    style={{
                      maxWidth: '320px',
                      minWidth: '320px',
                      backgroundColor: 'white',
                    }}
                    onClick={handleFillInf}
                  >
                    <div className='courses-button'>FILL INTERNSHIP FORM</div>
                  </Button>
                </div>
                <div className='bt animate__animated animate__fadeInRight my-2'>
                  <Button
                    variant='outlined'
                    style={{
                      maxWidth: '320px',
                      minWidth: '320px',
                      backgroundColor: 'white',
                    }}
                    onClick={handleFillJnf}
                  >
                    <div className='courses-button'>FILL JOB FORM</div>
                  </Button>
                </div>
              </Stack>
            </div>
          </div>
        </div>
        <div className='myJobs_container'>
          <div className='job_container'>
            <div className='job_header'>
              <h1>{Filter}</h1>

              <div className='jobFilter my-0 d-flex align-items-end justify-content-end'>
                <span style={{ color: 'grey' }} className='px-2 mt-1'>
                  <FaFilter size={28} />
                </span>
                <select
                  name='Job Filter'
                  id=''
                  className='filter_select'
                  onChange={(e) => setFilter(e.target.value)}
                  style={{ height: '35px' }}
                >
                  <option value='All Forms'>All Forms</option>
                  <option value='Internships'>Internships</option>
                  <option value='Jobs'>Jobs</option>
                  <option value='Pending Forms'>Pending Forms</option>
                </select>
              </div>
            </div>

            <div className='jobs_content'>
              {Jobs &&
                Jobs.map((job) => (
                  <div className='job_card' key={job._id}>
                    {/* {console.log(job)} */}
                    <div
                      className='badge'
                      style={{ backgroundColor: !job.data?.isIntern && 'red' }}
                    >
                      <h6>{job.data?.isIntern ? 'Intern' : 'JOB'}</h6>
                    </div>

                    <div className='card_content'>
                      <div className='content_heading'>
                        <h4>
                          {job.data?.Company_Overview?.Name_Of_The_Company}
                        </h4>
                      </div>
                      <div
                        className='content_text'
                        style={{ fontWeight: '500' }}
                      >
                        <h5>
                          <span>Designation: </span>:{' '}
                          {job.data?.isIntern
                            ? job.data?.Intern_Profile?.Job_Designation
                            : job.data?.Job_Details?.Job_Designation}
                        </h5>
                        <h5>
                          {job.data.isIntern ? (
                            <>
                              <span>Mode</span>:{' '}
                              {job.data?.Intern_Profile?.Mode_Of_Internship}
                            </>
                          ) : (
                            <>
                              <span>Place of posting</span>:{' '}
                              {job.data?.Job_Details?.Place_Of_Posting}
                            </>
                          )}
                        </h5>
                        <h5>
                          {job.data.isIntern ? (
                            <>
                              <span>Stipend</span>:{' '}
                              {job.data?.Salary_Details?.Salary_Per_Month}
                            </>
                          ) : (
                            <>
                              <span>CTC</span>: {job?.data?.Salary_Details?.CTC}
                            </>
                          )}
                        </h5>
                        {job.progress === 'incomplete' ? (
                          <h5>
                            <span>Form Status:</span>: Incomplete
                          </h5>
                        ) : (
                          <h5>
                            <span>Submitted On:</span>:{' '}
                            {job.data.updatedAt.slice(8, 10) +
                              '/' +
                              job.data.updatedAt.slice(5, 7) +
                              '/' +
                              job.data.updatedAt.slice(0, 4)}
                          </h5>
                        )}
                        {job.progress === 'incomplete' ? (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <button
                              className='secondary_btn'
                              onClick={() =>
                                handleEditJob(job.data._id, job.data.isIntern)
                              }
                            >
                              Continue
                            </button>
                            <button
                              className='secondary_btn secondary_btn_delete'
                              onClick={() =>
                                handleDelete([job.data._id, job.data.isIntern])
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ) : (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <button className='secondary_btn'>
                              <a
                                href={job.data.previewLink}
                                style={{
                                  textDecoration: 'none',
                                  color: 'inherit',
                                }}
                              >
                                View Job
                              </a>
                            </button>
                            <button className='secondary_btn'>
                              <a
                                href={job.data.downloadLink}
                                style={{
                                  textDecoration: 'none',
                                  color: 'inherit',
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
            count={10}
            color='primary'
            style={{ margin: '3rem auto' }}
            onChange={handlePageChange}
          />
        </Stack>
      </div>

      {IsLoading && <Loading />}
    </>
  );
};

export default MyJobs;
