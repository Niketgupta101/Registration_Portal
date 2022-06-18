import React from 'react';
import { Form, FormGroup, Label, Col } from 'reactstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = { alignItems: 'center' };

const extractFields = (data) => {
  let fields = [];

  for (let field in data) {
    fields.push(field);
  }

  return fields;
};

const ReviewJnf = ({ jnfData, setPage, handleFormSubmit }) => {
  const companyFields = extractFields(jnfData.Company_Overview);
  const internProfileFields = extractFields(jnfData.Job_Details);
  const stipendFields = extractFields(jnfData.Salary_Details);
  const primaryHrFields = extractFields(jnfData.Primary_Hr);
  const secondaryHrFields = extractFields(jnfData.Secondary_Hr);
  const fourYearFields = extractFields(jnfData.Four_Year_Btech);
  const fiveYearIntFields = extractFields(jnfData.Five_Year_Integrated);
  const twoYearMtechFields = extractFields(jnfData.Two_Year_Mtech);
  const threeYearMscFields = extractFields(jnfData.Three_Year_Msc);
  const twoYearMbaFields = extractFields(jnfData.Two_Year_MBA);
  // const dualDegreeFields = extractFields(jnfData.Five_Year_Dual_Degree);
  // const doubleMajorFields = extractFields(jnfData.Double_Major);
  const twoYearMscFields = extractFields(jnfData.Two_Year_Msc);
  const minorFields = extractFields(jnfData.Minor);
  const phdFields = extractFields(jnfData.Phd);
  const skillBasedFields = extractFields(jnfData.Skill_Based);
  return (
    <div className='overallDiv1'>
      <div>
        <header className='headerText1'>
          INTERNSHIP NOTIFICATION FORM (2022-2023)
        </header>
      </div>
      <Form>
        {companyFields &&
          companyFields.map((field) => (
            <div>
              <FormGroup row style={style}>
                <Label for='exampleText' sm={4} className='fontText'>
                  {field.split('_').map((word) => (
                    <>{word !== 'CO' && word + ' '}</>
                  ))}
                </Label>
                <Col sm={8}>
                  <h6>{jnfData.Company_Overview[field]}</h6>
                </Col>
              </FormGroup>
            </div>
          ))}
        <div>
          <header className='headerText'>JOB DETAILS</header>
        </div>
        {internProfileFields &&
          internProfileFields.map((field) => (
            <div>
              <FormGroup row style={style}>
                <Label for='exampleText' sm={4} className='fontText'>
                  {field.split('_').map((word) => (
                    <>{word !== 'IP' && word + ' '}</>
                  ))}
                </Label>
                <Col sm={8}>
                  <h6 className='inputText'>{jnfData.Job_Details[field]}</h6>
                </Col>
              </FormGroup>
            </div>
          ))}
        <div>
          <header className='headerText'>SALARY DETAILS</header>
        </div>
        {stipendFields &&
          stipendFields.map((field) => (
            <FormGroup row style={style}>
              <Label for='exampleText' sm={4} className='fontText'>
                {field.split('_').map((word) => (
                  <>{word !== 'SD' && word + ' '}</>
                ))}
              </Label>
              <Col sm={8}>
                <h6 className='inputText'>{jnfData.Salary_Details[field]}</h6>
              </Col>
            </FormGroup>
          ))}
        <div>
          <header className='headerText'>Primary Hr Details</header>
        </div>
        {primaryHrFields &&
          primaryHrFields.map((field) => (
            <FormGroup row style={style}>
              <Label for='exampleText' sm={4} className='fontText'>
                {field.split('_').map((word) => (
                  <>{word !== 'PH' && word + ' '}</>
                ))}
              </Label>
              <Col sm={8}>
                <h6 className='inputText'>{jnfData.Primary_Hr[field]}</h6>
              </Col>
            </FormGroup>
          ))}
        {jnfData.Secondary_Hr.SH_Name !== '' &&
        jnfData.Secondary_Hr.SH_Email !== '' &&
        jnfData.Secondary_Hr.SH_Mobile !== '' ? (
          <>
            <div>
              <header className='headerText'>Alternate Hr Details</header>
            </div>
            {secondaryHrFields &&
              secondaryHrFields.map((field) => (
                <FormGroup row style={style}>
                  <Label for='exampleText' sm={4} className='fontText'>
                    {field.split('_').map((word) => (
                      <>{word !== 'SH' && word + ' '}</>
                    ))}
                  </Label>
                  <Col sm={8}>
                    <h6 className='inputText'>{jnfData.Secondary_Hr[field]}</h6>
                  </Col>
                </FormGroup>
              ))}
          </>
        ) : (
          <></>
        )}
        <div>
          <header className='headerText m-0'>
            Eligible courses and disciplines- Undergraduate
          </header>
        </div>
        <div className='startText m-3 mt-2' style={{ fontSize: '17px' }}>
          List of courses and disciplines offered at IIT (ISM) are shown below.
        </div>

        <div>
          <div className='startTextBold' style={{ fontSize: '21px' }}>
            4-Year B.Tech Programs
          </div>
          <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
            Admitted through JEE (Advanced)
          </div>
          <table>
            <tbody id='Four_Year'>
              {fourYearFields &&
                fourYearFields.map((field) => (
                  <tr>
                    <td className='courseName'>
                      {field.split('_').map((word) => (
                        <>{word !== 'FYB' && word + ' '}</>
                      ))}
                    </td>
                    <td className='courseCheckBoxBtech'>
                      <input
                        name={field}
                        checked={jnfData.Four_Year_Btech[field]}
                        type='checkbox'
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* 5-Year Dual Degree/ Integrated M.Tech Programs */}
        <div>
          <div className='startTextBold' style={{ fontSize: '21px' }}>
            5-Year Dual Degree/ Integrated M.Tech Programs
          </div>
          <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
            Admitted through JEE (Advanced)
          </div>
          <table>
            <tbody id='Five_Year'>
              {fiveYearIntFields &&
                fiveYearIntFields.map((field) => (
                  <tr>
                    <td className='courseName'>
                      {field.split('_').map((word) => (
                        <>{word !== 'FYI' && word + ' '}</>
                      ))}
                    </td>
                    <td className='courseCheckBoxBtech'>
                      <input
                        name={field}
                        checked={jnfData.Five_Year_Integrated[field]}
                        type='checkbox'
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Monor */}
        <div>
          <div className='startTextBold' style={{ fontSize: '21px' }}>
            Minor Programs{' '}
          </div>
          <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
            Admitted through JEE (Advanced)
          </div>
          <table>
            <tbody id='Five_Year'>
              {minorFields &&
                minorFields.map((field) => (
                  <tr>
                    <td className='courseName'>
                      {field.split('_').map((word) => (
                        <>{word !== 'MINOR' && word + ' '}</>
                      ))}
                    </td>
                    <td className='courseCheckBox5year'>
                      <input
                        name={field}
                        checked={jnfData.Minor[field]}
                        type='checkbox'
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* <div className='startTextBold' style={{ fontSize: '21px' }}>
                Minor
              </div>
              <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
                Admitted through JEE (Advanced)
              </div>
              <table>
                <tbody id='Five_Year'>
                  {minorFields &&
                    minorFields.map((field) => (
                      <tr>
                        <td className='courseName'>
                          {field.split('_').map((word) => (
                            <>{word !== 'MINOR' && word + ' '}</>
                          ))}
                        </td>
                        <td className='courseCheckBoxBtech'>
                          <input
                            name={field}
                            checked={jnfData.Minor[field]}
                            type='checkbox'
                            readOnly
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table> */}

        <div>
          <header className='headerText m-0 mt-4'>
            Eligible courses and disciplines - Postgraduate
          </header>
        </div>
        <div className=' m-3 mt-2' stylstartTexte={{ fontSize: '17px' }}>
          List of courses and disciplines offered at IIT (ISM) are shown below.
        </div>
        <div>
          <div>
            <div className='startTextBold' style={{ fontSize: '21px' }}>
              2-Year M.Tech Programs
            </div>
            <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
              Admitted through <b>GATE</b>
            </div>
            <table>
              <tbody id='Two_Year'>
                {twoYearMtechFields &&
                  twoYearMtechFields.map((field) => (
                    <tr>
                      <td className='courseName'>
                        {field.split('_').map((word) => (
                          <>{word !== 'TYM' && word + ' '}</>
                        ))}
                      </td>
                      <td className='courseCheckBoxBtech'>
                        <input
                          name={field}
                          checked={jnfData.Two_Year_Mtech[field]}
                          type='checkbox'
                          readOnly
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className='startTextBold' style={{ fontSize: '21px' }}>
            3-Year MSc.Tech Programs
          </div>
          <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
            Admitted through <b>JAM</b>
          </div>
          <table>
            <tbody id='Three_Year'>
              {threeYearMscFields &&
                threeYearMscFields.map((field) => (
                  <tr>
                    <td className='courseName'>
                      {field.split('_').map((word) => (
                        <>{word !== 'TMS' && word + ' '}</>
                      ))}
                    </td>
                    <td className='courseCheckBoxBtech'>
                      <input
                        name={field}
                        checked={jnfData.Three_Year_Msc[field]}
                        type='checkbox'
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className='startTextBold' style={{ fontSize: '21px' }}>
            2-Year MBA Programs
          </div>
          <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
            Admitted through <b>CAT</b>
          </div>
          <table>
            <tbody id='Two_Year_Mba'>
              {twoYearMbaFields &&
                twoYearMbaFields.map((field) => (
                  <tr>
                    <td className='courseName'>
                      {field.split('_').map((word) => (
                        <>{word !== 'TYMB' && word + ' '}</>
                      ))}
                    </td>
                    <td className='courseCheckBoxBtech'>
                      <input
                        name={field}
                        checked={jnfData.Two_Year_MBA[field]}
                        type='checkbox'
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className='startTextBold' style={{ fontSize: '21px' }}>
            2-Year M.Sc. Programs
          </div>
          <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
            Admitted through <b>JAM</b>
          </div>
          <table>
            <tbody id='Two_Year_Msc'>
              {twoYearMscFields &&
                twoYearMscFields.map((field) => (
                  <tr>
                    <td className='courseName'>
                      {field.split('_').map((word) => (
                        <>{word !== 'TYMSC' && word + ' '}</>
                      ))}
                    </td>
                    <td className='courseCheckBoxBtech'>
                      <input
                        name={field}
                        checked={jnfData.Two_Year_Msc[field]}
                        type='checkbox'
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div>
            <div className='startTextBold' style={{ fontSize: '21px' }}>
              PhD Programs
            </div>
            <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
              Admitted through <b>GATE, NET</b>
            </div>
            <table>
              <tbody id='Two_Year_Msc'>
                {phdFields &&
                  phdFields.map((field) => (
                    <tr>
                      <td className='courseName'>
                        {field.split('_').map((word) => (
                          <>{word !== 'PHD' && word + ' '}</>
                        ))}
                      </td>
                      <td className='courseCheckBox5year'>
                        <input
                          name={field}
                          checked={jnfData.Phd[field]}
                          type='checkbox'
                          readOnly
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <header className='headerText m-0 mt-4'>Skill Based Hiring</header>
        </div>
        <div className='startText mx-2 mb-2'>
          <small className=' animate__animated animate__fadeIn'>
            Students with certified technical expertise in the following skills
            (from Coursera, Udemy etc.)
          </small>
        </div>
        <div>
          <table>
            <tbody id='Three_Year'>
              {skillBasedFields &&
                skillBasedFields.map((field) => (
                  <tr>
                    <td className='courseName'>
                      {field.split('_').map((word) => (
                        <>{word !== 'SB' && word + ' '}</>
                      ))}
                    </td>
                    <td className='courseCheckBoxBtech'>
                      <input
                        name={field}
                        checked={jnfData.Skill_Based[field]}
                        type='checkbox'
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <header className='headerText'>SELECTION PROCEDURE</header>
        </div>
        <TableContainer component={Paper} className='my-5 bg-transparent'>
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
                  {jnfData.Selection_Procedure.SPS_Pre_Placement_Talk_Mode}
                </TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Pre_Placement_Talk_Date}
                </TableCell>
              </TableRow>
              <TableRow key='Resume-Shortlisting'>
                <TableCell component='th' scope='row'>
                  Resume Shortlisting
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Resume_Shortlisting_Mode}
                </TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Resume_Shortlisting_Date}
                </TableCell>
              </TableRow>
              <TableRow key='Online-Written-Test'>
                <TableCell component='th' scope='row'>
                  Online/Written Test
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Online_Written_Test_Mode}
                </TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Online_Written_Test_Date}
                </TableCell>
              </TableRow>
              <TableRow key='Group-Discussion'>
                <TableCell component='th' scope='row'>
                  Group Discussion
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Group_Discussion_Mode}
                </TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Group_Discussion_Date}
                </TableCell>
              </TableRow>
              <TableRow key='Personal-Interview'>
                <TableCell component='th' scope='row'>
                  Personal Interview
                </TableCell>
                <TableCell> 17-Aug-2022 onwards</TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Personal_Interview_Mode}
                </TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Personal_Interview_Date}
                </TableCell>
              </TableRow>
              <TableRow key='Any-other-rounds'>
                <TableCell component='th' scope='row'>
                  Any other rounds
                </TableCell>
                <TableCell> </TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Any_Other_Rounds_Mode}
                </TableCell>
                <TableCell>
                  {jnfData.Selection_Procedure.SPS_Any_Other_Rounds_Date}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Total number of rounds
          </Label>
          <Col sm={7}>
            <h6 className='inputText'>
              {jnfData.Selection_Procedure.SPS_Total_Number_Of_Rounds}
            </h6>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Number of offers available for IIT(ISM) students
          </Label>
          <Col sm={7}>
            <h6 className='inputText'>
              {jnfData.Selection_Procedure.SPS_Number_Of_Offers}
            </h6>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Eligibility Criteria (if any)
          </Label>
          <Col sm={7}>
            <h6 className='inputText'>
              {jnfData.Selection_Procedure.SPS_Eligibility_Criteria}
            </h6>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Other jnformation related to Selection Process (if any)
          </Label>
          <Col sm={7}>
            <h6 className='inputText'>
              {jnfData.Selection_Procedure.SPS_OtherInformation}
            </h6>
          </Col>
        </FormGroup>
        <div className='d-flex justify-content-between'>
          <button
            className='submit_btn'
            type='submit'
            onClick={(e) => e.preventDefault() / setPage('3')}
          >
            Edit
          </button>
          <button
            className='submit_btn'
            type='submit'
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ReviewJnf;
