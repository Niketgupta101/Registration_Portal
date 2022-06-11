import React from 'react';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import './INF4.css';

const INF4 = ({ setPage, infData, handleOnChange, handleUpdateinf }) => {
  const dates = [
    "1st Dec to 10th Dec'22",
    "11th Dec to 24th Dec'22",
    "2nd Jan to 15th Jan'23",
    "16th Jan to 31st Jan'23",
  ];
  return (
    <div className='overallDiv1'>
      <Form onSubmit={handleUpdateinf}>
        <div>
          <div className='ug-pg m-0 p-0'>
            <h1 className='ug-pg-h1'>
              Selection Procedure
              <span className='ug-pg-span'>
                <b> Fill necessary details</b>{' '}
              </span>
            </h1>
          </div>
        </div>
        <div className='border my-4'>
          <div className='h5 text-center'>
            Online / Written Test, GD etc. for Placement and shortlisting for
            Day0/1
          </div>
          <div className='h5 text-center'>15 Jul 2022 - 14 Aug 2022</div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Stages</TableCell>
                <TableCell>IIT ISM PLACEMENT CALENDAR</TableCell>
                <TableCell>Mode of Hiring</TableCell>
                <TableCell>Preferred Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='Pre-Placement-Talk'>
                <TableCell component='th' scope='row'>
                  Pre-Placement Talk
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby='demo-radio-buttons-group-label'
                      defaultValue='None'
                      name='radio-buttons-group'
                    >
                      <FormControlLabel
                        size='small'
                        value='Virtual'
                        control={<Radio size='small' />}
                        label=' Virtual'
                      />
                      <FormControlLabel
                        size='small'
                        value='Campus Visit'
                        control={<Radio size='small' />}
                        label=' Campus Visit'
                      />
                      <FormControlLabel
                        size='small'
                        value='Not Applicable'
                        control={<Radio size='small' />}
                        label=' Not Applicable'
                      />
                    </RadioGroup>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <div>
                    <TextField
                      label='DD-MM-YYYY'
                      id='outlined-size-small'
                      defaultValue=''
                      size='small'
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key='Resume-Shortlisting'>
                <TableCell component='th' scope='row'>
                  Resume Shortlisting
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby='demo-radio-buttons-group-label'
                      defaultValue='None'
                      name='radio-buttons-group'
                    >
                      <FormControlLabel
                        size='small'
                        value='Virtual'
                        control={<Radio size='small' />}
                        label=' Virtual'
                      />
                      <FormControlLabel
                        size='small'
                        value='Campus Visit'
                        control={<Radio size='small' />}
                        label=' Campus Visit'
                      />
                      <FormControlLabel
                        size='small'
                        value='Not Applicable'
                        control={<Radio size='small' />}
                        label=' Not Applicable'
                      />
                    </RadioGroup>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <div>
                    <TextField
                      label='DD-MM-YYYY'
                      defaultValue=''
                      size='small'
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key='Online-Written-Test'>
                <TableCell component='th' scope='row'>
                  Online/Written Test
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby='demo-radio-buttons-group-label'
                      defaultValue='None'
                      name='radio-buttons-group'
                    >
                      <FormControlLabel
                        size='small'
                        value='Virtual'
                        control={<Radio size='small' />}
                        label=' Virtual'
                      />
                      <FormControlLabel
                        size='small'
                        value='Campus Visit'
                        control={<Radio size='small' />}
                        label=' Campus Visit'
                      />
                      <FormControlLabel
                        size='small'
                        value='Not Applicable'
                        control={<Radio size='small' />}
                        label=' Not Applicable'
                      />
                    </RadioGroup>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <div>
                    <TextField
                      label='DD-MM-YYYY'
                      id='outlined-size-small'
                      defaultValue=''
                      size='small'
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key='Group-Discussion'>
                <TableCell component='th' scope='row'>
                  Group Discussion
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby='demo-radio-buttons-group-label'
                      defaultValue='None'
                      name='radio-buttons-group'
                    >
                      <FormControlLabel
                        size='small'
                        value='Virtual'
                        control={<Radio size='small' />}
                        label=' Virtual'
                      />
                      <FormControlLabel
                        size='small'
                        value='Campus Visit'
                        control={<Radio size='small' />}
                        label=' Campus Visit'
                      />
                      <FormControlLabel
                        size='small'
                        value='Not Applicable'
                        control={<Radio size='small' />}
                        label=' Not Applicable'
                      />
                    </RadioGroup>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <div>
                    <TextField
                      label='DD-MM-YYYY'
                      defaultValue=''
                      size='small'
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key='Personal-Interview'>
                <TableCell component='th' scope='row'>
                  Personal Interview
                </TableCell>
                <TableCell> 17-Aug-2022 onwards</TableCell>
                <TableCell>
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby='demo-radio-buttons-group-label'
                      defaultValue='None'
                      name='radio-buttons-group'
                    >
                      <FormControlLabel
                        size='small'
                        value='Virtual'
                        control={<Radio size='small' />}
                        label=' Virtual'
                      />
                      <FormControlLabel
                        size='small'
                        value='Campus Visit'
                        control={<Radio size='small' />}
                        label=' Campus Visit'
                      />
                      <FormControlLabel
                        size='small'
                        value='Not Applicable'
                        control={<Radio size='small' />}
                        label=' Not Applicable'
                      />
                    </RadioGroup>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <div>
                    <TextField
                      label='DD-MM-YYYY'
                      id='outlined-size-small'
                      defaultValue=''
                      size='small'
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key='Any-other-rounds'>
                <TableCell component='th' scope='row'>
                  Any other rounds
                </TableCell>
                <TableCell> \</TableCell>
                <TableCell>
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby='demo-radio-buttons-group-label'
                      defaultValue='None'
                      name='radio-buttons-group'
                    >
                      <FormControlLabel
                        size='small'
                        value='Virtual'
                        control={<Radio size='small' />}
                        label=' Virtual'
                      />
                      <FormControlLabel
                        size='small'
                        value='Campus Visit'
                        control={<Radio size='small' />}
                        label=' Campus Visit'
                      />
                      <FormControlLabel
                        size='small'
                        value='Not Applicable'
                        control={<Radio size='small' />}
                        label=' Not Applicable'
                      />
                    </RadioGroup>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <div>
                    <TextField
                      label='DD-MM-YYYY'
                      defaultValue=''
                      size='small'
                    />
                  </div>
                </TableCell>
              </TableRow>
              {/* <TableRow> */}

              {/* </TableRow> */}
            </TableBody>
          </Table>
          <div className='m-3'>
            <b>
              Although it is completely your discretion to choose the modality
              of the intern hiring process, the Institute is encouraging the
              hiring companies to conduct the process through online mode for
              keeping it seamless and efficiently manageable.
            </b>
          </div>
          <div className='mx-3'>
            <p>
              * If the recruiter wish to conduct Final Interview for Intern hire
              between 17-Aug-2022 and 31-Aug-2022, entire process (mode of
              hiring) will have to be virtual.
            </p>
          </div>
        </TableContainer>

        <FormGroup row className='mt-5'>
          <Label for='exampleText' sm={5} className='fontText'>
            Total number of rounds<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={7}>
            <Input
              id='exampleText'
              name='SPS_Total_Number_Of_Rounds'
              type='text'
              className='inputText'
              value={infData.Selection_Procedure.SPS_Total_Number_Of_Rounds}
              onChange={(e) =>
                handleOnChange(
                  'Selection_Procedure',
                  e.target.name,
                  e.target.value
                )
              }
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Number of offers available for IIT(ISM) students (Range would be
            sufficient)<span style={{ color: 'red' }}>*</span>
          </Label>
          <Col sm={7}>
            <Input
              id='exampleText'
              name='SPS_Number_Of_Offers'
              required
              type='text'
              className='inputText'
              value={infData.Selection_Procedure.SPS_Number_Of_Offers}
              onChange={(e) =>
                handleOnChange(
                  'Selection_Procedure',
                  e.target.name,
                  e.target.value
                )
              }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Eligibility Criteria (if any)
          </Label>
          <Col sm={7}>
            <Input
              id='exampleText'
              name='SPS_Eligibility_Criteria'
              className='inputText'
              type='text'
              value={infData.Selection_Procedure.SPS_Eligibility_Criteria}
              onChange={(e) =>
                handleOnChange(
                  'Selection_Procedure',
                  e.target.name,
                  e.target.value
                )
              }
            />
          </Col>
        </FormGroup>

        {/* <table className="my-3">
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
        </table> */}

        {/* <hr />
        <div className="my-5">
          <div className="ug-pg m-0 p-0">
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
                >
                  {dates.map((date) => (
                    <div className="optionPriority">
                      <input
                        value={date}
                        type="radio"
                        name="Priority_One"
                        onChange={handlePriorityDataChange}
                        className="radioOption"
                      />
                      {date}
                    </div>
                  ))}
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
                >
                  {dates.map((date) => (
                    <div className="optionPriority">
                      <input
                        value={date}
                        type="radio"
                        name="Priority_Two"
                        onChange={handlePriorityDataChange}
                      />
                      {date}
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
        </div> */}
        <div className='flex'>
          <button
            className='submit_btn'
            onClick={(e) => e.preventDefault() / setPage('2')}
          >
            Back
          </button>
          <button className='submit_btn' type='submit'>
            Review and Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default INF4;
