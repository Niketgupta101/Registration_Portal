import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "./Auth";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import VerifyEmail from "./VerifyEmail";
import { login, postCompanyDetails, register } from "../../api";
import { TabContext, TabPanel } from "@mui/lab";

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
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
  };
  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorOpen(false);
  };

  // ------------------------------------------------------------------- Auth Data

  const [isSignIn, setIsSignIn] = useState(true);

  const [AuthData, setAuthData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
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
    name: "",
    website: "",
    company_type: "",
    about: "",
    primary_hr: {
      name: "",
      contactNo: "",
      emailId: "",
    },
    secondary_hr: {
      name: "",
      contactNo: "",
      emailId: "",
    },
  });

  const handleCompanyChange = (e) => {
    setCompanyData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // --------------------------------------------------------------------- handle form submit

  const [page, setPage] = useState("auth");

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setPage('company');
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();

    // -------------------------------------- auth process
    if (isSignIn) {
      try {
        let { data } = await login({
          emailIdOrUsername: AuthData.email,
          password: AuthData.password,
        });
        if (!data.user.isemailVerified) {
          setPage("verify");
        } else {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("company", JSON.stringify(data.company));

          handleSuccessClick();
          Navigate("/");
        }
      } catch (error) {
        handleErrorClick();
      }
    } else {
      if (AuthData.password !== AuthData.confirmPassword) {
        handleErrorClick();
      } else {
        try {
          let { data } = await register(AuthData);
          
          if(data)
          {
            try {
              const response = await postCompanyDetails({
                ...companyData,
                userId: data.newUser._id,
              });
              localStorage.setItem("user", JSON.stringify(data.newUser));
              localStorage.setItem("token", JSON.stringify(data.token));
              localStorage.setItem("company", JSON.stringify(response.data.company));
              
              handleSuccessClick();
    
              setPage("verify");
            } catch (error) {
              handleErrorClick();
            }
          }
          
        } catch (error) {
          handleErrorClick();
        }
      }
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    Navigate('/forgotPassword')
  }

  return (
    <>
      <TabContext value={page}>
        <TabPanel value="auth">
          <Auth
            isSignIn={isSignIn}
            AuthData={AuthData}
            handleAuthChange={handleAuthChange}
            handleAuthSubmit={handleAuthSubmit}
            switchMode={switchMode}
            successOpen={successOpen}
            handleSuccessClose={handleSuccessClose}
            errorOpen={errorOpen}
            handleErrorClose={handleErrorClose}
            handleForgotPassword = {handleForgotPassword}
            handleCompanySubmit = {handleCompanySubmit}
          />
        </TabPanel>
        <TabPanel value={"company"}>
          <CompanyDetails
            companyData={companyData}
            handleCompanyChange={handleCompanyChange}
            handleCompanySubmit={handleCompanySubmit}
            setCompanyData = {setCompanyData}
          />
        </TabPanel>
        <TabPanel value={"verify"}>
          <VerifyEmail email={JSON.parse(localStorage.getItem('user'))?.emailId} setIsSignIn={setIsSignIn} setPage={setPage} />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default UserAuth;
