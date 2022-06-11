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

const ReviewInf = ({ InfData, setPage, handleFormSubmit }) => {
  return (
    <div className='overallDiv1'>
      <div>
        <header className='headerText1'>
          INTERNSHIP NOTIFICATION FORM (2022-2023)
        </header>
      </div>
      <Form>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={4} className='fontText'>
            Name of the Company
          </Label>
          <Col sm={8}>
            <h1 className='inputText'>
              {InfData.Company_Overview.Name_Of_The_Company}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={4} className='fontText'>
            Category
          </Label>
          <Col sm={8}>
            <h1 className='inputText'>{InfData.Company_Overview.Category}</h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={4} className='fontText'>
            Sector
          </Label>
          <Col sm={8}>
            <h1 className='inputText'>{InfData.Company_Overview.Sector}</h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={4} className='fontText'>
            Website
          </Label>
          <Col sm={8}>
            <h1 className='inputText'>{InfData.Company_Overview.Website}</h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={4} className='fontText'>
            About
          </Label>
          <Col sm={8}>
            <h1 className='inputText'>{InfData.Company_Overview.About}</h1>
          </Col>
        </FormGroup>

        <div>
          <header className='headerText'>INTERN PROFILE</header>
        </div>
        <FormGroup row style={style}>
          <Label for='exampleSelect' sm={3} className='fontText'>
            Internship Duration
          </Label>
          <Col sm={9}>
            <h1 className='inputText'>
              {InfData.Intern_Profile.Internship_Duration}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={3} className='fontText'>
            Job Designation
          </Label>
          <Col sm={9}>
            <h1 className='inputText'>
              {InfData.Intern_Profile.Job_Designation}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={3} className='fontText'>
            Job Description
          </Label>
          <Col sm={9}>
            <h1 className='inputText'>
              {InfData.Intern_Profile.Job_Description}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleSelect' sm={4} className='fontText'>
            Mode of Internship
          </Label>
          <Col sm={8}>
            <h1 className='inputText'>
              {InfData.Intern_Profile.Mode_Of_Internship}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={5} className='fontText'>
            Place of posting (in case of Physical internship)
          </Label>
          <Col sm={7}>
            <h1 className='inputText'>
              {InfData.Intern_Profile.Place_Of_Posting}
            </h1>
          </Col>
        </FormGroup>
        <div>
          <header className='headerText'>STIPEND DETAILS</header>
        </div>
        <FormGroup row style={style}>
          <Label
            for='exampleText'
            sm={4}
            text-colour='blue'
            className='fontText'
          >
            Stipend per month
          </Label>
          <Col sm={8}>
            <h1 className='inputText'>
              {InfData.Salary_Details.Salary_Per_Month}{' '}
              {InfData.Salary_Details.Salary_Unit}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleSelect' sm={6} className='fontText'>
            PPO provision on performance basis
          </Label>
          <Col sm={6}>
            <h1 className='inputText'>
              {InfData.Salary_Details.PPO_provision_on_performance_basis}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for='exampleText' sm={4} className='fontText'>
            CTC for PPO selects
          </Label>
          <Col sm={8}>
            <h1 className='inputText'>{InfData.Salary_Details.CTC}</h1>
          </Col>
        </FormGroup>
        <div>
          <header className='headerText m-0'>
            Eligible courses and disciplines- Undergraduate
          </header>
        </div>
        <div className='startText m-3 mt-2' style={{ fontSize: '17px' }}>
          List of courses and disciplines offered at IIT (ISM) are shown below.
        </div>
        <div className='startTextBold' style={{ fontSize: '21px' }}>
          4-Year B.Tech Programs
        </div>
        <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
          Admitted through JEE (Advanced)
        </div>
        <table>
          <tbody id='Four_Year'>
            <tr>
              <td className='courseName'>Select All</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Select_All'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Select_All
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Chemical Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Chemical_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Chemical_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Civil Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Civil_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Civil_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Computer Science and Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Computer_Science_and_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Computer_Science_and_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Electrical Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Electrical_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Electrical_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>
                Electronics & Communication Engineering
              </td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Electronics_and_Communication_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs
                      .Electronics_and_Communication_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Engineering Physics</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Engineering_Physics'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Engineering_Physics
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Environmental Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Environmental_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Environmental_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Mechanical Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Mechanical_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Mechanical_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>
                Mineral & Metallurgical Engineering
              </td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Mineral_and_Metallurgical_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs
                      .Mineral_and_Metallurgical_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Mining Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Mining_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Mining_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Mining Machinery Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Mining_Machinery_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Mining_Machinery_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Petroleum Engineering</td>
              <td className='courseCheckBoxBtech'>
                <input
                  name='Petroleum_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Petroleum_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='startTextBold' style={{ fontSize: '21px' }}>
          5-Year Dual Degree/ Integrated M.Tech Programs
        </div>
        <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
          Admitted through JEE (Advanced)
        </div>
        <table>
          <tbody id='Five_Year'>
            <tr>
              <td className='courseName'>Select All</td>
              <td className='courseCheckBox5year'>
                <input
                  name='Select_All'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Select_All
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>
                Computer Science and Engineering (Dual Degree)
              </td>
              <td className='courseCheckBox5year'>
                <input
                  name='Computer_Science_and_Engineering'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Computer_Science_and_Engineering
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Mathematics & Computing</td>
              <td className='courseCheckBox5year'>
                <input
                  name='Mathematics_and_Computing'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Mathematics_and_Computing
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Applied Geology</td>
              <td className='courseCheckBox5year'>
                <input
                  name='Applied_Geology'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Applied_Geology
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Applied Geophysics</td>
              <td className='courseCheckBox5year'>
                <input
                  name='Applied_Geophysics'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Applied_Geophysics
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='startTextBold' style={{ fontSize: '21px' }}>
          Double Majors
        </div>
        <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
          Admitted through JEE (Advanced)
        </div>
        <table>
          <tbody id='Five_Year'>
            <tr>
              <td className='courseName'>Select All</td>
              <td className='courseCheckBox5year'>
                <input
                  name='Select_All'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Double_Major
                      .Select_All
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>Computer Science and Engineering</td>
              <td className='courseCheckBox5year'>
                <input
                  name='Computer_Science_and_Engineering_Double_Major'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Double_Major
                      .Computer_Science_and_Engineering_Double_Major
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='startTextBold' style={{ fontSize: '21px' }}>
          Dual Degree
        </div>
        <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
          Admitted through JEE (Advanced)
        </div>
        <table>
          <tbody id='Five_Year'>
            <tr>
              <td className='courseName'>Select All</td>
              <td className='courseCheckBox5year'>
                <input
                  name='Select_All'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Dual_Degree
                      .Select_All
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>
                Computer Science and Engineering (B.Tech and M.Tech in Different
                Departments)
              </td>
              <td className='courseCheckBox5year'>
                <input
                  name='Computer_Science_and_Engineering_Dual_Degree'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Dual_Degree
                      .Computer_Science_and_Engineering_Dual_Degree
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className='courseName'>
                Environmental Science and Engineering (B.Tech and M.Tech in
                Different Departments)
              </td>
              <td className='courseCheckBox5year'>
                <input
                  name='Environmental_Science_and_Engineering_Dual_Degree'
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Dual_Degree
                      .Environmental_Science_and_Engineering_Dual_Degree
                  }
                  type='checkbox'
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="startTextBold">Skill Based Hiring</div>
        <div className="startTextBoldSmall">
          Students with certified technical expertise in the following skills
          (from Coursera, Udemy etc.)
        </div>
        <table>
          <tbody id="Skill">
            <tr>
              <td className="courseName">C, C++, Java, Python etc.</td>
              <td className="courseCheckBoxSkill">
                <input
                  name="C_Cpp_Java_Python_etc"
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .C_Cpp_Java_Python_etc
                  }
                  type="checkbox"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Full Stack Development (Frontend/Backend)
              </td>
              <td className="courseCheckBoxSkill">
                <input
                  name="Full_Stack_Development_Frontend_or_Backend"
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .Full_Stack_Development_Frontend_or_Backend
                  }
                  type="checkbox"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Civil Engineering</td>
              <td className="courseCheckBoxSkill">
                <input
                  name="Civil_Engineering"
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .Civil_Engineering
                  }
                  type="checkbox"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">AI/ML/DL, Data Science</td>
              <td className="courseCheckBoxSkill">
                <input
                  name="AI_ML_DL_Data_Science"
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .AI_ML_DL_Data_Science
                  }
                  type="checkbox"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Business/Data Analytics, Product Management
              </td>
              <td className="courseCheckBoxSkill">
                <input
                  name="Business_Data_Analytics_Product_Management"
                  checked={
                    InfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .Business_Data_Analytics_Product_Management
                  }
                  type="checkbox"
                  readOnly
                />
              </td>
            </tr>
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
          <div className='startTextBold' style={{ fontSize: '21px' }}>
            3-Year MSc.Tech Programs
          </div>
          <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
            Admitted through <b>JAM</b>
          </div>
          <table>
            <tbody id='Three_Year'>
              <tr>
                <td className='courseName'>Select All</td>
                <td className='courseCheckBox3MSc'>
                  <input
                    name='Select_All'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Three_Year_MSc_Tech_Programs.Select_All
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Applied Geology</td>
                <td className='courseCheckBox3MSc'>
                  <input
                    name='Applied_Geology'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Three_Year_MSc_Tech_Programs.Applied_Geology
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Applied Geophysics</td>
                <td className='courseCheckBox3MSc'>
                  <input
                    name='Applied_Geophysics'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Three_Year_MSc_Tech_Programs.Applied_Geophysics
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className='startTextBold' style={{ fontSize: '21px' }}>
            2-Year M.Tech Programs
          </div>
          <div className='startTextBoldSmall' style={{ fontSize: '18px' }}>
            Admitted through <b>GATE</b>
          </div>
          <table>
            <tbody id='Two_Year'>
              <tr>
                <td className='courseName'>Select All</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Select_All'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Select_All
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Applied Geology</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Applied_Geology'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Applied_Geology
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Applied Geophysics</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Applied_Geophysics'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Applied_Geophysics
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Chemical Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Chemical_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Chemical_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Civil Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Civil_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Civil_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Computer Science and Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Computer_Science_and_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs
                        .Computer_Science_and_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Data Analytics</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Data_Analytics'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Data_Analytics
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Electrical Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Electrical_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Electrical_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>
                  Electronics & Communication Engineering
                </td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Electronics_and_Communication_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs
                        .Electronics_and_Communication_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Environmental Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Environmental_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Environmental_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>
                  Industrial Engineering & Management
                </td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Industrial_Engineering_and_Management'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs
                        .Industrial_Engineering_and_Management
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Mechanical Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Mechanical_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Mechanical_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>
                  Fuel, Minerals & Metallurgical Engineering
                </td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Fuel_Minerals_and_Metallurgical_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs
                        .Fuel_Minerals_and_Metallurgical_Engineering
                    }
                    readOnly
                    type='checkbox'
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Mining Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Mining_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Mining_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Mining Machinery Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Mining_Machinery_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Mining_Machinery_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Petroleum Engineering</td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Petroleum_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs.Petroleum_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>
                  Pharmaceutical Science & Engineering
                </td>
                <td className='courseCheckBox2MTech'>
                  <input
                    name='Pharmaceutical_Science_and_Engineering'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_Mtech_Programs
                        .Pharmaceutical_Science_and_Engineering
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
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
              <tr>
                <td className='courseName'>Select All</td>
                <td className='courseCheckBoxmba'>
                  <input
                    name='Select_All'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MBA_Programs.Select_All
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Business Analytics</td>
                <td className='courseCheckBoxmba'>
                  <input
                    name='Business_Analytics'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MBA_Programs.Business_Analytics
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Finance</td>
                <td className='courseCheckBoxmba'>
                  <input
                    name='Finance'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MBA_Programs.Finance
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Human Resources</td>
                <td className='courseCheckBoxmba'>
                  <input
                    name='Human_Resources'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MBA_Programs.Human_Resources
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Marketing</td>
                <td className='courseCheckBoxmba'>
                  <input
                    name='Marketing'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MBA_Programs.Marketing
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Operations</td>
                <td className='courseCheckBoxmba'>
                  <input
                    name='Operations'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MBA_Programs.Operations
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
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
              <tr>
                <td className='courseName'>Select All</td>
                <td className='courseCheckBox2Msc'>
                  <input
                    name='Select_All'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MSc_Programs.Select_All
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Chemistry</td>
                <td className='courseCheckBox2Msc'>
                  <input
                    name='Chemistry'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MSc_Programs.Chemistry
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Mathematics & Computing</td>
                <td className='courseCheckBox2Msc'>
                  <input
                    name='Mathematics_and_Computing'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MSc_Programs.Mathematics_and_Computing
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className='courseName'>Physics</td>
                <td className='courseCheckBox2Msc'>
                  <input
                    name='Physics'
                    checked={
                      InfData.Eligible_Courses_And_Disciplines
                        .Two_Year_MSc_Programs.Physics
                    }
                    type='checkbox'
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <header className='headerText'>SELECTION PROCEDURE</header>
        </div>
        <TableContainer component={Paper} className='my-5'>
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
                <TableCell>Virtual</TableCell>
                <TableCell>10-06-2022</TableCell>
              </TableRow>
              <TableRow key='Resume-Shortlisting'>
                <TableCell component='th' scope='row'>
                  Resume Shortlisting
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>Virtual</TableCell>
                <TableCell>10-06-2022</TableCell>
              </TableRow>
              <TableRow key='Online-Written-Test'>
                <TableCell component='th' scope='row'>
                  Online/Written Test
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>Virtual</TableCell>
                <TableCell>10-06-2022</TableCell>
              </TableRow>
              <TableRow key='Group-Discussion'>
                <TableCell component='th' scope='row'>
                  Group Discussion
                </TableCell>
                <TableCell> 15-Jul-2022 onwards</TableCell>
                <TableCell>Virtual</TableCell>
                <TableCell>10-06-2022</TableCell>
              </TableRow>
              <TableRow key='Personal-Interview'>
                <TableCell component='th' scope='row'>
                  Personal Interview
                </TableCell>
                <TableCell> 17-Aug-2022 onwards</TableCell>
                <TableCell>Virtual</TableCell>
                <TableCell>10-06-2022</TableCell>
              </TableRow>
              <TableRow key='Any-other-rounds'>
                <TableCell component='th' scope='row'>
                  Any other rounds
                </TableCell>
                <TableCell> </TableCell>
                <TableCell>Virtual</TableCell>
                <TableCell>10-06-2022</TableCell>
              </TableRow>
              {/* <TableRow> */}

              {/* </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
        <table>
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
              >
                Resume Shortlisting
              </td>
              <td>
                <hr />
              </td>
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
                      checked={
                        InfData.Selection_Procedure.Resume_Shortlisting.Yes
                      }
                      type='checkbox'
                      readOnly
                    />
                  </div>
                  <div className='align'>
                    <label className='resume'>No</label>
                    <input
                      className='checkBox'
                      name='No'
                      checked={
                        InfData.Selection_Procedure.Resume_Shortlisting.No
                      }
                      type='checkbox'
                      readOnly
                    />
                  </div>
                </div>
              </td>
            </tr>
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
              >
                Type of Test
              </td>
              <td>
                <hr />
              </td>
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
                      checked={
                        InfData.Selection_Procedure.Type_Of_Test.Technical
                      }
                      readOnly
                      type='checkbox'
                    />
                  </div>
                  <div>
                    <label className='type'>Aptitude </label>
                    <input
                      className='checkBox'
                      name='Aptitude'
                      checked={
                        InfData.Selection_Procedure.Type_Of_Test.Aptitude
                      }
                      readOnly
                      type='checkbox'
                    />
                  </div>
                  <div>
                    <label className='type'>Both</label>
                    <input
                      className='checkBox'
                      name='Technical_and_Aptitude'
                      checked={InfData.Selection_Procedure.Type_Of_Test.Both}
                      readOnly
                      type='checkbox'
                    />
                  </div>
                  <div>
                    <label className='type'>None </label>
                    <input
                      className='checkBox'
                      name='None'
                      checked={InfData.Selection_Procedure.Type_Of_Test.None}
                      readOnly
                      type='checkbox'
                    />
                  </div>
                </div>
              </td>
            </tr>
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
              >
                Other Qualification Rounds
              </td>
              <td>
                <hr />
              </td>
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
                      checked={
                        InfData.Selection_Procedure.Other_Qualification_Rounds
                          .GD
                      }
                      readOnly
                      type='checkbox'
                    />
                  </div>
                  <div className='align'>
                    <label className='round'> Case Study</label>
                    <input
                      className='checkBox'
                      name='Case_Study'
                      checked={
                        InfData.Selection_Procedure.Other_Qualification_Rounds
                          .Case_Study
                      }
                      readOnly
                      type='checkbox'
                    />
                  </div>
                  <div className='align'>
                    <label className='round'>Interview </label>
                    <input
                      className='checkBox'
                      name='Interview'
                      checked={
                        InfData.Selection_Procedure.Other_Qualification_Rounds
                          .Interview
                      }
                      readOnly
                      type='checkbox'
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Total number of rounds
          </Label>
          <Col sm={7}>
            <h1 className='inputText'>
              {InfData.Selection_Procedure.Total_Number_Of_Rounds}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Number of offers available for IIT(ISM) students
          </Label>
          <Col sm={7}>
            <h1 className='inputText'>
              {InfData.Selection_Procedure.Number_Of_Offers}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleText' sm={5} className='fontText'>
            Eligibility Criteria (if any)
          </Label>
          <Col sm={7}>
            <h1 className='inputText'>
              {InfData.Selection_Procedure.Eligibility_Criteria}
            </h1>
          </Col>
        </FormGroup>

        {/* <div>
          <header className="headerText">
            Tentative dates for test and interviews:
          </header>
        </div>
        <FormGroup row style={style}>
          <Label for="exampleSelect" sm={3} className="fontText">
            Priority 1
          </Label>
          <Col sm={9}>
            <h1 className="inputText">
              {InfData.Priority_Details.Priority_One}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleSelect" sm={3} className="fontText">
            Priority 2
          </Label>
          <Col sm={9}>
            <h1 className="inputText">
              {InfData.Priority_Details.Priority_Two}
            </h1>
          </Col>
        </FormGroup> */}
        <div
          className='formFlex'
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginTop: '1.5rem',
          }}
        >
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
//export default ReviewInf;
// class Example extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <ReactToPrint content={() => this.componentRef}>
//           <PrintContextConsumer>
//             {({ handlePrint }) => (
//               <button onClick={handlePrint}>Print this out!</button>
//             )}
//           </PrintContextConsumer>
//         </ReactToPrint>
//         <ComponentToPrint ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }
// export default Example;
export default ReviewInf;