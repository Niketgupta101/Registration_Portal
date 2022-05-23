import React from "react";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import CompanyDetails from "./components/CompanyDetails/CompanyDetails";
import MyJobs from "./components/MyJobs/MyJobs";
import Courses from "./components/Courses/Courses";
import ContactUs from "./components/ContactUs/ContactUs";
import AllInf from "./components/Admin/Infs/AllInf";
<<<<<<< HEAD
=======
import AllJnf from "./components/Admin/Jnfs/AllJnf";
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
import AdminHome from "./components/Admin/Home/Home";
import AdminAuth from "./components/Admin/Auth/SignIn";
import Company from "./components/Admin/Company/Company";
import Jobs from "./components/Admin/Jobs/Jobs";
import Inf from "./components/MyJobs/INF/Inf";
import Jnf from "./components/MyJobs/JNF/Jnf";
import VerifyEmail from "./components/Auth/VerifyEmail";
import UserAuth from "./components/Auth/UserAuth";
import ForgotPassword from "./components/Password/ForgotPassword";
import ChangePassword from "./components/Password/ChangePassword";
import ResetPassword from "./components/Password/ResetPassword";
import Fiveyear from "./components/Courses/Fiveyear";
import Twoyearmba from "./components/Courses/Twoyearmba";
import Twoyearmsc from "./components/Courses/Twoyearmsc";
import Twoyearmtech from "./components/Courses/Twoyearmtech";
import Btech from "./components/Courses/btech";
import Threeyearmsc from "./components/Courses/Threeyearmsc";
import CustomInvite from "./components/Admin/Invites/CustomInvite";
import Invites from "./components/Admin/Invites/Invites";

const App = () => {
  // const user = localStorage.getItem('user');

  return (
    <BrowserRouter>
      <div id="User" className="User">
        <Navbar />
        <Routes>
          {/* ------------------------------ User Home --------------------- */}

          <Route path="/" element={<Home />} />
          {/* <Route path='/new' element={<Home2 />} /> */}
          <Route path="/create/inf/:InfId" element={<Inf />} />
          <Route path="/create/jnf/:JnfId" element={<Jnf />} />

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

          <Route path="/admin/company" element={<Company />} />
          <Route path="/admin/jobs" element={<Jobs />} />
          <Route path="/admin/inf" element={<AllInf />} />
<<<<<<< HEAD
=======
          <Route path="/admin/jnf" element={<AllJnf />} />
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf

          {/* ------------------------------ Courses--------------------- */}
          <Route path="/courses/fiveyear" element={<Fiveyear />} />
          <Route path="/courses/threeyearmsc" element={<Threeyearmsc />} />
          <Route path="/courses/twoyearmba" element={<Twoyearmba />} />
          <Route path="/courses/twoyearmsc" element={<Twoyearmsc />} />
          <Route path="/courses/twoyearmtech" element={<Twoyearmtech />} />
          <Route path="/courses/btech" element={<Btech />} />
          {/* ------------------------------ Custom-Invite--------------------- */}
          <Route path="/invite" element={<CustomInvite />} />
          <Route path="/company/invites" element={<Invites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
