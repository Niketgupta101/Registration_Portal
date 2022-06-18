import React, { useState } from 'react';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'animate.css';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
// import { getGraduationYear } from '../../../../api/index';
import './JNF1.css';

const style = { alignItems: 'center' };

const extractFields = (data) => {
  let fields = [];
  for (let field in data) {
    fields.push(field);
  }
  return fields;
};

export default function JNF1({ jnfData, handleOnChange, handleUpdateJnf }) {
  const [companyoverview, setCompanyoverview] = useState(false);
  const [internprofile, setInternprofile] = useState(false);
  const [stipenddetail, setStipenddetail] = useState(false);
  const [hrdetail, setHrdetail] = useState(false);
  const [althrdetail, setALtrdetail] = useState(false);
  // const [Year, setYear] = useState(2023);

  function handleHrdetails(e) {
    if (e.target.value === 'YES') setALtrdetail(() => true);
    else setALtrdetail(() => false);
  }

  function submitButton() {
    if (
      jnfData.Job_Details.JD_Job_Designation === '' ||
      jnfData.Job_Details.JD_Job_Description === '' ||
      jnfData.Job_Details.JD_Place_Of_Posting === '' ||
      jnfData.Salary_Details.SD_CTC_In_LPA === '' ||
      jnfData.Salary_Details.SD_CTC === ''
    ) {
      return (
        <button
          className='submit_btn not-allowed-btn'
          disabled
          title='Kindly fill all necessary fields'
          style={{ cursor: 'not-allowed' }}
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

  // useEffect(() => {
  //   async function fetchGraduationYear() {
  //     try {
  //       const { data } = await getGraduationYear();

  //       setYear(data.year);
  //     } catch (error) {}
  //   }
  //   fetchGraduationYear();
  // }, []);

  let companyFields = extractFields(jnfData.Company_Overview);

  return (
    <div className='overallDiv1'>
      <div>
        <header className='headerText1'>
          JOB NOTIFICATION FORM (2022-2023)
        </header>
      </div>
      <Form onSubmit={handleUpdateJnf}>
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
                    <FormGroup row style={style} key={field}>
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
                          // style={{ lineHeight: "0.8" }}
                          value={jnfData.Company_Overview[field]}
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
              <header className='headerText flex-grow-1'>JOB DETAILS</header>
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
                  <Label for='exampleText' sm={3} className='fontText'>
                    Job Designation<span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='JD_Job_Designation'
                      required
                      className='inputText'
                      type='text'
                      value={jnfData.Job_Details.JD_Job_Designation}
                      onChange={(e) =>
                        handleOnChange(
                          'Job_Details',
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
                      name='JD_Job_Description'
                      type='text'
                      required
                      className='inputText'
                      value={jnfData.Job_Details.JD_Job_Description}
                      onChange={(e) =>
                        handleOnChange(
                          'Job_Details',
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
                    Place of posting
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='JD_Place_Of_Posting'
                      type='text'
                      className='inputText'
                      value={jnfData.Job_Details.JD_Place_Of_Posting}
                      onChange={(e) =>
                        handleOnChange(
                          'Job_Details',
                          e.target.name,
                          e.target.value
                        )
                      }
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
              <header className='headerText flex-grow-1'>SALARY DETAILS</header>
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
                    CTC (in LPA) <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      required
                      name='SD_CTC_In_LPA'
                      type='text'
                      className='inputText'
                      value={jnfData.Salary_Details.SD_CTC_In_LPA}
                      onChange={(e) =>
                        handleOnChange(
                          'Salary_Details',
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
                    CTC breakup<span style={{ color: 'red' }}>*</span>
                  </Label>

                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='SD_CTC_Breakup'
                      type='text'
                      className='inputText'
                      value={jnfData.Salary_Details.SD_CTC_Breakup}
                      onChange={(e) =>
                        handleOnChange(
                          'Salary_Details',
                          e.target.name,
                          e.target.value
                        )
                      }
                      autoComplete='off'
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={3} className='fontText'>
                    Bond Details<span style={{ color: 'red' }}>*</span>
                  </Label>

                  <Col sm={9}>
                    <Input
                      id='exampleText'
                      name='SD_Bond_Details'
                      type='text'
                      className='inputText'
                      value={jnfData.Salary_Details.SD_Bond_Details}
                      onChange={(e) =>
                        handleOnChange(
                          'Salary_Details',
                          e.target.name,
                          e.target.value
                        )
                      }
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
                      name='PH_Name'
                      value={jnfData.Primary_Hr.PH_Name}
                      onChange={(e) =>
                        handleOnChange(
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
                      name='PH_Email'
                      value={jnfData.Primary_Hr.PH_Email}
                      onChange={(e) =>
                        handleOnChange(
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
                      name='PH_Mobile'
                      value={jnfData.Primary_Hr.PH_Mobile}
                      onChange={(e) =>
                        handleOnChange(
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
                          name='SH_Name'
                          value={jnfData.Secondary_Hr.SH_Name}
                          onChange={(e) =>
                            handleOnChange(
                              'Secondary_Hr',
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
                          name='SH_Email'
                          value={jnfData.Secondary_Hr.SH_Email}
                          onChange={(e) =>
                            handleOnChange(
                              'Secondary_Hr',
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
                          name='SH_Mobile'
                          value={jnfData.Secondary_Hr.SH_Mobile}
                          onChange={(e) =>
                            handleOnChange(
                              'Secondary_Hr',
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
          className='formFlex d-flex justify-content-center'
          style={{
            display: 'flex',
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
