import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Button } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Loading from '../../Loading/Loading';
import './../Jobs/styles.css';
import { fetchAllInf, searchInf } from '../../../api/index';

const AllInf = () => {
  const [jobs, setJobs] = useState([]);
  const [jobCount, setJobCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [pageNo, setPageNo] = useState('1');

  const [search, setSearch] = useState();
  const Navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.isemailVerified === false || user.role !== 'Admin') {
      Navigate('/auth');
    }
  }, [Navigate, user]);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetchAllInf(12, pageNo);
      setIsLoading(false);

      setJobs(response.data.jobs);
      setJobCount(response?.data?.count);
    } catch (error) {
      setIsLoading(false);
      Navigate('/badgateway');
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [pageNo]);

  useEffect(() => {
    async function fetchINFs() {
      var response;
      if (!search) {
        try {
          response = await fetchAllInf(12, pageNo);
        } catch (error) {
          Navigate('/badgateway');
        }
      } else {
        try {
          response = await searchInf(search, 12, pageNo);
        } catch (error) {
          Navigate('/badgateway');
        }
      }
      setJobs(response.data.jobs);
      setJobCount(response?.data?.count);
    }
    fetchINFs();
    // eslint-disable-next-line
  }, [search]);

  const [dropdownOpen, setDropdownOpen] = useState('');
  const handletoggle = (id) => () => {
    if (dropdownOpen === id) {
      setDropdownOpen(() => '');
    } else {
      setDropdownOpen(() => id);
    }
  };

  return (
    <>
      <div className='admin_company'>
        <div className='admin_company_header d-flex  justify-content-between'>
          <h1>All INF</h1>
          <div>
            <div className='input-group d-flex'>
              <div className='form-outline'>
                <input
                  type='search'
                  id='form1'
                  className='form-control'
                  placeholder='Type Company Name'
                  name='search'
                  value={search}
                  onChange={handleOnChange}
                />
              </div>
              <Button variant='contained'>
                <FaSearch />
              </Button>
            </div>
          </div>
        </div>

        <div className='job_items'>
          {jobs &&
            jobs.map((job) => (
              <div
                className='job_card'
                key={job._id}
                style={{ display: 'inline-block' }}
              >
                <div
                  className='badge'
                  style={{ backgroundColor: !job.isIntern && 'red' }}
                >
                  <h6>{job.isIntern ? 'Intern' : 'FTE'}</h6>
                </div>
                <div className='card_content  ps-2'>
                  <div className='content_heading'>
                    <h4>{job?.Company_Overview?.CO_Name_Of_The_Company}</h4>
                  </div>
                  <div className='content_text'>
                    <h5>
                      <span>Duration: </span>
                      {job?.Intern_Profile?.IP_Internship_Duration}
                    </h5>
                    <h5>
                      <span>Designation: </span>
                      {job?.Intern_Profile?.IP_Job_Designation}
                    </h5>
                    <h5>
                      {job.isIntern ? (
                        <>
                          <span>Stipend</span>:{' '}
                          {job?.Stipend_Details?.SD_Salary_Per_Month}
                        </>
                      ) : (
                        <>
                          <span>CTC</span>: {job?.Salary_Details?.SD_CTC}
                        </>
                      )}
                    </h5>
                    <h5>
                      <span>Submitted On:</span>:{' '}
                      {job.updatedAt.slice(8, 10) +
                        '/' +
                        job.updatedAt.slice(5, 7) +
                        '/' +
                        job.updatedAt.slice(0, 4)}
                    </h5>

                    <div className='d-flex align-items-center'>
                      <div>
                        <button className='secondary_btn py-1'>
                          <a
                            href={job.adminPreviewLink}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            View Job
                          </a>
                        </button>
                      </div>
                      <div className='my-2 ms-3 ps-2'>
                        <Dropdown
                          isOpen={dropdownOpen === job._id}
                          toggle={handletoggle(job._id)}
                        >
                          <DropdownToggle caret>Download</DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>
                              <a
                                href={job.studentDownloadLink}
                                style={{
                                  textDecoration: 'none',
                                  color: 'inherit',
                                }}
                              >
                                For Student
                              </a>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                              <a
                                href={job.adminDownloadLink}
                                style={{
                                  textDecoration: 'none',
                                  color: 'inherit',
                                }}
                              >
                                For Admin
                              </a>
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Stack spacing={1}>
          <Pagination
            count={parseInt((jobCount + 12) / 12)}
            color='primary'
            style={{ margin: '3rem auto' }}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default AllInf;
