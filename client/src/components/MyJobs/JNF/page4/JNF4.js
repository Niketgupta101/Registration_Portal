import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

import "./JNF4.css";

const JNF4 = ({
  setPage,
  resumeShortListingData,
  typeOfTestData,
  otherQualificationsRoundData,
  selectionFormData,
  handleResumeShortListingChange,
  handleTypeOfTestChange,
  handleOtherQualificationsRoundChange,
  handleSelectionDataChange,
  handleUpdateJnfById,
}) => {
  return (
    <div className="overallDiv1">
      <Form>
        <div>
          <header className="headerText">SELECTION PROCEDURE</header>
        </div>
        <table>
          <tbody id="Selection_Procedure">
            <tr
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <td
                className="fontText"
                style={{ fontWeight: "700", margin: "0.5rem auto" }}
              >
                Resume Shortlisting
              </td>
              <td>
                <hr />
              </td>
              <td style={{ flexBasis: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="align">
                    <label className="resume">Yes</label>
                    <input
                      className="checkBox"
                      name="Yes"
                      value={resumeShortListingData.Yes}
                      onChange={handleResumeShortListingChange}
                      type="checkbox"
                    />
                  </div>
                  <div className="align">
                    <label className="resume">No</label>
                    <input
                      className="checkBox"
                      name="No"
                      value={resumeShortListingData.No}
                      onChange={handleResumeShortListingChange}
                      type="checkbox"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <td
                className="fontText"
                style={{ fontWeight: "700", margin: "0.5rem auto" }}
              >
                Type of Test
              </td>
              <td>
                <hr />
              </td>
              <td style={{ flexBasis: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <label className="type">Technical </label>
                    <input
                      className="checkBox"
                      name="Technical"
                      value={typeOfTestData.Technical}
                      onChange={handleTypeOfTestChange}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label className="type">Aptitude </label>
                    <input
                      className="checkBox"
                      name="Aptitude"
                      value={typeOfTestData.Aptitude}
                      onChange={handleTypeOfTestChange}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label className="type">Both</label>
                    <input
                      className="checkBox"
                      name="Technical_and_Aptitude"
                      value={typeOfTestData.Both}
                      onChange={handleTypeOfTestChange}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label className="type">None </label>
                    <input
                      className="checkBox"
                      name="None"
                      value={typeOfTestData.None}
                      onChange={handleTypeOfTestChange}
                      type="checkbox"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <td
                className="fontText"
                style={{ fontWeight: "700", margin: "0.5rem auto" }}
              >
                Other Qualification Rounds
              </td>
              <td>
                <hr />
              </td>
              <td style={{ flexBasis: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="align">
                    <label className="round">GD </label>
                    <input
                      className="checkBox"
                      name="GD"
                      value={otherQualificationsRoundData.GD}
                      onChange={handleOtherQualificationsRoundChange}
                      type="checkbox"
                    />
                  </div>
                  <div className="align">
                    <label className="round"> Case Study</label>
                    <input
                      className="checkBox"
                      name="Case_Study"
                      value={otherQualificationsRoundData.Case_Study}
                      onChange={handleOtherQualificationsRoundChange}
                      type="checkbox"
                    />
                  </div>
                  <div className="align">
                    <label className="round">Interview </label>
                    <input
                      className="checkBox"
                      name="Interview"
                      value={otherQualificationsRoundData.Interview}
                      onChange={handleOtherQualificationsRoundChange}
                      type="checkbox"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <FormGroup row>
          <Label for="exampleText" sm={2} className="fontText">
            Total number of rounds
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Total_Number_Of_Rounds"
              type="text"
              className="inputText"
              value={selectionFormData.Total_Number_Of_Rounds}
              onChange={handleSelectionDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2} className="fontText">
            Number of offers available for IIT(ISM) students (Range would be
            sufficient)
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Number_Of_Offers"
              type="text"
              className="inputText"
              value={selectionFormData.Number_Of_Offers}
              onChange={handleSelectionDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2} className="fontText">
            Eligibility Criteria (if any)
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="Eligibility_Criteria"
              className="inputText"
              type="text"
              value={selectionFormData.Eligibility_Criteria}
              onChange={handleSelectionDataChange}
            />
          </Col>
        </FormGroup>
        <div className="flex">
          <button
            className="submit_btn"
            onClick={(e) => e.preventDefault() / setPage("3")}
          >
            Back
          </button>
          <button className="submit_btn" onClick={handleUpdateJnfById}>
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default JNF4;
