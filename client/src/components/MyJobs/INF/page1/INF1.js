import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import "./INF1.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "animate.css";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import { getGraduationYear } from "../../../../api/index";

const style = { alignItems: "center" };

export default function INF1({
  companyFormData,
  jobFormData,
  stipendFormData,
  hrDetails,
  handleCompanyDataChange,
  handleJobDataChange,
  handleStipendDataChange,
  // handleInternDuration,
  handleHrDetailsChange,
  handleUpdateInfById,
  company,
}) {
  // let company = JSON.parse(localStorage.getItem('company'));

  const [companyoverview, setCompanyoverview] = useState(false);
  const [internprofile, setInternprofile] = useState(false);
  const [stipenddetail, setStipenddetail] = useState(false);
  const [hrdetail, setHrdetail] = useState(false);
  const [althrdetail, setALtrdetail] = useState(false);
  const [Year, setYear] = useState(2023);

  // const [show, setShow] = React.useState(false);
  // const [duration, setDuration] = useState("");

  // const handleOpen = (e) => {
  //   setDuration(e.target.value);
  //   setShow(true);
  // };
  // const handleAgree = () => {
  //   handleInternDuration(duration);
  //   setShow(false);
  // };

  // const handleClose = () => {
  //   setShow(false);
  // };

  function handleHrdetails(e) {
    if (e.target.value === "YES") setALtrdetail(() => true);
    else setALtrdetail(() => false);
  }

  function submitButton() {
    if (
      jobFormData.Job_Designation === "" ||
      jobFormData.Job_Description === "" ||
      jobFormData.Place_Of_Posting === "" ||
      stipendFormData.Salary_Per_Month === "" ||
      stipendFormData.CTC === ""
    ) {
      return (
        <button
          className="submit_btn not-allowed-btn"
          disabled
          title="Kindly fill all necessary fields"
          style={{ cursor: "not-allowed", border: "1px solid red" }}
        >
          Save and Continue
        </button>
      );
    } else {
      return (
        <button className="submit_btn" type="submit">
          Save and Continue
        </button>
      );
    }
  }

  useEffect(() => {
    async function fetchGraduationYear() {
      try {
        const { data } = await getGraduationYear();

        setYear(data.year);
      } catch (error) {}
    }
    fetchGraduationYear();
  }, []);

  return (
    <div className="overallDiv1">
      <div>
        <header className="headerText1">
          INTERNSHIP NOTIFICATION FORM (2022-2023)
        </header>
      </div>
      <Form onSubmit={handleUpdateInfById}>
        <div className="animate__animated animate__fadeInLeft container col-lg-12 col-md-12 category p-0 my-3  ">
          <div
            className="upper"
            onClick={() => {
              setTimeout(() => {
                if (companyoverview) {
                  setCompanyoverview(false);
                } else {
                  setCompanyoverview(true);
                }
              }, 200);
            }}
          >
            <div className="category-heading d-flex">
              <header className="headerText flex-grow-1">
                COMPANY OVERVIEW
              </header>
              <div className="mx-4 p-2 align-self-center">
                {companyoverview === true ? (
                  <FaAngleDoubleUp size={30} color="rgb(60, 85, 165)" />
                ) : (
                  <FaAngleDoubleDown size={30} color="rgb(60, 85, 165)" />
                )}
              </div>
            </div>
          </div>
          {companyoverview === true ? (
            <div className="lower p-2 ">
              <div className="p-2 mx-3 animate__animated animate__zoomIn">
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Name of the Company <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      required
                      name="Name_Of_The_Company"
                      type="text"
                      className="inputText"
                      style={{ lineHeight: "0.8" }}
                      value={companyFormData.Name_Of_The_Company}
                      disabled={true}
                      onChange={handleCompanyDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Website
                    {/* <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="Website"
                      type="text"
                      className="inputText"
                      value={companyFormData.Website}
                      disabled={true}
                      onChange={handleCompanyDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Category<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="Category"
                      type="text"
                      className="inputText"
                      value={companyFormData.Category}
                      disabled={true}
                      onChange={handleCompanyDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Sector<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="Sector"
                      type="text"
                      className="inputText"
                      value={companyFormData.Sector}
                      disabled={true}
                      onChange={handleCompanyDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    About the Company<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="About"
                      type="text"
                      className="inputText"
                      value={companyFormData.About}
                      onChange={handleCompanyDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="animate__animated animate__fadeInRight container col-lg-12 col-md-12 category p-0 my-3 ">
          <div
            className="upper"
            onClick={() => {
              setTimeout(() => {
                if (internprofile) {
                  setInternprofile(false);
                } else {
                  setInternprofile(true);
                }
              }, 200);
            }}
          >
            <div className="category-heading d-flex">
              <header className="headerText flex-grow-1">INTERN PROFILE</header>
              <div className="mx-4 p-2 align-self-center">
                {internprofile === true ? (
                  <FaAngleDoubleUp size={30} color="rgb(60, 85, 165)" />
                ) : (
                  <FaAngleDoubleDown size={30} color="rgb(60, 85, 165)" />
                )}
              </div>
            </div>
          </div>
          {internprofile === true ? (
            <div className="lower p-2 ">
              <div className="p-2 mx-3 animate__animated animate__zoomIn">
                <FormGroup row style={style}>
                  <Label for="exampleSelect" sm={3} className="fontText">
                    Internship Duration<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleSelect"
                      name="Internship_Duration"
                      required
                      type="select"
                      className="inputText"
                      value={jobFormData.Internship_Duration}
                      onChange={handleJobDataChange}
                      autoComplete="off"
                    >
                      <option>May-July {Year}</option>
                      <option>July-Dec {Year}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Job Designation<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="Job_Designation"
                      required
                      className="inputText"
                      type="text"
                      value={jobFormData.Job_Designation}
                      onChange={handleJobDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Job Description<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="Job_Description"
                      type="text"
                      required
                      className="inputText"
                      value={jobFormData.Job_Description}
                      onChange={handleJobDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleSelect" sm={3} className="fontText">
                    Mode of Internship<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleSelect"
                      name="Mode_Of_Internship"
                      type="select"
                      required
                      className="inputText"
                      value={jobFormData.Mode_Of_Internship}
                      onChange={handleJobDataChange}
                      autoComplete="off"
                    >
                      <option>Virtual</option>
                      <option>Physical</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Place of posting (in case of Physical internship)
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="Place_Of_Posting"
                      type="text"
                      className="inputText"
                      value={jobFormData.Place_Of_Posting}
                      onChange={handleJobDataChange}
                      autoComplete="off"
                      required
                    />
                  </Col>
                </FormGroup>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="animate__animated animate__fadeInLeft container col-lg-12 col-md-12 category p-0 my-3 ">
          <div
            className="upper"
            onClick={() => {
              setTimeout(() => {
                if (stipenddetail) {
                  setStipenddetail(false);
                } else {
                  setStipenddetail(true);
                }
              }, 200);
            }}
          >
            <div className="category-heading d-flex">
              <header className="headerText flex-grow-1">
                STIPEND DETAILS
              </header>
              <div className="mx-4 p-2 align-self-center">
                {stipenddetail === true ? (
                  <FaAngleDoubleUp size={30} color="rgb(60, 85, 165)" />
                ) : (
                  <FaAngleDoubleDown size={30} color="rgb(60, 85, 165)" />
                )}
              </div>
            </div>
          </div>
          {stipenddetail === true ? (
            <div className="lower p-2 ">
              <div className="p-2 mx-3 animate__animated animate__zoomIn">
                <FormGroup row style={style}>
                  <Label
                    for="exampleText"
                    sm={3}
                    text-colour="blue"
                    className="fontText"
                  >
                    Stipend <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={4}>
                    <Input
                      id="exampleText"
                      required
                      name="Salary_Per_Month"
                      type="text"
                      className="inputText"
                      value={stipendFormData.Salary_Per_Month}
                      onChange={handleStipendDataChange}
                      autoComplete="off"
                    />
                  </Col>
                  <Col sm={5}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Per Month"
                        control={<Radio />}
                        label="per Month"
                        name="Salary_Unit"
                        onChange={handleStipendDataChange}
                      />
                      <FormControlLabel
                        value="Total "
                        control={<Radio />}
                        label="Total"
                        name="Salary_Unit"
                        onChange={handleStipendDataChange}
                      />
                    </RadioGroup>
                  </Col>
                </FormGroup>

                <FormGroup row style={style}>
                  <Label for="exampleSelect" sm={3} className="fontText">
                    PPO provision on performance basis
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleSelect"
                      name="PPO_provision_on_performance_basis"
                      type="select"
                      required
                      className="inputText"
                      value={stipendFormData.PPO_provision_on_performance_basis}
                      onChange={handleStipendDataChange}
                      autoComplete="off"
                    >
                      <option value="" selected="selected" disabled hidden>
                        Choose here
                      </option>
                      <option>Yes</option>
                      <option>No</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    CTC for PPO selects<span style={{ color: "red" }}>*</span>
                  </Label>

                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="CTC"
                      type="text"
                      className="inputText"
                      value={stipendFormData.CTC}
                      onChange={handleStipendDataChange}
                      autoComplete="off"
                      required
                    />
                  </Col>
                </FormGroup>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="animate__animated animate__fadeInRight container col-lg-12 col-md-12 category p-0 my-3 ">
          <div
            className="upper"
            onClick={() => {
              setTimeout(() => {
                if (hrdetail) {
                  setHrdetail(false);
                } else {
                  setHrdetail(true);
                }
              }, 200);
            }}
          >
            <div className="category-heading d-flex">
              <header className="headerText flex-grow-1">HR DETAILS</header>
              <div className="mx-4 p-2 align-self-center">
                {hrdetail === true ? (
                  <FaAngleDoubleUp size={30} color="rgb(60, 85, 165)" />
                ) : (
                  <FaAngleDoubleDown size={30} color="rgb(60, 85, 165)" />
                )}
              </div>
            </div>
          </div>
          {hrdetail === true ? (
            <div className="lower p-2 ">
              <div className="p-2 mx-3 animate__animated animate__zoomIn">
                <FormGroup row style={style}>
                  <Label
                    for="exampleText"
                    sm={3}
                    text-colour="blue"
                    className="fontText"
                  >
                    Name <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      required
                      name="name"
                      value={hrDetails.Primary_Hr.name}
                      onChange={(e) =>
                        handleHrDetailsChange(
                          "Primary_Hr",
                          e.target.name,
                          e.target.value
                        )
                      }
                      type="text"
                      className="inputText"
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label
                    for="exampleText"
                    sm={3}
                    text-colour="blue"
                    className="fontText"
                  >
                    Email <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      required
                      name="email"
                      value={hrDetails.Primary_Hr.email}
                      onChange={(e) =>
                        handleHrDetailsChange(
                          "Primary_Hr",
                          e.target.name,
                          e.target.value
                        )
                      }
                      type="text"
                      className="inputText"
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label
                    for="exampleText"
                    sm={3}
                    text-colour="blue"
                    className="fontText"
                  >
                    Mobile <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      required
                      name="mobile"
                      value={hrDetails.Primary_Hr.mobile}
                      onChange={(e) =>
                        handleHrDetailsChange(
                          "Primary_Hr",
                          e.target.name,
                          e.target.value
                        )
                      }
                      type="text"
                      className="inputText"
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label
                    for="exampleText"
                    sm={6}
                    text-colour="blue"
                    className="fontText"
                  >
                    Add Alternate HR Details:
                  </Label>

                  <Col sm={6}>
                    <RadioGroup row name="row-radio-buttons-group">
                      <FormControlLabel
                        value="YES"
                        control={<Radio />}
                        label="YES"
                        onChange={handleHrdetails}
                      />
                      <FormControlLabel
                        value="NO"
                        control={<Radio />}
                        label="NO"
                        onChange={handleHrdetails}
                      />
                    </RadioGroup>
                  </Col>
                </FormGroup>
                {althrdetail && (
                  <div>
                    <FormGroup row style={style}>
                      <Label
                        for="exampleText"
                        sm={3}
                        text-colour="blue"
                        className="fontText"
                      >
                        Name
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="exampleText"
                          required
                          name="name"
                          value={hrDetails.Alternate_Hr.name}
                          onChange={(e) =>
                            handleHrDetailsChange(
                              "Alternate_Hr",
                              e.target.name,
                              e.target.value
                            )
                          }
                          type="text"
                          className="inputText"
                          autoComplete="off"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row style={style}>
                      <Label
                        for="exampleText"
                        sm={3}
                        text-colour="blue"
                        className="fontText"
                      >
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="exampleText"
                          required
                          name="email"
                          value={hrDetails.Alternate_Hr.email}
                          onChange={(e) =>
                            handleHrDetailsChange(
                              "Alternate_Hr",
                              e.target.name,
                              e.target.value
                            )
                          }
                          type="text"
                          className="inputText"
                          autoComplete="off"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row style={style}>
                      <Label
                        for="exampleText"
                        sm={3}
                        text-colour="blue"
                        className="fontText"
                      >
                        Mobile
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="exampleText"
                          required
                          name="mobile"
                          value={hrDetails.Alternate_Hr.mobile}
                          onChange={(e) =>
                            handleHrDetailsChange(
                              "Alternate_Hr",
                              e.target.name,
                              e.target.value
                            )
                          }
                          type="text"
                          className="inputText"
                          autoComplete="off"
                        />
                      </Col>
                    </FormGroup>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Internship Duration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to change the internship duration to{" "}
            {duration}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAgree}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal> */}

        <div
          className="formFlex"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: "1.5rem",
          }}
        >
          {submitButton()}
        </div>
      </Form>
    </div>
  );
}

// export default INF1;
