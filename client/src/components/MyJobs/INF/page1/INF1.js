import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

import "./INF1.css";

const style = { alignItems: "center" };

const INF1 = ({
  companyFormData,
  jobFormData,
  stipendFormData,
  handleCompanyDataChange,
  handleJobDataChange,
  handleStipendDataChange,
  handleCreateNewInf
}) => {

  return (
    <div className="overallDiv1">
      <div>
        <header className="headerText1">
          INTERNSHIP NOTIFICATION FORM (2021-2022)
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
          <header className="headerText">INTERN PROFILE</header>
        </div>
        <FormGroup row style={style}>
          <Label for="exampleSelect" sm={2} className="fontText">
            Internship Duration
          </Label>
          <Col sm={10}>
            <Input
              id="exampleSelect"
              name="Internship_Duration"
              type="select"
              className="inputText"
              value={jobFormData.Internship_Duration}
              onChange={handleJobDataChange}
            >
              <option>
                Jan – June 2022 Dual Degree/ Integrated M. Tech courses only
                (2022 batch)
              </option>
              <option>
                May – July 2022 Pre-final year students of ALL courses (2023
                batch)
              </option>
              <option>
                July – Dec 2022 M. Tech/ MBA – Business Analytics courses only
                (2023 batch)
              </option>
            </Input>
          </Col>
        </FormGroup>
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
          <Label for="exampleSelect" sm={2} className="fontText">
            Mode of Internship
          </Label>
          <Col sm={10}>
            <Input
              id="exampleSelect"
              name="Mode_Of_Internship"
              type="select"
              className="inputText"
              value={jobFormData.Mode_Of_Internship}
              onChange={handleJobDataChange}
            >
              <option>Virtual</option>
              <option>Physical</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Place of posting (in case of Physical internship)
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
          <header className="headerText">STIPEND DETAILS</header>
        </div>
        <FormGroup row style={style}>
          <Label
            for="exampleText"
            sm={2}
            text-colour="blue"
            className="fontText"
          >
            Stipend per month
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Salary_Per_Month"
              type="text"
              className="inputText"
              value={stipendFormData.Salary_Per_Month}
              onChange={handleStipendDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleSelect" sm={2} className="fontText">
            PPO provision on performance basis
          </Label>
          <Col sm={10}>
            <Input
              id="exampleSelect"
              name="PPO_provision_on_performance_basis"
              type="select"
              className="inputText"
              value={stipendFormData.PPO_provision_on_performance_basis}
              onChange={handleStipendDataChange}
            >
              <option>Yes</option>
              <option>No</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            CTC for PPO selects
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="CTC"
              type="text"
              className="inputText"
              value={stipendFormData.CTC}
              onChange={handleStipendDataChange}
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

export default INF1;
