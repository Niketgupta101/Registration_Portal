import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from './Auth';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import VerifyEmail from './VerifyEmail';
import { login, postCompanyDetails, register } from '../../api';
import { TabContext, TabPanel } from '@mui/lab';
import { Home2 } from './Home2';
import Loading from '../Loading/Loading';

const UserAuth = () => {
  const Navigate = useNavigate();

  // ------------------------------------------------- Error handling

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSuccessClick = () => {
    setSuccessOpen(true);
  };
  const handleErrorClick = () => {
    setErrorOpen(true);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessOpen(false);
  };
  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorOpen(false);
  };

  // ------------------------------------------------------------------- Auth Data

  const [isSignIn, setIsSignIn] = useState(true);

  const [AuthData, setAuthData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
  });

  const switchMode = () => {
    setIsSignIn(!isSignIn);
  };

  const handleAuthChange = (e) => {
    setAuthData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // ------------------------------------------------------------------ Company Data

  const [companyData, setCompanyData] = useState({
    name: '',
    website: '',
    company_type: '',
    about: '',
    categoryData: '',
    sectorData: '',
    primary_hr: {
      name: '',
      contactNo: '',
      emailId: '',
    },
    secondary_hr: {
      name: '',
      contactNo: '',
      emailId: '',
    },
    consent: '',
  });

  const handleCompanyChange = (e) => {
    setCompanyData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // --------------------------------------------------------------------- handle form submit

  const [page, setPage] = useState('auth');

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setPage('company');
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleCompanySubmit = async (e) => {
    // console.log("Submitted=", companyData);
    e.preventDefault();

    // -------------------------------------- auth process
    if (isSignIn) {
      try {
        let { data } = await login({
          emailIdOrUsername: AuthData.email,
          password: AuthData.password,
        });
        if (!data.user.isemailVerified) {
          setPage('verify');
        } else {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('company', JSON.stringify(data.company));

          handleSuccessClick();
          Navigate('/');
        }
      } catch (error) {
        handleErrorClick();
      }
    } else {
      if (AuthData.password !== AuthData.confirmPassword) {
        handleErrorClick();
      } else {
        try {
          setIsLoading(true);
          let { data } = await register(AuthData);

          if (data) {
            try {
              const response = await postCompanyDetails({
                ...companyData,
                userId: data.newUser._id,
              });
              localStorage.setItem('user', JSON.stringify(data.newUser));
              localStorage.setItem('token', JSON.stringify(data.token));
              localStorage.setItem(
                'company',
                JSON.stringify(response.data.company)
              );

              handleSuccessClick();

              setPage('verify');
            } catch (error) {
              handleErrorClick();
            }
          }
        } catch (error) {
          handleErrorClick();
        }
        setIsLoading(false);
      }
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    Navigate('/forgotPassword');
  };

  return (
    <>
      <TabContext value={page}>
        <TabPanel value='auth' style={{ padding: '0px' }}>
          <Home2
            isSignIn={isSignIn}
            AuthData={AuthData}
            handleAuthChange={handleAuthChange}
            handleAuthSubmit={handleAuthSubmit}
            switchMode={switchMode}
            successOpen={successOpen}
            handleSuccessClose={handleSuccessClose}
            errorOpen={errorOpen}
            handleErrorClose={handleErrorClose}
            handleForgotPassword={handleForgotPassword}
            handleCompanySubmit={handleCompanySubmit}
          />
        </TabPanel>
        <TabPanel value={'company'} style={{ padding: '0px' }}>
          <CompanyDetails
            companyData={companyData}
            handleCompanyChange={handleCompanyChange}
            handleCompanySubmit={handleCompanySubmit}
            setCompanyData={setCompanyData}
          />
        </TabPanel>
        <TabPanel value={'verify'} style={{ padding: '0px' }}>
          <VerifyEmail
            email={JSON.parse(localStorage.getItem('user'))?.emailId}
            setIsSignIn={setIsSignIn}
            setPage={setPage}
          />
        </TabPanel>
      </TabContext>
      {isLoading && <Loading />}
    </>
  );
};

export default UserAuth;
