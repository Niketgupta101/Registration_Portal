import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./styles.css";

const CompanyDetails = ({
  companyData,
  handleCompanyChange,
  handleCompanySubmit,
  setCompanyData,
}) => {
  return (
    <>
      <div className="company_container">
        <div className="company_card">
          <form
            action=""
            className="company_form"
            onSubmit={handleCompanySubmit}
          >
            <div class="ug-pg d-flex m-0 px-0 justify-content-center">
              <div className="flex-grow-1 ">
                <h1 className="ug-pg-h1 prog-hover">
                  Company Details
                  <span className="ug-pg-span">
                    <b>Kindly fill all necessary details</b>
                  </span>
                </h1>
              </div>
            </div>
            <div className="formFlex">
              {/* <div className="form-floating mb-3">
                <label for="floatingInput"htmlFor="name">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required id="floatingInput"
                  value={companyData.name}
                  onChange={handleCompanyChange}
                />
              </div> */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  id="floatingInput"
                  value={companyData.name}
                  onChange={handleCompanyChange}
                />
                <label for="floatingInput" htmlFor="name">
                  Name of the Company <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="website"
                  required
                  id="floatingInput"
                  value={companyData.website}
                  onChange={handleCompanyChange}
                />
                <label for="floatingInput" htmlFor="website">
                  Website <span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                name="company_type"
                type="text"
                required
                id="floatingInput"
                value={companyData.company_type}
                onChange={handleCompanyChange}
              />
              <label for="floatingInput" htmlFor="company_type">
                Company Type / Sector <span style={{ color: "red" }}>*</span>
              </label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                name="about"
                cols="30"
                rows="10"
                className="form-control"
                required
                id="floatingInput"
                style={{ height: "100px " }}
                value={companyData.about}
                onChange={handleCompanyChange}
              />
              <label for="floatingInput" htmlFor="about">
                About the company <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="mt-4 ms-2">
              <label className="permission">Type of Company:</label>
              <div className="ms-5 ps-3">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Options
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes, Both Contact Number and Email Address"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes, Both Contact Number and Email Address"
                      control={<Radio />}
                      label="Yes, Both Contact Number and Email Address"
                    />
                    <FormControlLabel
                      value="Yes, Only Contact Number"
                      control={<Radio />}
                      label="Yes, Only Contact Number"
                    />
                    <FormControlLabel
                      value="Yes, Only Email Address"
                      control={<Radio />}
                      label="Yes, Only Email Address"
                    />
                    <FormControlLabel
                      value="None"
                      control={<Radio />}
                      label="None"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div class="ug-pg d-flex m-0 px-0 justify-content-center">
              <div className="flex-grow-1 ">
                <h1 className="ug-pg-h1 prog-hover">
                  HR Details
                  <span className="ug-pg-span">
                    <b>
                      Kindly fill Alternate HR details as well if applicable
                    </b>
                  </span>
                </h1>
              </div>
            </div>
            <div className="person">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={companyData.primary_hr.name}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      primary_hr: {
                        ...companyData.primary_hr,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                  required
                  id="floatingInput"
                />
                <label for="floatingInput" htmlFor="name">
                  Name (Primary HR) <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="formFlex">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="contactNo"
                    value={companyData.primary_hr.contactNo}
                    onChange={(e) =>
                      setCompanyData({
                        ...companyData,
                        primary_hr: {
                          ...companyData.primary_hr,
                          [e.target.name]: e.target.value,
                        },
                      })
                    }
                    required
                    id="floatingInput"
                  />
                  <label for="floatingInput" htmlFor="contact_no">
                    Contact Number <span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="emailId"
                    value={companyData.primary_hr.emailId}
                    onChange={(e) =>
                      setCompanyData({
                        ...companyData,
                        primary_hr: {
                          ...companyData.primary_hr,
                          [e.target.name]: e.target.value,
                        },
                      })
                    }
                    required
                    id="floatingInput"
                  />
                  <label for="floatingInput" htmlFor="emailId">
                    E-mail ID <span style={{ color: "red" }}>*</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="person">
              <div className="form-floating mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={companyData.secondary_hr.name}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      secondary_hr: {
                        ...companyData.secondary_hr,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                  id="floatingInput"
                />
                <label for="floatingInput" htmlFor="name">
                  Name (Alternate HR)
                </label>
              </div>
              <div className="formFlex">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="contactNo"
                    value={companyData.secondary_hr.contactNo}
                    onChange={(e) =>
                      setCompanyData({
                        ...companyData,
                        secondary_hr: {
                          ...companyData.secondary_hr,
                          [e.target.name]: e.target.value,
                        },
                      })
                    }
                    id="floatingInput"
                  />
                  <label for="floatingInput" htmlFor="contact_no">
                    Contact Number
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="emailId"
                    value={companyData.secondary_hr.emailId}
                    onChange={(e) =>
                      setCompanyData({
                        ...companyData,
                        secondary_hr: {
                          ...companyData.secondary_hr,
                          [e.target.name]: e.target.value,
                        },
                      })
                    }
                    id="floatingInput"
                  />
                  <label for="floatingInput" htmlFor="emailId">
                    E-mail ID
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="permission">
                Do you want us to share your contact details with NIRF for
                institute NIRF rating:
              </label>
              <div className="ms-4">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Options
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes, Both Contact Number and Email Address"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes, Both Contact Number and Email Address"
                      control={<Radio />}
                      label="Yes, Both Contact Number and Email Address"
                    />
                    <FormControlLabel
                      value="Yes, Only Contact Number"
                      control={<Radio />}
                      label="Yes, Only Contact Number"
                    />
                    <FormControlLabel
                      value="Yes, Only Email Address"
                      control={<Radio />}
                      label="Yes, Only Email Address"
                    />
                    <FormControlLabel
                      value="None"
                      control={<Radio />}
                      label="None"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <button type="submit" className="form_submit_btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
