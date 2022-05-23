import React, { useState } from 'react';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';

import 'animate.css';
<<<<<<< HEAD
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
=======
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf

const style = { alignItems: 'center' };

export default function JNF1({
  setPage,
  companyFormData,
  jobFormData,
  salaryFormData,
  hrDetails,
  handleCompanyDataChange,
  handleJobDataChange,
  handleSalaryDataChange,
  handleHrDetailsChange,
  handleUpdateJnfById,
}) {
<<<<<<< HEAD
  const [companyoverviewjob, setCompanyoverviewjob] = useState(false);
  const [internprofile, setInternprofile] = useState(false);
  const [stipenddetail, setStipenddetail] = useState(false);
=======
  const [companyoverview, setCompanyoverview] = useState(false);
  const [jobdetail, setJobdetail] = useState(false);
  const [salarydetail, setSalarydetail] = useState(false);
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
  const [hrdetail, setHrdetail] = useState(false);
  const [althrdetail, setALtrdetail] = useState(false);

  function handleHrdetails(e) {
    if (e.target.value === 'YES') setALtrdetail(() => true);
    else setALtrdetail(() => false);
  }

  function submitButton() {
    if (
<<<<<<< HEAD
      companyFormData.Name_Of_The_Company === '' ||
=======
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
      companyFormData.Category_Or_Sector === '' ||
      jobFormData.Job_Designation === '' ||
      jobFormData.Job_Description === '' ||
      jobFormData.Place_Of_Posting === '' ||
      salaryFormData.CTC === '' ||
      salaryFormData.CTC_Breakup === '' ||
      salaryFormData.Bond_Details === ''
    ) {
      return (
        <button
          className='submit_btn not-allowed-btn'
          disabled
          title='Kindly fill all necessary fields'
<<<<<<< HEAD
          style={{ cursor: 'not-allowed' }}
=======
          style={{ cursor: 'not-allowed', border: "1px solid red"  }}
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
        >
          Save and Continue
        </button>
      );
    } else {
      return (
        <button className='submit_btn' type='submit'>
          Save and Continue
        </button>
      );
    }
  }

  return (
    <div className='overallDiv1'>
      <div>
        <header className='headerText1'>
          JOB NOTIFICATION FORM (2022-2023)
        </header>
      </div>
      <Form onSubmit={handleUpdateJnfById}>
        <div className='animate__animated animate__fadeInLeft container col-lg-12 col-md-12 category p-0 my-3  '>
          <div
            className='upper'
            onClick={() => {
              setTimeout(() => {
<<<<<<< HEAD
                if (companyoverviewjob) {
                  setCompanyoverviewjob(false);
                } else {
                  setCompanyoverviewjob(true);
=======
                if (companyoverview) {
                  setCompanyoverview(false);
                } else {
                  setCompanyoverview(true);
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                }
              }, 200);
            }}
          >
            <div className='category-heading d-flex'>
              <header className='headerText flex-grow-1'>
<<<<<<< HEAD
                COMPANY overview
              </header>
              <div className='mx-4 p-2 align-self-center'>
                {companyoverviewjob === true ? (
=======
                COMPANY OVERVIEW
              </header>
              <div className='mx-4 p-2 align-self-center'>
                {companyoverview === true ? (
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                  <FaAngleDoubleUp size={30} color='rgb(60, 85, 165)' />
                ) : (
                  <FaAngleDoubleDown size={30} color='rgb(60, 85, 165)' />
                )}
              </div>
            </div>
          </div>
<<<<<<< HEAD
          {companyoverviewjob === true ? (
=======
          {companyoverview === true ? (
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
            <div className='lower p-2 '>
              <div className='p-2 mx-3 animate__animated animate__zoomIn'>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Name of the Company <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      required
                      name='Name_Of_The_Company'
                      type='text'
                      className='inputText'
                      style={{ lineHeight: '0.8' }}
                      value={companyFormData.Name_Of_The_Company}
                      onChange={handleCompanyDataChange}
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Category/Sector<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='Category_Or_Sector'
                      type='text'
                      required
                      className='inputText'
                      value={companyFormData.Category_Or_Sector}
                      onChange={handleCompanyDataChange}
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Website
                    {/* <span style={{ color: "red" }}>*</span> */}
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='Website'
                      type='text'
                      className='inputText'
                      value={companyFormData.Website}
                      onChange={handleCompanyDataChange}
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className='animate__animated animate__fadeInRight container col-lg-12 col-md-12 category p-0 my-3 '>
          <div
            className='upper'
            onClick={() => {
              setTimeout(() => {
<<<<<<< HEAD
                if (internprofile) {
                  setInternprofile(false);
                } else {
                  setInternprofile(true);
=======
                if (jobdetail) {
                  setJobdetail(false);
                } else {
                  setJobdetail(true);
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                }
              }, 200);
            }}
          >
            <div className='category-heading d-flex'>
              <header className='headerText flex-grow-1'>JOB DETAILS</header>
              <div className='mx-4 p-2 align-self-center'>
<<<<<<< HEAD
                {internprofile === true ? (
=======
                {jobdetail === true ? (
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                  <FaAngleDoubleUp size={30} color='rgb(60, 85, 165)' />
                ) : (
                  <FaAngleDoubleDown size={30} color='rgb(60, 85, 165)' />
                )}
              </div>
            </div>
          </div>
<<<<<<< HEAD
          {internprofile === true ? (
=======
          {jobdetail === true ? (
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
            <div className='lower p-2 '>
              <div className='p-2 mx-3 animate__animated animate__zoomIn'>
                <FormGroup row style={style}>
                  <Label for='exampleSelect' sm={3} className='fontText'>
                    Job Designation<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='Job_Designation'
                      className='inputText'
                      required
                      type='text'
                      value={jobFormData.Job_Designation}
                      onChange={handleJobDataChange}
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>

                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Job Description<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='Job_Description'
                      type='text'
                      required
                      className='inputText'
                      value={jobFormData.Job_Description}
                      onChange={handleJobDataChange}
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>

                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Place of posting
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='Place_Of_Posting'
                      type='text'
                      className='inputText'
                      value={jobFormData.Place_Of_Posting}
                      onChange={handleJobDataChange}
                      autoComplete='off'
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

        <div className='animate__animated animate__fadeInLeft container col-lg-12 col-md-12 category p-0 my-3 '>
          <div
            className='upper'
            onClick={() => {
              setTimeout(() => {
<<<<<<< HEAD
                if (stipenddetail) {
                  setStipenddetail(false);
                } else {
                  setStipenddetail(true);
=======
                if (salarydetail) {
                  setSalarydetail(false);
                } else {
                  setSalarydetail(true);
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                }
              }, 200);
            }}
          >
            <div className='category-heading d-flex'>
              <header className='headerText flex-grow-1'>SALARY DETAILS</header>
              <div className='mx-4 p-2 align-self-center'>
<<<<<<< HEAD
                {stipenddetail === true ? (
=======
                {salarydetail === true ? (
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
                  <FaAngleDoubleUp size={30} color='rgb(60, 85, 165)' />
                ) : (
                  <FaAngleDoubleDown size={30} color='rgb(60, 85, 165)' />
                )}
              </div>
            </div>
          </div>
<<<<<<< HEAD
          {stipenddetail === true ? (
=======
          {salarydetail === true ? (
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
            <div className='lower p-2 '>
              <div className='p-2 mx-3 animate__animated animate__zoomIn'>
                <FormGroup row style={style}>
                  <Label
                    for='exampleText'
                    sm={3}
                    text-colour='blue'
                    className='fontText'
                  >
                    CTC (in lpa)<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      required
                      name='CTC'
                      type='text'
                      className='inputText'
                      value={salaryFormData.CTC}
                      onChange={handleSalaryDataChange}
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    CTC Breakup<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='CTC_Breakup'
                      type='text'
                      className='inputText'
                      value={salaryFormData.CTC_Breakup}
                      onChange={handleSalaryDataChange}
                      required
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Bond Details (if any)<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='Bond_Details'
                      type='text'
                      className='inputText'
                      value={salaryFormData.Bond_Details}
                      onChange={handleSalaryDataChange}
                      required
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='animate__animated animate__fadeInRight container col-lg-12 col-md-12 category p-0 my-3 '>
          <div
            className='upper'
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
            <div className='category-heading d-flex'>
              <header className='headerText flex-grow-1'>HR DETAILS</header>
              <div className='mx-4 p-2 align-self-center'>
                {hrdetail === true ? (
                  <FaAngleDoubleUp size={30} color='rgb(60, 85, 165)' />
                ) : (
                  <FaAngleDoubleDown size={30} color='rgb(60, 85, 165)' />
                )}
              </div>
            </div>
          </div>
          {hrdetail === true ? (
            <div className='lower p-2 '>
              <div className='p-2 mx-3 animate__animated animate__zoomIn'>
                <FormGroup row style={style}>
                  <Label
                    for='exampleText'
                    sm={3}
                    text-colour='blue'
                    className='fontText'
                  >
                    Name <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      required
                      name='name'
                      value={hrDetails.Primary_Hr.name}
                      onChange={(e) =>
                        handleHrDetailsChange(
                          'Primary_Hr',
                          e.target.name,
                          e.target.value
                        )
                      }
                      type='text'
                      className='inputText'
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label
                    for='exampleText'
                    sm={3}
                    text-colour='blue'
                    className='fontText'
                  >
                    Email <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      required
                      name='email'
                      value={hrDetails.Primary_Hr.email}
                      onChange={(e) =>
                        handleHrDetailsChange(
                          'Primary_Hr',
                          e.target.name,
                          e.target.value
                        )
                      }
                      type='text'
                      className='inputText'
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label
                    for='exampleText'
                    sm={3}
                    text-colour='blue'
                    className='fontText'
                  >
                    Mobile <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      required
                      name='mobile'
                      value={hrDetails.Primary_Hr.mobile}
                      onChange={(e) =>
                        handleHrDetailsChange(
                          'Primary_Hr',
                          e.target.name,
                          e.target.value
                        )
                      }
                      type='text'
                      className='inputText'
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label
                    for='exampleText'
                    sm={6}
                    text-colour='blue'
                    className='fontText'
                  >
                    Add Alternate HR Details:
                  </Label>

                  <Col sm={6}>
                    <RadioGroup row name='row-radio-buttons-group'>
                      <FormControlLabel
                        value='YES'
                        control={<Radio />}
                        label='YES'
                        onChange={handleHrdetails}
                      />
                      <FormControlLabel
                        value='NO'
                        control={<Radio />}
                        label='NO'
                        onChange={handleHrdetails}
                      />
                    </RadioGroup>
                  </Col>
                </FormGroup>
                {althrdetail && (
                  <div>
                    <FormGroup row style={style}>
                      <Label
                        for='exampleText'
                        sm={3}
                        text-colour='blue'
                        className='fontText'
                      >
                        Name
                      </Label>
                      <Col sm={9}>
                        <Input
                          id='exampleText'
                          required
                          name='name'
                          value={hrDetails.Alternate_Hr.name}
                          onChange={(e) =>
                            handleHrDetailsChange(
                              'Alternate_Hr',
                              e.target.name,
                              e.target.value
                            )
                          }
                          type='text'
                          className='inputText'
                          autoComplete='off'
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row style={style}>
                      <Label
                        for='exampleText'
                        sm={3}
                        text-colour='blue'
                        className='fontText'
                      >
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          id='exampleText'
                          required
                          name='email'
                          value={hrDetails.Alternate_Hr.email}
                          onChange={(e) =>
                            handleHrDetailsChange(
                              'Alternate_Hr',
                              e.target.name,
                              e.target.value
                            )
                          }
                          type='text'
                          className='inputText'
                          autoComplete='off'
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row style={style}>
                      <Label
                        for='exampleText'
                        sm={3}
                        text-colour='blue'
                        className='fontText'
                      >
                        Mobile
                      </Label>
                      <Col sm={9}>
                        <Input
                          id='exampleText'
                          required
                          name='mobile'
                          value={hrDetails.Alternate_Hr.mobile}
                          onChange={(e) =>
                            handleHrDetailsChange(
                              'Alternate_Hr',
                              e.target.name,
                              e.target.value
                            )
                          }
                          type='text'
                          className='inputText'
                          autoComplete='off'
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
        <div
          className='formFlex'
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginTop: '1.5rem',
          }}
        >
          {submitButton()}
        </div>
      </Form>
    </div>
  );
}
