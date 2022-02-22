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
  handleCreateNewInf
}) => {

  return (
    <div className="overallDiv1">
      <div>
        <header className="headerText1">
          JOB NOTIFICATION FORM (2021-2022)
        </header>
      </div>
      <Form onSubmit={handleCreateNewInf}>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Name of the Company
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Name_Of_The_Company"
              type="text"
              className="inputText"
              value={companyFormData.Name_Of_The_Company}
              onChange={handleCompanyDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Category/Sector
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Category_Or_Sector"
              type="text"
              className="inputText"
              value={companyFormData.Category_Or_Sector}
              onChange={handleCompanyDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Website
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Website"
              type="text"
              className="inputText"
              value={companyFormData.Website}
              onChange={handleCompanyDataChange}
            />
          </Col>
        </FormGroup>
        <div>
          <header className="headerText">JOB DETAILS</header>
        </div>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Job Designation
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Job_Designation"
              className="inputText"
              type="text"
              value={jobFormData.Job_Designation}
              onChange={handleJobDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Job Description
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Job_Description"
              type="text"
              className="inputText"
              value={jobFormData.Job_Description}
              onChange={handleJobDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Place of posting
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Place_Of_Posting"
              type="text"
              className="inputText"
              value={jobFormData.Place_Of_Posting}
              onChange={handleJobDataChange}
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
            CTC (in lpa)
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="CTC"
              type="text"
              className="inputText"
              value={salaryFormData.CTC}
              onChange={handleSalaryDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            CTC Breakup
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="CTC_Breakup"
              type="text"
              className="inputText"
              value={salaryFormData.CTC_Breakup}
              onChange={handleSalaryDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Bond Details (if any)
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Bond_Details"
              type="text"
              className="inputText"
              value={salaryFormData.Bond_Details}
              onChange={handleSalaryDataChange}
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
