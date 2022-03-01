import React from "react";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import CompanyDetails from "./components/CompanyDetails/CompanyDetails";
import MyJobs from "./components/MyJobs/MyJobs";
import Courses from "./components/Courses/Courses";
import ContactUs from "./components/ContactUs/ContactUs";

import AdminHome from "./components/Admin/Home/Home";
import AdminAuth from "./components/Admin/Auth/SignIn";
import Account from "./components/Admin/Account/Account";
import Users from "./components/Admin/Users/Users";
import Company from "./components/Admin/Company/Company";
import Jobs from "./components/Admin/Jobs/Jobs";
import Inf from "./components/MyJobs/INF/Inf";
import Jnf from "./components/MyJobs/JNF/Jnf";
import VerifyEmail from "./components/Auth/VerifyEmail";
import UserAuth from "./components/Auth/UserAuth";
import ForgotPassword from "./components/Password/ForgotPassword";
import ChangePassword from "./components/Password/ChangePassword";
import ResetPassword from "./components/Password/ResetPassword";
import CompanyData from "./components/Admin/Company/CompanyData/CompanyData";
import JobData from "./components/Admin/Jobs/JobData/JobData";
import Fiveyear from "./components/Courses/Fiveyear";
import Twoyearmba from "./components/Courses/Twoyearmba";
import Twoyearmsc from "./components/Courses/Twoyearmsc";
import Twoyearmtech from "./components/Courses/Twoyearmtech";
import Btech from "./components/Courses/Btech";
import Threeyearmsc from "./components/Courses/Threeyearmsc";

const App = () => {
  return (
    <BrowserRouter>
      <div id="User" className="User">
        <Navbar />
        <Routes>

          {/* ------------------------------ User Home --------------------- */}

          <Route path="/" element={<Home />} />
          <Route path="/create/inf" element={<Inf />} />
          <Route path="/create/jnf" element={<Jnf />} />

          {/* ------------------------------ User Auth --------------------- */}

          <Route path="/auth" element={<UserAuth />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/passwordReset/:id" element={<ResetPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />

          {/* ------------------------------ User Menu --------------------- */}

          <Route path="/profile" element={<Profile />} />
          <Route path="/companydetails" element={<CompanyDetails />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* ------------------------------ Admin Home --------------------- */}

          <Route path="/admin" element={<AdminHome />} />

          {/* ------------------------------ User Auth --------------------- */}

          <Route path="/admin/signin" element={<AdminAuth />} />

          {/* ------------------------------ Admin Menu --------------------- */}

          <Route path="/admin/account" element={<Account />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/company" element={<Company />} />
          <Route path="/admin/company/:id" element={<CompanyData />} />
          <Route path="/admin/jobs" element={<Jobs />} />
          <Route path="/admin/jobs/job/:id" element={<JobData />} />

          {/* ------------------------------ Courses--------------------- */}
          <Route path="/courses/fiveyear" element={<Fiveyear/>}/>
          <Route path="/courses/threeyearmsc" element={<Threeyearmsc/>}/>
          <Route path="/courses/twoyearmba" element={<Twoyearmba/>}/>
          <Route path="/courses/twoyearmsc" element={<Twoyearmsc/>}/>
          <Route path="/courses/twoyearmtech" element={<Twoyearmtech/>}/>
          <Route path="/courses/btech" element={<Btech/>}/>


          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
