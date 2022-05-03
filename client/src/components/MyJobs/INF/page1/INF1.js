import React, { useState } from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

import "./INF1.css";

import "animate.css";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const style = { alignItems: "center" };

export default function INF1({
  companyFormData,
  jobFormData,
  stipendFormData,
  handleCompanyDataChange,
  handleJobDataChange,
  handleStipendDataChange,
  handleCreateNewInf,
}) {
  const [companyoverview, setCompanyoverview] = useState(false);
  const [internprofile, setInternprofile] = useState(false);
  const [stipenddetail, setStipenddetail] = useState(false);

  function submitButton() {
    if (
      companyFormData.Name_Of_The_Company === "" ||
      companyFormData.Category_Or_Sector === "" ||
      companyFormData.Website === "" ||
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
          style={{ cursor: "not-allowed" }}
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

  return (
    <div className="overallDiv1">
      <div>
        <header className="headerText1">
          INTERNSHIP NOTIFICATION FORM (2021-2022)
        </header>
      </div>
      <Form onSubmit={handleCreateNewInf}>
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
                      onChange={handleCompanyDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Category/Sector<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      name="Category_Or_Sector"
                      type="text"
                      required
                      className="inputText"
                      value={companyFormData.Category_Or_Sector}
                      onChange={handleCompanyDataChange}
                      autoComplete="off"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for="exampleText" sm={3} className="fontText">
                    Website<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id="exampleText"
                      required
                      name="Website"
                      type="text"
                      className="inputText"
                      value={companyFormData.Website}
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
                      <option>
                        Jan – June 2022 Dual Degree/ Integrated M. Tech courses
                        only (2022 batch)
                      </option>
                      <option>
                        May – July 2022 Pre-final year students of ALL courses
                        (2023 batch)
                      </option>
                      <option>
                        July – Dec 2022 M. Tech/ MBA – Business Analytics
                        courses only (2023 batch)
                      </option>
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
                    Stipend per month<span style={{ color: "red" }}>*</span>
                  </Label>
                  <Col sm={9}>
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
