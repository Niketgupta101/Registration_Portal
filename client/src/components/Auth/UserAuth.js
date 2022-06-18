import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import Auth from './Auth';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import VerifyEmail from './VerifyEmail';
import { login, postCompanyDetails, register } from '../../api';
import { TabContext, TabPanel } from '@mui/lab';
import { Home2 } from './Home2';
import Loading from '../Loading/Loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserAuth = () => {
  const Navigate = useNavigate();

  // ------------------------------------------------- Error handling

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  let user = JSON.parse(localStorage.getItem('user'));
  let company = JSON.parse(localStorage.getItem('company'));

  useEffect(() => {
    if (user && user.isemailVerified) {
      if (user.role === 'Admin') Navigate('/admin');
      else if (company && company.length !== 0) {
        Navigate('/');
      }
    }
  }, [Navigate, user, company]);

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
    if (
      AuthData.firstName === '' ||
      AuthData.lastName === '' ||
      AuthData.email === '' ||
      AuthData.contactNo === '' ||
      AuthData.password === '' ||
      AuthData.confirmPassword === ''
    ) {
      toast.warn('Please fill all the entries');
      return;
    }
    var re = /\S+@\S+\.\S+/;
    setIsLoading(true);
    let email_check;
    try {
      email_check = await register({ ...AuthData, email_check: 'true' });
    } catch (error) {
      setIsLoading(false);
      toast.warn(error.response.data.error);
      return;
    }
    setIsLoading(false);
    if (!validator.isMobilePhone(AuthData.contactNo)) {
      toast.error('Invalid Mobile Number.');
    } else if (AuthData.password != AuthData.confirmPassword) {
      toast.warn('Passwords do not match');
      setAuthData({ ...AuthData, confirmPassword: '' });
    } else if (re.test(AuthData.email) === false) {
      toast.error('Invalid Email Address');
    } else if (
      AuthData.email.split('@')[1] === 'gmail.com' ||
      AuthData.email.split('@')[1] === 'yahoo.com' ||
      AuthData.email.split('@')[1] === 'rediff.com' ||
      AuthData.email.split('@')[1] === 'outlook.com'
    ) {
      toast.error('Only Work Emails are allowed.');
    } else {
      setCompanyData((prevData) => ({
        ...prevData,
        primary_hr: {
          name: `${AuthData.firstName} ${AuthData.lastName}`,
          emailId: AuthData.email,
          contactNo: AuthData.contactNo,
        },
      }));
      setPage('company');
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleCompanySubmit = async (e) => {
    e.preventDefault();

    localStorage.clear();
    // -------------------------------------- auth process
    if (isSignIn) {
      try {
        let { data } = await login({
          emailIdOrUsername: AuthData.email,
          password: AuthData.password,
        });

        localStorage.setItem(
          'user',
          JSON.stringify({
            Name: data.user.Name,
            contactNo: data.user.contactNo,
            emailId: data.user.emailId,
            isemailVerified: data.user.isemailVerified,
            role: data.user.role,
          })
        );
        if (!data.user.isemailVerified) {
          setPage('verify');
        } else {
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('company', JSON.stringify(data.company));

          handleSuccessClick();
          toast.success('Successfully Logged in');
          Navigate('/');
        }
      } catch (error) {
        toast.warn(error.response.data.error);
        handleErrorClick();
      }
    } else {
      // if (companyData.consent !== 'Agree') {
      //   toast.error('Please click on Agree to submit', {
      //     position: 'top-center',
      //     autoClose: 5000,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: false,
      //     draggable: false,
      //     progress: undefined,
      //     theme: 'dark',
      //   });
      //   return;
      // }
      if (AuthData.password !== AuthData.confirmPassword) {
        handleErrorClick();
      } else {
        try {
          setIsLoading(true);
          let { data } = await register({
            user: AuthData,
            company: companyData,
          });
          localStorage.setItem(
            'user',
            JSON.stringify({
              Name: data.newUser.Name,
              contactNo: data.newUser.contactNo,
              emailId: data.newUser.emailId,
              isemailVerified: data.newUser.isemailVerified,
              role: data.newUser.role,
            })
          );
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('company', JSON.stringify(data.company));
          setPage('verify');
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          Navigate('/badgateway');
          handleErrorClick();
        }
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
      <ToastContainer />
    </>
  );
};

export default UserAuth;
