import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
<<<<<<< HEAD
import { Button } from '@mui/material';
=======
import { Button } from '@mui/material'; 
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
import { FaSearch } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Loading from '../../Loading/Loading';
import './../Jobs/styles.css';
import { getAllInf, getAllJobs, searchInfByPattern } from '../../../api/index';

const AllInf = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  const [pageNo, setPageNo] = useState('1');

  const [search, setSearch] = useState();

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(async () => {
    setIsLoading(true);
    const response = await getAllInf(pageNo);
    setIsLoading(false);

    setJobs(response.data.jobs);
  }, [pageNo]);

  useEffect(() => {
    async function fetchINFs() {
      // console.log({ search });
      var response;
      if (!search) {
        response = await getAllInf(pageNo);
      } else {
        response = await searchInfByPattern(search);
      }
      // console.log(response);
      setJobs(response.data.jobs);
    }
    fetchINFs();
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
<<<<<<< HEAD
                key={job._id}
=======
                key={job.data._id}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                style={{ display: 'inline-block' }}
              >
                <div
                  className='badge'
<<<<<<< HEAD
                  style={{ backgroundColor: !job.isIntern && 'red' }}
                >
                  <h6>{job.isIntern ? 'Intern' : 'FTE'}</h6>
                </div>
                <div className='card_content'>
                  <div className='content_heading'>
                    <h4>{job?.Company_Overview?.Name_Of_The_Company}</h4>
=======
                  style={{ backgroundColor: !job.data.isIntern && 'red' }}
                >
                  <h6>{job.data.isIntern ? 'Intern' : 'FTE'}</h6>
                </div>
                <div className='card_content'>
                  <div className='content_heading'>
                    <h4>{job.data?.Company_Overview?.Name_Of_The_Company}</h4>
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                  </div>
                  <div className='content_text'>
                    <h5>
                      <span>Sector</span>:{' '}
<<<<<<< HEAD
                      {job?.Company_Overview?.Category_Or_Sector}
                    </h5>
                    <h5>
                      {job.isIntern ? (
                        <>
                          <span>Mode</span>:{' '}
                          {job?.Intern_Profile?.Mode_Of_Internship}
=======
                      {job.data?.Company_Overview?.Category_Or_Sector}
                    </h5>
                    <h5>
                      {job.data.isIntern ? (
                        <>
                          <span>Mode</span>:{' '}
                          {job.data?.Intern_Profile?.Mode_Of_Internship}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                        </>
                      ) : (
                        <>
                          <span>Place of posting</span>:{' '}
<<<<<<< HEAD
                          {job?.Job_Details?.Place_Of_Posting}
=======
                          {job.data?.Job_Details?.Place_Of_Posting}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                        </>
                      )}
                    </h5>
                    <h5>
<<<<<<< HEAD
                      {job.isIntern ? (
                        <>
                          <span>Stipend</span>:{' '}
                          {job?.Salary_Details?.Salary_Per_Month}
                        </>
                      ) : (
                        <>
                          <span>CTC</span>: {job?.Salary_Details?.CTC}
=======
                      {job.data.isIntern ? (
                        <>
                          <span>Stipend</span>:{' '}
                          {job.data?.Salary_Details?.Salary_Per_Month}
                        </>
                      ) : (
                        <>
                          <span>CTC</span>: {job.data?.Salary_Details?.CTC}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                        </>
                      )}
                    </h5>
                    <h5>
                      <span>Submitted On:</span>:{' '}
<<<<<<< HEAD
                      {job.updatedAt.slice(8, 10) +
                        '/' +
                        job.updatedAt.slice(5, 7) +
                        '/' +
                        job.updatedAt.slice(0, 4)}
=======
                      {job.data.updatedAt.slice(8, 10) +
                        '/' +
                        job.data.updatedAt.slice(5, 7) +
                        '/' +
                        job.data.updatedAt.slice(0, 4)}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
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
<<<<<<< HEAD
                            href={job.previewLink}
=======
                            href={job.data.previewLink}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            View Job
                          </a>
                        </button>
                      </div>
                      <div className='my-2 ms-3 ps-2'>
                        <Dropdown
<<<<<<< HEAD
                          isOpen={dropdownOpen === job._id}
                          toggle={handletoggle(job._id)}
=======
                          isOpen={dropdownOpen === job.data._id}
                          toggle={handletoggle(job.data._id)}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                        >
                          <DropdownToggle caret>Download</DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>
                              <a
<<<<<<< HEAD
                                href={job.downloadLink}
=======
                                href={job.data.downloadLink}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
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
<<<<<<< HEAD
                                href={job.downloadLink}
=======
                                href={job.data.downloadLink}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
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
<<<<<<< HEAD
                        href={job.downloadLink}
=======
                        href={job.data.downloadLink}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
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
            count={20}
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
