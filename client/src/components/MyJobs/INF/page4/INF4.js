import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./INF4.css";

const INF4 = ({
  setPage,
  resumeShortListingData,
  typeOfTestData,
  otherQualificationRoundsData,
  selectionFormData,
  priorityFormData,
  handlePriorityDataChange,
  handleResumeShortListingChange,
  handleTypeOfTestChange,
  handleOtherQualificationRoundsChange,
  handleSelectionDataChange,
  handleUpdateInfById,
}) => {
  const dates = [
    "1st Dec to 10th Dec'22",
    "11th Dec to 24th Dec'22",
    "2nd Jan to 15th Jan'23",
    "16th Jan to 31st Jan'23",
  ];
  return (
    <div className="overallDiv1">
      <Form onSubmit={handleUpdateInfById}>
        <div>
          <div class="ug-pg m-0 p-0">
            <h1 className="ug-pg-h1">
              Selection Procedure
              <span className="ug-pg-span">
                <b> Fill necessary details</b>{" "}
              </span>
            </h1>
          </div>
        </div>

        <table className="my-3">
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
                      value={0}
                      name="resumeShortlisting"
                      checked={resumeShortListingData.Yes}
                      onChange={handleResumeShortListingChange}
                      type="radio"
                    />
                  </div>
                  <div className="align">
                    <label className="resume">No</label>
                    <input
                      className="checkBox"
                      value={1}
                      name="resumeShortlisting"
                      checked={resumeShortListingData.No}
                      onChange={handleResumeShortListingChange}
                      type="radio"
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
                      name="Type_of_Test"
                      value={0}
                      checked={typeOfTestData.Technical}
                      onChange={handleTypeOfTestChange}
                      type="radio"
                    />
                  </div>
                  <div>
                    <label className="type">Aptitude </label>
                    <input
                      className="checkBox"
                      name="Type_of_Test"
                      value={1}
                      checked={typeOfTestData.Aptitude}
                      onChange={handleTypeOfTestChange}
                      type="radio"
                    />
                  </div>
                  <div>
                    <label className="type">Both</label>
                    <input
                      className="checkBox"
                      name="Type_of_Test"
                      value={2}
                      checked={typeOfTestData.Both}
                      onChange={handleTypeOfTestChange}
                      type="radio"
                    />
                  </div>
                  <div>
                    <label className="type">None </label>
                    <input
                      className="checkBox"
                      name="Type_of_Test"
                      value={3}
                      checked={typeOfTestData.None}
                      onChange={handleTypeOfTestChange}
                      type="radio"
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
                      value={otherQualificationRoundsData.GD}
                      onChange={handleOtherQualificationRoundsChange}
                      type="checkbox"
                    />
                  </div>
                  <div className="align">
                    <label className="round"> Case Study</label>
                    <input
                      className="checkBox"
                      name="Case_Study"
                      value={otherQualificationRoundsData.Case_Study}
                      onChange={handleOtherQualificationRoundsChange}
                      type="checkbox"
                    />
                  </div>
                  <div className="align">
                    <label className="round">Interview </label>
                    <input
                      className="checkBox"
                      name="Interview"
                      value={otherQualificationRoundsData.Interview}
                      onChange={handleOtherQualificationRoundsChange}
                      type="checkbox"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <FormGroup row>
          <Label for="exampleText" sm={5} className="fontText">
            Total number of rounds<span style={{ color: "red" }}>*</span>
          </Label>
          <Col sm={7}>
            <Input
              id="exampleText"
              name="Total_Number_Of_Rounds"
              type="text"
              className="inputText"
              value={selectionFormData.Total_Number_Of_Rounds}
              onChange={handleSelectionDataChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={5} className="fontText">
            Number of offers available for IIT(ISM) students (Range would be
            sufficient)<span style={{ color: "red" }}>*</span>
          </Label>
          <Col sm={7}>
            <Input
              id="exampleText"
              name="Number_Of_Offers"
              required
              type="text"
              className="inputText"
              value={selectionFormData.Number_Of_Offers}
              onChange={handleSelectionDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={5} className="fontText">
            Eligibility Criteria (if any)
          </Label>
          <Col sm={7}>
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
        <hr />
        <div className="my-5">
          <div class="ug-pg m-0 p-0">
            <h1 className="ug-pg-h1">
              Tentative Dates for Tests and Interviews:
              <span className="ug-pg-span">
                <b> Fill your priority accordingly</b>{" "}
              </span>
            </h1>
          </div>
        </div>
        <div className="row">
          <Col sm={6}>
            <div className="d-flex justify-content-center">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Priority 1
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >{
                  dates.map((date)=>(
                    <div className="optionPriority">
                    <input
                      value={date}
                      type="radio"                      
                      name="Priority_One"
                      onChange={handlePriorityDataChange}
                      className="radioOption"
                    />{date}
                    </div>

                  ))
                }              
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
          <Col sm={6}>
            <div className="d-flex justify-content-center">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Priority 2
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >{
                  dates.map((date)=>(
                    <div className="optionPriority">
                      {console.log(date)}
                    <input
                      value={date}
                      type="radio"                      
                      name="Priority_Two"
                      onChange={handlePriorityDataChange}
                    />{date}
                    </div>

                  ))
                }
                
               
                  {console.log("pp=", priorityFormData)}
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
        </div>
        <div className="flex">
          <button
            className="submit_btn"
            onClick={(e) => e.preventDefault() / setPage("2")}
          >
            Back
          </button>
          <button className="submit_btn" type="submit">
            
            Review and Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default INF4;
