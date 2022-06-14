import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompanyDetails = ({
  companyData,
  handleCompanyChange,
  handleCompanySubmit,
  setCompanyData,
}) => {
  const categories = [
    "Public Sector",
    "Government Owned",
    "Private Sector",
    "MNC(Indian Origin)",
    "MNC(Foreign Origin)",
    "Start Up",
    "University Institution",
  ];
  const sectors = [
    "Analytics",
    "Consulting",
    "Core",
    "Banking and Finance",
    "Software/IT",
    "Education/ Ed Tech",
    "E-Commerce",
    "Technology",
    "FMCG",
    "PSU",
    "Management",
  ];
  const [othercategory, setOthercategory] = useState(false);
  const [othersector, setOthersector] = useState(false);
  function handleOtherSector(e) {
    if (e.target.checked && e.target.value === "Others") {
      setOthersector(true);
    } else setOthersector(false);
    handleCompanyChange(e);
  }

  function handleCategory(e) {
    if (e.target.checked && e.target.value === "Others") {
      setOthercategory(true);
    } else setOthercategory(false);
    handleCompanyChange(e);
  }

  return (
    <>
      <div className="company_container">
        <div className="company_card">
          <form
            action=""
            className="company_form"
            onSubmit={handleCompanySubmit}
          >
            <div className="ug-pg d-flex m-0 px-0 justify-content-center">
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

            <div className="ug-pg d-flex m-0 px-0 justify-content-center">
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
            <div className="person mb-2">
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
            <div className="container mb-2">
              <div className="row">
                <div className="col-12 col-md-6">
                  <Box component="span">
                    <div className=" ">
                      <label>
                        <div className="company-detail d-flex m-0 px-0 justify-content-center">
                          <div className="flex-grow-1 ">
                            <h1 className="company-detail-h1 prog-hover">
                              <span className="company-detail-span">
                                <b>
                                  Category of the Company
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "30px",
                                      padding: "0",
                                    }}
                                  >
                                    *
                                  </span>
                                </b>
                              </span>
                            </h1>
                          </div>
                        </div>
                      </label>
                      <div className="ms-5 ">
                        <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Options
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="category"
                            required
                          >
                            {categories.map((category) => (
                              <FormControlLabel
                                value={category}
                                control={<Radio />}
                                label={category}
                                name="categoryData"
                                onChange={handleCategory}
                              />
                            ))}
                            <FormControlLabel
                              value="Others"
                              control={<Radio />}
                              label="Others (please specify)"
                              onChange={handleCategory}
                            />
                            {othercategory && (
                              <TextField
                                id="standard-basic"
                                label="Please Specify"
                                variant="standard"
                                name="categoryData"
                                onChange={handleCompanyChange}
                              />
                            )}
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>
                  </Box>
                </div>
                <div className="col-12 col-md-6">
                  <Box component="span">
                    <div className=" ">
                      <label>
                        <div className="company-detail d-flex m-0 px-0 justify-content-center">
                          <div className="flex-grow-1 ">
                            <h1 className="company-detail-h1 prog-hover">
                              <span className="company-detail-span">
                                <b>
                                  Industry Sector
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "30px",
                                      padding: "0 ",
                                    }}
                                  >
                                    *
                                  </span>
                                </b>
                              </span>
                            </h1>
                          </div>
                        </div>
                      </label>
                      <div className="ms-5 ">
                        <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Options
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                            required
                          >
                            {sectors.map((sector) => (
                              <FormControlLabel
                                value={sector}
                                control={<Radio />}
                                label={sector}
                                name="sectorData"
                                onChange={handleOtherSector}
                              />
                            ))}
                            <FormControlLabel
                              value="Others"
                              control={<Radio />}
                              label="Others (please specify)"
                              name="sectorData"
                              onChange={handleOtherSector}
                            />
                            {othersector && (
                              <TextField
                                id="standard-basic"
                                label="Please Specify"
                                variant="standard"
                                name="sectorData"
                                onChange={handleCompanyChange}
                              />
                            )}
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-4">
              <label className="h6">
                The National Institutional Ranking Framework, adopted by
                Ministry of Education, Government of India, as a part of its
                methodology for judging the score of an institute, asks for the
                contact details of the organizations that visit the institute
                for placements. By agreeing, your organization agrees to share
                the Email ID and Name of the recruiter with the Ministry of
                Education, Government of India, for helping towards the score of
                the Indian Institute of Technology (Indian School of Mines).
              </label>
              <div className="ms-4">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Options
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Agree"
                      control={<Radio />}
                      label="Agree"
                      name="consent"
                      onChange={handleCompanyChange}
                    />
                    <FormControlLabel
                      value="Disagree"
                      control={<Radio />}
                      label="Disagree"
                      name="consent"
                      onChange={handleCompanyChange}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <button type="submit" className="form_submit_btn">
              SUBMIT
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
