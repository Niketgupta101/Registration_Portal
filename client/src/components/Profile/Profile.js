import React, { useEffect } from 'react';
import './styles.css';

import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import hricon from './../../Images/hricon.png';

const Profile = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  let company = JSON.parse(localStorage.getItem('company'));

  const Navigate = useNavigate();

  useEffect(() => {
    if (
      !user ||
      user.isemailVerified === false ||
      !company ||
      company.length === 0
    ) {
      Navigate('/auth');
    }
  }, [Navigate, user]);

  return (
    <>
      <div className='company-dashboard-container'>
        <div className='jumbotron jumbotron-fluid p-2'>
          <div className='m-2 hero-content-container mx-auto'>
            <div className='p-2 pt-5 container'>
              <div className='verify-header bg-transparent p-0'>
                <div
                  className='d-flex justify-content-center'
                  style={{ color: 'black' }}
                >
                  <div className='verifyline align-self-center mx-3 bg-black'></div>
                  <FaUserCircle style={{ fontSize: '3em' }} />
                  <div className='verifyline align-self-center mx-3 bg-black'></div>
                </div>
                <div
                  className='text-center verify-email'
                  style={{ color: 'black' }}
                >
                  User Profile
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <div
            className='d-flex justify-content-center'
            style={{ width: '30%' }}
          >
            <img src={hricon} style={{ width: '6.5em' }}></img>
          </div>
          <div className='d-flex' style={{ minWidth: '30%' }}>
            <div>
              <div className='verify-email'>{user.Name}</div>
              <div className='profile-company'>
                {company && company.length !== 0 && company[0].name}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='profile-text-3'>About the Company</div>
          <div className='d-flex my-3'>
            <div className='profile-text-1'>Name: </div>{' '}
            <div className='profile-text-2'>
              {company && company.length !== 0 && company[0].name}
            </div>
          </div>
          <div className='d-flex my-3'>
            <div className='profile-text-1'>Sector: </div>{' '}
            <div className='profile-text-2'>
              {company && company.length !== 0 && company[0].sectorData}
            </div>
          </div>
          <div className='d-flex my-3'>
            <div className='profile-text-1'>Category: </div>{' '}
            <div className='profile-text-2'>
              {company && company.length !== 0 && company[0].categoryData}
            </div>
          </div>
          <div className='d-flex my-3'>
            <div className='profile-text-1'>Website: </div>{' '}
            <div className='profile-text-2'>
              {company && company.length !== 0 && company[0].website}
            </div>
          </div>
          <div className='d-flex my-3'>
            <div className='profile-text-1'>About: </div>{' '}
            <div className='profile-text-2'>
              {company && company.length !== 0 && company[0].about}
            </div>
          </div>
        </div>
        <div>
          <div className='profile-text-3'>Contact Information</div>
          <div className='d-flex my-3'>
            <div className='profile-text-1'>Email Id: </div>{' '}
            <div className='profile-text-2'>{user.emailId}</div>
          </div>
          <div className='d-flex my-3'>
            <div className='profile-text-1'>Contact Number: </div>{' '}
            <div className='profile-text-2'>{user.contactNo}</div>
          </div>
        </div>
        <div className='mb-5'>
          <div className='profile-text-3'> HR Details</div>
          <div className='row mx-4 mt-3'>
            <div className='col-12 col-md-6 '>
              <div>
                <div className='profile-text-4'>Primary HR</div>
                <div className='d-flex my-3'>
                  <div className='profile-text-1'>Name: </div>{' '}
                  <div className='profile-text-2'>
                    {company &&
                      company.length !== 0 &&
                      company[0].primary_hr.name}
                  </div>
                </div>
                <div className='d-flex my-3'>
                  <div className='profile-text-1'>Email </div>{' '}
                  <div className='profile-text-2'>
                    {company &&
                      company.length !== 0 &&
                      company[0].primary_hr.emailId}
                  </div>
                </div>
                <div className='d-flex my-3'>
                  <div className='profile-text-1'>Phone </div>{' '}
                  <div className='profile-text-2'>
                    {company &&
                      company.length !== 0 &&
                      company[0].primary_hr.contactNo}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 '>
              <div>
                <div className='profile-text-4'>Secondary HR</div>
                <div className='d-flex my-3'>
                  <div className='profile-text-1'>Name: </div>{' '}
                  <div className='profile-text-2'>
                    {company &&
                      company.length !== 0 &&
                      company[0].secondary_hr.name}
                  </div>
                </div>
                <div className='d-flex my-3'>
                  <div className='profile-text-1'>Email </div>{' '}
                  <div className='profile-text-2'>
                    {company &&
                      company.length !== 0 &&
                      company[0].secondary_hr.emailId}
                  </div>
                </div>
                <div className='d-flex my-3'>
                  <div className='profile-text-1'>Phone </div>{' '}
                  <div className='profile-text-2'>
                    {company &&
                      company.length !== 0 &&
                      company[0].secondary_hr.contactNo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
