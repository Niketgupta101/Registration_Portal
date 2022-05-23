<<<<<<< HEAD
import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";
=======
import React from 'react';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';


>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf

const JNF4 = ({
  setPage,
  resumeShortListingData,
  typeOfTestData,
  otherQualificationRoundsData,
  selectionFormData,
  handleResumeShortListingChange,
  handleTypeOfTestChange,
  handleOtherQualificationRoundsChange,
  handleSelectionDataChange,
  handleUpdateJnfById,
}) => {
  return (
<<<<<<< HEAD
    <div className="overallDiv1">
      <Form>
        <div>
          <div class="ug-pg m-0 p-0">
            <h1 className="ug-pg-h1"> 
              Selection Procedure
              <span className="ug-pg-span">
                <b> Fill necessary details</b>{" "}
=======
    <div className='overallDiv1'>
      <Form onSubmit={handleUpdateJnfById}>
        <div>
          <div class='ug-pg m-0 p-0'>
            <h1 className='ug-pg-h1'>
              Selection Procedure
              <span className='ug-pg-span'>
                <b> Fill necessary details</b>{' '}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
              </span>
            </h1>
          </div>
        </div>

        <table>
<<<<<<< HEAD
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
=======
          <tbody id='Selection_Procedure'>
            <tr
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <td
                className='fontText'
                style={{ fontWeight: '700', margin: '0.5rem auto' }}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
              >
                Resume Shortlisting
              </td>
              <td>
                <hr />
              </td>
<<<<<<< HEAD
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
=======
              <td style={{ flexBasis: '70%' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className='align'>
                    <label className='resume'>Yes</label>
                    <input
                      className='checkBox'
                      name='Yes'
                      value={resumeShortListingData.Yes}
                      onChange={handleResumeShortListingChange}
                      type='checkbox'
                    />
                  </div>
                  <div className='align'>
                    <label className='resume'>No</label>
                    <input
                      className='checkBox'
                      name='No'
                      value={resumeShortListingData.No}
                      onChange={handleResumeShortListingChange}
                      type='checkbox'
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr
              style={{
<<<<<<< HEAD
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <td
                className="fontText"
                style={{ fontWeight: "700", margin: "0.5rem auto" }}
=======
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <td
                className='fontText'
                style={{ fontWeight: '700', margin: '0.5rem auto' }}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
              >
                Type of Test
              </td>
              <td>
                <hr />
              </td>
<<<<<<< HEAD
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
=======
              <td style={{ flexBasis: '70%' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <label className='type'>Technical </label>
                    <input
                      className='checkBox'
                      name='Technical'
                      value={typeOfTestData.Technical}
                      onChange={handleTypeOfTestChange}
                      type='checkbox'
                    />
                  </div>
                  <div>
                    <label className='type'>Aptitude </label>
                    <input
                      className='checkBox'
                      name='Aptitude'
                      value={typeOfTestData.Aptitude}
                      onChange={handleTypeOfTestChange}
                      type='checkbox'
                    />
                  </div>
                  <div>
                    <label className='type'>Both</label>
                    <input
                      className='checkBox'
                      name='Both'
                      value={typeOfTestData.Both}
                      onChange={handleTypeOfTestChange}
                      type='checkbox'
                    />
                  </div>
                  <div>
                    <label className='type'>None </label>
                    <input
                      className='checkBox'
                      name='None'
                      value={typeOfTestData.None}
                      onChange={handleTypeOfTestChange}
                      type='checkbox'
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr
              style={{
<<<<<<< HEAD
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <td
                className="fontText"
                style={{ fontWeight: "700", margin: "0.5rem auto" }}
=======
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <td
                className='fontText'
                style={{ fontWeight: '700', margin: '0.5rem auto' }}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
              >
                Other Qualification Rounds
              </td>
              <td>
                <hr />
              </td>
<<<<<<< HEAD
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
=======
              <td style={{ flexBasis: '70%' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className='align'>
                    <label className='round'>GD </label>
                    <input
                      className='checkBox'
                      name='GD'
                      value={otherQualificationRoundsData.GD}
                      onChange={handleOtherQualificationRoundsChange}
                      type='checkbox'
                    />
                  </div>
                  <div className='align'>
                    <label className='round'> Case Study</label>
                    <input
                      className='checkBox'
                      name='Case_Study'
                      value={otherQualificationRoundsData.Case_Study}
                      onChange={handleOtherQualificationRoundsChange}
                      type='checkbox'
                    />
                  </div>
                  <div className='align'>
                    <label className='round'>Interview </label>
                    <input
                      className='checkBox'
                      name='Interview'
                      value={otherQualificationRoundsData.Interview}
                      onChange={handleOtherQualificationRoundsChange}
                      type='checkbox'
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <FormGroup row>
<<<<<<< HEAD
          <Label for="exampleText" sm={5} className="fontText">
            Total number of rounds<span style={{ color: "red" }}>*</span>
          </Label>
          <Col sm={7}>
            <Input
              id="exampleText"
              name="Total_Number_Of_Rounds"
              type="text"
              className="inputText"
=======
          <Label for='exampleText' sm={5} className='fontText'>
            Total number of rounds<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={7}>
            <Input
              id='exampleText'
              name='Total_Number_Of_Rounds'
              type='text'
              className='inputText'
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
              value={selectionFormData.Total_Number_Of_Rounds}
              onChange={handleSelectionDataChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
<<<<<<< HEAD
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
=======
          <Label for='exampleText' sm={5} className='fontText'>
            Number of offers available for IIT(ISM) students (Range would be
            sufficient)<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={7}>
            <Input
              id='exampleText'
              name='Number_Of_Offers'
              required
              type='text'
              className='inputText'
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
              value={selectionFormData.Number_Of_Offers}
              onChange={handleSelectionDataChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
<<<<<<< HEAD
          <Label for="exampleText" sm={5} className="fontText">
=======
          <Label for='exampleText' sm={5} className='fontText'>
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
            Eligibility Criteria (if any)
          </Label>
          <Col sm={7}>
            <Input
<<<<<<< HEAD
              id="exampleText"
              name="Eligibility_Criteria"
              className="inputText"
              type="text"
=======
              id='exampleText'
              name='Eligibility_Criteria'
              className='inputText'
              type='text'
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
              value={selectionFormData.Eligibility_Criteria}
              onChange={handleSelectionDataChange}
            />
          </Col>
        </FormGroup>
<<<<<<< HEAD
        <div className="flex">
          <button
            className="submit_btn"
            onClick={(e) => e.preventDefault() / setPage("3")}
          >
            Back
          </button>
          <button className="submit_btn" onClick={handleUpdateJnfById}>
            Submit
=======
        <div className='flex'>
          <button
            className='submit_btn'
            onClick={(e) => e.preventDefault() / setPage('2')}
          >
            Back
          </button>
          <button className='submit_btn' type='submit'>
            Review and Submit
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
          </button>
        </div>
      </Form>
    </div>
  );
};

export default JNF4;
