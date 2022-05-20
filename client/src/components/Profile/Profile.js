import React from "react";
import "./styles.css";
import { FaUserCircle } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let company = JSON.parse(localStorage.getItem("company"));

  console.log({ user, company });

  return (
    <>
      <div className="company-dashboard-container">
        <div className="jumbotron jumbotron-fluid p-2">
          <div className="m-2 hero-content-container mx-auto">
            <div className="p-2 pt-5 container">
              <div className="verify-header bg-transparent p-0">
                <div
                  className="d-flex justify-content-center"
                  style={{ color: "black" }}
                >
                  <div className="verifyline align-self-center mx-3 bg-black"></div>
                  <FaUserCircle style={{ fontSize: "3em" }} />
                  <div className="verifyline align-self-center mx-3 bg-black"></div>
                </div>
                <div
                  className="text-center verify-email"
                  style={{ color: "black" }}
                >
                  User Profile
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="d-flex justify-content-center"
            style={{ width: "30%" }}
          >
            <FcBusinessman style={{ fontSize: "9em" }} />
          </div>
          <div className="d-flex" style={{ minWidth: "30%" }}>
            <div>
              <div className="verify-email">{user.Name}</div>
              <div className="profile-company">{company[0].name}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="profile-text-3">About the Company</div>
          <div className="d-flex my-3">
            <div className="profile-text-1">Sector: </div>{" "}
            <div className="profile-text-2">{company[0].company_type}</div>
          </div>
          <div className="d-flex my-3">
            <div className="profile-text-1">Website: </div>{" "}
            <div className="profile-text-2">{company[0].website}</div>
          </div>
        </div>
        <div>
          <div className="profile-text-3">Contact Information</div>
          <div className="d-flex my-3">
            <div className="profile-text-1">Email Id: </div>{" "}
            <div className="profile-text-2">{user.emailId}</div>
          </div>
          <div className="d-flex my-3">
            <div className="profile-text-1">Contact Number: </div>{" "}
            <div className="profile-text-2">{user.contactNo}</div>
          </div>
        </div>
        <div>
          <div className="profile-text-3"> HR Details</div>
          <div className="row mx-4 mt-3">
            <div className="col-12 col-md-6 ">
              <div>
                <div className="profile-text-4">Primary HR</div>
                <div className="d-flex my-3">
                  <div className="profile-text-1">Name: </div>{" "}
                  <div className="profile-text-2">
                    {company[0].primary_hr.name}
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div className="profile-text-1">Email </div>{" "}
                  <div className="profile-text-2">
                    {company[0].primary_hr.emailId}
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div className="profile-text-1">Phone </div>{" "}
                  <div className="profile-text-2">
                    {company[0].primary_hr.contactNo}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div>
                <div className="profile-text-4">Secondary HR</div>
                <div className="d-flex my-3">
                  <div className="profile-text-1">Name: </div>{" "}
                  <div className="profile-text-2">
                    {company[0].secondary_hr.name}
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div className="profile-text-1">Email </div>{" "}
                  <div className="profile-text-2">
                    {company[0].secondary_hr.emailId}
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div className="profile-text-1">Phone </div>{" "}
                  <div className="profile-text-2">
                    {company[0].secondary_hr.contactNo}
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
