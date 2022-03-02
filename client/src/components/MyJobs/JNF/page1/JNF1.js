import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

import "./JNF1.css";

const style = { alignItems: "center" };

const JNF1 = ({
  setPage,
  companyFormData,
  jobFormData,
  salaryFormData,
  handleCompanyDataChange,
  handleJobDataChange,
  handleSalaryDataChange,
  handleCreateNewJnf
}) => {

  return (
    <div className="overallDiv1">
      <div>
        <header className="headerText1">
          JOB NOTIFICATION FORM (2021-2022)
        </header>
      </div>
      <Form onSubmit={handleCreateNewJnf}>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Name of the Company <span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Name_Of_The_Company"
              type="text"
              className="inputText"
              value={companyFormData.Name_Of_The_Company}
              onChange={handleCompanyDataChange}
              autoComplete="off"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Category/Sector<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Category_Or_Sector"
              type="text"
              className="inputText"
              value={companyFormData.Category_Or_Sector}
              onChange={handleCompanyDataChange}
              required
              autoComplete="off"

            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Website<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Website"
              type="text"
              className="inputText"
              value={companyFormData.Website}
              onChange={handleCompanyDataChange}
              autoComplete="off"
              required
            />
          </Col>
        </FormGroup>
        <div>
          <header className="headerText">JOB DETAILS</header>
        </div>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Job Designation<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Job_Designation"
              className="inputText"
              type="text"
              value={jobFormData.Job_Designation}
              onChange={handleJobDataChange}
              required
              autoComplete="off"
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Job Description<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Job_Description"
              type="text"
              className="inputText"
              value={jobFormData.Job_Description}
              onChange={handleJobDataChange}
              required
              autoComplete="off"
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Place of posting<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Place_Of_Posting"
              type="text"
              className="inputText"
              value={jobFormData.Place_Of_Posting}
              onChange={handleJobDataChange}
              required
              autoComplete="off"
            />
          </Col>
        </FormGroup>
        <div>
          <header className="headerText">SALARY DETAILS</header>
        </div>
        <FormGroup row style={style}>
          <Label
            for="exampleText"
            sm={2}
            text-colour="blue"
            className="fontText"
          >
            CTC (in lpa)<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="CTC"
              type="text"
              className="inputText"
              value={salaryFormData.CTC}
              onChange={handleSalaryDataChange}
              required
              autoComplete="off"
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            CTC Breakup<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="CTC_Breakup"
              type="text"
              className="inputText"
              value={salaryFormData.CTC_Breakup}
              onChange={handleSalaryDataChange}
              required
              autoComplete="off"
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Bond Details (if any)<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Bond_Details"
              type="text"
              className="inputText"
              value={salaryFormData.Bond_Details}
              onChange={handleSalaryDataChange}
              required
              autoComplete="off"
            />
          </Col>
        </FormGroup>
        <div
          className="formFlex"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: "1.5rem",
          }}
        >
          <button className="submit_btn" type="submit">
            Save and Continue
          </button>
        </div>
      </Form>
    </div>
  );
};

export default JNF1;
