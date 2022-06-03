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
import './styles.css';
import {
  getAllInf,
  getAllJnf,
  getAllJobs,
  searchJnfByPattern,
} from '../../../api/index';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  const [pageNo, setPageNo] = useState('1');

  const [search, setSearch] = useState();

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(async () => {
    setIsLoading(true);
    const response = await getAllJnf(pageNo);
    setIsLoading(false);

    setJobs(response.data.jobs);
  }, [pageNo]);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const handletoggle = (id) => () => {
    if (dropdownOpen === id) {
      setDropdownOpen(() => '');
    } else {
      setDropdownOpen(() => id);
    }
  };

  useEffect(() => {
    async function fetchJNFs() {
      var response;
      if (!search) {
        response = await getAllInf(pageNo);
      } else {
        response = await searchJnfByPattern(search);
      }
      setJobs(response.data.jobs);
    }
    fetchJNFs();
  }, [search]);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  return (
    <>
      <div className='admin_company'>
        <div className='admin_company_header d-flex  justify-content-between'>
          <h1>All JNF</h1>
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
                <div className='card_content'>
                  <div className='content_heading'>
                    <h4>{job?.Company_Overview?.Name_Of_The_Company}</h4>
                  </div>
                  <div className='content_text'>
                    <h5>
                      <span>Designation: </span>:{' '}
                      {job?.Job_Details?.Job_Designation}
                    </h5>
                    <h5>
                      {job.isIntern ? (
                        <>
                          <span>Mode</span>:{' '}
                          {job?.Intern_Profile?.Mode_Of_Internship}
                        </>
                      ) : (
                        <>
                          <span>Place of posting</span>:{' '}
                          {job?.Job_Details?.Place_Of_Posting}
                        </>
                      )}
                    </h5>
                    <h5>
                      {job.isIntern ? (
                        <>
                          <span>Stipend</span>:{' '}
                          {job?.Salary_Details?.Salary_Per_Month}
                        </>
                      ) : (
                        <>
                          <span>CTC</span>: {job?.Salary_Details?.CTC}
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

                    <div
                      className='d-flex align-items-center'
                      style={{
                        position: 'absolute',
                      }}
                    >
                      <div>
                        <button className='secondary_btn py-1'>
                          <a
                            href={job.previewLink}
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
                                href={job.studentDownload}
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
                                href={job.downloadLink}
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
                      {/* <button className="secondary_btn">
                      {" "}
                      <a
                        href={job.downloadLink}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {" "}
                        Download
                      </a>{" "}
                    </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
      {isLoading && <Loading />}
    </>
  );
};

export default Jobs;
