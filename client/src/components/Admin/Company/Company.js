import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { Pagination, Stack, Button } from '@mui/material';
import { getAllCompanyDetails, searchCompanyByPattern } from '../../../api';
import Loading from '../../Loading/Loading';
import { FaSearch } from 'react-icons/fa';

const Company = () => {
  const Navigate = useNavigate();

  const [IsLoading, setIsLoading] = useState(false);
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [Companies, setCompanies] = useState();
  const [CompanyCount, setCompanyCount] = useState(0);
  const [search, setSearch] = useState();

  const [pageNo, setPageNo] = useState('1');

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

  async function fetchAllCompanies() {
    setIsLoading(true);

    try {
      const response = await getAllCompanyDetails(pageNo);
      setIsLoading(false);
      setCompanies(response.data.companyList);
      setCompanyCount(response?.data?.companyCount);
    } catch (error) {
      setIsLoading(false);
      Navigate('/badgateway');
    }
  }

  useEffect(() => {
    fetchAllCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchCompanies() {
      var response;
      if (!search) {
        try {
          response = await getAllCompanyDetails(pageNo);
        } catch (error) {
          Navigate('/badgateway');
        }
      } else {
        try {
          response = await searchCompanyByPattern(search);
        } catch (error) {
          Navigate('/badgateway');
        }
      }
      setCompanies(response.data.companyList);
      setCompanyCount(response.data.companyCount);
    }
    fetchCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, pageNo]);

  return (
    <>
      <div className='admin_company'>
        <div className='admin_company_header d-flex justify-content-between'>
          <h1 className='flex-grow-1'>Companies</h1>

          <div>
            <div className='input-group d-flex'>
              <div className='form-outline d-flex justify-content-end'>
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
              <Button variant='outlined'>
                <FaSearch />
              </Button>
            </div>
          </div>
        </div>
        <small className=' h6 admin_company_header_small'>
          {' '}
          Total Registered Companies: {CompanyCount}
        </small>

        <div className='company_items'>
          {Companies &&
            Companies.map((company) => (
              <div className='job_card job_card1'>
                <div id='companyname'>{company.name}</div>
                <div className='job-card-subheading'>
                  <span className='head'>Category : </span>
                  {company.categoryData}
                </div>
                <div className='job-card-subheading'>
                  <span className='head'>Sector : </span>
                  {company.sectorData}
                </div>
                <div className='job-card-subheading'>
                  <span className='head'>Website : </span>
                  {company.website}
                </div>

                <div>
                  <div className='company-hr-heading'>Primary HR. Details</div>
                  <div className='company-hr-details'>
                    <div>
                      <span className='head'>Name :</span>{' '}
                      {company.primary_hr.name}
                    </div>
                    <div>
                      <span className='head'>Email :</span>{' '}
                      {company.primary_hr.emailId}
                    </div>
                    <div>
                      <span className='head'>Contact Number :</span>{' '}
                      {company.primary_hr.contactNo}
                    </div>
                  </div>
                </div>

                <div>
                  <div className='company-hr-heading'>
                    Secondary HR. Details
                  </div>
                  <div className='company-hr-details'>
                    <div>
                      <span className='head'>Name :</span>{' '}
                      {company.secondary_hr.name}
                    </div>
                    <div>
                      <span className='head'>Email :</span>{' '}
                      {company.secondary_hr.emailId}
                    </div>
                    <div>
                      <span className='head'>Contact Number :</span>{' '}
                      {company.secondary_hr.contactNo}
                    </div>
                  </div>
                </div>
                <div className='job-card-subheading px-2'>
                  <span className='head'> About the Company: </span>
                  {company.about}
                </div>
                <div className='job-card-subheading px-2'>
                  <span className='head'> Share contact detail: </span>
                  {company.consent}
                </div>
              </div>
            ))}
        </div>
        <Stack spacing={2}>
          <Pagination
            count={parseInt((CompanyCount + 12) / 12)}
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

export default Company;
