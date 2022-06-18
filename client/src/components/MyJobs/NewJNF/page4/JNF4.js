import React, { useState } from 'react';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import './JNF4.css';

const ModeOfHiring = (mode, handleOnChange) => {
  return (
    <TableCell>
      <FormControl>
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
            onClick={(e) =>
              handleOnChange('Selection_Procedure', mode, e.target.value)
            }
            required
          />
          <FormControlLabel
            size='small'
            value='Campus Visit'
            control={<Radio size='small' />}
            label=' Campus Visit'
            onClick={(e) =>
              handleOnChange('Selection_Procedure', mode, e.target.value)
            }
            required
          />
          <FormControlLabel
            size='small'
            value='Not Applicable'
            control={<Radio size='small' />}
            label=' Not Applicable'
            onClick={(e) =>
              handleOnChange('Selection_Procedure', mode, e.target.value)
            }
            required
          />
        </RadioGroup>
      </FormControl>
    </TableCell>
  );
};

const PreferredDate = (date, handleOnChange) => {
  return (
    <TableCell>
      <div>
        <TextField
          id='outlined-size-small'
          defaultValue=''
          size='small'
          type='date'
          onChange={(e) =>
            handleOnChange('Selection_Procedure', date, e.target.value)
          }
          // required
        />
      </div>
    </TableCell>
  );
};

const ScheduleEntry = (Header, time, modeField, dateField, handleOnChange) => {
  return (
    <TableRow key={Header}>
      <TableCell component='th' scope='row'>
        {Header}
      </TableCell>
      <TableCell> {time} </TableCell>
      {ModeOfHiring(modeField, handleOnChange)}
      {PreferredDate(dateField, handleOnChange)}
    </TableRow>
  );
};

const JNF4 = ({ setPage, jnfData, handleOnChange, handleUpdateJnf }) => {
  return (
    <div className='overallDiv1'>
      <Form onSubmit={handleUpdateJnf}>
        <div>
          <div className='ug-pg m-0 p-0 bg-transparent'>
            <h1 className='ug-pg-h1'>
              Selection Procedure
              <span className='ug-pg-span'>
                <b> Fill necessary details</b>{' '}
              </span>
            </h1>
          </div>
        </div>
        <div className='border border-dark my-4'>
          <div className='h5 text-center mt-2'>
            Online / Written Test, GD etc. for Placement and shortlisting for
            Day0/1
          </div>
          <div className='h5 text-center'>15 Jul 2022 - 14 Aug 2022</div>
        </div>
        <TableContainer component={Paper} className='bg-transparent'>
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
              {ScheduleEntry(
                'Pre-Placement Talk',
                '15-Jul-2022 onwards',
                'SPS_Pre_Placement_Talk_Mode',
                'SPS_Pre_Placement_Talk_Date',
                handleOnChange
              )}
              {ScheduleEntry(
                'Resume Shortlisting',
                '15-Jul-2022 onwards',
                'SPS_Resume_Shortlisting_Mode',
                'SPS_Resume_Shortlisting_Date',
                handleOnChange
              )}
              {ScheduleEntry(
                'Online/Written Test',
                '15-Jul-2022 onwards',
                'SPS_Online_Written_Test_Mode',
                'SPS_Online_Written_Test_Date',
                handleOnChange
              )}
              {ScheduleEntry(
                'Group Discussion',
                '15-Jul-2022 onwards',
                'SPS_Group_Discussion_Mode',
                'SPS_Group_Discussion_Date',
                handleOnChange
              )}
              {ScheduleEntry(
                'Personal Interview',
                '17-Aug-2022 onwards',
                'SPS_Personal_Interview_Mode',
                'SPS_Personal_Interview_Date',
                handleOnChange
              )}
              {ScheduleEntry(
                'Any other rounds',
                '-',
                'SPS_Any_Other_Rounds_Mode',
                'SPS_Any_Other_Rounds_Date',
                handleOnChange
              )}
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
              value={jnfData.Selection_Procedure.SPS_Total_Number_Of_Rounds}
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
              id='exampleText2'
              name='SPS_Number_Of_Offers'
              required
              type='text'
              className='inputText'
              value={jnfData.Selection_Procedure.SPS_Number_Of_Offers}
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
            Eligibility Criteria Criteria (cut-off marks, CGPA, backlog,
            category, gender etc.)
          </Label>
          <Col sm={7}>
            <Input
              id='exampleText'
              name='SPS_Eligibility_Criteria'
              className='inputText'
              type='text'
              value={jnfData.Selection_Procedure.SPS_Eligibility_Criteria}
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
            Other jnformation related to Selection Process (if any)
          </Label>
          <Col sm={7}>
            <Input
              id='exampleText'
              name='SPS_OtherInformation'
              className='inputText'
              type='text'
              value={jnfData.Selection_Procedure.SPS_OtherInformation}
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

        <div className='d-flex justify-content-between'>
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

export default JNF4;
