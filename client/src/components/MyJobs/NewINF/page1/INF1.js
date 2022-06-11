import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import './INF1.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'animate.css';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

import { getGraduationYear } from '../../../../api/index';

const style = { alignItems: 'center' };

const extractFields = (data) => {
  let fields = [];

  for (let field in data) {
    fields.push(field);
  }

  return fields;
};

export default function INF1({ infData, handleOnChange, handleUpdateInf }) {
  const [companyoverview, setCompanyoverview] = useState(false);
  const [internprofile, setInternprofile] = useState(false);
  const [stipenddetail, setStipenddetail] = useState(false);
  const [hrdetail, setHrdetail] = useState(false);
  const [althrdetail, setALtrdetail] = useState(false);
  const [Year, setYear] = useState(2023);

  function handleHrdetails(e) {
    if (e.target.value === 'YES') setALtrdetail(() => true);
    else setALtrdetail(() => false);
  }

  function submitButton() {
    if (
      infData.Intern_Profile.IP_Job_Designation === '' ||
      infData.Intern_Profile.IP_Job_Description === '' ||
      infData.Intern_Profile.IP_Place_Of_Posting === '' ||
      infData.Stipend_Details.SD_Salary_Per_Month === '' ||
      infData.Stipend_Details.SD_CTC === ''
    ) {
      return (
        <button
          className='submit_btn not-allowed-btn'
          disabled
          title='Kindly fill all necessary fields'
          style={{ cursor: 'not-allowed', border: '1px solid red' }}
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

  useEffect(() => {
    async function fetchGraduationYear() {
      try {
        const { data } = await getGraduationYear();

        setYear(data.year);
      } catch (error) {}
    }
    fetchGraduationYear();
  }, []);

  let companyFields = extractFields(infData.Company_Overview);

  return (
    <div className='overallDiv1'>
      <div>
        <header className='headerText1'>
          INTERNSHIP NOTIFICATION FORM (2022-2023)
        </header>
      </div>
      <Form onSubmit={handleUpdateInf}>
        <div className='animate__animated animate__fadeInLeft container col-lg-12 col-md-12 category p-0 my-3  '>
          <div
            className='upper'
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
            <div className='category-heading d-flex'>
              <header className='headerText flex-grow-1'>
                COMPANY OVERVIEW
              </header>
              <div className='mx-4 p-2 align-self-center'>
                {companyoverview === true ? (
                  <FaAngleDoubleUp size={30} color='rgb(60, 85, 165)' />
                ) : (
                  <FaAngleDoubleDown size={30} color='rgb(60, 85, 165)' />
                )}
              </div>
            </div>
          </div>
          {companyoverview === true ? (
            <div className='lower p-2 '>
              <div className='p-2 mx-3 animate__animated animate__zoomIn'>
                {companyFields &&
                  companyFields.map((field) => (
                    <FormGroup row style={style}>
                      <Label for='exampleText' sm={3} className='fontText'>
                        {field.split('_').map((word) => (
                          <>{word !== 'CO' && word + ' '}</>
                        ))}{' '}
                        <span style={{ color: 'red' }}>*</span>
                      </Label>
                      <Col sm={9}>
                        <Input
                          id='exampleText'
                          required
                          name={field}
                          type='text'
                          className='inputText'
                          style={{ lineHeight: '0.8' }}
                          value={infData.Company_Overview[field]}
                          disabled={true}
                          onChange={(e) =>
                            handleOnChange(
                              'Company_Overview',
                              e.target.name,
                              e.target.value
                            )
                          }
                          autoComplete='off'
                        />
                      </Col>
                    </FormGroup>
                  ))}
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
                if (internprofile) {
                  setInternprofile(false);
                } else {
                  setInternprofile(true);
                }
              }, 200);
            }}
          >
            <div className='category-heading d-flex'>
              <header className='headerText flex-grow-1'>INTERN PROFILE</header>
              <div className='mx-4 p-2 align-self-center'>
                {internprofile === true ? (
                  <FaAngleDoubleUp size={30} color='rgb(60, 85, 165)' />
                ) : (
                  <FaAngleDoubleDown size={30} color='rgb(60, 85, 165)' />
                )}
              </div>
            </div>
          </div>
          {internprofile === true ? (
            <div className='lower p-2 '>
              <div className='p-2 mx-3 animate__animated animate__zoomIn'>
                <FormGroup row style={style}>
                  <Label for='exampleSelect' sm={3} className='fontText'>
                    Internship Duration<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleSelect'
                      name='Internship_Duration'
                      required
                      type='select'
                      className='inputText'
                      value={infData.Intern_Profile.Internship_Duration}
                      onChange={handleOnChange}
                      autoComplete='off'
                    >
                      <option>May-July {Year}</option>
                      <option>July-Dec {Year}</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Job Designation<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='IP_Job_Designation'
                      required
                      className='inputText'
                      type='text'
                      value={infData.Intern_Profile.IP_Job_Designation}
                      onChange={(e) =>
                        handleOnChange(
                          'Intern_Profile',
                          e.target.name,
                          e.target.value
                        )
                      }
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
                      value={infData.Intern_Profile.Job_Description}
                      onChange={handleOnChange}
                      autoComplete='off'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleSelect' sm={3} className='fontText'>
                    Mode of Internship<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleSelect'
                      name='Mode_Of_Internship'
                      type='select'
                      required
                      className='inputText'
                      value={infData.Intern_Profile.Mode_Of_Internship}
                      onChange={handleOnChange}
                      autoComplete='off'
                    >
                      <option>Virtual</option>
                      <option>Physical</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Place of posting (in case of Physical internship)
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='Place_Of_Posting'
                      type='text'
                      className='inputText'
                      value={infData.Intern_Profile.Place_Of_Posting}
                      onChange={handleOnChange}
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
                if (stipenddetail) {
                  setStipenddetail(false);
                } else {
                  setStipenddetail(true);
                }
              }, 200);
            }}
          >
            <div className='category-heading d-flex'>
              <header className='headerText flex-grow-1'>
                STIPEND DETAILS
              </header>
              <div className='mx-4 p-2 align-self-center'>
                {stipenddetail === true ? (
                  <FaAngleDoubleUp size={30} color='rgb(60, 85, 165)' />
                ) : (
                  <FaAngleDoubleDown size={30} color='rgb(60, 85, 165)' />
                )}
              </div>
            </div>
          </div>
          {stipenddetail === true ? (
            <div className='lower p-2 '>
              <div className='p-2 mx-3 animate__animated animate__zoomIn'>
                <FormGroup row style={style}>
                  <Label
                    for='exampleText'
                    sm={3}
                    text-colour='blue'
                    className='fontText'
                  >
                    Stipend <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={4}>
                    <Input
                      id='exampleText'
                      required
                      name='Salary_Per_Month'
                      type='text'
                      className='inputText'
                      value={infData.Stipend_Details.Salary_Per_Month}
                      onChange={handleOnChange}
                      autoComplete='off'
                    />
                  </Col>
                  <Col sm={5}>
                    <RadioGroup
                      row
                      aria-labelledby='demo-row-radio-buttons-group-label'
                      name='row-radio-buttons-group'
                    >
                      <FormControlLabel
                        value='Per Month'
                        control={<Radio />}
                        label='per Month'
                        name='Salary_Unit'
                        onChange={handleOnChange}
                      />
                      <FormControlLabel
                        value='Total '
                        control={<Radio />}
                        label='Total'
                        name='Salary_Unit'
                        onChange={handleOnChange}
                      />
                    </RadioGroup>
                  </Col>
                </FormGroup>

                <FormGroup row style={style}>
                  <Label for='exampleSelect' sm={3} className='fontText'>
                    PPO provision on performance basis
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleSelect'
                      name='PPO_provision_on_performance_basis'
                      type='select'
                      required
                      className='inputText'
                      value={
                        infData.Stipend_Details
                          .PPO_provision_on_performance_basis
                      }
                      onChange={handleOnChange}
                      autoComplete='off'
                    >
                      <option value='' selected='selected' disabled hidden>
                        Choose here
                      </option>
                      <option>Yes</option>
                      <option>No</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    CTC for PPO selects<span style={{ color: 'red' }}>*</span>
                  </Label>

                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='CTC'
                      type='text'
                      className='inputText'
                      value={infData.Stipend_Details.CTC}
                      onChange={handleOnChange}
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
                      value={infData.Primary_Hr.name}
                      onChange={handleOnChange}
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
                      value={infData.Primary_Hr.email}
                      onChange={handleOnChange}
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
                      value={infData.Primary_Hr.mobile}
                      onChange={handleOnChange}
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
                          value={infData.Alternate_Hr.name}
                          onChange={handleOnChange}
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
                          value={infData.Alternate_Hr.email}
                          onChange={handleOnChange}
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
                          value={infData.Alternate_Hr.mobile}
                          onChange={handleOnChange}
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

// export default INF1;