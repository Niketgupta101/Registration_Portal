import React, { useState } from "react";
import "./newStyle.css";
import {
  FaArchway,
  FaUserAlt,
  FaEyeSlash,
  FaEye,
  FaLock,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "animate.css";

export const Home2 = ({
  isSignIn,
  AuthData,
  handleAuthChange,
  handleAuthSubmit,
  switchMode,
  successOpen,
  handleSuccessClose,
  errorOpen,
  handleErrorClose,
  handleForgotPassword,
  handleCompanySubmit,
}) => {
   const [showPass,setShowPass]=useState(false);
   const [showConfPass,setShowConfPass]=useState(false);

  return (
    <div className="w3layouts-main">
      <div className="bg-layer">
        <h1 className="h1-home">CDC Placement Portal</h1>
        <div className="header-main">
          <div className="main-icon">
            <FaArchway style={{ color: "white", fontSize: "3em" }} />
            <span className="fa fa-eercast"></span>
          </div>
          {isSignIn === false ? (
            <>
              <div className="header-left-bottom">
                <form action="#" method="post">
                  <div className="d-flex my-0">
                    <div className="icon1 d-flex me-1 my-0">
                      <div className="me-1">
                        <FaUserAlt />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        required=""
                        value={AuthData.firstName}
                        onChange={handleAuthChange}
                      />
                    </div>
                    <div className="icon1 d-flex ms-1 my-0">
                      <div className="me-1">
                        <FaUserAlt />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        required=""
                        value={AuthData.lastName}
                        onChange={handleAuthChange}
                      />
                    </div>
                  </div>

                  <div className="icon1 d-flex my-2">
                    <div className="me-2">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required=""
                      value={AuthData.email}
                      onChange={handleAuthChange}
                    />
                  </div>
                  <div className="icon1 d-flex my-2">
                    <div className="me-2">
                      <FaPhoneAlt />
                    </div>
                    <input
                      type="text"
                      name="contactNo"
                      placeholder="Contact Number *"
                      required=""
                      value={AuthData.contactNo}
                      onChange={handleAuthChange}
                    />
                  </div>
                  <div className="icon1 d-flex my-2">
                    <div className="me-2">
                      <FaLock />
                    </div>
                    <input
                      type={showPass?"text":"password"}
                      name="password"
                      placeholder="Password *"
                      required=""
                      value={AuthData.password}
                      onChange={handleAuthChange}
                    />
                    <div className="me-2">
                     {showPass?<FaEye onClick={()=>setShowPass((prev)=>!prev) } />:<FaEyeSlash onClick={()=>setShowPass((prev)=>!prev) }/>} 

                    </div>
                  </div>
                  <div className="icon1 d-flex my-2">
                    <div className="me-2">
                      <FaLock />
                    </div>
                    <input
                      type={showConfPass?"text":"password"}
                      name="confirmPassword"
                      placeholder="Re-enter Password *"
                      required=""
                      value={AuthData.confirmPassword}
                      onChange={handleAuthChange}
                    />
                    <div className="me-2">
                     {showConfPass?<FaEye onClick={()=>setShowConfPass((prev)=>!prev) } />:<FaEyeSlash onClick={()=>setShowConfPass((prev)=>!prev) }/>} 

                    </div>
                  </div>

                  <div className="bottom mb-2 mt-4">
                    <button className="btn" onClick={handleAuthSubmit}>
                      Register
                    </button>
                  </div>
                  <div className="links">
                    <p className="">
                      <a
                        className="a-home"
                        onClick={switchMode}
                        style={{ cursor: "pointer" }}
                      >
                        Already have an Acount? Log in
                      </a>
                    </p>
                    <div className="clear"></div>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="header-left-bottom">
              <form action="#" method="post">
                <div className="icon1 d-flex my-3">
                  <div className="me-2">
                    <FaUserAlt />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required=""
                    value={AuthData.email}
                    onChange={handleAuthChange}
                  />
                </div>
                <div className="icon1 d-flex my-4">
                  <div className="me-2">
                    <FaLock />
                  </div>
                  <input
                   type={showPass?"text":"password"}
                    name="password"
                    placeholder="Password"
                    required=""
                    value={AuthData.password}
                    onChange={handleAuthChange}
                  />
                   <div className="me-2">
                     {showPass?<FaEye onClick={()=>setShowPass((prev)=>!prev) } />:<FaEyeSlash onClick={()=>setShowPass((prev)=>!prev) }/>} 

                    </div>
                </div>

                <div className="bottom mb-2 mt-5">
                  <button className="btn" onClick={handleCompanySubmit}>
                    Log In
                  </button>
                </div>
                <div className="links ">
                  <p className="para">
                    <a
                      className="a-home"
                      onClick={handleForgotPassword}
                      style={{ cursor: "pointer" }}
                    >
                      Forgot Password?
                    </a>
                  </p>
                  <p className="right para animate__animated animate__pulse animate__infinite">
                    <a
                      className="a-home"
                      onClick={switchMode}
                      style={{
                        cursor: "pointer",
                        fontSize: "15px",
                      }}
                    >
                      New User? Register
                    </a>
                  </p>
                  <div className="clear"></div>
                </div>
              </form>
              <div style={{ marginTop: "70px " }}>
                <p className="">
                  <div
                    className="a-home"
                    style={{ width: "100%", textAlign: "center" }}>
                    For any queries,
                    <br /> contact us at {"  "}
                    <a
                      href="mailto:cdc@iitism.ac.in"
                      className="a-home"
                      style={{ textTransform: "lowercase" }}>
                      cdc@iitism.ac.in
                    </a>{" "}
                    or{"  "}
                    <a href="tel:+91-9771490999" className="a-home">
                      +91-9771490999
                    </a>
                  </div>
                </p>
                <div className="clear"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
